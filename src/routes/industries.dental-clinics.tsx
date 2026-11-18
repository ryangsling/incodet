import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, industryHead } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/dental-clinics")({
  staticData: { sitemap: true },
  head: () => industryHead("dental-clinics"),
  component: () => <IndustryPage slug="dental-clinics" />,
});
