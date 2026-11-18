import { describe, expect, it } from "vitest";
import {
  BOOK_CALL_TOKEN,
  CHAT_FALLBACK_MODEL,
  CHAT_MODEL,
  CHAT_QUICK_REPLIES,
  INITIAL_CHAT_MESSAGE,
  MAX_IP_MESSAGES_PER_HOUR,
  MAX_SESSION_MESSAGES,
  SlidingWindowLimiter,
  chatRequestSchema,
  parseBookCallReply,
} from "@/lib/chat-shared";
import { INCODET_SYSTEM_PROMPT, toGeminiContents } from "@/lib/chat.server";

describe("Incodet chat widget configuration", () => {
  it("uses the configured model, initial greeting, quick replies and limits", () => {
    expect(CHAT_MODEL).toBe("gemini-4-hydrogen");
    expect(CHAT_FALLBACK_MODEL).toBe("gemini-3.1-flash-lite");
    expect(MAX_SESSION_MESSAGES).toBe(20);
    expect(MAX_IP_MESSAGES_PER_HOUR).toBe(60);
    expect(INITIAL_CHAT_MESSAGE).toBe(
      "Hi, I'm Mary! Ask me anything about Incodet: what we build, pricing, or how we work.",
    );
    expect(CHAT_QUICK_REPLIES).toEqual([
      "What do you build?",
      "How does pricing work?",
      "How long does a project take?",
      "Talk to a human",
    ]);
  });

  it("extracts [BOOK_CALL] tokens and leaves clean prose", () => {
    const parsed = parseBookCallReply(
      `We can build a booking website and 24/7 AI receptionist for your clinic. ${BOOK_CALL_TOKEN}`,
    );
    expect(parsed.hasBookCall).toBe(true);
    expect(parsed.text).toBe(
      "We can build a booking website and 24/7 AI receptionist for your clinic.",
    );

    const plain = parseBookCallReply("Starter websites take 1 to 2 weeks.");
    expect(plain.hasBookCall).toBe(false);
    expect(plain.text).toBe("Starter websites take 1 to 2 weeks.");
  });

  it("validates chat payloads and trims leading assistant welcome turn for Gemini", () => {
    const valid = chatRequestSchema.safeParse({
      sessionId: "sess-12345",
      messages: [
        { role: "assistant", content: INITIAL_CHAT_MESSAGE },
        { role: "user", content: "What do you build?" },
      ],
    });
    expect(valid.success).toBe(true);
    if (valid.success) {
      const contents = toGeminiContents(valid.data.messages);
      expect(contents).toEqual([{ role: "user", parts: [{ text: "What do you build?" }] }]);
    }

    expect(chatRequestSchema.safeParse({ sessionId: "x", messages: [] }).success).toBe(false);
  });

  it("enforces sliding window rate limits for sessions (20) and IPs (60/hour)", () => {
    const sessionLimiter = new SlidingWindowLimiter(20, 60_000);
    for (let i = 0; i < 20; i++) {
      expect(sessionLimiter.consume("s1", 1_000 + i).allowed).toBe(true);
    }
    expect(sessionLimiter.consume("s1", 2_000).allowed).toBe(false);
    expect(sessionLimiter.consume("s2", 2_000).allowed).toBe(true);

    const ipLimiter = new SlidingWindowLimiter(60, 3_600_000);
    for (let i = 0; i < 60; i++) {
      expect(ipLimiter.consume("1.2.3.4", 10_000 + i).allowed).toBe(true);
    }
    expect(ipLimiter.consume("1.2.3.4", 20_000).allowed).toBe(false);
    // Window expires after 1 hour
    expect(ipLimiter.consume("1.2.3.4", 10_000 + 3_600_001).allowed).toBe(true);
  });

  it("keeps verified site knowledge in the system prompt without template placeholders or em dashes", () => {
    expect(INCODET_SYSTEM_PROMPT).not.toContain("\u2014");
    expect(INCODET_SYSTEM_PROMPT).not.toContain("[names/roles");
    expect(INCODET_SYSTEM_PROMPT).not.toContain("[link]");
    expect(INCODET_SYSTEM_PROMPT).toContain("Mary");
    expect(INCODET_SYSTEM_PROMPT).toContain("January 2026");
    expect(INCODET_SYSTEM_PROMPT).toContain("Asif Khan");
    expect(INCODET_SYSTEM_PROMPT).toContain("[BOOK_CALL]");
    expect(INCODET_SYSTEM_PROMPT).toContain("Payoneer, Wise, PayPal");
  });
});
