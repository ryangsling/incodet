import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { TopBar } from "@/components/site/TopBar";
import { FloatingNav } from "@/components/site/FloatingNav";
import { Footer } from "@/components/site/Footer";
import { PillLink } from "@/components/site/Button";
import { Toaster } from "@/components/ui/sonner";
import { CookieConsent } from "@/components/site/CookieConsent";
import { supabase } from "@/integrations/supabase/client";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { ChatWidget } from "@/components/site/ChatWidget";
import { IntroPreloader } from "@/components/site/IntroPreloader";

function NotFoundComponent() {
  return (
    <section className="bg-hero-sky flex min-h-[80vh] items-center justify-center px-4 pt-32 pb-[72px]">
      <div className="max-w-xl text-center">
        <p className="type-small font-medium text-muted-foreground">Error 404</p>
        <h1 className="type-h1 mt-3">Page not found</h1>
        <p className="mt-4 type-body">This page does not exist or has moved.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <PillLink to="/">Home</PillLink>
          <PillLink to="/pricing" variant="secondary">
            Pricing
          </PillLink>
          <PillLink to="/booking" variant="secondary">
            Book a Call
          </PillLink>
        </div>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error("[Incodet Route Error]", error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              reset();
              void router.invalidate();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <Link
            to="/"
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  staticData: { sitemap: false },
  head: ({ matches }) => {
    // A 404 matches only the root route (or a match flagged notFound).
    const isNotFound =
      matches.length <= 1 ||
      matches.some(
        (m) => (m as { globalNotFound?: boolean }).globalNotFound || m.status === "notFound",
      );
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
        { name: "theme-color", content: "#111111" },
        ...(isNotFound
          ? [{ title: "Page not found | Incodet" }, { name: "robots", content: "noindex" }]
          : [{ title: "Incodet | Your Business Never Sleeps" }]),
        {
          name: "description",
          content:
            "AI agents that answer calls, book appointments and reply to customers, plus custom software built for your business.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "icon", href: "/brand/favicon.svg", type: "image/svg+xml" },
        { rel: "icon", href: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
        { rel: "apple-touch-icon", href: "/brand/apple-touch-icon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "preload",
          as: "style",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Instrument+Serif:ital@1&family=Inter:wght@600&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Instrument+Serif:ital@1&family=Inter:wght@600&display=swap",
        },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `try{if(location.pathname!=='/deck'&&!sessionStorage.getItem('incodet_intro_seen')&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('intro-pending');}catch(e){}`,
          }}
        />
        <HeadContent />
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var _f=window.fetch;Object.defineProperty(window,'fetch',{configurable:true,enumerable:true,get:function(){return _f;},set:function(v){_f=v;}});}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isAdmin = pathname.startsWith("/admin");
  const isPortalApp = pathname.startsWith("/portal/");
  const isDeck = pathname === "/deck";

  useEffect(() => {
    if (isDeck) {
      document.documentElement.classList.remove("intro-pending");
    }
  }, [isDeck]);

  useEffect(() => {
    try {
      const { data } = supabase.auth.onAuthStateChange((event) => {
        if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
        void router.invalidate();
        if (event !== "SIGNED_OUT") void queryClient.invalidateQueries();
      });
      return () => data?.subscription?.unsubscribe();
    } catch (err) {
      console.error("[RootComponent] Auth listener failed:", err);
      return undefined;
    }
  }, [router, queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      {!isDeck && <IntroPreloader />}
      {!isDeck && <SmoothScroll />}
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      {!isAdmin && !isDeck && <TopBar />}
      <main id="main" suppressHydrationWarning>
        <Outlet />
      </main>
      {!isAdmin && !isDeck && <Footer />}
      {!isAdmin && !isPortalApp && !isDeck && (
        <>
          <FloatingNav />
          <ChatWidget />
        </>
      )}
      <Toaster position="top-center" />
      {!isAdmin && !isDeck && <CookieConsent />}
    </QueryClientProvider>
  );
}
