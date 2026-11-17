import { n as __toESM } from "./rolldown-runtime-BPOCksWG.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { n as cn } from "./dist-Cm5lzMt_.js";
//#region src/components/site/primitives.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function PillBadge({ icon, children, className, tone = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full px-4 py-1.5 type-small font-medium", tone === "mint" ? "bg-mint text-mint-ink" : "border border-border bg-background text-ink shadow-soft", className),
		children: [icon, children]
	});
}
var themeClass = {
	light: "bg-background",
	soft: "bg-bg-soft",
	dark: "bg-dark text-on-dark-muted [&_h1]:text-on-dark [&_h2]:text-on-dark [&_h3]:text-on-dark"
};
function Section({ theme = "light", children, className, containerClassName, id, as: Tag = "section" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		id,
		"data-theme": theme === "dark" ? "dark" : "light",
		className: cn("section-y", themeClass[theme], className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("container-site", containerClassName),
			children
		})
	});
}
function SectionHeading({ title, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: cn("mx-auto max-w-3xl text-center", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "type-h2",
			children: title
		}), children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mx-auto mt-5 max-w-2xl type-body",
			children
		})]
	});
}
function Card({ children, className, size = "lg" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("border border-border bg-card p-6 shadow-soft md:p-8", size === "lg" ? "rounded-card" : "rounded-card-sm p-5 md:p-6", className),
		children
	});
}
/** Fades children up once when they enter the viewport. */
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e?.isIntersecting) {
				setVisible(true);
				io.disconnect();
			}
		}, { threshold: .15 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: delay ? { transitionDelay: `${delay}ms` } : void 0,
		className: cn("reveal", visible && "is-visible", className),
		children
	});
}
/** Soft-grey frame shown until a real screenshot is dropped in. */
function ImagePlaceholder({ className, label = "Screenshot coming soon" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-placeholder": "true",
		role: "img",
		"aria-label": label,
		className: cn("flex items-center justify-center rounded-card-sm bg-placeholder", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "type-small text-muted-foreground",
			children: label
		})
	});
}
//#endregion
export { Section as a, Reveal as i, ImagePlaceholder as n, SectionHeading as o, PillBadge as r, Card as t };
