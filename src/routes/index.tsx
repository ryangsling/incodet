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

const title = "Incodet | Your Business Never Sleeps";
const description =
  "AI agents that answer calls, book appointments and reply to customers, plus custom software built for your business.";

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
