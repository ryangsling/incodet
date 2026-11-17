import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as Link } from "./link-DhZbiYXQ.js";
import { n as cn } from "./dist-Cm5lzMt_.js";
import { t as ArrowUpRight } from "./arrow-up-right-CGeQznAu.js";
import { i as TempImage, r as ServicePlaceholder, t as ServiceImage } from "./ServicePanels-BfaDrL1v.js";
import { g as services } from "./MiniUI-Vkxqojlt.js";
import { a as Section } from "./primitives-BNIssmjb.js";
import { t as PageHero } from "./PageHero-D7x4lOHj.js";
//#region src/routes/services.index.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function ServicesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Our services",
		children: "Websites, AI agents, apps, product design, custom software, automation and social media growth for your business."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: s.to,
			"data-theme": "dark",
			className: cn("group overflow-hidden rounded-card p-6 text-on-dark md:p-8", s.color),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[28px] leading-tight text-on-dark",
						children: s.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						"aria-hidden": true,
						className: "size-6 shrink-0"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 type-small-body",
					children: s.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 aspect-[8/5] overflow-hidden rounded-[12px]",
					children: s.images[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceImage, {
						slug: s.images[0],
						sizes: "(min-width: 768px) 532px, calc(100vw - 80px)"
					}) : s.temp?.hero ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TempImage, {
						id: s.temp.hero,
						sizes: "(min-width: 768px) 532px, calc(100vw - 80px)"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePlaceholder, { className: "size-full" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 type-small",
					children: ["/0", i + 1]
				})
			]
		}, s.id))
	}) })] });
}
//#endregion
export { ServicesIndex as component };
