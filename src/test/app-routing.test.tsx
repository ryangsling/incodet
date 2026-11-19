import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/caseStudies";
import { pageLinks } from "@/config/site";
import { sitemapStaticPaths } from "@/lib/sitemap";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches all service pages and includes them in the sitemap inventory", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const sitemap = sitemapStaticPaths(router).map((path) => path.replace(/\/$/, ""));
    for (const path of ["/services", ...services.map((s) => s.to)]) {
      const match = router.matchRoutes(path).at(-1);
      expect(match?.routeId).not.toBe(rootRouteId);
      expect(match).toBeDefined();
      expect(sitemap).toContain(path);
    }
  });

  it("matches all core, booking, industry, and case study routes cleanly without 404 fallback", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const sitemap = sitemapStaticPaths(router).map((path) => path.replace(/\/$/, ""));

    expect(sitemap).toContain("/booking");
    expect(sitemap).not.toContain("/book");
    expect(pageLinks.some((l) => l.to === "/booking")).toBe(true);

    const targets = [
      "/",
      "/booking",
      "/book",
      "/pricing",
      "/custom-software",
      "/case-studies",
      "/industries",
      ...industries.map((i) => i.to),
      ...caseStudies.map((c) => `/case-studies/${c.slug}`),
    ];

    for (const path of targets) {
      const match = router.matchRoutes(path).at(-1);
      expect(match?.routeId, `Route ${path} matched root 404`).not.toBe(rootRouteId);
      expect(match, `Route ${path} did not match`).toBeDefined();
    }
  });
});
