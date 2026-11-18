import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, industryHead } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/medical-clinics")({
  staticData: { sitemap: true },
  head: () => industryHead("medical-clinics"),
  component: () => <IndustryPage slug="medical-clinics" />,
});
