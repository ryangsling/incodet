import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, industryHead } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/car-wash")({
  staticData: { sitemap: true },
  head: () => industryHead("car-wash"),
  component: () => <IndustryPage slug="car-wash" />,
});
