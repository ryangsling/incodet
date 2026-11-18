import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, industryHead } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/car-rentals")({
  staticData: { sitemap: true },
  head: () => industryHead("car-rentals"),
  component: () => <IndustryPage slug="car-rentals" />,
});
