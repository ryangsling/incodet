import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { n as cn } from "./dist-Cm5lzMt_.js";
import { i as Reveal, r as PillBadge } from "./primitives-BNIssmjb.js";
//#region src/components/site/PageHero.tsx
var import_jsx_runtime = require_jsx_runtime();
/** Centered inner-page hero on a soft background. */
function PageHero({ badge, title, children, actions, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"data-theme": "light",
		className: cn("bg-hero-sky pt-36 pb-[72px] md:pt-44 md:pb-[120px]", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-site",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-4xl text-center",
				children: [
					badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillBadge, { children: badge }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: cn("type-h1", badge && "mt-6"),
						children: title
					}),
					children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl type-body",
						children
					}),
					actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 flex flex-col justify-center gap-3 sm:flex-row",
						children: actions
					})
				]
			})
		})
	});
}
//#endregion
export { PageHero as t };
