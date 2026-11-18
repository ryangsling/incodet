import { z } from "zod";

export const CHAT_MODEL = "gemini-4-hydrogen";
export const CHAT_FALLBACK_MODEL = "gemini-3.1-flash-lite";
export const MAX_SESSION_MESSAGES = 20;
export const MAX_IP_MESSAGES_PER_HOUR = 60;
export const HOUR_MS = 60 * 60 * 1000;
export const BOOK_CALL_TOKEN = "[BOOK_CALL]";

export const INITIAL_CHAT_MESSAGE =
  "Hi, I'm Mary! Ask me anything about Incodet: what we build, pricing, or how we work.";

export const CHAT_QUICK_REPLIES = [
  "What do you build?",
  "How does pricing work?",
  "How long does a project take?",
  "Talk to a human",
] as const;

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

export const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().trim().min(1).max(2000),
});

export const chatRequestSchema = z.object({
  sessionId: z.string().trim().min(4).max(128),
  messages: z.array(chatMessageSchema).min(1).max(45),
});

export type ChatRequestPayload = z.infer<typeof chatRequestSchema>;

export function parseBookCallReply(raw: string): { text: string; hasBookCall: boolean } {
  const hasBookCall = raw.includes(BOOK_CALL_TOKEN);
  const text = raw
    .replaceAll(BOOK_CALL_TOKEN, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
  return { text, hasBookCall };
}

export class SlidingWindowLimiter {
  private readonly hits = new Map<string, number[]>();

  constructor(
    private readonly limit: number,
    private readonly windowMs: number,
    private readonly maxKeys = 5000,
  ) {}

  consume(
    key: string,
    now = Date.now(),
  ): { allowed: boolean; remaining: number; retryAfterSec: number } {
    const cutoff = now - this.windowMs;
    const prev = this.hits.get(key) ?? [];
    const active = prev.filter((ts) => ts > cutoff);

    if (active.length >= this.limit) {
      this.hits.set(key, active);
      const oldest = active[0] ?? now;
      const retryAfterSec = Math.max(1, Math.ceil((oldest + this.windowMs - now) / 1000));
      return { allowed: false, remaining: 0, retryAfterSec };
    }

    active.push(now);
    // Refresh insertion order for simple bounded eviction
    this.hits.delete(key);
    this.hits.set(key, active);

    if (this.hits.size > this.maxKeys) {
      const oldestKey = this.hits.keys().next().value;
      if (oldestKey !== undefined) this.hits.delete(oldestKey);
    }

    return {
      allowed: true,
      remaining: Math.max(0, this.limit - active.length),
      retryAfterSec: 0,
    };
  }
}
