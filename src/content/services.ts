import type { FaqItem } from "./faq";
import type { TempImageId } from "./tempImages";

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  /** Concise 40-60 word Answer-First paragraph placed directly under the H1 for AI extraction & clarity. */
  answerFirst: string;
  color: string;
  to: string;
  heroTitle: string;
  tags: string[];
  features: { title: string; body: string }[];
  faq: FaqItem[];
  images: string[];
  ui?: "call" | "chat";
  related: string[];
  comparison?: boolean;
  /**
   * Temporary images (docs/temp-images.md) for slots that have no real work yet:
   * strip fills the empty homepage tiles in order, hero the page and /services image,
   * before/after the comparison slider. Remove once real images exist.
   */
  temp?: { strip?: TempImageId[]; hero?: TempImageId; before?: TempImageId; after?: TempImageId };
};

const features = (rows: [string, string][]) => rows.map(([title, body]) => ({ title, body }));
const questions = (rows: [string, string][]): FaqItem[] =>
  rows.map(([question, answer]) => ({ question, answer }));

export const services: Service[] = [
  {
    id: "web-development",
    temp: { before: "webdev-bloom-before", after: "webdev-bloom-after" },
    title: "Websites & Web Development",
    short: "Custom websites with built-in CRM & online booking",
    description:
      "High-converting custom websites with built-in CRM, online booking, and embedded 24/7 AI voice and chat for local service businesses in the UK, US, Canada, and Australia.",
    answerFirst:
      "Incodet designs and builds high-converting custom websites with built-in CRM and live online booking for local service businesses across the UK, US, Canada, and Australia. Delivered in 1 to 2 weeks, every site replaces outdated pages with instant calendar scheduling, faster load speeds, and steady inbound job enquiries.",
    color: "bg-service-web",
    to: "/services/web-development",
    heroTitle: "Custom Websites & Online Booking Built for Local Services",
    tags: [
      "Custom design",
      "Built-in CRM",
      "Online booking",
      "Local SEO",
      "Timezone-aware",
      "Hosting & care",
    ],
    features: features([
      ["Custom design", "A fast site tailored to your brand, never a generic template."],
      ["Built-in CRM & booking", "Customers pick a service and time synced live to your calendar."],
      [
        "Service and area pages",
        "Structured local pages across UK, US, Canadian, and Australian cities.",
      ],
      ["Technical SEO & GEO", "Schema markup, metadata, and AI-ready copy set up from day one."],
      ["Embedded AI ready", "Connects seamlessly with our 24/7 AI voice agent and website chat."],
      ["Care plan", "Managed hosting, SSL, updates, and fixes for $19 a month."],
    ]),
    faq: questions([
      [
        "How long does a website take?",
        "Starter websites launch in 1 to 2 weeks, while Growth builds with AI voice and CRM automation go live in 2 to 3 weeks with no lock-in contracts.",
      ],
      [
        "How does the website sync bookings into my CRM and calendar?",
        "Every appointment or quote form writes straight into the website's built-in CRM and syncs two-way with your calendar using timezone-aware scheduling, sending instant email and WhatsApp alerts.",
      ],
      [
        "Can the 24/7 AI voice agent be added right inside my new website?",
        "Yes. We can embed our 24/7 AI Voice Calling Agent directly on your website and connect it to your existing UK (+44), US/Canada (+1), or Australian (+61) business number.",
      ],
      [
        "Do websites meet regional privacy rules in the UK, US, Canada, and Australia?",
        "Yes. Forms, cookie consent, and CRM data handling are configured cleanly for UK GDPR, US TCPA consent notices, Canadian PIPEDA, and Australian Privacy Principles (APPs).",
      ],
    ]),
    images: [
      "western-cars-brighton",
      "northpoint-dental",
      "summit-ridge-roofing",
      "gm-taxis-lewes",
      "barkers-executive",
      "humandata-labs",
      "a1-airport-cars",
    ],
    related: [
      "western-cars-brighton",
      "northpoint-dental",
      "summit-ridge-roofing",
      "gm-taxis-lewes",
      "barkers-executive",
    ],
    comparison: true,
  },
  {
    id: "ai-calling-agent",
    temp: { strip: ["calling-phone-desk"] },
    title: "24/7 AI Calling Agent",
    short: "Never miss a call on web or local numbers",
    description:
      "A 24/7 AI Voice Calling Agent embedded into your website and connected to your local phone number (+44 UK, +1 US/Canada, +61 Australia) with timezone-aware booking.",
    answerFirst:
      "Incodet builds 24/7 AI Voice Calling Agents embedded directly into your website and connected to your local business phone number (+44 UK, +1 US/Canada, +61 Australia). Every incoming call is answered in under a second with timezone-aware calendar booking, qualification, and instant owner alerts so missed calls become revenue.",
    color: "bg-service-calling",
    to: "/services/ai-calling-agent",
    heroTitle: "24/7 AI Voice Calling Agent for Local Business Numbers",
    tags: [
      "+44 / +1 / +61 numbers",
      "Website voice widget",
      "Timezone-aware booking",
      "CRM sync",
      "Owner alerts",
      "Call summaries",
    ],
    features: features([
      [
        "Local number or website embed",
        "Answers +44, +1, and +61 lines plus web voice calls 24/7.",
      ],
      [
        "Timezone-aware booking",
        "Checks open slots in your local timezone and books callers immediately.",
      ],
      [
        "Direct CRM & calendar sync",
        "Logs caller details, transcripts, and job type straight into your CRM.",
      ],
      [
        "Trained on your services",
        "Handles pricing ranges, opening hours, and service areas accurately.",
      ],
      [
        "Instant owner alerts",
        "Sends concise call summaries and urgent flags via email or WhatsApp.",
      ],
      ["Pay for what you use", "300 minutes a month on Growth, extra minutes $0.20 only if used."],
    ]),
    faq: questions([
      [
        "How does the AI calling agent connect to my UK (+44), US/Canada (+1), or Australian (+61) phone number?",
        "You can forward unanswered or after-hours calls from your existing local number, connect a dedicated +44, +1, or +61 number, and embed a one-click web voice button right on your site.",
      ],
      [
        "How do bookings sync with my CRM and calendar across timezones?",
        "During each call, the agent checks real-time availability in your exact local timezone, confirms the slot with the caller, writes the lead into your built-in CRM, and emails or WhatsApps you immediately.",
      ],
      [
        "What is the ROI of stopping missed calls, and is it GDPR, TCPA, and APP compliant?",
        "Because most callers hang up on voicemail, capturing even one or two missed jobs a week typically pays for the plan many times over. Call handling follows UK GDPR, US TCPA, Canadian PIPEDA, and Australian Privacy Principles transparency notices.",
      ],
      [
        "How long does setup take?",
        "The Growth plan, with the calling agent and website CRM integration, goes live in 2 to 3 weeks.",
      ],
    ]),
    images: ["summit-ridge-roofing", "bloom-studio"],
    ui: "call",
    related: ["summit-ridge-roofing", "northpoint-dental", "bloom-studio"],
  },
  {
    id: "ai-chatbot",
    temp: { strip: ["chatbot-bloom-assistant"] },
    title: "AI Website Chatbot",
    short: "Answers visitors and books jobs 24/7",
    description:
      "An AI website chatbot trained on your services, prices, and policies that answers questions, captures leads into your CRM, and books appointments around the clock.",
    answerFirst:
      "Incodet deploys custom AI Website Chatbots trained directly on your services, pricing, policies, and live calendar availability for service businesses in the UK, US, Canada, and Australia. Embedded on every page, visitors get instant answers around the clock, submit qualified lead details, and book open appointments without ringing reception.",
    color: "bg-service-chat",
    to: "/services/ai-chatbot",
    heroTitle: "AI Website Chatbot Built for Instant Lead Capture & Booking",
    tags: [
      "Website chat",
      "Built-in CRM capture",
      "Timezone-aware booking",
      "Trained on your business",
      "Owner alerts",
      "Multi-page",
    ],
    features: features([
      ["Instant answers", "Replies in seconds using your exact pricing, service areas, and FAQs."],
      ["Captures CRM leads", "Saves visitor names, phone numbers, and job notes automatically."],
      ["Books open slots", "Guides ready visitors straight into timezone-aware calendar slots."],
      ["Zero generic fluff", "Strictly grounded in your business knowledge with human handoff."],
      ["Owner alerts", "New website leads arrive instantly via email or WhatsApp."],
      ["Pairs with AI voice", "Runs alongside our 24/7 AI voice calling widget on every device."],
    ]),
    faq: questions([
      [
        "How do chat bookings sync into our CRM and calendar?",
        "Whenever a visitor requests an appointment or quote in chat, details flow straight into your built-in CRM and calendar link with automatic email or WhatsApp confirmation.",
      ],
      [
        "Can I embed this chatbot alongside the 24/7 AI calling agent?",
        "Yes. Both share the same approved business knowledge base so callers on your +44, +1, or +61 line and website chat visitors receive identical pricing and availability.",
      ],
      [
        "What happens if a visitor asks something outside its training?",
        "The assistant clearly states it is not sure and captures the visitor's contact information or offers a direct call or WhatsApp handoff so your team never loses the enquiry.",
      ],
      [
        "How does chat handle privacy across the UK, USA, Canada, and Australia?",
        "Conversations store only session-necessary details and explicit enquiry submissions aligned with UK GDPR, US TCPA, Canadian PIPEDA, and Australian Privacy Principles standards.",
      ],
    ]),
    images: ["northpoint-dental", "bloom-studio"],
    ui: "chat",
    related: ["northpoint-dental", "summit-ridge-roofing", "bloom-studio"],
  },
  {
    id: "app-development",
    temp: {
      strip: ["app-wireframe-paper", "app-wireframe-blue"],
      hero: "app-wireframe-paper-wide",
      before: "appdev-humandata-mobile-before",
      after: "appdev-humandata-mobile-after",
    },
    title: "Mobile App Development",
    short: "iOS and Android apps synced with your CRM",
    description:
      "Cross-platform iOS and Android apps for bookings, loyalty, ordering, and field teams, synced directly with a central web CRM and admin portal.",
    answerFirst:
      "Incodet plans, designs, and engineers cross-platform iOS and Android mobile apps for growing service companies, clinics, and multi-site operators across the UK, US, Canada, and Australia. Paired with a centralized web CRM admin panel and automated booking notifications, teams retain repeat customers and manage daily schedules in one place.",
    color: "bg-service-app",
    to: "/services/app-development",
    heroTitle: "Mobile App Development for iOS, Android & Service Teams",
    tags: [
      "iOS & Android",
      "Unified CRM",
      "Timezone-aware",
      "Admin portal",
      "Push alerts",
      "Store launch",
    ],
    features: features([
      ["Product scoping", "Clear screen maps, user roles, and delivery milestones before build."],
      ["Cross-platform UI", "Clean, thumb-friendly interfaces tailored for iOS and Android."],
      [
        "Shared CRM backend",
        "Customer bookings, notes, and status sync live with your web portal.",
      ],
      ["Admin portal", "Manage staff calendars, enquiries, and invoices from desktop."],
      [
        "Push notifications",
        "Automated reminders reduce missed appointments across local timezones.",
      ],
      ["Store submission", "Full App Store and Google Play compliance and release handling."],
    ]),
    faq: questions([
      [
        "How long does an app take?",
        "Most apps take 4 to 8 weeks, on our Scale plan, using a single shared iOS and Android codebase.",
      ],
      [
        "Does the mobile app connect to our website CRM and AI calling agent?",
        "Yes. Bookings taken via your website, mobile app, or +44, +1, and +61 AI voice line can write into one unified CRM database and calendar.",
      ],
      [
        "How are push notifications and regional privacy handled?",
        "Push permissions and customer data flows follow App Store, Google Play, UK GDPR, US TCPA, PIPEDA, and Australian Privacy Principles requirements.",
      ],
    ]),
    images: [],
    related: [],
    comparison: true,
  },
  {
    id: "ui-ux-product-design",
    temp: {
      strip: ["uiux-humandata-mobile"],
      before: "uiux-bloom-mobile-before",
      after: "uiux-bloom-mobile-after",
    },
    title: "UI/UX & Product Design",
    short: "Conversion-led interfaces from wireframe to build",
    description:
      "UX discovery, conversion-focused user flows, and developer-ready Figma systems crafted to turn website and software traffic into booked enquiries.",
    answerFirst:
      "Incodet delivers UX discovery, conversion-focused wireframes, interactive prototypes, and developer-ready Figma component systems for service businesses and SaaS founders in the UK, US, Canada, and Australia. By removing friction from booking, quoting, and intake screens, every visitor reaches a confirmed appointment faster with fewer abandoned sessions.",
    color: "bg-service-design",
    to: "/services/ui-ux-product-design",
    heroTitle: "UI/UX & Product Design Built to Convert Visitors into Bookings",
    tags: [
      "UX research",
      "Booking flows",
      "Wireframes",
      "UI design",
      "Prototypes",
      "Design systems",
    ],
    features: features([
      [
        "Research & audits",
        "Identify where visitors drop off before booking or requesting a quote.",
      ],
      ["Frictionless flows", "Shortest path from landing page to confirmed calendar slot."],
      ["Wireframes", "Clear information hierarchy agreed before visual polish begins."],
      ["UI design", "Distinctive interfaces aligned with your local brand positioning."],
      ["Clickable prototypes", "Test key booking and portal screens before engineering starts."],
      ["Figma systems", "Reusable components ready for fast production handoff."],
    ]),
    faq: questions([
      [
        "Can you redesign an outdated local service site to increase bookings?",
        "Yes. We audit why visitors leave, rebuild mobile-first quoting and scheduling flows, and test interactive prototypes before launching the live build.",
      ],
      [
        "Do you design interfaces that include AI voice widgets and CRM dashboards?",
        "Yes. We design cohesive patterns across public booking sites, embedded 24/7 AI chat/voice drawers, and private client portals.",
      ],
      [
        "Can we hire Incodet strictly for UI/UX design in Figma?",
        "Yes. You receive organized, componentized Figma files and complete developer handoff specifications.",
      ],
    ]),
    images: ["western-cars-redesign-concept", "bloom-studio", "brighton-taxi"],
    related: ["western-cars-redesign-concept", "bloom-studio", "brighton-taxi"],
    comparison: true,
  },
  {
    id: "software",
    temp: { strip: ["software-portal-demo", "software-brhex-floorplan"] },
    title: "SaaS & Custom Software",
    short: "Bespoke CRMs, portals & booking engines",
    description:
      "Custom CRMs, online booking systems, client portals, and SaaS platforms engineered for multi-location and growing businesses in the UK, US, Canada, and Australia.",
    answerFirst:
      "Incodet engineers bespoke CRMs, online booking systems, client portals, and vertical SaaS platforms for established businesses across the UK, US, Canada, and Australia. Delivered in 4 to 8 weeks, each custom platform replaces scattered spreadsheets and disconnected tools with automated scheduling, billing, and real-time operational visibility.",
    color: "bg-service-software",
    to: "/custom-software",
    heroTitle: "Custom CRMs, Client Portals & SaaS Built Around Your Workflow",
    tags: [
      "Custom CRMs",
      "Client portals",
      "Booking engines",
      "SaaS platforms",
      "AI integrations",
      "Dashboards",
    ],
    features: features([
      ["Bespoke CRMs", "Track every enquiry, missed call recovery, quote, and job in one place."],
      [
        "Client portals",
        "Give clients live milestones, deliverables, and online invoice payments.",
      ],
      [
        "Timezone-aware booking",
        "Multi-branch scheduling across UK, North American, and Australian zones.",
      ],
      [
        "AI voice & data pipelines",
        "Route incoming call transcripts and summaries straight to job records.",
      ],
      [
        "Operations dashboards",
        "Real-time visibility into lead sources, bookings, and staff capacity.",
      ],
      [
        "API integrations",
        "Clean sync with Stripe, accounting, calendars, and internal databases.",
      ],
    ]),
    faq: questions([
      [
        "How does custom CRM software connect to your 24/7 AI voice calling agent?",
        "Calls answered on your +44, +1, or +61 numbers or website voice widget write transcripts, caller details, and timezone-aware bookings straight into your custom CRM.",
      ],
      [
        "How long does a Scale custom software project take?",
        "Scale platforms typically launch in 4 to 8 weeks with weekly demos, documented architecture, and no lock-in contracts.",
      ],
      [
        "Can you build multi-region systems meeting GDPR, PIPEDA, TCPA, and APPs?",
        "Yes. Role-based access, audit logs, data residency choices, and consent controls are built in to match UK GDPR, US TCPA, Canadian PIPEDA, and Australian Privacy Principles.",
      ],
      [
        "Can I try an example of Incodet's client portal?",
        "Yes. Visit our live interactive Client Portal Demo at /portal/demo to explore real milestones, deliverables, and invoice tracking.",
      ],
    ]),
    images: ["brhex-studio", "western-cars-content-hub"],
    related: ["brhex-studio", "western-cars-content-hub"],
  },
  {
    id: "business-automation",
    title: "Business Automation",
    short: "Automated CRM sync, alerts & follow-ups",
    description:
      "Automated reminders, quote follow-ups, WhatsApp and email owner alerts, and live CRM calendar sync connecting your website and AI receptionists.",
    answerFirst:
      "Incodet builds automated customer follow-ups, booking reminders, CRM syncing, and owner alert workflows for busy local service teams across the UK, US, Canada, and Australia. By connecting your website, AI voice agent, calendar, and inbox, businesses eliminate manual data entry, reduce appointment no-shows, and respond to leads automatically.",
    color: "bg-service-automation",
    to: "/services/business-automation",
    heroTitle: "Business Automation Connecting Calls, Calendars & Your CRM",
    tags: ["Booking reminders", "CRM sync", "Follow-ups", "Owner alerts", "Reports", "Workflows"],
    features: features([
      ["Appointment reminders", "Automated SMS and email confirmations cut costly no-shows."],
      ["Missed-call text back", "Instant follow-ups capture leads before they ring a competitor."],
      ["Owner notifications", "Real-time WhatsApp and email alerts for every booking and quote."],
      ["Two-way tool sync", "Calendars, CRM pipelines, invoices, and sheets stay aligned."],
      [
        "Weekly performance summaries",
        "Clear reporting on calls answered, leads saved, and jobs booked.",
      ],
      ["Custom workflows", "Eliminate repetitive copying between forms, calls, and calendars."],
    ]),
    faq: questions([
      [
        "How do automations link the AI calling agent and website CRM together?",
        "Every phone call (+44, +1, +61) and web booking automatically triggers CRM record creation, timezone-accurate calendar invites, customer confirmations, and owner alerts.",
      ],
      [
        "Do I have to replace all of my current software tools?",
        "Usually no. We automate and connect the calendars, inboxes, and CRMs you already use whenever APIs or webhooks are supported.",
      ],
      [
        "Are automated SMS and email follow-ups compliant across regions?",
        "Yes. Opt-in checkboxes, quiet hours by recipient timezone, and unsubscribe links follow UK GDPR, US TCPA, PIPEDA, and Australian Privacy Principles rules.",
      ],
    ]),
    images: ["western-cars-content-hub"],
    related: ["western-cars-content-hub"],
  },
  {
    id: "social-media-growth",
    temp: {
      strip: ["social-studio-lights", "social-planning-flatlay"],
      hero: "social-studio-lights-wide",
    },
    title: "Social Media Growth",
    short: "Local campaigns that drive booked enquiries",
    description:
      "Content planning, design, short-form videos, and paid campaigns that send local buyers straight to your booking website and 24/7 AI receptionist.",
    answerFirst:
      "Incodet creates structured social content plans, branded visuals, short-form videos, and local paid ad campaigns for service businesses across the UK, US, Canada, and Australia. Every campaign drives qualified local traffic straight into your custom booking website and 24/7 AI receptionist, turning attention into measurable booked jobs.",
    color: "bg-service-social",
    to: "/services/social-media-growth",
    heroTitle: "Social Media Growth Built to Drive Local Bookings",
    tags: [
      "Content planning",
      "Post design",
      "Short videos",
      "Local paid ads",
      "Facebook & Instagram",
      "TikTok",
    ],
    features: features([
      ["Content plan", "Monthly calendars tailored to your local seasons and peak demand."],
      ["Post design", "Branded visuals and carousels engineered to build local trust."],
      ["Short videos", "Reels and TikToks showcasing real finished jobs and customer proof."],
      ["Local paid ads", "Geo-targeted ads linking straight into your online booking funnel."],
      ["Profile optimization", "Bios, booking links, and local call numbers ready to convert."],
      ["Monthly review", "Clear reporting focused on clicks, calls, and booked appointments."],
    ]),
    faq: questions([
      [
        "Where do social ads send local visitors to maximize return on ad spend?",
        "Ads send clicks directly to fast booking landing pages backed by your built-in CRM, AI chat, and 24/7 AI calling agent so enquiries convert immediately.",
      ],
      [
        "Can you target specific cities across the UK, US, Canada, or Australia?",
        "Yes. Paid campaigns geo-target exact service postcodes, suburbs, or cities around your branches.",
      ],
      [
        "Is ad spend included?",
        "No. Ad spend is paid directly to the platform; our fee covers strategy, creative production, and campaign management.",
      ],
    ]),
    images: [],
    related: [],
  },
];

export function getService(id: string) {
  const service = services.find((s) => s.id === id);
  if (!service) throw new Error("Unknown service");
  return service;
}
