import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { PillLink } from "./Button";

/** Non-sticky top bar, transparent so it sits over the hero. */
export function TopBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  return (
    <header
      data-theme={isHome ? "dark" : undefined}
      className="absolute inset-x-0 top-0 z-30 transition-colors duration-500"
    >
      <div className="container-site flex h-20 items-center justify-between md:h-24">
        <Link to="/" aria-label="Incodet home" className="inline-flex items-center rounded-md">
          <Logo tone={isHome ? "white" : "ink"} />
        </Link>
        <PillLink to="/book" size="sm" variant={isHome ? "primary-inverted" : "primary"}>
          Book a Free Call
        </PillLink>
      </div>
    </header>
  );
}
