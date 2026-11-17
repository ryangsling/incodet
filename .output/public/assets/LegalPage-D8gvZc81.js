import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as BookingCta } from "./HomeSections-DhJ5QvMH.js";
//#region src/components/site/LegalPage.tsx
var import_jsx_runtime = require_jsx_runtime();
var legalUpdated = "7 November 2026";
function LegalPage({ title, intro, sections }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "bg-background pt-36 pb-8 md:pt-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-site",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[760px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "type-h1",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 type-small text-muted-foreground",
						children: ["Last updated: ", legalUpdated]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 type-body",
						children: intro
					}),
					sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[24px] leading-tight font-medium tracking-tight text-ink md:text-[28px]",
							children: s.h
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-col gap-4 type-body [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4 [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-6",
							children: s.body
						})]
					}, s.h))
				]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCta, {})] });
}
//#endregion
export { LegalPage as t };
