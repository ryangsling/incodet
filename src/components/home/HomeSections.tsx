import {
  ArrowRight,
  Hammer,
  Layers,
  MessageCircle,
  Phone,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { faq } from "@/content/faq";
import { plansNote } from "@/content/plans";
import { PlanCards } from "@/components/site/PlanCards";
import { ReviewsCarousel } from "./ReviewsCarousel";
import { ServicePanels } from "@/components/site/ServicePanels";
import { PillLink, pillButton } from "@/components/site/Button";
import { Accordion, SegmentedTabs } from "@/components/site/Interactive";
import { Logo } from "@/components/site/Logo";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { StatementWave } from "./StatementWave";
import { FeaturedStudies } from "@/components/site/FeaturedStudies";
import { Accent } from "@/components/site/Accent";
import {
  AutomationUI,
  BookingSiteUI,
  BuildUI,
  CalendarUI,
  CallCardUI,
  ChatUI,
  DashboardUI,
  DiscoveryUI,
  LaunchUI,
  PlanUI,
} from "./MiniUI";

function ExternalPill({
  href,
  children,
  variant,
}: {
  href: string;
  children: ReactNode;
  variant: "primary" | "secondary" | "primary-inverted" | "secondary-inverted";
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={pillButton({ variant })}>
      {children}
    </a>
  );
}

/* 2. Industries strip */
export { IndustriesStrip } from "./IndustriesStrip";

/* 3. Who we are */
export function WhoWeAre() {
  return <StatementWave />;
}

/* 4. Facts row */
const facts = [
  { big: "24/7", label: "AI answers your calls" },
  { big: "1 to 2 weeks", label: "Starter websites launch" },
  { big: "From $499", label: "One-time setup" },
  { big: "300 minutes", label: "AI calls included on Growth" },
];

export function FactsRow() {
  return (
    <section aria-label="Key facts" className="bg-background pb-[72px] md:pb-[120px]">
      <div className="container-site">
        <ul className="grid grid-cols-2 border-t border-l border-border md:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal
              as="li"
              key={f.big}
              delay={i * 80}
              className="border-r border-b border-border px-4 py-8 text-center md:px-6 md:py-12"
            >
              <p className="text-[26px] leading-tight font-medium tracking-tight text-ink md:text-[36px]">
                {f.big}
              </p>
              <p className="mt-2 type-small text-muted-foreground">{f.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 6. Services */
export function Services() {
  return (
    <section aria-labelledby="services-title" className="bg-background pt-[72px] md:pt-[120px]">
      <div className="container-site mb-10 md:mb-14">
        <Reveal>
          <h2 id="services-title" className="text-center type-h2">
            What we build
          </h2>
        </Reveal>
      </div>
      <ServicePanels />
    </section>
  );
}

/* 7. Process */
const steps: { title: string; body: string; icon: LucideIcon; ui: () => ReactNode }[] = [
  {
    title: "Discovery Call",
    body: "Tell us how calls, quotes, and bookings work today in a free 30-minute chat.",
    icon: Phone,
    ui: DiscoveryUI,
  },
  {
    title: "Plan & Design",
    body: "We map every screen, call script, and delivery milestone with a fixed quote before building.",
    icon: Layers,
    ui: PlanUI,
  },
  {
    title: "Build & Connect",
    body: "We develop your site, train your AI agents, and link your calendar with weekly demos.",
    icon: Hammer,
    ui: BuildUI,
  },
  {
    title: "Launch & Care",
    body: "We test every flow end to end, push live, and stay on for hosting and ongoing updates.",
    icon: Rocket,
    ui: LaunchUI,
  },
];

export function Process({
  title = "How we deliver",
  intro = (
    <>
      Four clear steps from first chat to <Accent>going live</Accent>.
    </>
  ),
}: {
  title?: string;
  intro?: ReactNode;
}) {
  return (
    <Section>
      <SectionHeading title={title}>{intro}</SectionHeading>
      <Reveal className="mt-12 rounded-card bg-[image:var(--gradient-accent-soft)] p-3 pt-6 md:p-8">
        <SegmentedTabs
          tabs={steps.map((s) => {
            const Icon = s.icon;
            const UI = s.ui;
            return {
              label: s.title,
              content: (
                <div className="grid gap-8 rounded-card bg-background p-6 md:grid-cols-2 md:items-center md:p-12">
                  <div>
                    <span className="flex size-12 items-center justify-center rounded-full bg-bg-soft">
                      <Icon aria-hidden className="size-6 text-ink" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-6 type-h3">{s.title}</h3>
                    <p className="mt-3 type-body">{s.body}</p>
                    <div className="mt-8">
                      <PillLink to="/book">Book a Free Call</PillLink>
                    </div>
                  </div>
                  <div className="rounded-card-sm bg-bg-soft p-6 md:p-10">
                    <UI />
                  </div>
                </div>
              ),
            };
          })}
        />
      </Reveal>
    </Section>
  );
}

/* 8. Case studies */
export function CaseStudiesPreview() {
  return <FeaturedStudies />;
}

/* 9. Plans */
export function PlansPreview() {
  return (
    <Section>
      <Reveal className="text-center">
        <h2 className="type-h2">
          Pay for <Accent>what you use</Accent>. Nothing more.
        </h2>
        <p className="mt-4 type-small text-muted-foreground">All prices in USD.</p>
      </Reveal>
      <div className="mt-12">
        <PlanCards />
      </div>
      <div className="mt-10 flex flex-col items-center gap-5 text-center">
        <p className="max-w-2xl type-body">{plansNote}</p>
        <PillLink to="/pricing" variant="secondary">
          See full pricing <ArrowRight aria-hidden className="size-4" />
        </PillLink>
      </div>
    </Section>
  );
}

/* 10. Reviews: video-style smooth customer stories */
export function Reviews() {
  return (
    <Section theme="soft" aria-labelledby="testimonials-heading">
      <div className="mb-10 text-center md:mb-14">
        <span className="inline-flex items-center rounded-full border border-border bg-background px-3.5 py-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase shadow-xs">
          Testimonials
        </span>
        <h2
          id="testimonials-heading"
          className="type-h2 mt-3 text-center font-medium tracking-tight text-ink md:text-[44px] lg:text-[48px]"
        >
          Real customers. Real results.
        </h2>
        <p className="type-body mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          See how local service businesses save hours, eliminate missed calls, and scale with
          Incodet.
        </p>
      </div>
      <ReviewsCarousel />
    </Section>
  );
}

/* 11. FAQ */
export function Faq() {
  if (!faq.length) return null;
  return (
    <Section theme="soft">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal className="flex flex-col gap-6">
          <h2 className="type-h2">Questions, answered</h2>
          <p className="type-body">
            Can't find what you need? Book a free call or message us on WhatsApp.
          </p>
          <div className="rounded-card border border-border bg-background p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Logo variant="mark" />
              <p className="text-[18px] font-medium text-ink">Book a free call</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <PillLink to="/book">Book a Free Call</PillLink>
              <ExternalPill href={site.whatsapp} variant="secondary">
                <MessageCircle aria-hidden className="size-4" /> WhatsApp
              </ExternalPill>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <Accordion items={faq.map((f) => ({ question: f.question, answer: f.answer }))} />
        </Reveal>
      </div>
    </Section>
  );
}

/* 12. Booking CTA */
export function BookingCta({ service }: { service?: string } = {}) {
  return (
    <section aria-labelledby="cta-title" className="bg-background pt-[72px] md:pt-[120px]">
      <div className="container-site">
        <Reveal>
          <div
            data-theme="dark"
            className="rounded-card bg-dark px-6 py-16 text-center md:px-12 md:py-24"
          >
            <h2 id="cta-title" className="type-h2 text-on-dark">
              Book a free call
            </h2>
            <p className="mx-auto mt-5 max-w-xl type-body text-on-dark-muted">
              Tell us what your business needs in a quick 30-minute chat—clear plan, transparent
              pricing, no pressure.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <PillLink
                to="/book"
                search={service ? { service } : {}}
                variant="primary-inverted"
                size="lg"
              >
                Book a Free Call
              </PillLink>
              <ExternalPill href={site.whatsapp} variant="secondary-inverted">
                <MessageCircle aria-hidden className="size-4" /> Message on WhatsApp
              </ExternalPill>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
