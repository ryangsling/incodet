import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "incodet_intro_seen";
const LETTERS = ["I", "n", "c", "o", "d", "e", "t"];

export function IntroPreloader() {
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      try {
        window.sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore storage restrictions
      }
      return;
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    let revert: (() => void) | undefined;

    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage restrictions
    }

    // Hard 1.85s safety cap so slow networks can never trap the viewport.
    const safetyTimer = window.setTimeout(() => {
      if (!cancelled) setVisible(false);
    }, 1850);

    void import("gsap").then(({ default: gsap }) => {
      if (cancelled || !overlayRef.current || !markRef.current) return;
      const letters = letterRefs.current.filter((el): el is HTMLSpanElement => Boolean(el));

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            if (!cancelled) setVisible(false);
          },
        });

        tl.fromTo(
          markRef.current,
          { scale: 0.72, rotation: -12, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
          0,
        )
          .fromTo(
            letters,
            { y: 18, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.34,
              stagger: 0.035,
              ease: "power3.out",
            },
            0.12,
          )
          .to(overlayRef.current, {
            yPercent: -100,
            opacity: 0.96,
            duration: 0.45,
            ease: "power3.inOut",
            delay: 0.35,
          });
      }, overlayRef);

      revert = () => ctx.revert();
    });

    return () => {
      cancelled = true;
      window.clearTimeout(safetyTimer);
      revert?.();
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      role="presentation"
      className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white select-none"
    >
      <div className="flex items-center gap-3.5 sm:gap-4">
        <div
          ref={markRef}
          className="flex size-11 items-center justify-center sm:size-12"
          style={{ opacity: 0 }}
        >
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-full"
            aria-hidden="true"
          >
            <rect width="48" height="48" rx="12" fill="#FFFFFF" />
            <rect x="21" y="13" width="6" height="6" rx="3" fill="#0A0A0A" />
            <rect x="21" y="21.5" width="6" height="13.5" rx="2.5" fill="#0A0A0A" />
          </svg>
        </div>

        <div className="flex overflow-hidden text-[32px] leading-none font-bold tracking-[-0.03em] text-white sm:text-[38px]">
          {LETTERS.map((char, idx) => (
            <span
              key={idx}
              ref={(el) => {
                letterRefs.current[idx] = el;
              }}
              className="inline-block will-change-transform"
              style={{ opacity: 0 }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
