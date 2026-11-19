import { useEffect, useState } from "react";

const STORAGE_KEY = "incodet_intro_seen";
const LETTERS = ["n", "c", "o", "d", "e", "t"] as const;

export function IntroPreloader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let alreadySeen = false;
    try {
      alreadySeen = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadySeen = true;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (alreadySeen || reducedMotion) {
      document.documentElement.classList.remove("intro-pending");
      if (reducedMotion && !alreadySeen) {
        try {
          window.sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          // ignore storage restrictions
        }
      }
      return;
    }

    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage restrictions
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;

    // Wait until overlay is painted, then reveal page beneath it without flash.
    const raf = window.requestAnimationFrame(() => {
      document.documentElement.classList.remove("intro-pending");
    });

    // Hard safety cap (~1.85s) + 1.4s completion timer in case animationend doesn't fire.
    const doneTimer = window.setTimeout(() => {
      setVisible(false);
    }, 1500);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(doneTimer);
      document.documentElement.classList.remove("intro-pending");
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      data-intro-preloader=""
      aria-hidden="true"
      role="presentation"
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget && e.animationName === "intro-curtain-up") {
          setVisible(false);
        }
      }}
      className="intro-preloader-overlay pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-[#111111] text-white select-none"
    >
      <div
        className="flex items-end"
        style={{
          gap: "0.06em",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          letterSpacing: "-0.04em",
          fontSize: "calc(var(--intro-mark-h) * 0.98)",
          lineHeight: 0.74,
        }}
      >
        <img
          src="/brand/incodet-mark-animated-white.svg"
          alt=""
          width={100}
          height={494}
          className="intro-preloader-mark block h-16 w-auto shrink-0 md:h-[88px]"
        />
        <span className="inline-flex items-baseline overflow-hidden pt-[0.04em]">
          {LETTERS.map((char, idx) => (
            <span
              key={`${char}-${idx}`}
              className="intro-preloader-letter inline-block text-white will-change-transform"
              style={{ animationDelay: `${150 + idx * 35}ms` }}
            >
              {char}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
