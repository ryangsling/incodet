import { ArrowDown, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import { usePrefersReducedMotion } from "@/hooks/use-motion";
import { cn } from "@/lib/utils";
import { Accent } from "./Accent";

const DAY_VIDEO = "/videos/hero/hero-light-boomerang.mp4";
const NIGHT_VIDEO = "/videos/hero/hero-dark-boomerang.mp4";

function GlassToggle({ mode, onToggle }: { mode: "day" | "dark"; onToggle: () => void }) {
  const isDark = mode === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "day" : "night"} mode`}
      onClick={onToggle}
      suppressHydrationWarning
      className={cn(
        "group relative flex h-[52px] w-[152px] cursor-pointer items-center rounded-full p-1 select-none",
        "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
        "border border-white/30 bg-black/35 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.2)]",
      )}
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Label: "Dark" (visible on the left when in dark mode) */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-4.5 text-[15px] font-medium tracking-tight text-white transition-all duration-500 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]",
          isDark ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-2 opacity-0",
        )}
      >
        Dark
      </span>

      {/* Label: "Light" (visible on the right when in light mode) */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute right-4.5 text-[15px] font-medium tracking-tight text-white transition-all duration-500 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]",
          !isDark ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-2 opacity-0",
        )}
      >
        Light
      </span>

      {/* Sliding Glass Lens Thumb */}
      <div
        suppressHydrationWarning
        className={cn(
          "relative flex size-[44px] items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isDark
            ? "translate-x-[98px] border border-white/40 bg-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.4)]"
            : "translate-x-0 border border-white/60 bg-white/25 shadow-[0_4px_16px_rgba(0,0,0,0.25),inset_0_1px_2px_rgba(255,255,255,0.6)]",
        )}
        style={{
          backdropFilter: "blur(24px) saturate(1.6)",
          WebkitBackdropFilter: "blur(24px) saturate(1.6)",
        }}
      >
        {isDark ? (
          <Moon
            aria-hidden="true"
            className="size-5 fill-white/90 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-transform duration-500"
          />
        ) : (
          <Sun
            aria-hidden="true"
            className="size-5 fill-amber-300/90 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] transition-transform duration-500"
          />
        )}
      </div>
    </button>
  );
}

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<"day" | "dark">("day");
  const [isPulling, setIsPulling] = useState(false);
  const pullTimerRef = useRef<number | null>(null);

  useEffect(() => {
    document.documentElement.dataset["heroMode"] = mode;
    window.dispatchEvent(new CustomEvent("hero-mode-change", { detail: mode }));
  }, [mode]);

  useEffect(() => {
    return () => {
      if (pullTimerRef.current) window.clearTimeout(pullTimerRef.current);
    };
  }, []);

  const toggleMode = () => {
    if (reduced) {
      setMode((prev) => (prev === "day" ? "dark" : "day"));
      return;
    }

    setIsPulling(true);

    if (pullTimerRef.current) window.clearTimeout(pullTimerRef.current);

    // Switch background halfway through pull
    window.setTimeout(() => {
      setMode((prev) => (prev === "day" ? "dark" : "day"));
    }, 120);

    // Release pull to activate return-easing physics bounce
    pullTimerRef.current = window.setTimeout(() => {
      setIsPulling(false);
    }, 280);
  };

  const dayVideoRef = useRef<HTMLVideoElement>(null);
  const nightVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (mode === "day") {
      nightVideoRef.current?.pause();
      dayVideoRef.current?.play().catch(() => {});
    } else {
      dayVideoRef.current?.pause();
      nightVideoRef.current?.play().catch(() => {});
    }
  }, [mode]);

  const handleScrollDown = () => {
    const next = sectionRef.current?.nextElementSibling as HTMLElement | null;
    if (next) {
      next.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    } else if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetHeight,
        behavior: reduced ? "auto" : "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      data-theme="dark"
      aria-labelledby="hero-title"
      suppressHydrationWarning
      className="hero relative flex h-svh min-h-[640px] w-full items-center justify-center overflow-hidden bg-dark"
    >
      {/* Blur overlays top and bottom per instruction */}
      <div className="blur-overlay blur-overlay-top" />
      <div className="blur-overlay blur-overlay-bottom" />

      {/* Hero background videos for Light and Dark modes with pull-down transition physics */}
      <div
        aria-hidden
        suppressHydrationWarning
        className={cn("hero-bg bg-front origin-center overflow-hidden", isPulling && "pull-down")}
      >
        <video
          ref={dayVideoRef}
          key="hero-video-day"
          src={DAY_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          suppressHydrationWarning
          poster="/images/hero/hero-bg.webp"
          className={cn(
            "pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-500 ease-out",
            mode === "day" ? "opacity-100" : "opacity-0",
          )}
        />
        <video
          ref={nightVideoRef}
          key="hero-video-night"
          src={NIGHT_VIDEO}
          loop
          muted
          playsInline
          preload={mode === "dark" ? "metadata" : "none"}
          suppressHydrationWarning
          poster="/images/hero/hero-bg-night.webp"
          className={cn(
            "pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-500 ease-out",
            mode === "dark" ? "opacity-100" : "opacity-0",
          )}
        />
      </div>

      {/* Centered Minimal Content */}
      <div className="container-site relative z-10 flex flex-col items-center px-4 pt-16 pb-12 text-center sm:pt-20 sm:pb-16 md:pt-24 md:pb-20">
        <h1
          id="hero-title"
          className="type-h1 animate-hero-title max-w-[880px] font-medium tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.75)] lg:text-[76px] lg:leading-[1.06] text-balance"
        >
          Your Business <Accent>Never Sleeps</Accent>
        </h1>

        <div className="animate-hero-subtitle mt-5 max-w-[640px] sm:mt-6">
          <p className="type-body font-normal text-[16px] leading-relaxed text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.75)] text-balance sm:text-[18px]">
            High-converting booking websites with built-in CRM and 24/7 AI voice calling agents for
            local service businesses in the UK, US, Canada &amp; Australia.
          </p>
        </div>

        {/* Glass Toggle for Day and Night mode - placed slightly below laptop */}
        <div className="animate-hero-edges mt-24 translate-y-3 sm:mt-32 sm:translate-y-4 md:mt-40 md:translate-y-6 lg:mt-48 xl:mt-52">
          <GlassToggle mode={mode} onToggle={toggleMode} />
        </div>
      </div>

      {/* Minimal edge framing: Year, Down Arrow, Location */}
      <div className="animate-hero-edges absolute inset-x-0 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-20 flex items-center justify-between px-6 sm:px-10 md:bottom-8 lg:px-14 text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
        <span className="type-small font-medium tracking-widest uppercase tabular-nums">2026</span>

        <button
          type="button"
          onClick={handleScrollDown}
          aria-label="Scroll down to explore"
          className="group flex flex-col items-center gap-1 rounded-full p-2 text-white/90 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ArrowDown
            aria-hidden
            className="size-4 transition-transform duration-300 group-hover:translate-y-1"
            strokeWidth={1.75}
          />
        </button>

        <span className="max-w-[130px] truncate text-right text-xs font-medium tracking-wide sm:max-w-none sm:text-sm">
          {site.locationLabel}
        </span>
      </div>
    </section>
  );
}
