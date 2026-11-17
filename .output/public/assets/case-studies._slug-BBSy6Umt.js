import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as Link } from "./link-DhZbiYXQ.js";
import { r as pillButton } from "./Button-iOLhAAbB.js";
import { a as Section } from "./primitives-BNIssmjb.js";
//#region src/routes/case-studies.$slug.tsx?tsr-split=errorComponent
var import_jsx_runtime = require_jsx_runtime();
var SplitErrorComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
	className: "pt-40",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "type-h1",
			children: "Something went wrong"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/case-studies",
			className: pillButton({ variant: "primary" }) + " mt-8",
			children: "Back to our work"
		})]
	})
});
//#endregion
export { SplitErrorComponent as errorComponent };
