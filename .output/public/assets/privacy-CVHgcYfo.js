import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { i as site } from "./site-DZTAQn57.js";
import { t as LegalPage } from "./LegalPage-CDVT2gUJ.js";
//#region src/routes/privacy.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	const email = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `mailto:${site.email}`,
		children: site.email
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalPage, {
		title: "Privacy Policy",
		intro: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This policy explains what personal information we collect, why we collect it, how we look after it and the choices you have. We have written it in plain English so it is easy to follow." }),
		sections: [
			{
				h: "Who we are",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Incodet builds websites, AI chatbots, AI phone agents and custom software. Our head office is in Perth at ",
					site.address,
					", with teams in",
					" ",
					site.locations.slice(1).map((l) => l.city).join(", ").replace(/, ([^,]*)$/, " and $1"),
					". You can contact us about privacy at any time at ",
					email,
					"."
				] })
			},
			{
				h: "What we collect",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We only collect information we need to talk to you and deliver our services:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Details you give us through our contact form or when you book a call, such as your name, email, phone number, business name and what you need." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Emails and messages we exchange with you, including WhatsApp messages." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Client portal account data, such as your login email and the project files and messages you share there." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Invoices and payment confirmations." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "If you accept analytics, basic data about how our website is used, such as pages visited, device type and approximate location." })
				] })] })
			},
			{
				h: "How we use your information",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We use your information to reply to enquiries, run calls you book, plan and deliver projects, send invoices, provide support and improve our website. We do not sell your personal information." })
			},
			{
				h: "AI chatbots and AI phone agents we run for clients",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We build and run AI chatbots and AI phone agents for our clients' businesses. When you chat with or call one of these businesses:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Chat transcripts and call recordings may be stored so the service can work, for example to create a booking or send the business owner the details." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Callers are told when a call is answered by an AI agent and that the call may be recorded." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Our clients decide how long recordings and transcripts are kept, within the limits of their plan." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For these conversations, the business you contacted is responsible for your information and we process it on their behalf. Please contact that business with any questions about how they use it." })
				] })
			},
			{
				h: "Service providers we use",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We use trusted providers to run our services. They only receive the information they need to do their job:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Website hosting and database providers." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "AI voice and chat providers, currently including Vapi, OpenAI and ElevenLabs." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Payment providers Payoneer, Wise and PayPal, and banks." })
				] })] })
			},
			{
				h: "Cookies and analytics",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We only use essential cookies and storage that our website needs to work. If we turn on privacy-friendly analytics, a banner asks for your consent first and no analytics scripts load unless you click Accept. If you decline, nothing is loaded. Your choice is saved in your browser, and you can change it at any time by clearing the stored data for this website in your browser settings." })
			},
			{
				h: "How long we keep information",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Enquiries and booking records are kept for up to 24 months." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Client project and invoice records are kept for 7 years for tax purposes." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "After these periods, we delete the information." })] })
			},
			{
				h: "Your rights",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"You can ask to see the personal information we hold about you, ask us to correct it or ask us to delete it. Email us at ",
					email,
					" and we will reply as soon as we can."
				] })
			},
			{
				h: "International transfers",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We are based in Australia and work with clients in other countries. Some of our service providers store or process information outside Australia. When that happens, we choose providers that protect personal information to a high standard." })
			},
			{
				h: "Governing law",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This policy is governed by the laws of Western Australia." })
			},
			{
				h: "Changes to this policy",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We may update this policy from time to time. When we do, we will change the \"Last updated\" date at the top of this page. If a change is significant, we will let our clients know." })
			}
		]
	});
}
//#endregion
export { PrivacyPage as component };
