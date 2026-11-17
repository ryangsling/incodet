import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as Link } from "./link-DhZbiYXQ.js";
import { n as cn, t as cva } from "./dist-Cm5lzMt_.js";
//#region src/components/site/Button.tsx
var import_jsx_runtime = require_jsx_runtime();
var pillButton = cva("inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[transform,background-color,box-shadow,color] duration-300 ease-[var(--ease)] hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			primary: "bg-ink text-primary-foreground shadow-pill hover:bg-dark-card",
			secondary: "bg-background text-ink border border-border hover:bg-bg-soft",
			"primary-inverted": "bg-background text-ink shadow-pill hover:bg-bg-soft",
			"secondary-inverted": "bg-transparent text-on-dark border border-on-dark/30 hover:bg-on-dark/10"
		},
		size: {
			md: "h-12 px-6 text-[16px]",
			sm: "h-10 px-5 type-small",
			lg: "h-14 px-8 text-[17px]"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function PillButton({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(pillButton({
			variant,
			size
		}), className),
		...props
	});
}
/** Internal route link styled as a pill. */
function PillLink({ to, children, className, variant, size, onClick, search }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		search,
		onClick,
		className: cn(pillButton({
			variant,
			size
		}), className),
		children
	});
}
//#endregion
export { PillLink as n, pillButton as r, PillButton as t };
