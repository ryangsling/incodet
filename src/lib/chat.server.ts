import { GoogleGenAI, type Content } from "@google/genai";
import { site } from "@/config/site";
import {
  CHAT_FALLBACK_MODEL,
  CHAT_MODEL,
  HOUR_MS,
  MAX_IP_MESSAGES_PER_HOUR,
  MAX_SESSION_MESSAGES,
  SlidingWindowLimiter,
  chatRequestSchema,
  type ChatMessage,
} from "./chat-shared";

export const INCODET_SYSTEM_PROMPT = `You are Mary, the assistant on incodet.com. You answer visitors' questions about Incodet using ONLY the information in the KNOWLEDGE section below.

STYLE
- Short, friendly, plain English. 1 to 3 sentences, max 60 words, unless the visitor asks for detail.
- Never use em dashes.
- If asked whether you are an AI, say yes.

STRICT RULES
- Only state facts found in KNOWLEDGE. Never invent prices, clients, timelines, team details, statistics or guarantees.
- If the answer isn't in KNOWLEDGE, say: "I'm not sure about that one. The team can answer it directly." Then offer [BOOK_CALL] or the WhatsApp link.
- When a visitor describes a project or asks for a quote, briefly say how Incodet could help, then offer a free call with [BOOK_CALL].
- Off-topic requests: answer in one line if harmless, then steer back to Incodet.
- Never ask for payment details.

KNOWLEDGE
About: Incodet is a software studio founded in January 2026. Leadership: Asif Khan (CEO). Location: Head office in Perth, Western Australia, with teams across Australia, the UK (Leeds and Birmingham), Canada (Montreal), and Bangladesh (Dhaka and Sylhet).
Services:
1. AI agents and booking websites for local service businesses (including roofing contractors, epoxy flooring companies, salons, barber shops, restaurants, hotels, car rentals, car washes, dental clinics, medical clinics, and law and accounting firms): a mobile-first booking website, an AI website chatbot, and a 24/7 AI phone receptionist that answers calls, books appointments straight into existing calendars and booking tools, and notifies the owner by email or WhatsApp.
2. Custom software and SaaS platforms: CRMs, content platforms, client portals, booking systems, mobile app development (iOS and Android), UI/UX and product design, business automation, social media growth, and systems for medical and education businesses.
Markets served: USA, UK, Canada, Australia, and Europe.
Pricing: All prices are in USD, with no lock-in contracts, and every feature is available on its own or as a plan:
- Starter (for small businesses): from $499 one-time setup, optional $19/month care for hosting and updates. Includes website, online booking, and booking emails.
- Growth (for growing businesses): from $999 one-time setup, from $149/month (includes 300 AI call minutes a month; extra minutes are $0.20/minute billed only if used). Includes everything in Starter, AI website chatbot, 24/7 AI calling agent, and owner alerts by email and WhatsApp.
- Scale (for established businesses): from $3,499 one-time setup, from $299/month. Includes multi-page or SaaS-level platforms, AI automation, client dashboards, and custom integrations. Custom software quotes depend on scope after a free call.
Timelines: Starter websites go live in 1 to 2 weeks, Growth launches in 2 to 3 weeks, and Scale or custom mobile/software projects take 4 to 8 weeks.
Process: 1) Discovery Call (free 30-minute chat) > 2) Plan & Design (feature list, screen designs, fixed quote) > 3) Build & Connect (weekly demos, booking and AI setup) > 4) Launch & Care (end-to-end testing, launch, ongoing support).
Past work (public projects only):
- Western Cars (Sussex, UK): Booking websites across Brighton, Littlehampton, Haywards Heath, Pulborough, Crawley, East Grinstead, Horley, and Horsham, plus the Western Cars Content Hub AI blog platform.
- HumanData Labs: Two-sided website with buyer dataset requests and vendor applications for AI and robotics teams.
- Barkers Executive Cars: Executive car and Gatwick airport chauffeur website with corporate travel and quick booking.
- BRHEX Studio: White-label real estate platform combining a 360-degree WebGL tour viewer and an SVG floor plan engine.
- GM Taxis Lewes & A1 Airport Cars Worthing: Local taxi and 24-hour airport transfer websites with instant booking.
- Bloom Studio (Demo): Salon website demo showcasing an AI concierge and direct online booking.
- Northpoint Dental (Demo): Leeds private dental clinic website demo with upfront treatment pricing, Ask Ava AI chat, and online booking.
- Summit Ridge Roofing (Demo): Dallas roofing website demo with a one-minute address estimate form, price guide, and 24/7 AI receptionist.
Support after launch: End-to-end testing, go-live, and ongoing support and improvements (Starter has optional $19/month hosting and updates care). Clients own their website and content once paid.
Payment methods: Payoneer, Wise, PayPal, and bank transfer.
Contact: Email ${site.email}, WhatsApp ${site.whatsapp} (${site.phoneDisplay}), phone ${site.phoneDisplay}, free 30-minute call booking calendar at /book. If asked to talk to a human, offer [BOOK_CALL] as well as email (${site.email}) and WhatsApp.`;

const ipLimiter = new SlidingWindowLimiter(MAX_IP_MESSAGES_PER_HOUR, HOUR_MS);
const sessionLimiter = new SlidingWindowLimiter(MAX_SESSION_MESSAGES, 24 * HOUR_MS);

function getClientIp(request: Request): string {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export function toGeminiContents(messages: Pick<ChatMessage, "role" | "content">[]): Content[] {
  // Trim any initial greeting so the conversation sent to Gemini starts on a user turn.
  const firstUserIdx = messages.findIndex((m) => m.role === "user");
  const trimmed = firstUserIdx >= 0 ? messages.slice(firstUserIdx) : messages;

  return trimmed.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));
}

export async function handleChatRequest(request: Request): Promise<Response> {
  const apiKey = process.env["GEMINI_API_KEY"]?.trim();
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return Response.json(
      {
        error:
          "Assistant is not configured yet. Please book a free call or message us on WhatsApp.",
      },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON request body." }, { status: 400 });
  }

  const parsed = chatRequestSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "Please enter a valid message." }, { status: 400 });
  }

  const { sessionId, messages } = parsed.data;
  const last = messages[messages.length - 1];
  if (!last || last.role !== "user") {
    return Response.json({ error: "Conversation must end with a user message." }, { status: 400 });
  }

  const sessionCheck = sessionLimiter.consume(sessionId);
  if (!sessionCheck.allowed) {
    return Response.json(
      {
        error:
          "You have reached the 20-message limit for this session. Please book a free call or message us on WhatsApp.",
        code: "SESSION_LIMIT",
      },
      { status: 429 },
    );
  }

  const ip = getClientIp(request);
  const ipCheck = ipLimiter.consume(ip);
  if (!ipCheck.allowed) {
    return Response.json(
      {
        error:
          "Too many messages from this connection. Please try again later or book a free call.",
        code: "IP_LIMIT",
      },
      {
        status: 429,
        headers: { "Retry-After": String(ipCheck.retryAfterSec) },
      },
    );
  }

  const contents = toGeminiContents(messages);
  if (contents.length === 0) {
    return Response.json({ error: "Please send a message to start." }, { status: 400 });
  }

  try {
    const generate = (model: string, timeoutMs: number) => {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          timeout: timeoutMs,
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
      return ai.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction: INCODET_SYSTEM_PROMPT,
        },
      });
    };

    let response;
    try {
      response = await generate(CHAT_MODEL, 12_000);
    } catch (primaryErr) {
      const primaryStatus =
        typeof primaryErr === "object" && primaryErr !== null && "status" in primaryErr
          ? Number((primaryErr as { status?: unknown }).status)
          : undefined;
      const primaryMsg = primaryErr instanceof Error ? primaryErr.message : String(primaryErr);
      if (
        primaryStatus === 503 ||
        primaryStatus === 504 ||
        primaryStatus === 404 ||
        primaryStatus === 500 ||
        primaryMsg.includes("503") ||
        primaryMsg.includes("504") ||
        primaryMsg.includes("DEADLINE_EXCEEDED") ||
        primaryMsg.includes("UNAVAILABLE") ||
        primaryMsg.includes("NOT_FOUND") ||
        primaryMsg.toLowerCase().includes("timeout") ||
        primaryMsg.toLowerCase().includes("abort")
      ) {
        response = await generate(CHAT_FALLBACK_MODEL, 25_000);
      } else {
        throw primaryErr;
      }
    }

    const reply = response.text?.trim();
    if (!reply) {
      return Response.json(
        {
          error: "I couldn't generate a reply right now. Please try again or book a free call.",
        },
        { status: 502 },
      );
    }

    return Response.json({
      reply,
      remainingSessionMessages: sessionCheck.remaining,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    const status =
      typeof err === "object" && err !== null && "status" in err
        ? Number((err as { status?: unknown }).status)
        : undefined;
    console.error("[api/chat] Gemini error:", status ?? "", msg);

    if (status === 429 || msg.includes("429") || msg.includes("RESOURCE_EXHAUSTED")) {
      return Response.json(
        { error: "The assistant is busy right now. Please wait a moment and try again." },
        { status: 429 },
      );
    }

    if (
      status === 400 ||
      status === 403 ||
      msg.includes("PERMISSION_DENIED") ||
      msg.includes("API_KEY_INVALID") ||
      msg.includes("API key")
    ) {
      return Response.json(
        {
          error:
            "Gemini API access is not authorized. Check GEMINI_API_KEY in Settings > Secrets, or book a free call below.",
          code: "AUTH_ERROR",
        },
        { status: 502 },
      );
    }

    if (status === 404 || msg.includes("NOT_FOUND")) {
      return Response.json(
        {
          error:
            "The configured chat model is unavailable right now. Please book a free call below.",
          code: "MODEL_NOT_FOUND",
        },
        { status: 502 },
      );
    }

    return Response.json(
      {
        error: "Something went wrong reaching the assistant. Please try again or book a free call.",
      },
      { status: 502 },
    );
  }
}
