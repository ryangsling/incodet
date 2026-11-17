import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { i as site } from "./site-DZTAQn57.js";
import { n as cn } from "./dist-Cm5lzMt_.js";
//#region src/components/site/Logo.tsx
var import_jsx_runtime = require_jsx_runtime();
function Logo({ tone = "ink", variant = "full", className }) {
	const color = tone === "white" ? "text-on-dark" : "text-ink";
	if (site.logoUrl) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: site.logoUrl,
		alt: site.name,
		className: cn(variant === "mark" ? "h-6 w-auto" : "h-7 w-auto", className)
	});
	if (variant === "mark") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		role: "img",
		"aria-label": site.name,
		className: cn("wordmark flex size-6 items-center justify-center rounded-[6px] text-[15px] leading-none font-bold", tone === "white" ? "bg-background text-ink" : "bg-ink text-primary-foreground", className),
		children: site.name.charAt(0)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("wordmark text-2xl leading-none", color, className),
		children: site.name
	});
}
//#endregion
export { Logo as t };
