import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BookingCta } from "@/components/home/HomeSections";
import { industryIcon } from "@/components/site/industryIcons";
import { PageHero, seoHead } from "@/components/site/PageHero";
import { Reveal, Section } from "@/components/site/primitives";
import { industries } from "@/content/industries";
import { breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/industries/")({
  staticData: { sitemap: true },
  head: () =>
    seoHead(
      "Industries We Serve | UK, USA, Canada & Australia | Incodet",
      "Custom booking websites with built-in CRM and 24/7 AI voice calling agents (+44 UK, +1 US/CA, +61 AU) built for local service businesses.",
      "/industries",
      {
        scripts: [
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ]),
        ],
      },
    ),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero title="Built for businesses that run on calls and bookings">
        Incodet delivers custom booking websites with built-in CRM and 24/7 AI voice calling agents
        connected to UK (+44), US/Canada (+1), and Australian (+61) phone numbers. Pick your
        industry below to see how local teams capture missed calls around the clock.
      </PageHero>
      <Section>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = industryIcon[ind.icon];
            return (
              <Reveal as="li" key={ind.slug} delay={(i % 3) * 60}>
                <Link
                  to={ind.to}
                  className="group flex h-full flex-col rounded-card border border-border bg-background p-6 transition-shadow duration-300 hover:shadow-soft md:p-8"
                >
                  <Icon aria-hidden className="size-7 text-ink" strokeWidth={1.5} />
                  <h2 className="mt-5 type-h3">{ind.name}</h2>
                  <p className="mt-3 flex-1 type-body">{ind.page.intro}</p>
                  <span className="mt-6 inline-flex items-center gap-2 type-small font-medium text-ink">
                    {ind.page.h1}{" "}
                    <ArrowRight
                      aria-hidden
                      className="size-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </Section>
      <BookingCta />
    </>
  );
}
