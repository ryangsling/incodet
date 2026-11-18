import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, industryHead } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/roofing")({
  staticData: { sitemap: true },
  head: () => industryHead("roofing"),
  component: () => <IndustryPage slug="roofing" />,
});
