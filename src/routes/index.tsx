import { faqLd, organizationLd, seoHead, websiteLd } from "@/lib/seo";
import { faq } from "@/content/faq";
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import {
  CaseStudiesPreview,
  FactsRow,
  Faq,
  IndustriesStrip,
  PlansPreview,
  Reviews,
  Services,
  WhoWeAre,
} from "@/components/home/HomeSections";
import {
  CallingAgent,
  ClientPortalPreview,
  FloatingProjects,
  WorkCarousel,
} from "@/components/home/HomeExtras";
import { ScrollProcess } from "@/components/home/ScrollProcess";
import { BookingSection } from "@/components/site/BookingSection";

const title = "Incodet | Custom Booking Websites, CRM & 24/7 AI Voice Agents";
const description =
  "Helping local service businesses in the UK, USA, Canada, and Australia turn missed calls into revenue with high-converting CRM booking websites and 24/7 AI voice calling agents (+44, +1, +61).";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () =>
    seoHead(title, description, "/", {
      scripts: [...organizationLd(), websiteLd(), faqLd(faq)],
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <IndustriesStrip />
      <FloatingProjects />
      <WorkCarousel />
      <WhoWeAre />
      <FactsRow />
      <CallingAgent />
      <Services />
      <ScrollProcess />
      <CaseStudiesPreview />
      <ClientPortalPreview />
      <PlansPreview />
      <Reviews />
      <Faq />
      <BookingSection />
    </>
  );
}
