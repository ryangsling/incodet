import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { breadcrumbLd, seoHead } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/primitives";
import { ServiceImage, ServicePlaceholder } from "@/components/site/ServicePanels";
import { TempImage } from "@/components/site/TempImage";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services/")({
  staticData: { sitemap: true },
  head: () =>
    seoHead(
      "Services | Websites, CRM & 24/7 AI Voice Agents | Incodet",
      "Custom booking websites with built-in CRM, 24/7 AI voice calling agents (+44 UK, +1 US/CA, +61 AU), apps, automation, and custom software.",
      "/services",
      {
        scripts: [
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ],
      },
    ),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero title="Our services">
        Incodet helps local service businesses across the UK, US, Canada, and Australia turn missed
        calls and outdated sites into booked revenue through custom websites with built-in CRM and
        24/7 AI voice calling agents connected to +44, +1, and +61 lines.
      </PageHero>
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Link
              key={s.id}
              to={s.to}
              data-theme="dark"
              className={cn("group overflow-hidden rounded-card p-6 text-on-dark md:p-8", s.color)}
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-[28px] leading-tight text-on-dark">{s.title}</h2>
                <ArrowUpRight aria-hidden className="size-6 shrink-0" />
              </div>
              <p className="mt-4 type-small-body">{s.description}</p>
              <div className="mt-6 aspect-[8/5] overflow-hidden rounded-[12px]">
                {s.images[0] ? (
                  <ServiceImage
                    slug={s.images[0]}
                    sizes="(min-width: 768px) 532px, calc(100vw - 80px)"
                  />
                ) : s.temp?.hero ? (
                  <TempImage
                    id={s.temp.hero}
                    sizes="(min-width: 768px) 532px, calc(100vw - 80px)"
                  />
                ) : (
                  <ServicePlaceholder className="size-full" />
                )}
              </div>
              <p className="mt-4 type-small">/0{i + 1}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
