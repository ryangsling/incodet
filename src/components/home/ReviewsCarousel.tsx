import { ArrowLeft, ArrowRight, Pause, Play, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { testimonials, type Testimonial } from "@/content/testimonials";
import { usePrefersReducedMotion } from "@/hooks/use-motion";
import { cn } from "@/lib/utils";

export function ReviewsCarousel({
  customTestimonials = testimonials,
}: {
  customTestimonials?: Testimonial[];
}) {
  const items = customTestimonials.length ? customTestimonials : testimonials;
  const count = items.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchDelta, setTouchDelta] = useState(0);
  const reduced = usePrefersReducedMotion();
  const autoplayTimerRef = useRef<number | null>(null);

  const prevIndex = (activeIndex - 1 + count) % count;
  const nextIndex = (activeIndex + 1) % count;

  const goTo = useCallback(
    (idx: number) => {
      setActiveIndex((idx + count) % count);
    },
    [count],
  );

  const next = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const prev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  // Autoplay cycle: gentle 6.5s interval, pauses when user hovers, touches, or focuses
  useEffect(() => {
    if (reduced || isPaused || count <= 1) return;

    autoplayTimerRef.current = window.setTimeout(() => {
      next();
    }, 6500);

    return () => {
      if (autoplayTimerRef.current) window.clearTimeout(autoplayTimerRef.current);
    };
  }, [activeIndex, isPaused, next, reduced, count]);

  // Keyboard navigation
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchDelta(0);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const current = e.targetTouches[0].clientX;
    setTouchDelta(current - touchStart);
  };

  const handleTouchEnd = () => {
    if (touchStart !== null) {
      if (touchDelta < -45) {
        next();
      } else if (touchDelta > 45) {
        prev();
      }
    }
    setTouchStart(null);
    setTouchDelta(0);
    setIsPaused(false);
  };

  const active = items[activeIndex];
  const prevItem = items[prevIndex];
  const nextItem = items[nextIndex];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="relative mx-auto w-full max-w-[1280px] focus-visible:outline-none select-none"
    >
      {/* Ambient background aura glow matching video atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center -z-10 overflow-hidden"
      >
        <div className="h-[360px] w-[700px] rounded-full bg-gradient-to-r from-accent-from/15 via-panel-violet/20 to-panel-blue/15 blur-3xl opacity-75 motion-reduce:hidden" />
      </div>

      {/* Main Showcase Stage */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative flex items-center justify-center min-h-[460px] md:min-h-[480px] px-2 sm:px-4"
      >
        {/* Left Flanking Card (Desktop Only) */}
        <button
          type="button"
          onClick={prev}
          aria-label={`View previous testimonial: ${prevItem.name}`}
          className={cn(
            "group/flank hidden xl:flex absolute left-0 z-10 h-[380px] w-[140px] shrink-0 cursor-pointer items-end overflow-hidden rounded-[24px] border border-border/70 p-4 shadow-sm",
            "opacity-45 hover:opacity-90 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] active:scale-[0.98]",
            "bg-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink",
          )}
        >
          <img
            src={prevItem.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover/flank:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20"
          />
          <div className="relative z-10 flex w-full flex-col items-center gap-2">
            <span className="whitespace-nowrap text-[12px] font-semibold tracking-wider text-white uppercase [writing-mode:vertical-rl] rotate-180 drop-shadow-sm">
              {prevItem.badge}
            </span>
            <div className="flex size-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition-transform duration-300 group-hover/flank:-translate-x-1">
              <ArrowLeft aria-hidden className="size-3.5" />
            </div>
          </div>
        </button>

        {/* Center Active Presentation Unit (Dual Cards on Desktop, Stacked on Mobile) */}
        <div className="relative z-20 flex w-full max-w-[840px] flex-col overflow-hidden rounded-[28px] border border-border/80 bg-background shadow-soft transition-all duration-500 md:flex-row md:items-stretch md:min-h-[440px]">
          {/* Left Panel: Big Metric & Authentic Quote */}
          <div
            key={`quote-${active.id}`}
            className="flex flex-1 flex-col justify-between p-7 sm:p-9 lg:p-10 animate-in fade-in duration-500"
          >
            <div>
              {/* Star Rating & Verified Pill */}
              <div className="flex items-center justify-between gap-3">
                <div
                  role="img"
                  aria-label={`${active.rating} out of 5 stars`}
                  className="flex items-center gap-1"
                >
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star
                      key={s}
                      aria-hidden
                      className={cn(
                        "size-4.5",
                        s < active.rating ? "fill-amber-400 text-amber-400" : "text-border",
                      )}
                    />
                  ))}
                </div>
                <span className="inline-flex items-center rounded-full bg-bg-soft px-3 py-1 text-xs font-semibold text-muted-foreground">
                  Verified Client
                </span>
              </div>

              {/* Bold Quantitative Metric Headline */}
              <h3 className="mt-5 text-[24px] sm:text-[28px] lg:text-[32px] font-bold tracking-tight text-ink leading-[1.18] text-balance">
                {active.stat}
              </h3>

              {/* Client Quote */}
              <blockquote className="mt-4 text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed text-body font-normal">
                "{active.quote}"
              </blockquote>
            </div>

            {/* Author Attribution Lockup */}
            <div className="mt-8 pt-5 border-t border-border/70 flex items-center justify-between">
              <div>
                <p className="text-[16px] font-semibold text-ink leading-tight">{active.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  {active.role} · {active.business}
                </p>
              </div>
              <span className="type-small font-medium text-muted-foreground hidden sm:inline-block">
                {active.city}
              </span>
            </div>
          </div>

          {/* Right Panel: Client Lifestyle / Action Portrait Card */}
          <div
            key={`photo-${active.id}`}
            className="relative h-[280px] sm:h-[320px] md:h-auto md:w-[320px] lg:w-[360px] shrink-0 overflow-hidden bg-dark animate-in fade-in duration-500"
          >
            <img
              src={active.image}
              alt={active.alt}
              loading="eager"
              decoding="async"
              className="pointer-events-none absolute inset-0 size-full object-cover transition-transform duration-700 ease-out"
            />
            {/* Measured bottom contrast scrim */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
            />

            {/* Client Company / Brand Pill Overlay (matches the video design) */}
            <div className="absolute bottom-5 right-5 lg:bottom-6 lg:right-6 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/55 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white shadow-md">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                {active.badge}
              </span>
            </div>
          </div>
        </div>

        {/* Right Flanking Card (Desktop Only) */}
        <button
          type="button"
          onClick={next}
          aria-label={`View next testimonial: ${nextItem.name}`}
          className={cn(
            "group/flank hidden xl:flex absolute right-0 z-10 h-[380px] w-[140px] shrink-0 cursor-pointer items-end overflow-hidden rounded-[24px] border border-border/70 p-4 shadow-sm",
            "opacity-45 hover:opacity-90 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] active:scale-[0.98]",
            "bg-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink",
          )}
        >
          <img
            src={nextItem.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover/flank:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20"
          />
          <div className="relative z-10 flex w-full flex-col items-center gap-2">
            <span className="whitespace-nowrap text-[12px] font-semibold tracking-wider text-white uppercase [writing-mode:vertical-rl] rotate-180 drop-shadow-sm">
              {nextItem.badge}
            </span>
            <div className="flex size-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition-transform duration-300 group-hover/flank:translate-x-1">
              <ArrowRight aria-hidden className="size-3.5" />
            </div>
          </div>
        </button>
      </div>

      {/* Bottom Controls: Arrows, Smooth Elliptical Dots & Autoplay state */}
      <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4">
        {/* Previous Button */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex size-11 items-center justify-center rounded-full border border-border bg-background text-ink shadow-xs transition-all duration-200 hover:bg-bg-soft hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
        >
          <ArrowLeft aria-hidden className="size-4.5" />
        </button>

        {/* Dynamic Elliptical Pagination Dots */}
        <div
          role="tablist"
          aria-label="Testimonial slides"
          className="flex items-center gap-2 px-2"
        >
          {items.map((item, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`Go to slide ${idx + 1}: ${item.name}`}
                onClick={() => goTo(idx)}
                className={cn(
                  "cursor-pointer rounded-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink",
                  isSelected
                    ? "w-8 h-2.5 bg-ink shadow-sm"
                    : "size-2.5 bg-border hover:bg-muted-foreground",
                )}
              />
            );
          })}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="flex size-11 items-center justify-center rounded-full border border-border bg-background text-ink shadow-xs transition-all duration-200 hover:bg-bg-soft hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
        >
          <ArrowRight aria-hidden className="size-4.5" />
        </button>

        {/* Autoplay Pause / Play toggle */}
        <button
          type="button"
          onClick={() => setIsPaused((p) => !p)}
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          className="ml-2 flex size-8 items-center justify-center rounded-full text-muted-foreground hover:text-ink transition-colors focus-visible:outline-none"
        >
          {isPaused ? (
            <Play aria-hidden className="size-3.5 fill-current" />
          ) : (
            <Pause aria-hidden className="size-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}
