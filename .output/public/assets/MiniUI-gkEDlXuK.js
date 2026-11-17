import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as visible } from "./visible-V0DJ41aX.js";
import { n as cn } from "./dist-Cm5lzMt_.js";
import { t as createLucideIcon } from "./createLucideIcon-D_v-FLWL.js";
import { t as Check } from "./check-BKX-Ic2_.js";
import { t as Mail } from "./mail-pJJ8N1PV.js";
import { t as MessageCircle } from "./message-circle-tzE19y1F.js";
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Bot = createLucideIcon("bot", [
	["path", {
		d: "M12 8V4H8",
		key: "hb8ula"
	}],
	["rect", {
		width: "16",
		height: "12",
		x: "4",
		y: "8",
		rx: "2",
		key: "enze0r"
	}],
	["path", {
		d: "M2 14h2",
		key: "vft8re"
	}],
	["path", {
		d: "M20 14h2",
		key: "4cs60a"
	}],
	["path", {
		d: "M15 13v2",
		key: "1xurst"
	}],
	["path", {
		d: "M9 13v2",
		key: "rq6x2g"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CalendarCheck = createLucideIcon("calendar-check", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}],
	["path", {
		d: "m9 16 2 2 4-4",
		key: "19s6y9"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var PhoneIncoming = createLucideIcon("phone-incoming", [
	["path", {
		d: "M16 2v6h6",
		key: "1mfrl5"
	}],
	["path", {
		d: "m22 2-6 6",
		key: "6f0sa0"
	}],
	["path", {
		d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
		key: "9njp5v"
	}]
]);
var faq = visible([
	{
		question: "What does each plan include?",
		answer: "Starter is a website with online booking and booking emails. Growth adds an AI website chatbot, a 24/7 AI calling agent and owner alerts by email and WhatsApp. Scale is a multi-page or SaaS-level platform with AI automation, client dashboards and custom integrations."
	},
	{
		question: "How does the 24/7 AI calling agent work?",
		answer: "It answers every call, including after hours. It gives callers your business information, books appointments and sends you the details by email or WhatsApp."
	},
	{
		question: "What does pay for what you use mean?",
		answer: "You only pay for the features you choose. Growth includes 300 AI call minutes a month, and extra minutes cost $0.20 each, billed only if you use them. Every feature is also available on its own."
	},
	{
		question: "How long does it take?",
		answer: "Starter takes 1 to 2 weeks, Growth 2 to 3 weeks and Scale 4 to 8 weeks."
	},
	{
		question: "What happens after launch?",
		answer: "We test everything, go live and stay on to support and improve it. Starter includes optional care for $19 a month, which covers hosting and updates."
	},
	{
		question: "Is there a contract?",
		answer: "No. There are no lock-in contracts."
	},
	{
		question: "How can I pay?",
		answer: "We accept Payoneer, Wise, PayPal and bank transfer."
	},
	{
		question: "Which countries do you work with?",
		answer: "We work with businesses in the USA, UK, Canada, Australia and Europe."
	},
	{
		question: "Who owns the website?",
		answer: "You do. Once paid, your website and its content are yours."
	},
	{
		question: "Which languages does the AI agent speak?",
		answer: "",
		todo: true
	}
], ["question", "answer"]);
/** FAQ items picked by question, in the given order. */
var faqFor = (questions) => questions.map((q) => faq.find((f) => f.question === q)).filter((f) => Boolean(f));
//#endregion
//#region src/content/services.ts
var features = (rows) => rows.map(([title, body]) => ({
	title,
	body
}));
var questions = (rows) => rows.map(([question, answer]) => ({
	question,
	answer
}));
var services = [
	{
		id: "web-development",
		temp: {
			before: "webdev-bloom-before",
			after: "webdev-bloom-after"
		},
		title: "Websites & Web Development",
		short: "Booking-ready websites built to convert",
		description: "Mobile-first websites built around instant online scheduling, transparent service breakdowns, and local search foundations from day one.",
		color: "bg-service-web",
		to: "/services/web-development",
		heroTitle: "Websites & Web Development for Local Businesses",
		tags: [
			"Website design",
			"Online booking",
			"Mobile-first",
			"Local SEO",
			"Speed",
			"Hosting & care"
		],
		features: features([
			["Custom design", "A site that looks like your brand, not a template."],
			["Online booking", "Customers book online without calling."],
			["Service and area pages", "Clear pages for every service and town you cover."],
			["Search basics", "Titles, structured data and speed set up from day one."],
			["Easy updates", "Change text and photos without a developer."],
			["Care plan", "Hosting, updates and fixes for $19 a month."]
		]),
		faq: questions([
			["How long does a website take?", "Starter websites launch in 1 to 2 weeks."],
			["Can I update the site myself?", "Yes. You can change text and photos yourself, or we do it for you on the care plan."],
			["Can you redesign my current site?", "Yes. We keep what works, fix what does not and move your content across."]
		]),
		images: [
			"western-cars-brighton",
			"gm-taxis-lewes",
			"barkers-executive",
			"humandata-labs",
			"a1-airport-cars"
		],
		related: [
			"western-cars-brighton",
			"gm-taxis-lewes",
			"barkers-executive"
		],
		comparison: true
	},
	{
		id: "ai-calling-agent",
		temp: { strip: ["calling-phone-desk"] },
		title: "24/7 AI Calling Agent",
		short: "Never miss a call again",
		description: "An AI receptionist that answers every call, books appointments, answers common questions and sends you the details, day and night.",
		color: "bg-service-calling",
		to: "/services/ai-calling-agent",
		heroTitle: "24/7 AI Calling Agent for Your Business",
		tags: [
			"24/7 answering",
			"Appointment booking",
			"Owner alerts",
			"Custom voice",
			"Call summaries",
			"Calendar sync"
		],
		features: features([
			["Answers every call", "Day, night and weekends, with no hold music."],
			["Books appointments", "Straight into your calendar, with the caller's details."],
			["Answers common questions", "Prices, hours, areas and services, in your words."],
			["Sends you the details", "A summary by email or WhatsApp after every call."],
			["Flags urgent calls", "Urgent messages reach you straight away."],
			["Pay for what you use", "300 minutes a month on Growth, extra minutes $0.20 only if used."]
		]),
		faq: questions([
			["Will callers know it is an AI?", "Yes. The agent introduces itself as a virtual assistant for your business."],
			["What happens with an urgent call?", "The agent takes a message marked urgent and alerts you straight away."],
			["How long does setup take?", "The Growth plan, with the calling agent, goes live in 2 to 3 weeks."]
		]),
		images: ["bloom-studio"],
		ui: "call",
		related: ["bloom-studio"]
	},
	{
		id: "ai-chatbot",
		temp: { strip: ["chatbot-bloom-assistant"] },
		title: "AI Website Chatbot",
		short: "Answers on your site, around the clock",
		description: "A chatbot trained on your services, prices and hours that replies instantly, captures leads and books customers straight from your website.",
		color: "bg-service-chat",
		to: "/services/ai-chatbot",
		heroTitle: "AI Website Chatbot for Your Business",
		tags: [
			"Website chat",
			"Lead capture",
			"Bookings",
			"Trained on your business",
			"Owner alerts",
			"Multi-page"
		],
		features: features([
			["Instant answers", "Replies in seconds to questions about your services."],
			["Captures leads", "Collects names, numbers and what the customer needs."],
			["Books customers", "Sends visitors straight to an open booking slot."],
			["Trained on your business", "Uses your prices, hours and policies, nothing generic."],
			["Owner alerts", "You get every new lead by email or WhatsApp."],
			["Works on every page", "One small widget on your whole site."]
		]),
		faq: questions([
			["Can it handle questions it does not know?", "It says it is not sure and takes the customer's details so you can reply."],
			["Can I buy the chatbot on its own?", "Yes. Every feature is also available on its own."],
			["Which websites does it work with?", "Any website. It is one small code snippet."]
		]),
		images: ["bloom-studio"],
		ui: "chat",
		related: ["bloom-studio"]
	},
	{
		id: "app-development",
		temp: {
			strip: ["app-wireframe-paper", "app-wireframe-blue"],
			hero: "app-wireframe-paper-wide",
			before: "appdev-humandata-mobile-before",
			after: "appdev-humandata-mobile-after"
		},
		title: "Mobile App Development",
		short: "Cross-platform mobile apps built to last",
		description: "We plan, design and build mobile apps for bookings, loyalty, ordering and internal teams, with a clean admin panel behind them.",
		color: "bg-service-app",
		to: "/services/app-development",
		heroTitle: "Mobile App Development for iOS and Android",
		tags: [
			"iOS",
			"Android",
			"Cross-platform",
			"Admin panel",
			"Push notifications",
			"App store launch"
		],
		features: features([
			["Product scoping", "We lock down core screens, user roles, and milestones before development starts."],
			["Cross-platform UI", "Clean, thumb-friendly interfaces tailored for both iOS and Android devices."],
			["Build", "One codebase for both platforms where it fits."],
			["Admin panel", "Manage users, bookings and content from the web."],
			["Notifications", "Reminders and updates that bring users back."],
			["Store launch", "We handle App Store and Google Play submission."]
		]),
		faq: questions([
			["How long does an app take?", "Most apps take 4 to 8 weeks, on our Scale plan."],
			["iPhone, Android or both?", "Usually both from one codebase, so you pay for one build."],
			["Do you maintain the app after launch?", "Yes, through a monthly care plan."]
		]),
		images: [],
		related: [],
		comparison: true
	},
	{
		id: "ui-ux-product-design",
		temp: {
			strip: ["uiux-humandata-mobile"],
			before: "uiux-bloom-mobile-before",
			after: "uiux-bloom-mobile-after"
		},
		title: "UI/UX & Product Design",
		short: "Clearer interfaces from wireframe to handoff",
		description: "End-to-end UX discovery, interactive user flows, and production-ready Figma component libraries built for clean implementation.",
		color: "bg-service-design",
		to: "/services/ui-ux-product-design",
		heroTitle: "UI/UX & Product Design for Websites and Apps",
		tags: [
			"UX research",
			"User flows",
			"Wireframes",
			"UI design",
			"Prototypes",
			"Design systems"
		],
		features: features([
			["Research", "We learn who your users are and what they need."],
			["User flows", "The shortest path to every important action."],
			["Wireframes", "Layouts agreed before any colour or detail."],
			["UI design", "Polished screens that match your brand."],
			["Prototypes", "Clickable designs you can test before building."],
			["Design systems", "Reusable components so every new screen stays consistent."]
		]),
		faq: questions([
			["Can you only design, without building?", "Yes. You get ready-to-build design files and a handover."],
			["Which tools do you design in?", "Figma, with files shared with your team."],
			["Can you improve an existing product?", "Yes. We review it, find what slows users down and redesign those parts first."]
		]),
		images: [
			"western-cars-redesign-concept",
			"bloom-studio",
			"brighton-taxi"
		],
		related: [
			"western-cars-redesign-concept",
			"bloom-studio",
			"brighton-taxi"
		],
		comparison: true
	},
	{
		id: "software",
		temp: { strip: ["software-portal-demo", "software-brhex-floorplan"] },
		title: "SaaS & Custom Software",
		short: "Custom software shaped around your workflow",
		description: "Tailored CRMs, client portals, scheduling systems, and full SaaS tools engineered for long-term reliability.",
		color: "bg-service-software",
		to: "/custom-software",
		heroTitle: "SaaS & Custom Software Built Around Your Business",
		tags: [
			"CRMs",
			"Dashboards",
			"Booking systems",
			"Client portals",
			"SaaS platforms",
			"Integrations"
		],
		features: features([
			["CRMs", "Keep every customer, job and conversation in one place."],
			["Dashboards", "See bookings, calls and sales at a glance."],
			["Booking systems", "Online booking that fits your services, staff and hours."],
			["Client portals", "Give clients one place for progress, files and invoices."],
			["Education platforms", "Courses, students and progress tracking in one system."],
			["Medical and clinic platforms", "Appointments, patient records and reminders built for clinics."]
		]),
		faq: faqFor([
			"What does each plan include?",
			"How long does it take?",
			"What happens after launch?"
		]),
		images: ["brhex-studio", "western-cars-content-hub"],
		related: ["brhex-studio", "western-cars-content-hub"]
	},
	{
		id: "business-automation",
		title: "Business Automation",
		short: "Busywork that runs on its own",
		description: "Reminders, follow-ups, notifications and data syncing between your tools, so your team spends time on customers, not admin.",
		color: "bg-service-automation",
		to: "/services/business-automation",
		heroTitle: "Business Automation for Your Everyday Work",
		tags: [
			"Reminders",
			"Follow-ups",
			"Notifications",
			"Tool syncing",
			"Reports",
			"Workflows"
		],
		features: features([
			["Booking reminders", "Fewer no-shows with automatic texts and emails."],
			["Follow-ups", "Quote and review requests sent at the right time."],
			["Owner notifications", "Know about every booking, lead and payment."],
			["Tool syncing", "Your calendar, CRM and sheets stay in sync."],
			["Simple reports", "A weekly summary of what came in."],
			["Custom workflows", "Repetitive steps turned into one click or none."]
		]),
		faq: questions([
			["Which tools can you connect?", "Most tools with an API or Zapier-style connection. We check yours on the discovery call."],
			["Do I need new software?", "Usually not. We automate the tools you already use."],
			["How is it priced?", "As a one-time setup plus a small monthly fee, quoted after the discovery call."]
		]),
		images: ["western-cars-content-hub"],
		related: ["western-cars-content-hub"]
	},
	{
		id: "social-media-growth",
		temp: {
			strip: ["social-studio-lights", "social-planning-flatlay"],
			hero: "social-studio-lights-wide"
		},
		title: "Social Media Growth",
		short: "More reach, more enquiries",
		description: "Content planning, design and paid campaigns on Facebook, Instagram and TikTok that send local customers to your website and booking page.",
		color: "bg-service-social",
		to: "/services/social-media-growth",
		heroTitle: "Social Media Growth for Local Businesses",
		tags: [
			"Content planning",
			"Post design",
			"Short videos",
			"Paid ads",
			"Facebook & Instagram",
			"TikTok"
		],
		features: features([
			["Content plan", "A monthly plan built around your services and seasons."],
			["Post design", "On-brand posts and stories, ready to publish."],
			["Short videos", "Simple reels and TikToks that show your work."],
			["Paid campaigns", "Local ads that send people to your booking page."],
			["Profile setup", "Bios, links and highlights that turn visits into enquiries."],
			["Monthly review", "What worked, what did not and what we change next."]
		]),
		faq: questions([
			["Do you post for us?", "Yes, we can schedule and post, or hand you ready-made content."],
			["Is ad spend included?", "No. Ad spend is paid directly to the platform; our fee covers planning, design and management."],
			["Which platforms?", "Facebook, Instagram and TikTok."]
		]),
		images: [],
		related: []
	}
];
function getService(id) {
	const service = services.find((s) => s.id === id);
	if (!service) throw new Error("Unknown service");
	return service;
}
//#endregion
//#region src/content/caseStudies.ts
var img = (slug) => `/images/case-studies/${slug}.webp`;
var mock = (slug) => `/images/mockups/${slug}.webp`;
var mockupSm = (src) => src.replace(/\.webp$/, "-sm.webp");
var categoryFor = {
	Website: "Website",
	Platform: "Platform",
	Tool: "Internal tool",
	Concept: "Concept",
	Demo: "Demo project"
};
var make = (c) => ({
	...c,
	category: c.category ?? categoryFor[c.type],
	year: c.end.slice(0, 4),
	description: c.description ?? c.solution,
	tint: c.tint ?? `bg-tint-${c.slug}`,
	image: {
		src: img(c.slug),
		alt: c.imageAlt ?? `Homepage of the ${c.name} website`,
		ready: true
	},
	...c.noMockup ? {} : { mockup: mock(c.slug) }
});
var all = [
	make({
		slug: "western-cars-brighton",
		name: "Western Cars Brighton",
		type: "Website",
		group: "western-cars",
		category: "Taxi & private hire website",
		period: "Feb to Mar 2026",
		end: "2026-03",
		featured: 1,
		liveUrl: "https://westerncarsbrighton.co.uk/",
		challenge: "Brighton & Hove is Western Cars' busiest market. Airport transfers, events and local journeys all competed for space, and booking was not obvious on a phone.",
		solution: "A fast, modern site with a booking button on every screen, dedicated pages for airport transfers, corporate travel, events and accessible travel, and local pages for search.",
		highlights: [
			"Online booking on every page",
			"Airport, corporate and event hire pages",
			"Wheelchair accessible vehicles shown up front"
		],
		tint: "bg-tint-western"
	}),
	make({
		slug: "western-cars-littlehampton",
		name: "Western Cars Littlehampton",
		type: "Website",
		group: "western-cars",
		category: "Taxi & private hire website",
		period: "Mar to Apr 2026",
		end: "2026-04",
		liveUrl: "https://www.westerncarslittlehampton.co.uk/",
		challenge: "Littlehampton customers book many airport runs and often need accessible cars or minibuses, but those options were hard to find.",
		solution: "A clean local site with fixed-fare airport transfers, corporate travel, wheelchair accessible cars and minibuses up front, plus WhatsApp and online booking.",
		highlights: [
			"Fixed-fare airport transfers",
			"Minibus and accessible vehicle pages",
			"WhatsApp and online booking"
		],
		tint: "bg-tint-littlehampton"
	}),
	make({
		slug: "western-cars-haywards-heath",
		name: "Western Cars Haywards Heath",
		type: "Website",
		group: "western-cars",
		category: "Taxi & private hire website",
		period: "Apr 2026",
		end: "2026-04",
		liveUrl: "https://www.westerncars-haywardsheath.co.uk/",
		challenge: "Haywards Heath runs 24 hours a day with many station and airport runs, so pre-booking had to be quick at any hour.",
		solution: "A clear site with opening hours, set airport rates, business accounts and FAQs, and booking online, in the app or by phone.",
		highlights: [
			"24 hour booking options",
			"Set rates to major airports",
			"Business accounts page"
		]
	}),
	make({
		slug: "western-cars-pulborough",
		name: "Western Cars Pulborough",
		type: "Website",
		group: "western-cars",
		category: "Taxi & private hire website",
		period: "May 2026",
		end: "2026-05",
		liveUrl: "https://www.westerncarspulborough.co.uk/",
		challenge: "Pulborough serves villages across West Sussex, so customers needed to see quickly that their area is covered.",
		solution: "A local site with service areas, fleet details, airport transfers and one-tap calling and WhatsApp.",
		highlights: [
			"Service area pages",
			"Fleet information",
			"One-tap call and WhatsApp"
		]
	}),
	make({
		slug: "western-cars-content-hub",
		name: "Western Cars Content Hub",
		type: "Platform",
		group: "western-cars",
		category: "AI content platform",
		period: "Nov to Dec 2025",
		end: "2025-12",
		featured: 5,
		liveUrl: "https://content.westerncars.com/",
		challenge: "Every location site needed fresh local articles for search, but writing for each town by hand was not realistic.",
		solution: "A central AI blog platform that prepares one quality-checked article a day and serves it to every location site through a read-only content API.",
		highlights: [
			"One article a day across all locations",
			"Read-only content API for each site",
			"RSS feed per location"
		],
		imageAlt: "Homepage of the Western Cars Content Hub platform"
	}),
	make({
		slug: "brighton-taxi",
		name: "Brighton Taxi by Western Cars",
		type: "Website",
		group: "western-cars",
		category: "Taxi & private hire website",
		period: "Oct to Nov 2025",
		end: "2025-11",
		liveUrl: "https://brightontaxi.westerncarsbrighton.co.uk/",
		challenge: "Western Cars wanted a second Brighton site with a bold, premium look to reach people searching for taxis and airport transfers.",
		solution: "A dark, premium site with fleet, airport transfer, blog and booking pages built for local search.",
		highlights: [
			"Premium dark design",
			"Fleet and airport pages",
			"Built for local search"
		]
	}),
	make({
		slug: "western-cars-crawley",
		name: "Western Cars Crawley",
		type: "Website",
		group: "western-cars",
		category: "Taxi & private hire website",
		period: "Jul to Aug 2025",
		end: "2025-08",
		liveUrl: "https://www.westerncars.co.uk/",
		challenge: "Crawley is Western Cars' main office near Gatwick, and its site also had to link customers to every other branch.",
		solution: "The main Western Cars website with links to each branch, services, app downloads and online booking.",
		highlights: [
			"Links to every branch",
			"App download section",
			"Online booking"
		]
	}),
	make({
		slug: "western-cars-east-grinstead",
		name: "Western Cars East Grinstead",
		type: "Website",
		group: "western-cars",
		category: "Taxi & private hire website",
		period: "Aug 2025",
		end: "2025-08",
		liveUrl: "https://www.westerncars-eastgrinstead.co.uk/",
		challenge: "East Grinstead customers needed a local site for transfers and private hire.",
		solution: "A local site with airport transfer pages, app links and a chat option for quick questions.",
		highlights: [
			"Airport transfer pages",
			"App store links",
			"Chat for quick questions"
		]
	}),
	make({
		slug: "western-cars-horley",
		name: "Western Cars Horley",
		type: "Website",
		group: "western-cars",
		category: "Taxi & private hire website",
		period: "Aug to Sep 2025",
		end: "2025-09",
		liveUrl: "https://westerncars-horley.co.uk/",
		challenge: "Horley sits next to Gatwick, so most customers are looking for airport transfers.",
		solution: "A site focused on Gatwick transfers, group taxis and chauffeur services for Horley and Surrey.",
		highlights: [
			"Gatwick transfer focus",
			"Group taxi hire",
			"Chauffeur services"
		]
	}),
	make({
		slug: "western-cars-horsham",
		name: "Western Cars Horsham",
		type: "Website",
		group: "western-cars",
		category: "Taxi & private hire website",
		period: "Sep 2025",
		end: "2025-09",
		liveUrl: "https://www.westerncars-horsham.co.uk/",
		challenge: "Horsham customers wanted 24/7 taxis and clear fares across a wide area of West Sussex.",
		solution: "A Horsham site with 24/7 taxis, fixed fares and service area pages.",
		highlights: [
			"24/7 taxi service",
			"Fixed fares",
			"Service area pages"
		]
	}),
	make({
		slug: "western-cars-redesign-concept",
		name: "Western Cars Redesign Concept",
		type: "Concept",
		group: "western-cars",
		category: "Website concept",
		period: "Aug 2026",
		end: "2026-08",
		liveUrl: "https://western-cars-website-prototype.vercel.app/",
		challenge: "Western Cars wanted to explore a more premium brand look for the future.",
		solution: "A luxury concept with a cinematic hero, light and dark modes and a simpler booking path.",
		highlights: [
			"Light and dark modes",
			"Cinematic hero",
			"Simpler booking path"
		]
	}),
	make({
		slug: "western-cars-staff-registration",
		name: "Western Cars Staff Registration",
		type: "Tool",
		group: "western-cars",
		category: "Internal tool",
		period: "Sep 2026",
		end: "2026-09",
		laptopOnly: true,
		challenge: "Hiring new drivers meant collecting the same personal and employment details on paper.",
		solution: "A step-by-step online registration form for new starters covering personal, employment, family and consent details, ready to save or print.",
		highlights: [
			"Five clear steps",
			"Save draft and continue later",
			"Printable registration document"
		],
		imageAlt: "Registration form in the Western Cars staff registration tool"
	}),
	make({
		slug: "humandata-labs",
		name: "HumanData Labs",
		type: "Website",
		group: "other",
		category: "AI data company website",
		period: "Oct 2026",
		end: "2026-10",
		featured: 4,
		liveUrl: "https://humandatalabs.tech/",
		challenge: "HumanData Labs serves two audiences at once: AI and robotics teams who buy data, and vendors who supply it.",
		solution: "A clear site with separate paths for AI teams and vendor partners, dataset licensing and quality pages, and request and application flows.",
		highlights: [
			"Separate paths for buyers and vendors",
			"Dataset request flow",
			"Vendor partner application"
		]
	}),
	make({
		slug: "bloom-studio",
		name: "Bloom Studio",
		type: "Demo",
		group: "other",
		category: "Salon website",
		period: "Aug 2026",
		end: "2026-08",
		description: "A sample salon website showing how AI concierge features handle bookings and questions for UK salons.",
		liveUrl: "https://bloom.incodet.com",
		challenge: "UK salons lose bookings when the phone rings during appointments.",
		solution: "A sample salon website showing how an AI concierge answers questions and handles bookings.",
		highlights: [
			"AI concierge demo",
			"Online booking flow",
			"Salon service pages"
		]
	}),
	make({
		slug: "barkers-executive",
		name: "Barkers Executive Cars",
		type: "Website",
		group: "other",
		category: "Executive car service website",
		period: "Jul 2026",
		end: "2026-07",
		featured: 2,
		liveUrl: "https://barkersexecutive.vercel.app/",
		challenge: "Barkers needed to look as premium online as its executive cars to win corporate and Gatwick transfer clients.",
		solution: "A dark, premium site with a rolling information bar, corporate travel pages, areas covered and quick booking.",
		highlights: [
			"Premium dark design",
			"Corporate travel pages",
			"Quick booking"
		]
	}),
	make({
		slug: "brhex-studio",
		name: "BRHEX Studio",
		type: "Platform",
		group: "other",
		category: "Real estate platform",
		title: "A Combined 360° Tour & Auto-Floorplan Platform",
		period: "Jun to Jul 2026",
		end: "2026-07",
		featured: 6,
		laptopOnly: true,
		description: "Proof of concept for a white-label real estate media platform: a 360° WebGL tour viewer and an SVG floor plan engine in one, with lead capture and custom branding.",
		tags: [
			"Next.js",
			"WebGL",
			"SVG",
			"Responsive"
		],
		challenge: "Real estate agents often use one vendor for 360° tours and another for floor plans, each with its own branding. We call it the double vendor trap.",
		solution: "One white-label platform with a 360° WebGL tour viewer with hotspots, an SVG floor plan engine with a one-click toggle between the two, lead capture and custom branding.",
		highlights: [
			"360° WebGL tour viewer with hotspots",
			"SVG floor plan engine with a one-click toggle",
			"Lead capture and custom branding"
		],
		liveUrl: "https://virtual-tour-poc.vercel.app/tour/50ad98c9",
		liveLabel: "View Live Demo",
		imageAlt: "360° tour viewer in the BRHEX Studio platform"
	}),
	make({
		slug: "gm-taxis-lewes",
		name: "GM Taxis Lewes",
		type: "Website",
		group: "other",
		category: "Taxi company website",
		period: "Jun 2026",
		end: "2026-06",
		featured: 3,
		liveUrl: "https://gmtaxislewes.co.uk/",
		challenge: "GM Taxis is a long-standing Lewes firm opposite the station, but its website did not match its local reputation.",
		solution: "A friendly, modern site covering airport runs, school runs, executive travel and nights out, with click-to-call and online booking.",
		highlights: [
			"Click-to-call everywhere",
			"Service pages for every journey type",
			"Online booking"
		]
	}),
	make({
		slug: "a1-airport-cars",
		name: "A1 Airport Cars Worthing",
		type: "Website",
		group: "other",
		category: "Airport taxi website",
		period: "Sep to Oct 2025",
		end: "2025-10",
		liveUrl: "https://a1airportcarsworthing.vercel.app/",
		challenge: "Customers had to call A1 just to learn the basics about airport runs from Worthing.",
		solution: "A bold site that puts the phone number, flight tracking, 24 hour bookings and vehicles from 1 to 7 seats front and center.",
		highlights: [
			"Flight tracking explained",
			"24 hour bookings",
			"Vehicles from 1 to 7 seats"
		]
	}),
	{
		...make({
			slug: "incblog",
			name: "IncBlog",
			type: "Platform",
			group: "other",
			period: "",
			end: "",
			challenge: "",
			solution: "",
			highlights: []
		}),
		todo: true
	},
	{
		...make({
			slug: "incodere",
			name: "Incodere",
			type: "Platform",
			group: "other",
			period: "",
			end: "",
			challenge: "",
			solution: "",
			highlights: []
		}),
		todo: true
	},
	{
		...make({
			slug: "vyra-shops",
			name: "Vyra Shops",
			type: "Website",
			group: "other",
			period: "",
			end: "",
			challenge: "",
			solution: "",
			highlights: [],
			liveUrl: "https://vyrashops.com/"
		}),
		todo: true
	}
];
/** Visible case studies: Western Cars group first, then other clients, each newest first. */
var caseStudies = visible(all, [
	"name",
	"category",
	"description",
	"period",
	"challenge",
	"solution",
	"highlights"
]);
var featuredCaseStudies = caseStudies.filter((c) => c.featured).sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));
var getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
var westernCarsIntro = "Western Cars runs taxi and private hire offices across Sussex. We built their location websites, a central AI content hub and internal tools. An operations platform is in development.";
var westernCarsInDevelopment = "Operations platform (in development)";
var caseStudyFilters = [
	{
		key: "all",
		label: "All"
	},
	{
		key: "western-cars",
		label: "Western Cars"
	},
	{
		key: "other",
		label: "Other clients"
	},
	{
		key: "platforms",
		label: "Platforms & tools"
	},
	{
		key: "concepts",
		label: "Concepts & demos"
	}
];
function filterCaseStudies(list, f) {
	switch (f) {
		case "western-cars": return list.filter((c) => c.group === "western-cars");
		case "other": return list.filter((c) => c.group === "other");
		case "platforms": return list.filter((c) => c.type === "Platform" || c.type === "Tool");
		case "concepts": return list.filter((c) => c.type === "Concept" || c.type === "Demo");
		default: return list;
	}
}
/** Shared "How we delivered it" wording, chosen by project type. */
function deliverySteps(c) {
	return c.type === "Platform" || c.type === "Tool" ? [
		{
			title: "Plan",
			body: "We agreed the workflow, users and data with the client."
		},
		{
			title: "Design",
			body: "We designed simple screens around that workflow."
		},
		{
			title: "Build",
			body: "We built the platform, its data and its connections."
		},
		{
			title: "Launch",
			body: "We tested with real use, launched and supported the team."
		}
	] : [
		{
			title: "Plan",
			body: "We mapped the services, pages and the questions customers ask most."
		},
		{
			title: "Design",
			body: "We designed mobile-first screens with booking always in reach."
		},
		{
			title: "Build",
			body: "We built the site, connected booking and contact options and set up search basics."
		},
		{
			title: "Launch",
			body: "We tested on phones and desktop, went live and kept improving after launch."
		}
	];
}
function showcaseBadge(type) {
	return type === "Demo" ? "Demo" : type === "Concept" ? "Concept" : "Live Now";
}
/** Work carousel: every visible project with a live URL, newest first. Unlinked tools are never included. */
var showcase = caseStudies.filter((c) => Boolean(c.liveUrl)).sort((a, b) => b.end.localeCompare(a.end)).map((c) => ({
	key: c.slug,
	name: c.name,
	description: c.description,
	url: c.liveUrl,
	badge: showcaseBadge(c.type),
	tint: c.tint,
	image: c.mockup ? mockupSm(c.mockup) : c.image.src,
	imageLarge: c.mockup ?? void 0
}));
//#endregion
//#region src/components/home/MiniUI.tsx
var import_jsx_runtime = require_jsx_runtime();
/** Small code-built UI illustrations. Generic sample text only; decorative for screen readers. */
function Frame({ children, className, tone = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: cn("rounded-card-sm p-4 type-small shadow-soft", tone === "light" ? "bg-background text-ink" : "bg-dark-card text-on-dark", className),
		children
	});
}
function CallCardUI({ tone = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		tone,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-10 items-center justify-center rounded-full bg-mint text-mint-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneIncoming, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: "Incoming call"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "opacity-70",
				children: "New customer"
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex gap-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1 rounded-full bg-mint py-2 text-center font-medium text-mint-ink",
				children: "Answered by AI"
			})
		})]
	});
}
function ChatUI({ tone = "light" }) {
	const dark = tone === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		tone,
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("max-w-[85%] self-end rounded-2xl rounded-br-sm px-3 py-2", dark ? "bg-on-dark/15" : "bg-bg-soft"),
			children: "Hi, are you open on Saturday?"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex max-w-[90%] items-start gap-2 rounded-2xl rounded-bl-sm px-3 py-2", dark ? "bg-background text-ink" : "bg-ink text-primary-foreground"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "mt-0.5 size-4 shrink-0" }), "Yes, we are open 9am to 4pm. Would you like to book a time?"]
		})]
	});
}
function CalendarUI({ tone = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		tone,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "size-4" }), " Calendar"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-5 gap-1.5 text-center",
				children: [[
					"Mon",
					"Tue",
					"Wed",
					"Thu",
					"Fri"
				].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "opacity-70",
					children: d
				}, d)), Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-7 rounded-md", i === 7 ? "bg-mint" : tone === "light" ? "bg-bg-soft" : "bg-on-dark/10") }, i))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1 font-medium text-mint-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), " Appointment booked"]
			})
		]
	});
}
function NotificationUI({ tone = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		tone,
		className: "flex flex-col gap-2",
		children: [{
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }),
			t: "WhatsApp",
			d: "New booking: caller name and request"
		}, {
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }),
			t: "Email",
			d: "Call summary ready"
		}].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex items-start gap-3 rounded-xl p-3", tone === "light" ? "bg-bg-soft" : "bg-on-dark/10"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5",
				children: n.icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: n.t
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "opacity-75",
				children: n.d
			})] })]
		}, n.t))
	});
}
//#endregion
export { faq as _, caseStudies as a, Bot as b, featuredCaseStudies as c, mockupSm as d, showcase as f, services as g, getService as h, NotificationUI as i, filterCaseStudies as l, westernCarsIntro as m, CallCardUI as n, caseStudyFilters as o, westernCarsInDevelopment as p, ChatUI as r, deliverySteps as s, CalendarUI as t, getCaseStudy as u, faqFor as v, CalendarCheck as y };
