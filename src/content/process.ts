export const processSteps = [
  {
    title: "Discovery Call",
    body: "Tell us how calls, quotes, and bookings work today in a free 30-minute chat.",
    icon: "phone",
    chips: ["Free 30 min call", "Goals and pain points", "Rough scope"],
    images: ["project-goals", "customer-questions", "call-notes"],
  },
  {
    title: "Plan & Design",
    body: "We map every screen, call script, and delivery milestone with a fixed quote before building.",
    icon: "layers",
    chips: ["Feature list", "Screen designs", "Fixed quote"],
    images: ["feature-map", "screen-design", "scope-ready"],
  },
  {
    title: "Build & Connect",
    body: "We develop your site, train your AI agents, and link your calendar with weekly demos.",
    icon: "hammer",
    chips: ["Weekly demos", "Booking and AI setup", "Tool connections"],
    images: ["booking-setup", "ai-agent-script", "integrations"],
  },
  {
    title: "Launch & Care",
    body: "We test every flow end to end, push live, and stay on for hosting and ongoing updates.",
    icon: "rocket",
    chips: ["Testing", "Go live", "Ongoing support"],
    images: ["launch-checklist", "go-live", "monthly-report"],
  },
] as const;

export const deliverySteps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description: "We analyze your workflows, bottlenecks, and revenue opportunities.",
  },
  {
    number: "02",
    title: "Automation Blueprint",
    description: "We design a detailed automation architecture aligned with KPIs.",
  },
  {
    number: "03",
    title: "Build & Integration",
    description: "Our engineers implement AI systems and integrate with your existing tools.",
  },
  {
    number: "04",
    title: "Testing & Optimization",
    description: "Performance testing, data validation, refinement.",
  },
  {
    number: "05",
    title: "Deployment & Scaling",
    description: "Launch, monitor, and continuously optimize for growth.",
  },
] as const;
