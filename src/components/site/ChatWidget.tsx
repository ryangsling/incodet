import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUp, CalendarDays, MessageCircle, Send, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState, type FormEvent } from "react";
import { site } from "@/config/site";
import {
  CHAT_QUICK_REPLIES,
  INITIAL_CHAT_MESSAGE,
  MAX_SESSION_MESSAGES,
  parseBookCallReply,
  type ChatMessage,
} from "@/lib/chat-shared";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const STORAGE_MESSAGES_KEY = "incodet:chat:messages:v1";
const STORAGE_SESSION_KEY = "incodet:chat:session-id:v1";
const STORAGE_COUNT_KEY = "incodet:chat:count:v1";

const DEFAULT_MESSAGES: ChatMessage[] = [
  { id: "welcome", role: "assistant", content: INITIAL_CHAT_MESSAGE },
];

function createId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `chat_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function readStoredMessages(): ChatMessage[] {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_MESSAGES_KEY);
    if (!raw) return DEFAULT_MESSAGES;
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed) || parsed.length === 0) return DEFAULT_MESSAGES;
    const valid = parsed.filter(
      (item): item is ChatMessage =>
        Boolean(item) &&
        typeof item === "object" &&
        typeof (item as ChatMessage).id === "string" &&
        ((item as ChatMessage).role === "user" || (item as ChatMessage).role === "assistant") &&
        typeof (item as ChatMessage).content === "string" &&
        (item as ChatMessage).content.trim().length > 0,
    );
    return valid.length > 0 ? valid : DEFAULT_MESSAGES;
  } catch {
    return DEFAULT_MESSAGES;
  }
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(DEFAULT_MESSAGES);
  const [userCount, setUserCount] = useState(0);
  const [sessionId, setSessionId] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const titleId = useId();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Hydrate conversation state strictly on the client so SSR matches the initial HTML tree.
  useEffect(() => {
    try {
      let sid = window.sessionStorage.getItem(STORAGE_SESSION_KEY);
      if (!sid) {
        sid = createId();
        window.sessionStorage.setItem(STORAGE_SESSION_KEY, sid);
      }
      const storedMessages = readStoredMessages();
      const storedCountRaw = Number(window.sessionStorage.getItem(STORAGE_COUNT_KEY) ?? "0");
      const derivedUserCount = storedMessages.filter((m) => m.role === "user").length;
      const count = Number.isFinite(storedCountRaw)
        ? Math.max(derivedUserCount, Math.min(MAX_SESSION_MESSAGES, Math.trunc(storedCountRaw)))
        : derivedUserCount;

      setSessionId(sid);
      setMessages(storedMessages);
      setUserCount(count);
    } catch {
      setSessionId(createId());
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.sessionStorage.setItem(STORAGE_MESSAGES_KEY, JSON.stringify(messages));
      window.sessionStorage.setItem(STORAGE_COUNT_KEY, String(userCount));
    } catch {
      // Ignore sessionStorage quota or privacy mode errors cleanly.
    }
  }, [hydrated, messages, userCount]);

  // Keep latest message in view when thread grows or opens.
  useEffect(() => {
    if (!open) return;
    const container = scrollRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [open, messages, sending, error]);

  // Focus input on open and allow Escape to dismiss.
  useEffect(() => {
    if (!open) return;
    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 60);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    // Lock body scrolling while mobile full-screen sheet is open.
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const prevOverflow = document.body.style.overflow;
    if (isMobile) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      if (isMobile) {
        document.body.style.overflow = prevOverflow;
      }
    };
  }, [open]);

  // Close mobile fullscreen sheet cleanly after navigating to /booking or another route.
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches) {
      setOpen(false);
    }
  }, [pathname]);

  const limitReached = userCount >= MAX_SESSION_MESSAGES;

  const sendText = useCallback(
    async (rawText: string) => {
      const trimmed = rawText.trim();
      if (!trimmed || sending || limitReached) return;

      const userMsg: ChatMessage = {
        id: createId(),
        role: "user",
        content: trimmed,
      };

      const nextMessages = [...messages, userMsg];
      setMessages(nextMessages);
      setInput("");
      setError(null);
      setSending(true);

      const sid = sessionId || createId();
      if (!sessionId) setSessionId(sid);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId: sid,
            messages: nextMessages.map(({ role, content }) => ({ role, content })),
          }),
        });

        const data = (await res.json().catch(() => ({}))) as {
          reply?: string;
          error?: string;
          code?: string;
          remainingSessionMessages?: number;
        };

        if (!res.ok || !data.reply) {
          if (data.code === "SESSION_LIMIT") {
            setUserCount(MAX_SESSION_MESSAGES);
          }
          setError(
            data.error ?? "Could not reach the assistant right now. Try booking a call below.",
          );
          return;
        }

        const assistantMsg: ChatMessage = {
          id: createId(),
          role: "assistant",
          content: data.reply,
        };

        setMessages((prev) => [...prev, assistantMsg]);
        setUserCount((prev) => {
          if (typeof data.remainingSessionMessages === "number") {
            return Math.max(prev + 1, MAX_SESSION_MESSAGES - data.remainingSessionMessages);
          }
          return prev + 1;
        });
      } catch {
        setError("Connection issue. Please check your internet or book a free call.");
      } finally {
        setSending(false);
      }
    },
    [limitReached, messages, sending, sessionId],
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    void sendText(input);
  };

  return (
    <>
      {open && (
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className={cn(
            "fixed inset-0 z-[9300] flex flex-col overflow-hidden bg-background pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]",
            "md:inset-auto md:right-6 md:bottom-[calc(5.25rem+env(safe-area-inset-bottom))] md:h-[min(600px,calc(100svh-7.5rem))] md:w-[400px] md:rounded-2xl md:border md:border-border md:pt-0 md:pb-0 md:shadow-[0_24px_64px_-16px_rgba(0,0,0,0.22)]",
          )}
        >
          {/* Header */}
          <header className="flex shrink-0 items-center justify-between gap-3 border-b border-border bg-background px-5 py-4">
            <div className="flex items-center gap-3">
              <Logo variant="favicon" className="size-9 rounded-[9px]" />
              <div>
                <h2 id={titleId} className="text-[16px] leading-tight font-medium text-ink">
                  Mary
                </h2>
                <p className="type-small text-muted-foreground">Incodet Assistant</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                launcherRef.current?.focus();
              }}
              aria-label="Close chat"
              className="flex size-10 items-center justify-center rounded-full bg-bg-soft text-ink transition-colors hover:bg-border"
            >
              <X aria-hidden className="size-4" />
            </button>
          </header>

          {/* Messages thread */}
          <div
            ref={scrollRef}
            aria-live="polite"
            className="flex-1 space-y-4 overflow-y-auto px-4 py-5 md:px-5"
          >
            {messages.map((m) => {
              if (m.role === "user") {
                return (
                  <div key={m.id} className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-dark px-4 py-2.5 text-[15px] leading-[1.45] text-on-dark">
                      {m.content}
                    </div>
                  </div>
                );
              }

              const { text, hasBookCall } = parseBookCallReply(m.content);
              return (
                <div key={m.id} className="flex flex-col items-start gap-2">
                  <div className="max-w-[88%] rounded-2xl rounded-bl-sm bg-bg-soft px-4 py-2.5 text-[15px] leading-[1.45] whitespace-pre-line text-ink">
                    {text}
                  </div>
                  {hasBookCall && (
                    <Link
                      to="/booking"
                      onClick={() => setOpen(false)}
                      className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 type-small font-medium text-primary-foreground transition-colors hover:bg-ink/88"
                    >
                      <CalendarDays aria-hidden className="size-4" />
                      Book a free call
                    </Link>
                  )}
                </div>
              );
            })}

            {sending && (
              <div className="flex items-start">
                <div className="inline-flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-bg-soft px-4 py-3">
                  <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground" />
                  <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground [animation-delay:150ms]" />
                  <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground [animation-delay:300ms]" />
                  <span className="sr-only">Thinking</span>
                </div>
              </div>
            )}

            {error && (
              <div
                role="alert"
                className="flex flex-col items-start gap-2.5 rounded-2xl border border-border bg-bg-soft p-3.5 text-[14px] leading-[1.4] text-ink"
              >
                <p>{error}</p>
                <Link
                  to="/booking"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 items-center gap-1.5 rounded-full bg-ink px-3.5 type-small font-medium text-primary-foreground transition-colors hover:bg-ink/88"
                >
                  <CalendarDays aria-hidden className="size-3.5" />
                  Book a free call
                </Link>
              </div>
            )}

            {limitReached && (
              <div className="rounded-2xl border border-border bg-bg-soft p-3.5 text-[14px] leading-[1.4] text-ink">
                <p>
                  You have reached the 20-message session limit. Book a free call or message our
                  team on WhatsApp to keep going.
                </p>
                <Link
                  to="/booking"
                  onClick={() => setOpen(false)}
                  className="mt-2.5 inline-flex h-9 items-center gap-1.5 rounded-full bg-ink px-3.5 type-small font-medium text-primary-foreground transition-colors hover:bg-ink/88"
                >
                  <CalendarDays aria-hidden className="size-3.5" />
                  Book a free call
                </Link>
              </div>
            )}
          </div>

          {/* Quick-reply chips */}
          {!limitReached && (
            <div className="shrink-0 border-t border-border/70 px-4 pt-2.5 pb-1 md:px-5">
              <div
                role="group"
                aria-label="Quick questions"
                className="flex gap-1.5 overflow-x-auto pb-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {CHAT_QUICK_REPLIES.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    disabled={sending}
                    onClick={() => void sendText(chip)}
                    className="shrink-0 rounded-full border border-border bg-background px-3 py-1.5 text-[13px] font-medium text-ink transition-colors hover:bg-bg-soft disabled:opacity-50"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input composer + persistent WhatsApp link */}
          <div className="shrink-0 border-t border-border bg-background px-4 pt-3 pb-3 md:px-5">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <label htmlFor="incodet-chat-input" className="sr-only">
                Ask a question about Incodet
              </label>
              <input
                ref={inputRef}
                id="incodet-chat-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={sending || limitReached}
                maxLength={1500}
                placeholder={
                  limitReached ? "Session limit reached (20 messages)" : "Ask about Incodet..."
                }
                className="h-11 min-w-0 flex-1 rounded-full border border-border bg-bg-soft px-4 text-[15px] text-ink placeholder:text-muted-foreground focus-visible:border-ink focus-visible:outline-none disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={sending || limitReached || !input.trim()}
                aria-label="Send message"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-dark text-on-dark transition-opacity hover:opacity-90 disabled:opacity-35"
              >
                {sending ? (
                  <Send aria-hidden className="size-4 animate-pulse" />
                ) : (
                  <ArrowUp aria-hidden className="size-4" />
                )}
              </button>
            </form>

            <div className="mt-2.5 flex items-center justify-start px-1">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-ink"
              >
                <MessageCircle aria-hidden className="size-3.5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Floating bottom-right launcher pill */}
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? "Close chat with Mary" : "Open chat with Mary"}
        className={cn(
          "fixed right-4 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-[9150] flex h-11 items-center gap-2 rounded-full bg-dark px-4 text-[14px] font-medium text-on-dark shadow-pill transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]",
          "md:right-6 md:bottom-[calc(1.5rem+env(safe-area-inset-bottom))]",
          open && "hidden md:flex",
        )}
      >
        {open ? (
          <>
            <X aria-hidden className="size-4" />
            <span>Close</span>
          </>
        ) : (
          <>
            <MessageCircle aria-hidden className="size-4" />
            <span>Ask Mary</span>
          </>
        )}
      </button>
    </>
  );
}
