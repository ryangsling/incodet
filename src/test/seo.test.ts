import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { caseStudies } from "@/content/caseStudies";
import { getIndustry, industries } from "@/content/industries";
import { services } from "@/content/services";
import { articleLd, organizationLd, serviceLd } from "@/lib/seo";
import { sitemapStaticPaths } from "@/lib/sitemap";
import { routeTree } from "@/routeTree.gen";
import { Route as PortalDemoRoute } from "@/routes/portal.demo";
import { Route as PortalLoginRoute } from "@/routes/portal.index";
import { Route as AdminRoute } from "@/routes/_authenticated/admin";
import { Route as PortalDashRoute } from "@/routes/_authenticated/portal.dashboard";

function wordCount(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

describe("Technical SEO, GEO & Multi-Region Positioning", () => {
  it("gives every service a concise 40-60 word Answer-First paragraph and 3-4 niche FAQs", () => {
    for (const s of services) {
      const wc = wordCount(s.answerFirst);
      expect(wc, `Service ${s.id} answerFirst (${wc} words)`).toBeGreaterThanOrEqual(40);
      expect(wc, `Service ${s.id} answerFirst (${wc} words)`).toBeLessThanOrEqual(60);
      expect(s.faq.length).toBeGreaterThanOrEqual(3);
      expect(s.faq.length).toBeLessThanOrEqual(4);
    }
  });

  it("gives every industry a concise 40-60 word Answer-First paragraph and 3-4 niche FAQs", () => {
    for (const item of industries) {
      const full = getIndustry(item.slug);
      const wc = wordCount(full.page.answerFirst);
      expect(wc, `Industry ${full.slug} answerFirst (${wc} words)`).toBeGreaterThanOrEqual(40);
      expect(wc, `Industry ${full.slug} answerFirst (${wc} words)`).toBeLessThanOrEqual(60);
      expect(full.page.faq.length).toBeGreaterThanOrEqual(3);
      expect(full.page.faq.length).toBeLessThanOrEqual(4);
    }
  });

  it("sets Country areaServed (UK, US, CA, AU) and knowsAbout in organizationLd and serviceLd", () => {
    const orgBlocks = organizationLd().map((s) => JSON.parse(s.children));
    const expectedCountries = ["United Kingdom", "United States", "Canada", "Australia"];
    for (const block of orgBlocks) {
      expect(block.areaServed.map((c: { "@type": string; name: string }) => c.name)).toEqual(
        expectedCountries,
      );
      expect(block.areaServed.every((c: { "@type": string }) => c["@type"] === "Country")).toBe(
        true,
      );
      expect(block.knowsAbout).toContain("24/7 AI Voice Calling Agents");
      expect(block.knowsAbout).toContain("Custom CRM & Online Booking Systems");
    }

    const svc = JSON.parse(serviceLd(services[0]!).children);
    expect(svc.areaServed.map((c: { name: string }) => c.name)).toEqual(expectedCountries);
    expect(svc.knowsAbout).toContain("AI Phone Receptionist");
  });

  it("generates Article + CreativeWork schema in articleLd for case studies", () => {
    const dental = caseStudies.find((c) => c.slug === "northpoint-dental")!;
    const json = JSON.parse(articleLd(dental).children);
    expect(json["@type"]).toEqual(["Article", "CreativeWork"]);
    expect(json.articleBody).toContain(dental.challenge);
    expect(json.articleBody).toContain(dental.solution);
    expect(json.articleBody).toContain("Results:");
  });

  it("keeps /portal/demo indexable while enforcing noindex on private portal & admin routes", async () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const sitemap = sitemapStaticPaths(router).map((p) => p.replace(/\/$/, ""));

    expect(sitemap).toContain("/portal/demo");
    expect(sitemap).not.toContain("/portal");
    expect(sitemap).not.toContain("/portal/dashboard");
    expect(sitemap).not.toContain("/admin");

    const demoHead = await PortalDemoRoute.options.head?.({} as never);
    const demoMeta = (demoHead?.meta ?? []) as Record<string, unknown>[];
    expect(demoMeta.some((m) => m["name"] === "robots")).toBe(false);

    for (const r of [PortalLoginRoute, AdminRoute, PortalDashRoute]) {
      const head = await r.options.head?.({} as never);
      const meta = (head?.meta ?? []) as Record<string, unknown>[];
      expect(meta.some((m) => m["name"] === "robots" && m["content"] === "noindex, nofollow")).toBe(
        true,
      );
    }
  });

  it("allows AI crawlers in robots.txt and exposes comprehensive llms.txt", () => {
    const robots = readFileSync(resolve(process.cwd(), "public/robots.txt"), "utf-8");
    for (const bot of [
      "OAI-SearchBot",
      "ChatGPT-User",
      "ClaudeBot",
      "PerplexityBot",
      "Googlebot",
      "Bingbot",
    ]) {
      expect(robots).toContain(`User-agent: ${bot}`);
    }
    expect(robots).toContain("Allow: /portal/demo");
    expect(robots).toContain("Disallow: /admin");
    expect(robots).toContain("Disallow: /portal/dashboard");

    const llms = readFileSync(resolve(process.cwd(), "public/llms.txt"), "utf-8");
    expect(llms).toContain("+44");
    expect(llms).toContain("+1");
    expect(llms).toContain("+61");
    for (const s of services) {
      expect(llms).toContain(`https://www.incodet.com${s.to}`);
    }
    for (const ind of industries) {
      expect(llms).toContain(`https://www.incodet.com${ind.to}`);
    }
  });
});
