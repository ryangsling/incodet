import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { i as site } from "./site-DZTAQn57.js";
import { t as LegalPage } from "./LegalPage-CDVT2gUJ.js";
//#region src/routes/terms.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	const email = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `mailto:${site.email}`,
		children: site.email
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalPage, {
		title: "Terms of Service",
		intro: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "These terms apply when you work with Incodet. Your written proposal sets out the details of your project. If the proposal and these terms differ, the proposal applies." }),
		sections: [
			{
				h: "Our services",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We build websites, AI chatbots, AI phone agents and custom software for businesses." })
			},
			{
				h: "Quotes and proposals",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Before we start, we send you a written proposal. It sets out the scope, price, timeline and any notice period for your project. Work starts once you accept it." })
			},
			{
				h: "Fees",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our plans have a one-time setup fee and a monthly fee. All prices are in USD." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Extra AI call minutes cost $0.20 per minute and are billed only if you use them." })] })
			},
			{
				h: "No lock-in contracts",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "There are no lock-in contracts. Any notice period is set out in your proposal." })
			},
			{
				h: "Payments",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You can pay by Payoneer, Wise, PayPal or bank transfer. Please use your invoice number as the payment reference." })
			},
			{
				h: "Your responsibilities",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Give us accurate information about your business." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Provide the content we need, such as text, images and business details." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Give feedback on time so we can keep to the agreed timeline." })
				] })
			},
			{
				h: "AI agent limitations",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "AI chatbots and AI phone agents can make mistakes. You are responsible for checking bookings and any important information they collect or give to your customers." })
			},
			{
				h: "Third-party services",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our services rely on third-party providers, such as hosting, booking, AI and payment services. We are not responsible for outages or changes made by those providers, but we will help you deal with them." })
			},
			{
				h: "Intellectual property and ownership",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ownership of the work we create is as set out in your proposal." })
			},
			{
				h: "Limitation of liability",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "To the extent the law allows, we are not liable for indirect or consequential losses, such as lost profits or lost bookings. Our total liability for any claim is limited to the fees you paid us in the three months before the claim." })
			},
			{
				h: "Termination",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Either of us can end the service by giving notice as set out in your proposal. You pay for work done and services used up to the end date." })
			},
			{
				h: "Governing law",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "These terms are governed by the laws of Western Australia." })
			},
			{
				h: "Contact",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Questions about these terms? Email us at ",
					email,
					"."
				] })
			}
		]
	});
}
//#endregion
export { TermsPage as component };
