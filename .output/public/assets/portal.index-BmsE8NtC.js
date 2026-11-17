import { n as __toESM } from "./rolldown-runtime-BPOCksWG.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as useNavigate } from "./useNavigate-B97AQ8f1.js";
import { t as PillButton } from "./Button-iOLhAAbB.js";
import { t as createLucideIcon } from "./createLucideIcon-D_v-FLWL.js";
import { t as LoaderCircle } from "./loader-circle-CqNj_ICn.js";
import { i as Reveal, r as PillBadge } from "./primitives-BNIssmjb.js";
import { i as string } from "./schemas-D7ISJfF9.js";
import { N as supabase } from "./index-sH_TfzMw.js";
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MailCheck = createLucideIcon("mail-check", [
	["path", {
		d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
		key: "12jkf8"
	}],
	["path", {
		d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
		key: "1ocrg3"
	}],
	["path", {
		d: "m16 19 2 2 4-4",
		key: "1b14m6"
	}]
]);
//#endregion
//#region src/routes/portal.index.tsx?tsr-split=component
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PortalLogin() {
	const navigate = useNavigate();
	const [value, setValue] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [state, setState] = (0, import_react.useState)("idle");
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) navigate({
				to: "/portal/dashboard",
				replace: true
			});
		});
		const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
			if (event === "SIGNED_IN" && session) navigate({
				to: "/portal/dashboard",
				replace: true
			});
		});
		return () => sub.subscription.unsubscribe();
	}, [navigate]);
	async function onSubmit(e) {
		e.preventDefault();
		const v = value.trim();
		if (v.toUpperCase() === "DEMO") {
			navigate({ to: "/portal/demo" });
			return;
		}
		const parsed = string().email().max(255).safeParse(v);
		if (!parsed.success) {
			setError("Please enter a valid email address, or type DEMO.");
			return;
		}
		setError("");
		setState("sending");
		const { error: err } = await supabase.auth.signInWithOtp({
			email: parsed.data.toLowerCase(),
			options: { emailRedirectTo: `${window.location.origin}/portal` }
		});
		if (err) {
			setState("idle");
			setError("We could not send the sign-in link. Please try again in a minute.");
			return;
		}
		setState("sent");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "flex min-h-[90vh] items-center bg-bg-soft pt-32 pb-[72px] md:pt-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillBadge, { children: "Client portal" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 type-h1",
						children: "Client portal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-md type-body",
						children: "Track your project, download files and pay invoices in one place."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				className: "mx-auto mt-10 max-w-md",
				children: state === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "status",
					className: "rounded-card border border-border bg-background p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailCheck, {
							"aria-hidden": true,
							className: "mx-auto size-8 text-ink",
							strokeWidth: 1.5
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 type-h3",
							children: "Check your email for a sign-in link."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setState("idle"),
							className: "mt-5 type-small font-medium text-ink underline underline-offset-4",
							children: "Use a different email"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					noValidate: true,
					onSubmit,
					className: "rounded-card border border-border bg-background p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "portal-email",
							className: "mb-2 block type-small font-medium text-ink",
							children: "Email or DEMO"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "portal-email",
							value,
							onChange: (e) => setValue(e.target.value),
							autoComplete: "email",
							placeholder: "Type \"DEMO\" to explore a sample project",
							"aria-invalid": error ? true : void 0,
							"aria-describedby": error ? "portal-email-err" : void 0,
							className: "w-full rounded-2xl border border-[#CFCFCF] bg-background px-4 py-3 text-[16px] text-ink outline-none placeholder:text-muted-foreground focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: "portal-email-err",
							className: "mt-2 type-small text-destructive",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PillButton, {
							type: "submit",
							disabled: state === "sending",
							className: "mt-6 w-full",
							children: [state === "sending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								"aria-hidden": true,
								className: "size-4 animate-spin"
							}), "Continue"]
						})
					]
				})
			})]
		})
	});
}
//#endregion
export { PortalLogin as component };
