import { site } from "@/config/site";
import type { FaqItem } from "@/content/faq";

export const ogImage = {
  webp: `${site.siteUrl}/og/incodet-og.webp`,
  png: `${site.siteUrl}/og/incodet-og.png`,
  alt: "Incodet: High-Converting Websites, Built-In CRM & 24/7 AI Voice Calling Agents",
};

export const TARGET_COUNTRIES = [
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "Canada" },
  { "@type": "Country", name: "Australia" },
] as const;

export const KNOWS_ABOUT = [
  "24/7 AI Voice Calling Agents",
  "AI Phone Receptionist",
  "Local Business Web Development",
  "Custom CRM & Online Booking Systems",
  "Business Process Automation",
] as const;

type Script = { type: string; children: string };

export const jsonLd = (data: unknown): Script => ({
  type: "application/ld+json",
  children: JSON.stringify(data),
});

/** Per-page head: title, description, canonical, Open Graph and Twitter tags. */
export function seoHead(
  title: string,
  description: string,
  path: string,
  opts: { type?: string; scripts?: Script[]; noindex?: boolean } = {},
) {
  const url = `${site.siteUrl}${path === "/" ? "" : path}` || site.siteUrl;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(opts.noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: site.name },
      { property: "og:image", content: ogImage.webp },
      { property: "og:image:type", content: "image/webp" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: ogImage.alt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage.webp },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: opts.scripts ?? [],
  };
}

export const faqLd = (items: FaqItem[]) =>
  jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  });

export const breadcrumbLd = (items: { name: string; path: string }[]) =>
  jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.siteUrl}${it.path === "/" ? "" : it.path}` || site.siteUrl,
    })),
  });

export const websiteLd = () =>
  jsonLd({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.siteUrl}/#website`,
    name: site.name,
    url: site.siteUrl,
    publisher: { "@id": `${site.siteUrl}/#organization` },
  });

export const serviceLd = (service: { title: string; description: string; to: string }) =>
  jsonLd({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${site.siteUrl}${service.to}`,
    provider: { "@id": `${site.siteUrl}/#organization` },
    areaServed: TARGET_COUNTRIES,
    knowsAbout: KNOWS_ABOUT,
  });

export const articleLd = (study: {
  name: string;
  slug: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  highlights: string[];
  outcomes?: string[];
  period?: string;
  image: { src: string };
}) => {
  const url = `${site.siteUrl}/case-studies/${study.slug}`;
  const summaryParts = [
    `Problem: ${study.challenge}`,
    `Solution: ${study.solution}`,
    ...(study.outcomes?.length ? [`Results: ${study.outcomes.join("; ")}.`] : []),
  ];
  return jsonLd({
    "@context": "https://schema.org",
    "@type": ["Article", "CreativeWork"],
    "@id": `${url}#article`,
    headline: `${study.name} — ${study.category}`,
    name: study.name,
    description: study.description,
    articleBody: summaryParts.join(" "),
    about: study.category,
    keywords: [study.category, ...study.highlights, ...(study.outcomes ?? [])].join(", "),
    image: study.image.src.startsWith("http")
      ? study.image.src
      : `${site.siteUrl}${study.image.src}`,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@id": `${site.siteUrl}/#organization` },
    publisher: { "@id": `${site.siteUrl}/#organization` },
  });
};

export function organizationLd() {
  const sameAs = Object.values(site.socials).filter(Boolean);
  const address = {
    "@type": "PostalAddress",
    streetAddress: "Camberwarra Drive",
    addressLocality: "Craigie",
    addressRegion: "WA",
    postalCode: "6025",
    addressCountry: "AU",
  };
  const base = {
    name: site.name,
    url: site.siteUrl,
    email: site.email,
    telephone: "+61451526342",
    address,
    areaServed: TARGET_COUNTRIES,
    knowsAbout: KNOWS_ABOUT,
    ...(sameAs.length ? { sameAs } : {}),
  };
  return [
    jsonLd({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${site.siteUrl}/#organization`,
      logo: `${site.siteUrl}/apple-touch-icon.png`,
      ...base,
    }),
    jsonLd({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${site.siteUrl}/#localbusiness`,
      image: ogImage.webp,
      ...base,
    }),
  ];
}
