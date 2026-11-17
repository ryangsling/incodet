import { ArrowLeft, ArrowRight, Check, CheckCircle2, Circle, CircleDot, Phone } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as RPointerEvent,
} from "react";
import { createPortal } from "react-dom";
import { loadScrollMotion } from "@/lib/scroll-motion";
import { showcase } from "@/content/caseStudies";
import { PillLink } from "@/components/site/Button";
import { PillBadge, Reveal } from "@/components/site/primitives";
import { SocialRow } from "@/components/site/SocialIcon";
import {
  PIN_QUERY,
  PIN_QUERY_WIDE,
  useMediaQuery,
  usePrefersReducedMotion,
} from "@/hooks/use-motion";
import { cn } from "@/lib/utils";
import { CalendarUI, CallCardUI, ChatUI, NotificationUI } from "./MiniUI";

/* ------------------------------------------------------------------ */
/* Floating projects                                                   */
/* ------------------------------------------------------------------ */

type Tile = {
  src: string;
  w: number;
  h: number;
  left: string;
  top: string;
  speed: number;
  framed?: boolean;
};
// Resized copies in public/images/burst at 1x and 2x of each tile width ("<base>-<width>.webp").
const shot = (s: string) => `/images/burst/case-studies-${s}`;
const phone = (s: string) => `/images/burst/mobile-${s}`;
const mock = (s: string) => `/images/burst/mockups-${s}`;

// Desktop layout: a loose cloud left and right of the centered text.
const tiles: Tile[] = [
  {
    src: shot("western-cars-brighton"),
    w: 280,
    h: 175,
    left: "2%",
    top: "8%",
    speed: 1.15,
    framed: true,
  },
  { src: phone("bloom-studio"), w: 140, h: 303, left: "20%", top: "0%", speed: 0.9 },
  { src: mock("humandata-labs"), w: 250, h: 156, left: "0%", top: "40%", speed: 1.25 },
  {
    src: phone("gm-taxis-lewes"),
    w: 150,
    h: 325,
    left: "15%",
    top: "58%",
    speed: 0.85,
    framed: true,
  },
  { src: shot("brhex-studio"), w: 220, h: 138, left: "30%", top: "88%", speed: 1.05 },
  {
    src: shot("barkers-executive"),
    w: 180,
    h: 113,
    left: "1%",
    top: "84%",
    speed: 1.2,
    framed: true,
  },
  { src: phone("western-cars-littlehampton"), w: 140, h: 303, left: "68%", top: "0%", speed: 1.2 },
  {
    src: mock("a1-airport-cars"),
    w: 270,
    h: 169,
    left: "77%",
    top: "9%",
    speed: 0.9,
    framed: true,
  },
  { src: shot("gm-taxis-lewes"), w: 250, h: 156, left: "79%", top: "42%", speed: 1.1 },
  {
    src: phone("barkers-executive"),
    w: 150,
    h: 325,
    left: "75%",
    top: "62%",
    speed: 0.85,
    framed: true,
  },
  { src: mock("bloom-studio"), w: 180, h: 113, left: "86%", top: "86%", speed: 1.25 },
  { src: phone("a1-airport-cars"), w: 150, h: 325, left: "60%", top: "88%", speed: 1 },
];
// Static 4-column grid (phones and reduced motion): each tile is about a quarter of the width.
const staticSizes = "(min-width: 1280px) 290px, 23vw";
const mobileTiles = [
  tiles[1],
  tiles[0],
  tiles[6],
  tiles[7],
  tiles[3],
  tiles[8],
  tiles[9],
  tiles[10],
];

function TileImg({
  t,
  className,
  style,
  sizes = `${t.w}px`,
}: {
  t: Tile;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[14px] shadow-soft",
        t.framed ? "bg-background p-1.5" : "bg-bg-soft",
        className,
      )}
      style={style}
    >
      <img
        src={`${t.src}-${t.w}.webp`}
        srcSet={`${t.src}-${t.w}.webp ${t.w}w, ${t.src}-${t.w * 2}.webp ${t.w * 2}w`}
        sizes={sizes}
        alt=""
        loading="lazy"
        decoding="async"
        width={t.w}
        height={t.h}
        className={cn("size-full object-cover object-top", t.framed ? "rounded-[9px]" : "")}
      />
    </div>
  );
}

export function FloatingProjects() {
  const reduced = usePrefersReducedMotion();
  const desktop = useMediaQuery(PIN_QUERY);
  const ref = useRef<HTMLElement>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animated = desktop && !reduced;
  useEffect(() => {
    if (!animated) return;
    let cancelled = false;
    let revert: (() => void) | undefined;
    void loadScrollMotion().then(({ gsap, ScrollTrigger }) => {
      if (cancelled || !ref.current) return;
      const mm = gsap.matchMedia();
      mm.add(`${PIN_QUERY} and (prefers-reduced-motion: no-preference)`, () => {
        const el = ref.current;
        if (!el) return;
        const tileEls = tileRefs.current.filter((t): t is HTMLDivElement => Boolean(t));
        const tl = gsap.timeline({
          scrollTrigger: {
            id: "floating-burst",
            trigger: el,
            start: "top top",
            end: () => `+=${window.innerHeight * 2}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            // Pinned and scrubbed triggers refresh in page order (higher first).
            refreshPriority: 50,
            // Promote tiles to their own layers only while the section animates.
            onToggle: (self) =>
              gsap.set(tileEls, { willChange: self.isActive ? "transform" : "auto" }),
          },
        });
        // Only transform and opacity animate. Scale stays near 1 so layers stay sharp.
        tileRefs.current.forEach((tile, i) => {
          if (!tile) return;
          const angle = (i / tiles.length) * Math.PI * 2 - Math.PI / 2;
          const dx = () => Math.cos(angle) * window.innerWidth * (0.38 + (i % 3) * 0.08);
          const dy = () => Math.sin(angle) * window.innerHeight * (0.4 + (i % 2) * 0.1);
          const at = i * 0.012;
          tl.fromTo(
            tile,
            { x: 0, y: 0, scale: 0.6, opacity: 0 },
            { x: dx, y: dy, scale: 1, opacity: 1, duration: 0.38, ease: "none" },
            at,
          ).to(
            tile,
            {
              x: () => dx() * 2.5,
              y: () => dy() * 2.5,
              scale: 1.25,
              opacity: 0,
              duration: 0.4,
              ease: "none",
            },
            0.5 + at,
          );
        });
        tl.to({}, { duration: 0.12 });
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
      });
      revert = () => mm.revert();
    });
    return () => {
      cancelled = true;
      revert?.();
    };
  }, [animated]);
  const text = (
    <div className="burst-text relative z-10 mx-auto flex max-w-[620px] flex-col items-center text-center">
      <h2 id="team-title" className="type-h2">
        One dedicated studio for your website, AI agents &amp; software
      </h2>
      <p className="mt-5 type-body">
        Stop stitching together separate freelancers, booking tools, and missed voicemails. We
        build, connect, and maintain your entire customer setup so every enquiry becomes a booked
        job.
      </p>
      <PillLink to="/pricing" className="mt-8">
        See plans &amp; pricing
      </PillLink>
      <p className="mt-10 type-small text-muted-foreground">Connect with us</p>
      <SocialRow className="mt-3 justify-center" />
    </div>
  );
  return (
    <section
      ref={ref}
      aria-labelledby="team-title"
      className={cn(
        "burst-section relative overflow-hidden bg-bg-soft",
        animated && "burst-animated",
      )}
    >
      {animated && (
        <div aria-hidden className="absolute inset-0 z-0">
          {tiles.map((t, i) => (
            <div
              key={t.src}
              ref={(el) => {
                tileRefs.current[i] = el;
              }}
              className="burst-tile absolute left-1/2 top-1/2"
              style={{ width: t.w, height: t.h, marginLeft: -t.w / 2, marginTop: -t.h / 2 }}
            >
              <TileImg t={t} className="size-full" />
            </div>
          ))}
        </div>
      )}
      <div className="container-site relative py-[72px] md:py-[100px]">
        {!animated && (
          <div aria-hidden className="burst-static grid grid-cols-4 items-start gap-2 md:gap-4">
            {mobileTiles
              .slice(0, 4)
              .map(
                (t, i) =>
                  t && (
                    <TileImg
                      key={t.src}
                      t={t}
                      sizes={staticSizes}
                      className={cn("aspect-[3/5]", i % 2 && "mt-6")}
                    />
                  ),
              )}
          </div>
        )}
        <div className={cn(!animated && "py-12")}>{text}</div>
        {!animated && (
          <div aria-hidden className="burst-static grid grid-cols-4 items-start gap-2 md:gap-4">
            {mobileTiles
              .slice(4)
              .map(
                (t, i) =>
                  t && (
                    <TileImg
                      key={t.src}
                      t={t}
                      sizes={staticSizes}
                      className={cn("aspect-[3/5]", i % 2 === 0 && "mt-6")}
                    />
                  ),
              )}
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Arc carousel                                                        */
/* ------------------------------------------------------------------ */

const DARK_CARD_KEYS = new Set([
  "humandata-labs",
  "western-cars-redesign-concept",
  "barkers-executive",
  "brighton-taxi",
]);

function SignalIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 8C6.5 9 6 10.5 6 12C6 13.5 6.5 15 7.5 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 6C3 7.5 2 9.5 2 12C2 14.5 3 16.5 4.5 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 16C17.5 15 18 13.5 18 12C18 10.5 17.5 9 16.5 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 18C21 16.5 22 14.5 22 12C22 9.5 21 7.5 19.5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DiamondClusterIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.5 2L12 4.5L9.5 7L7 4.5L9.5 2Z" fill="currentColor" />
      <path d="M4.5 7L7 9.5L4.5 12L2 9.5L4.5 7Z" fill="currentColor" />
      <path d="M14.5 7L17 9.5L14.5 12L12 9.5L14.5 7Z" fill="currentColor" />
      <path d="M9.5 12L12 14.5L9.5 17L7 14.5L9.5 12Z" fill="currentColor" />
    </svg>
  );
}

export function WorkCarousel() {
  const items = showcase;
  const reduced = usePrefersReducedMotion();
  const wideDesktop = useMediaQuery("(min-width: 1440px)");
  const desktop = useMediaQuery("(min-width: 992px)");
  const tablet = useMediaQuery("(min-width: 480px)");
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");

  const cardW = wideDesktop ? 670 : desktop ? 620 : tablet ? 400 : 330;
  const cardH = wideDesktop ? 760 : desktop ? 720 : tablet ? 480 : 380;
  const stepDeg = desktop ? 21 : 20;
  const dragDistancePerCard = Math.max(260, Math.min(cardW * 0.72, 380));

  const n = items.length;
  // Opens on the third card so the arc always shows cards fanning on both sides.
  const initialIndex = Math.min(2, Math.max(0, n - 1));
  const [active, setActive] = useState(initialIndex);
  const [dragging, setDragging] = useState(false);
  const [cursorOn, setCursorOn] = useState(false);
  const [overButton, setOverButton] = useState(false);

  const stage = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const cursor = useRef<HTMLDivElement>(null);

  const currentPosRef = useRef(initialIndex);
  const targetPosRef = useRef(initialIndex);
  const activeRef = useRef(initialIndex);
  const isDraggingRef = useRef(false);
  const rafRef = useRef(0);
  const lastFrameTimeRef = useRef(0);
  const wheelTimerRef = useRef(0);

  const dragRef = useRef<{
    startX: number;
    startTarget: number;
    lastX: number;
    lastT: number;
    vx: number;
    moved: boolean;
  } | null>(null);

  const cursorTarget = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  /** Shortest signed distance from the wheel position to card i, so the wheel loops both ways. */
  const offset = useCallback(
    (i: number, p: number) => {
      if (n === 0) return 0;
      const d = (((i - p) % n) + n) % n;
      return d > n / 2 ? d - n : d;
    },
    [n],
  );

  const computeCardVisuals = useCallback(
    (d: number) => {
      const absD = Math.abs(d);
      const angle = d * stepDeg;
      const scale = Math.max(0.75, 1 - absD * 0.04);

      let opacity = 1;
      if (absD >= 2.5) {
        opacity = 0;
      } else if (absD > 1.3) {
        opacity = Math.max(0, 1 - (absD - 1.3) / 1.2);
      }

      const hidden = absD >= 2.8;
      const zIndex = Math.round(50 - absD * 10);
      const status = absD < 0.45 ? "active" : absD < 2 ? "inview" : "not-active";

      return { angle, scale, opacity, hidden, zIndex, status };
    },
    [stepDeg],
  );

  const applyArcStyles = useCallback(
    (p: number) => {
      for (let i = 0; i < n; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;
        const d = offset(i, p);
        const { angle, scale, opacity, hidden, zIndex, status } = computeCardVisuals(d);
        el.style.transform = `translate3d(-50%, 0px, 0px) rotate(${angle.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        el.style.opacity = opacity.toFixed(3);
        el.style.zIndex = String(zIndex);
        el.style.visibility = hidden ? "hidden" : "visible";
        el.style.pointerEvents = !hidden && opacity > 0.1 ? "auto" : "none";
        el.dataset["status"] = status;
        el.inert = hidden;
      }
      if (n > 0) {
        const nextActive = ((Math.round(p) % n) + n) % n;
        if (nextActive !== activeRef.current) {
          activeRef.current = nextActive;
          setActive(nextActive);
        }
      }
    },
    [n, offset, computeCardVisuals],
  );

  const stopLoop = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
  }, []);

  const startLoop = useCallback(() => {
    if (rafRef.current) return;
    lastFrameTimeRef.current = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.05, Math.max(0.001, (now - lastFrameTimeRef.current) / 1000));
      lastFrameTimeRef.current = now;

      if (reduced) {
        currentPosRef.current = targetPosRef.current;
        applyArcStyles(currentPosRef.current);
        rafRef.current = 0;
        return;
      }

      const diff = targetPosRef.current - currentPosRef.current;
      // Snappy direct-tracking follow while dragging, smooth damped spring settle after release
      const stiffness = isDraggingRef.current ? 22 : 8.5;
      const factor = 1 - Math.exp(-stiffness * dt);
      currentPosRef.current += diff * factor;

      if (!isDraggingRef.current && Math.abs(diff) < 0.0005) {
        currentPosRef.current = targetPosRef.current;
        applyArcStyles(currentPosRef.current);
        rafRef.current = 0;
        return;
      }

      applyArcStyles(currentPosRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [applyArcStyles, reduced]);

  // Ensure layout dimensions / media query switches re-apply arc styles cleanly
  useEffect(() => {
    applyArcStyles(currentPosRef.current);
  }, [applyArcStyles, cardW, cardH, stepDeg]);

  useEffect(() => {
    return () => {
      stopLoop();
      window.clearTimeout(wheelTimerRef.current);
    };
  }, [stopLoop]);

  // Pointer containment check for floating DRAG badge (syncs with Lenis & scroll)
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const checkPointer = () => {
      const r = el.getBoundingClientRect();
      const { x, y } = cursorTarget.current;
      const inside =
        r.bottom > 0 &&
        r.top < window.innerHeight &&
        x >= r.left &&
        x <= r.right &&
        y >= r.top &&
        y <= r.bottom;
      const hit = inside ? document.elementFromPoint(x, y) : null;
      setCursorOn(inside && Boolean(hit && el.contains(hit)));
      setOverButton(Boolean(hit?.closest("a,button")));
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) setCursorOn(false);
      else checkPointer();
    });
    observer.observe(el);
    window.addEventListener("scroll", checkPointer, { passive: true });
    window.addEventListener("incodet:lenis-scroll", checkPointer);
    window.addEventListener("resize", checkPointer);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkPointer);
      window.removeEventListener("incodet:lenis-scroll", checkPointer);
      window.removeEventListener("resize", checkPointer);
    };
  }, []);

  const animateTo = useCallback(
    (target: number) => {
      targetPosRef.current = Math.round(target);
      startLoop();
    },
    [startLoop],
  );

  const onPointerDown = (e: RPointerEvent<HTMLDivElement>) => {
    const targetEl = e.target as HTMLElement;
    if (targetEl.closest('[data-status="active"] a, [data-status="active"] button')) return;
    window.clearTimeout(wheelTimerRef.current);
    isDraggingRef.current = true;
    setDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startTarget: targetPosRef.current,
      lastX: e.clientX,
      lastT: performance.now(),
      vx: 0,
      moved: false,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
    startLoop();
  };

  const onPointerMove = (e: RPointerEvent<HTMLDivElement>) => {
    cursorTarget.current = { x: e.clientX, y: e.clientY };
    const hit = document.elementFromPoint(e.clientX, e.clientY);
    setOverButton(Boolean(hit?.closest('[data-status="active"] a, button')));
    const d = dragRef.current;
    if (!d) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 5) d.moved = true;
    const now = performance.now();
    const dt = Math.max(1, now - d.lastT);
    const instantV = (e.clientX - d.lastX) / dt;
    // Exponential moving average on release velocity for fluid, predictable momentum
    d.vx = d.vx * 0.6 + instantV * 0.4;
    d.lastX = e.clientX;
    d.lastT = now;
    targetPosRef.current = d.startTarget - dx / dragDistancePerCard;
    startLoop();
  };

  const onPointerUp = (e: RPointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    dragRef.current = null;
    isDraggingRef.current = false;
    setDragging(false);
    if (!d) return;

    if (!d.moved) {
      // Clicking a flanking card smoothly rotates it to center.
      const card = (document.elementsFromPoint(e.clientX, e.clientY) as HTMLElement[]).find(
        (el) => el.dataset["index"],
      );
      if (card) {
        const idx = Number(card.dataset["index"]);
        animateTo(currentPosRef.current + offset(idx, currentPosRef.current));
      } else {
        animateTo(targetPosRef.current);
      }
      return;
    }

    const rawMomentum = reduced ? 0 : (-d.vx * 260) / dragDistancePerCard;
    const clampedMomentum = Math.max(-1.8, Math.min(1.8, rawMomentum));
    animateTo(targetPosRef.current + clampedMomentum);
  };

  // Trackpad horizontal scroll smoothly rotates the arc deck, then settles.
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      targetPosRef.current += e.deltaX / dragDistancePerCard;
      startLoop();
      window.clearTimeout(wheelTimerRef.current);
      wheelTimerRef.current = window.setTimeout(() => {
        animateTo(targetPosRef.current);
      }, 120);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [animateTo, dragDistancePerCard, startLoop]);

  // Floating DRAG circle cursor follows the pointer smoothly with damped spring lerp.
  useEffect(() => {
    if (!cursorOn || !finePointer) return;
    let raf = 0;
    let lastT = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.05, Math.max(0.001, (now - lastT) / 1000));
      lastT = now;
      const c = cursorPos.current;
      const t = cursorTarget.current;
      const k = reduced ? 1 : 1 - Math.exp(-18 * dt);
      c.x += (t.x - c.x) * k;
      c.y += (t.y - c.y) * k;
      if (cursor.current) {
        cursor.current.style.transform = `translate3d(${c.x.toFixed(1)}px, ${c.y.toFixed(1)}px, 0) translate(-50%, -50%) scale(${isDraggingRef.current ? 0.88 : 1})`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [cursorOn, finePointer, reduced]);

  const go = (d: number) => animateTo(Math.round(targetPosRef.current) + d);
  const showCursor = finePointer && cursorOn;

  return (
    <section
      aria-labelledby="work-title"
      className="overflow-x-clip bg-background pt-[72px] pb-[72px] md:pt-[120px] md:pb-[100px]"
    >
      <div className="container-site">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 id="work-title" className="type-h2">
            Recent launches across live client projects
          </h2>
          <p className="mt-5 type-body">
            Browse shipped booking websites, internal portals, and AI tools engineered for fast load
            times, intuitive user flows, and steady daily enquiries.
          </p>
        </Reveal>
      </div>

      <div
        ref={stage}
        id="wfArcStageRoot"
        role="region"
        aria-roledescription="carousel"
        aria-label="Our latest work"
        data-drag-status={dragging ? "grabbing" : "grab"}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            go(1);
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(-1);
          }
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerEnter={(e) => {
          cursorTarget.current = cursorPos.current = { x: e.clientX, y: e.clientY };
          setCursorOn(true);
        }}
        onPointerLeave={() => {
          setCursorOn(false);
          setOverButton(false);
        }}
        className={cn(
          "relative isolate mt-12 touch-pan-y select-none focus-visible:outline-none md:mt-16",
          finePointer && !overButton && "cursor-none",
          dragging && "cursor-grabbing",
        )}
        style={{ height: cardH + (desktop ? 88 : tablet ? 68 : 56) }}
      >
        {/* Arc Deck: ref-driven direct DOM transforms along a 360% pivot arc */}
        <ul id="wfArcDeck" data-overlap-ok className="relative mx-auto h-full w-full">
          {items.map((it, i) => {
            const d = offset(i, initialIndex);
            const { angle, scale, opacity, hidden, zIndex, status } = computeCardVisuals(d);
            const isActive = i === active;
            const isDark = DARK_CARD_KEYS.has(it.key);
            const imgSrc = isDark ? `/images/case-studies/${it.key}.webp` : it.image;
            const imgSrcSet =
              !isDark && it.imageLarge ? `${it.image} 800w, ${it.imageLarge} 1600w` : undefined;

            return (
              <li
                key={it.key}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                data-index={i}
                data-status={status}
                aria-hidden={!isActive || undefined}
                aria-label={`${i + 1} of ${items.length}: ${it.name}`}
                className={cn(
                  "group/card absolute top-0 left-1/2 overflow-hidden shadow-[0_28px_70px_-18px_rgba(0,0,0,0.2)] will-change-[transform,opacity]",
                  "rounded-[20px] sm:rounded-[32px] lg:rounded-[40px]",
                  isDark ? "bg-[#0c0e14] text-white" : cn(it.tint, "text-ink"),
                )}
                style={{
                  width: cardW,
                  height: cardH,
                  transformOrigin: "50% 360%",
                  transform: `translate3d(-50%, 0px, 0px) rotate(${angle.toFixed(2)}deg) scale(${scale.toFixed(3)})`,
                  opacity: opacity.toFixed(3),
                  zIndex,
                  visibility: hidden ? "hidden" : "visible",
                  pointerEvents: !hidden && opacity > 0.1 ? "auto" : "none",
                }}
              >
                {/* Subtle atmospheric radial depth behind card content */}
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-0",
                    isDark
                      ? "bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.09),transparent_60%)]"
                      : "bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.5),transparent_65%)]",
                  )}
                />

                {/* Full-bleed lower showcase artwork melting softly into the card surface */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] overflow-hidden"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.88) 16%, #000 32%, #000 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.88) 16%, #000 32%, #000 100%)",
                  }}
                >
                  <img
                    src={imgSrc}
                    srcSet={imgSrcSet}
                    sizes="(max-width: 479px) 330px, (max-width: 991px) 400px, 670px"
                    alt={`${it.name} preview`}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={500}
                    draggable={false}
                    className={cn(
                      "size-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.03]",
                      isDark ? "object-top" : "object-center",
                    )}
                  />
                </div>

                {/* Soft bottom vignette so the white pill CTA always reads crisply */}
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-x-0 bottom-0 h-[120px]",
                    isDark
                      ? "bg-gradient-to-t from-[#0c0e14]/85 via-[#0c0e14]/35 to-transparent"
                      : "bg-gradient-to-t from-black/10 via-transparent to-transparent",
                  )}
                />

                {/* Centered card content stack matching arc-card-content */}
                <div className="relative z-10 flex size-full flex-col items-center justify-between px-4 pt-4 pb-4 sm:p-[26px] lg:p-[40px]">
                  <div className="pointer-events-none flex flex-col items-center justify-center gap-2 sm:gap-4 lg:gap-8">
                    {/* Twin red icon pill + white status tag */}
                    <div className="flex items-center justify-start gap-px">
                      <div className="flex h-[30px] items-center justify-center rounded-full bg-[#ff3333] px-2.5 text-white sm:h-[34px] sm:px-4 lg:h-[42px] lg:px-5">
                        <SignalIcon className="size-4 sm:size-5 lg:size-6" />
                      </div>
                      <div className="flex h-[30px] items-center justify-center rounded-full bg-white px-3 shadow-[0_2px_10px_rgba(0,0,0,0.06)] sm:h-[34px] sm:px-4 lg:h-[42px] lg:px-5">
                        <span className="text-[12px] font-medium tracking-[-0.02em] text-[#0a0a0a]/85 sm:text-[13px] lg:text-[15px]">
                          {it.badge}
                        </span>
                      </div>
                    </div>

                    {/* Centered Heading & Description */}
                    <div className="flex w-full max-w-[540px] flex-col items-center text-center gap-1.5 sm:gap-2.5 lg:gap-4">
                      <h3
                        className={cn(
                          "text-[21px] leading-[1.1] font-medium tracking-[-0.02em] sm:text-[26px] lg:text-[32px]",
                          isDark ? "text-white" : "text-[#0a0a0a]",
                        )}
                      >
                        {it.name}
                      </h3>
                      <p
                        className={cn(
                          "line-clamp-3 text-[13px] leading-[1.42] sm:text-[15px] lg:text-[19px] lg:leading-[1.45]",
                          isDark ? "text-white/75" : "text-[#0a0a0a]/80",
                        )}
                      >
                        {it.description}
                      </p>
                    </div>
                  </div>

                  {/* White pill CTA button with circular icon badge */}
                  <a
                    href={it.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={isActive ? 0 : -1}
                    onPointerEnter={() => setOverButton(true)}
                    onPointerLeave={() => setOverButton(false)}
                    onClick={(e) => {
                      if (!isActive) {
                        e.preventDefault();
                      }
                    }}
                    className={cn(
                      "group/btn relative z-20 inline-flex cursor-pointer items-center justify-center overflow-clip rounded-full bg-white text-[#0a0a0a]/90",
                      "shadow-[0_12px_28px_-6px_rgba(0,0,0,0.22),0_2px_5px_rgba(0,0,0,0.1)]",
                      "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-6px_rgba(0,0,0,0.28)] active:scale-[0.98]",
                    )}
                  >
                    <span className="flex items-center gap-2.5 py-1.5 pr-2 pl-4 sm:gap-3 sm:py-2 sm:pr-2.5 sm:pl-6">
                      <span className="text-[13px] font-medium whitespace-nowrap text-[#0a0a0a]/90 sm:text-[15px] lg:text-[16px]">
                        View Project
                      </span>
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f3f4f6] text-[#0a0a0a] transition-transform duration-300 group-hover/btn:rotate-45 group-hover/btn:scale-105 sm:size-8 lg:size-9">
                        <DiamondClusterIcon className="size-4 sm:size-[18px]" />
                      </span>
                    </span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Floating DRAG badge cursor (92px circle + two 12px flanking dots) */}
        {finePointer &&
          cursorOn &&
          createPortal(
            <div
              ref={cursor}
              id="wfDragBadge"
              aria-hidden
              data-carousel-cursor
              className="pointer-events-none fixed top-0 left-0 z-[9999] flex h-[110px] w-[166px] items-center justify-center gap-4 will-change-[transform,opacity] transition-opacity duration-200 ease-out"
              style={{
                opacity: showCursor ? (overButton ? 0.15 : 1) : 0,
                transform: `translate3d(${cursorPos.current.x.toFixed(1)}px, ${cursorPos.current.y.toFixed(1)}px, 0) translate(-50%, -50%) scale(${dragging ? 0.88 : 1})`,
              }}
            >
              <div className="size-3 shrink-0 rounded-full bg-dark" />
              <div className="flex size-[92px] shrink-0 items-center justify-center rounded-full bg-dark text-[13px] leading-[1.2] font-medium tracking-[0.04em] uppercase text-white shadow-[0_16px_32px_-8px_rgba(0,0,0,0.3)]">
                <div>DRAG</div>
              </div>
              <div className="size-3 shrink-0 rounded-full bg-dark" />
            </div>,
            document.body,
          )}
      </div>

      <div className="relative z-20 mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous project"
          className="flex size-12 cursor-pointer items-center justify-center rounded-full border border-border bg-background text-ink transition-all duration-200 hover:scale-105 hover:bg-bg-soft active:scale-95 disabled:opacity-40"
        >
          <ArrowLeft aria-hidden className="size-5" />
        </button>
        <p
          aria-live="polite"
          className="min-w-[64px] text-center type-small text-muted-foreground tabular-nums"
        >
          {active + 1} / {items.length}
        </p>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next project"
          className="flex size-12 cursor-pointer items-center justify-center rounded-full border border-border bg-background text-ink transition-all duration-200 hover:scale-105 hover:bg-bg-soft active:scale-95 disabled:opacity-40"
        >
          <ArrowRight aria-hidden className="size-5" />
        </button>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* AI calling agent: pinned statement with cards sliding over it        */
/* ------------------------------------------------------------------ */

function UsageUI({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className={cn("rounded-2xl p-5", dark ? "bg-ink text-on-dark" : "bg-bg-soft text-ink")}>
      <p className={cn("type-small", dark ? "text-on-dark-muted" : "text-muted-foreground")}>
        AI call minutes this month
      </p>
      <p className="mt-2 text-[28px] leading-none font-medium">300 included</p>
      <div
        className={cn(
          "mt-4 h-2 overflow-hidden rounded-full",
          dark ? "bg-on-dark/20" : "bg-border",
        )}
      >
        <div className={cn("h-full w-[62%] rounded-full", dark ? "bg-on-dark" : "bg-ink")} />
      </div>
      <p className={cn("mt-3 type-small", dark ? "text-on-dark-muted" : "text-body")}>
        Extra minutes $0.20, only if used
      </p>
    </div>
  );
}

const callCards = [
  {
    title: "A customer calls",
    body: "Day, night or weekend, including after hours.",
    ui: CallCardUI,
  },
  {
    title: "The AI agent answers",
    body: "It greets the caller, answers questions and gives your business information.",
    ui: ChatUI,
  },
  {
    title: "It books the appointment",
    body: "The booking goes straight into your calendar.",
    ui: CalendarUI,
  },
  {
    title: "You get the details",
    body: "Owner alerts by email or WhatsApp, with the caller's name and request.",
    ui: NotificationUI,
  },
  {
    title: "You pay for what you use",
    body: "Growth includes 300 AI call minutes a month. Extra minutes are $0.20, only if used.",
    ui: UsageUI,
  },
];

function CallCard({
  c,
  i,
  className,
}: {
  c: (typeof callCards)[number];
  i: number;
  className?: string;
}) {
  const light = i % 2 === 0;
  const UI = c.ui;
  return (
    <article
      className={cn(
        "flex shrink-0 flex-col rounded-card p-6 text-center md:p-8",
        light ? "bg-background text-ink" : "border border-hairline-dark bg-dark text-on-dark",
        className,
      )}
    >
      <h3
        className={cn(
          "text-[26px] leading-tight font-medium md:text-[32px]",
          light ? "text-ink" : "text-on-dark",
        )}
      >
        {c.title}
      </h3>
      <p className={cn("mt-3 type-body", light ? "text-body" : "text-on-dark-muted")}>{c.body}</p>
      <div className="mt-auto pt-6 text-left">
        <UI tone={light ? "dark" : "light"} />
      </div>
    </article>
  );
}

export function CallingAgent() {
  const desktop = useMediaQuery(PIN_QUERY_WIDE);
  const reduced = usePrefersReducedMotion();
  const pinned = desktop && !reduced;
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  // Reserve the final scroll distance on first render (cards are w-[360px] with gap-6, plus
  // 48px end space) so this section never grows after the pins below have measured. The
  // measurement in the effect still corrects it if card sizes ever change.
  const [dist, setDist] = useState(callCards.length * 360 + (callCards.length - 1) * 24 + 48);

  useEffect(() => {
    if (!pinned) return;
    const measure = () => {
      const t = track.current;
      if (!t) return;
      setDist(t.scrollWidth + 48);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [pinned]);

  useEffect(() => {
    if (!pinned) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const o = outer.current;
      const t = track.current;
      if (!o || !t) return;
      const r = o.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
      // Starts just off the right edge, ends with the last card fully in view.
      t.style.transform = `translate3d(${window.innerWidth - p * dist}px, 0, 0)`;
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pinned, dist]);

  const statement = (
    <div className="container-site text-center">
      <PillBadge tone="mint" icon={<Phone aria-hidden className="size-4" />}>
        24/7 AI Calling Agent
      </PillBadge>
      <h2
        id="calling-title"
        className="mx-auto mt-6 max-w-5xl type-h2 text-on-dark lg:text-[64px] lg:leading-[1.1]"
      >
        Picks up every call, books appointments and sends you the details.
      </h2>
    </div>
  );

  return (
    <section data-theme="dark" aria-labelledby="calling-title" className="bg-dark">
      {pinned ? (
        <div ref={outer} style={{ height: `calc(100vh + ${dist}px)` }} className="relative">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <div className="relative z-0 w-full">{statement}</div>
            <div
              ref={track}
              className="absolute top-[10vh] left-0 z-10 flex gap-6 will-change-transform"
              style={{ transform: "translate3d(100vw,0,0)" }}
            >
              {callCards.map((c, i) => (
                <CallCard key={c.title} c={c} i={i} className="h-[80vh] w-[360px]" />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="py-[72px] md:py-[120px]">
          <Reveal>{statement}</Reveal>
          <div
            role="region"
            aria-label="How the AI calling agent works"
            tabIndex={0}
            className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:px-8 [scrollbar-width:none]"
          >
            {callCards.map((c, i) => (
              <CallCard
                key={c.title}
                c={c}
                i={i}
                className="h-[460px] w-[300px] snap-center md:w-[360px]"
              />
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-center pb-[72px] md:pb-[120px]">
        <PillLink to="/book" variant="primary-inverted" size="lg">
          Book a Free Call
        </PillLink>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Client portal preview                                               */
/* ------------------------------------------------------------------ */

const miniMilestones = [
  { t: "Discovery call", s: "done" },
  { t: "Plan & design", s: "done" },
  { t: "Build & integrate", s: "in_progress" },
  { t: "Launch & support", s: "todo" },
] as const;

export function ClientPortalPreview() {
  return (
    <section aria-labelledby="portal-title" className="section-y bg-bg-soft">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <PillBadge>Client portal</PillBadge>
          <h2 id="portal-title" className="mt-6 type-h2">
            Your project, always in view
          </h2>
          <p className="mt-5 max-w-xl type-body">
            Every client gets a private portal to track progress, download files and pay invoices.
            Try it now with sample data.
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {[
              "Live project progress",
              "All your files in one place",
              "Simple invoices and payments",
            ].map((x) => (
              <li key={x} className="flex items-center gap-3 text-ink">
                <span className="flex size-6 items-center justify-center rounded-full bg-ink text-primary-foreground">
                  <Check aria-hidden className="size-3.5" />
                </span>
                {x}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <PillLink to="/portal/demo">Try the demo</PillLink>
            <PillLink to="/portal" variant="secondary">
              Client login
            </PillLink>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            aria-hidden
            className="animate-[portal-float_6s_ease-in-out_infinite] motion-reduce:animate-none"
          >
            <div className="overflow-hidden rounded-[20px] border border-border bg-background shadow-soft">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
                <span className="ml-3 h-6 flex-1 rounded-full bg-bg-soft" />
              </div>
              <div className="grid gap-3 bg-bg-soft p-3 sm:grid-cols-2 md:p-5">
                <div className="rounded-2xl bg-dark p-5 text-on-dark sm:col-span-2">
                  <p className="type-small text-on-dark-muted">Project progress</p>
                  <p className="mt-3 text-[44px] leading-none font-medium">65%</p>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-on-dark/20">
                    <div className="h-full w-[65%] rounded-full bg-on-dark" />
                  </div>
                </div>
                <div className="rounded-2xl bg-background p-4 sm:col-span-2">
                  <p className="type-small font-medium text-ink">Milestones</p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {miniMilestones.map((m) => {
                      const Icon =
                        m.s === "done" ? CheckCircle2 : m.s === "in_progress" ? CircleDot : Circle;
                      return (
                        <li key={m.t} className="flex items-center gap-2 type-small text-ink">
                          <Icon
                            className={cn(
                              "size-4 shrink-0",
                              m.s === "todo" && "text-muted-foreground",
                            )}
                          />
                          {m.t}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-2xl bg-background p-4 sm:col-span-2">
                  <div>
                    <p className="type-small font-medium text-ink">INC-2026-002</p>
                    <p className="type-small text-muted-foreground">Growth plan monthly fee</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="type-small font-medium text-ink">$149</span>
                    <span className="rounded-full bg-ink px-4 py-1.5 type-small font-medium text-primary-foreground">
                      Pay
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
