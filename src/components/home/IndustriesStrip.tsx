import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { industryCards, type IndustryCardItem } from "@/content/industryCards";
import { TempImage } from "@/components/site/TempImage";
import { Accent } from "@/components/site/Accent";
import { cn } from "@/lib/utils";

export function IndustriesStrip() {
  const [activeId, setActiveId] = useState<string>("roofing");
  const [mobileOpenId, setMobileOpenId] = useState<string>("roofing");
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  // Reset desktop hover back to default "roofing" when mouse leaves the strip
  const handleStripMouseLeave = () => {
    setActiveId("roofing");
  };

  const handleCardKeyDown = (e: React.KeyboardEvent, index: number, card: IndustryCardItem) => {
    const focusCardAt = (targetIndex: number) => {
      const target = industryCards[targetIndex];
      if (!target) return;
      cardRefs.current[targetIndex]?.focus();
      setActiveId(target.id);
      setMobileOpenId(target.id);
    };

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusCardAt((index + 1) % industryCards.length);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusCardAt((index - 1 + industryCards.length) % industryCards.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusCardAt(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusCardAt(industryCards.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (card.isCustomAction) {
        void navigate({ to: "/booking" });
      } else {
        void navigate({ to: card.href });
      }
    }
  };

  return (
    <section
      aria-labelledby="industries-title"
      className="relative z-10 bg-bg-soft pt-12 pb-16 md:pt-16 md:pb-24"
    >
      <div className="container-site">
        {/* Section Heading - reserved height layout */}
        <div className="mx-auto mb-10 min-h-[120px] max-w-3xl text-center md:mb-12">
          <span className="type-small font-semibold tracking-wider text-muted-foreground uppercase">
            Industries
          </span>
          <h2 id="industries-title" className="type-h2 mt-2 font-medium tracking-tight text-ink">
            Built for businesses <Accent>like yours</Accent>
          </h2>
          <p className="type-body mx-auto mt-3 max-w-[600px] text-muted-foreground">
            High-converting booking websites with built-in CRM and 24/7 AI voice calling agents
            (+44, +1, +61) for local service teams across the UK, US, Canada, and Australia.
          </p>
        </div>

        {/* Desktop Strip: 6 cards, fixed height 440px */}
        <div
          role="tablist"
          aria-label="Industries expanding showcase"
          suppressHydrationWarning
          onMouseLeave={handleStripMouseLeave}
          className="hidden h-[440px] w-full flex-row gap-3 md:flex"
        >
          {industryCards.map((card, idx) => {
            const isActive = activeId === card.id;
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                role="tab"
                tabIndex={0}
                suppressHydrationWarning
                aria-selected={isActive}
                aria-expanded={isActive}
                aria-label={`${card.name}: ${card.benefit}`}
                onMouseEnter={() => setActiveId(card.id)}
                onFocus={() => setActiveId(card.id)}
                onKeyDown={(e) => handleCardKeyDown(e, idx, card)}
                onClick={() => {
                  if (card.isCustomAction) {
                    void navigate({ to: "/booking" });
                  } else {
                    void navigate({ to: card.href });
                  }
                }}
                style={{
                  flexGrow: isActive ? 5 : 1,
                  flexBasis: "0%",
                  flexShrink: 1,
                }}
                className={cn(
                  "group relative min-w-0 cursor-pointer overflow-hidden rounded-[28px] select-none",
                  "transition-[flex-grow] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
                  "focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:outline-none dark:focus-visible:ring-white",
                  isActive ? "bg-dark shadow-lg" : "bg-dark/90",
                )}
              >
                {/* Full-bleed background image */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 size-full transition-opacity duration-500",
                    isActive ? "opacity-100" : "opacity-35",
                  )}
                >
                  <TempImage
                    id={card.imageId}
                    sizes="(min-width: 1024px) 700px, 400px"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Bottom gradient overlay */}
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-0 transition-opacity duration-500",
                    isActive
                      ? "bg-gradient-to-t from-black/95 via-black/55 to-black/20"
                      : "bg-black/55 hover:bg-black/45",
                  )}
                />

                {/* Collapsed Pill Content (Visible when NOT active on desktop) */}
                <div
                  aria-hidden={isActive}
                  className={cn(
                    "pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-end pb-6 transition-opacity duration-300",
                    isActive ? "opacity-0" : "opacity-100 delay-100",
                  )}
                >
                  <span className="mb-4 whitespace-nowrap text-[12px] font-semibold tracking-wider text-white/90 uppercase [writing-mode:vertical-rl] rotate-180">
                    {card.name}
                  </span>
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Icon aria-hidden className="size-4.5 text-ink" strokeWidth={1.75} />
                  </div>
                </div>

                {/* Active Card Content (Fades in just after expanding) */}
                <div
                  aria-hidden={!isActive}
                  className={cn(
                    "absolute inset-0 z-20 flex flex-col justify-end p-7 lg:p-8 text-white transition-all duration-300",
                    isActive
                      ? "pointer-events-auto translate-y-0 opacity-100 delay-150"
                      : "pointer-events-none translate-y-3 opacity-0",
                  )}
                >
                  {/* Icon in white circle */}
                  <div className="mb-4 flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-md">
                    <Icon aria-hidden className="size-5.5 text-ink" strokeWidth={1.75} />
                  </div>

                  {/* Name and Benefit */}
                  <h3 className="text-2xl font-bold tracking-tight text-white lg:text-[28px] lg:leading-tight">
                    {card.name}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm text-white/90 lg:text-base">
                    {card.benefit}
                  </p>

                  {/* Action Link or Button */}
                  <div className="relative z-30 mt-5">
                    {card.isCustomAction ? (
                      <Link
                        to="/booking"
                        onClick={(e) => e.stopPropagation()}
                        tabIndex={isActive ? 0 : -1}
                        className="relative z-30 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                      >
                        {card.actionLabel ?? "Book a Free Call"}
                        <ArrowRight aria-hidden className="size-3.5" />
                      </Link>
                    ) : (
                      <Link
                        to={card.href}
                        onClick={(e) => e.stopPropagation()}
                        tabIndex={isActive ? 0 : -1}
                        className="group/link relative z-30 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-white/80"
                      >
                        See how it works
                        <ArrowRight
                          aria-hidden
                          className="size-4 transition-transform duration-200 group-hover/link:translate-x-1"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Stack: Fixed 660px container height to guarantee zero layout shift */}
        <div
          role="tablist"
          aria-label="Industries list"
          suppressHydrationWarning
          className="flex h-[660px] w-full flex-col gap-3 overflow-hidden md:hidden"
        >
          {industryCards.map((card, idx) => {
            const isExpanded = mobileOpenId === card.id;
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                role="tab"
                tabIndex={0}
                suppressHydrationWarning
                aria-selected={isExpanded}
                aria-expanded={isExpanded}
                aria-label={`${card.name}: ${card.benefit}`}
                onClick={() => setMobileOpenId(card.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    if (isExpanded) {
                      if (card.isCustomAction) {
                        void navigate({ to: "/booking" });
                      } else {
                        void navigate({ to: card.href });
                      }
                    } else {
                      setMobileOpenId(card.id);
                    }
                  }
                }}
                style={{
                  height: isExpanded ? "280px" : "64px",
                }}
                className={cn(
                  "relative w-full shrink-0 cursor-pointer overflow-hidden rounded-[24px] select-none",
                  "transition-[height] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
                  "focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:outline-none",
                  isExpanded ? "bg-dark shadow-md" : "bg-dark/95 border border-white/10",
                )}
              >
                {/* Full-bleed background image */}
                <div
                  className={cn(
                    "absolute inset-0 size-full transition-opacity duration-500",
                    isExpanded ? "opacity-100" : "opacity-25",
                  )}
                >
                  <TempImage id={card.imageId} sizes="100vw" className="size-full object-cover" />
                </div>

                {/* Dark gradient */}
                <div
                  aria-hidden
                  className={cn(
                    "absolute inset-0",
                    isExpanded
                      ? "bg-gradient-to-t from-black/95 via-black/55 to-black/25"
                      : "bg-black/45",
                  )}
                />

                {/* Collapsed state row (64px) */}
                <div
                  aria-hidden={isExpanded}
                  className={cn(
                    "absolute inset-x-0 top-0 flex h-[64px] items-center justify-between px-4 z-10 transition-opacity duration-300",
                    isExpanded ? "pointer-events-none opacity-0" : "opacity-100",
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-sm">
                      <Icon aria-hidden className="size-4.5 text-ink" strokeWidth={1.75} />
                    </div>
                    <span className="truncate text-[15px] font-semibold text-white">
                      {card.name}
                    </span>
                  </div>
                  <ChevronDown aria-hidden className="size-4 shrink-0 text-white/70" />
                </div>

                {/* Expanded state content (280px) */}
                <div
                  aria-hidden={!isExpanded}
                  className={cn(
                    "absolute inset-0 z-20 flex flex-col justify-end p-5 text-white transition-all duration-300",
                    isExpanded
                      ? "translate-y-0 opacity-100 delay-150"
                      : "pointer-events-none translate-y-2 opacity-0",
                  )}
                >
                  <div className="mb-3 flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-sm">
                    <Icon aria-hidden className="size-5 text-ink" strokeWidth={1.75} />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white">{card.name}</h3>
                  <p className="mt-1 text-xs text-white/90 line-clamp-2">{card.benefit}</p>

                  <div className="relative z-30 mt-3.5">
                    {card.isCustomAction ? (
                      <Link
                        to="/booking"
                        className="relative z-30 inline-flex min-h-10 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        {card.actionLabel ?? "Book a Free Call"}
                        <ArrowRight aria-hidden className="size-3" />
                      </Link>
                    ) : (
                      <Link
                        to={card.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-white underline underline-offset-4"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        See how it works
                        <ArrowRight aria-hidden className="size-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all industries text link */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/industries"
            className="group inline-flex items-center gap-1.5 type-small font-medium text-ink transition-colors hover:text-accent-from"
          >
            View all industries
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
