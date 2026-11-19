import { site } from "@/config/site";
import { cn } from "@/lib/utils";

type Props = {
  tone?: "ink" | "white";
  /** "mark" or "favicon" shows the rounded favicon emblem (home pill bar, assistant, etc.). */
  variant?: "full" | "mark" | "favicon";
  /** Uses the animated wordmark SVG with prefers-reduced-motion static fallback. */
  animated?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const fullSizeCls = {
  sm: "h-6 w-auto",
  md: "h-8 w-auto",
  lg: "h-9 w-auto md:h-11",
} as const;

export function Logo({
  tone = "ink",
  variant = "full",
  animated = false,
  size = "md",
  className,
}: Props) {
  if (site.logoUrl) {
    return (
      <img
        src={site.logoUrl}
        alt={site.name}
        className={cn(variant === "full" ? fullSizeCls[size] : "size-6 w-auto", className)}
      />
    );
  }

  if (variant === "mark" || variant === "favicon") {
    return (
      <img
        src="/brand/favicon.svg"
        alt={site.name}
        width={24}
        height={24}
        decoding="async"
        className={cn(
          "block size-6 shrink-0 rounded-[6px]",
          tone === "white" && "ring-1 ring-white/15",
          className,
        )}
      />
    );
  }

  const staticSrc =
    tone === "white" ? "/brand/incodet-wordmark-white.svg" : "/brand/incodet-wordmark.svg";
  const animatedSrc =
    tone === "white"
      ? "/brand/incodet-wordmark-animated-white.svg"
      : "/brand/incodet-wordmark-animated.svg";

  if (animated) {
    return (
      <picture className="inline-flex shrink-0 items-center">
        <source srcSet={staticSrc} media="(prefers-reduced-motion: reduce)" />
        <img
          src={animatedSrc}
          alt="incodet"
          width={2044}
          height={600}
          decoding="async"
          className={cn("block", fullSizeCls[size === "md" ? "lg" : size], className)}
        />
      </picture>
    );
  }

  return (
    <img
      src={staticSrc}
      alt="incodet"
      width={2044}
      height={600}
      decoding="async"
      className={cn("block", fullSizeCls[size], className)}
    />
  );
}
