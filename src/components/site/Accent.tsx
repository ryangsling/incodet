import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Renders an accent phrase inside headings using Instrument Serif italic,
 * inheriting font size and color from the surrounding heading.
 */
export function Accent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <em
      className={cn(
        "font-accent italic font-normal tracking-normal not-italic:font-normal inline",
        className,
      )}
    >
      {children}
    </em>
  );
}
