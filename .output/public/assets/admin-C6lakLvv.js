import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as Link } from "./link-DhZbiYXQ.js";
import { t as useNavigate } from "./useNavigate-B97AQ8f1.js";
import { t as useQuery } from "./useQuery-0CCibYWS.js";
import { t as Logo } from "./Logo-TcUVb8cd.js";
import { r as pillButton } from "./Button-iOLhAAbB.js";
import { t as createLucideIcon } from "./createLucideIcon-D_v-FLWL.js";
import { n as FileText, t as LogOut } from "./log-out-E31F5SV6.js";
import { t as LoaderCircle } from "./loader-circle-CqNj_ICn.js";
import { t as Mail } from "./mail-pJJ8N1PV.js";
import { M as useQueryClient, N as supabase, R as Outlet, _ as LayoutDashboard, v as CalendarDays } from "./index-sH_TfzMw.js";
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FolderKanban = createLucideIcon("folder-kanban", [
	["path", {
		d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
		key: "1fr9dc"
	}],
	["path", {
		d: "M8 10v4",
		key: "tgpxqk"
	}],
	["path", {
		d: "M12 10v2",
		key: "hh53o1"
	}],
	["path", {
		d: "M16 10v6",
		key: "1d6xys"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Users = createLucideIcon("users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["path", {
		d: "M16 3.128a4 4 0 0 1 0 7.744",
		key: "16gr8j"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]);
//#endregion
//#region src/routes/_authenticated/admin.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		to: "/admin",
		label: "Overview",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/admin/messages",
		label: "Messages",
		icon: Mail
	},
	{
		to: "/admin/bookings",
		label: "Bookings",
		icon: CalendarDays
	},
	{
		to: "/admin/clients",
		label: "Clients",
		icon: Users
	},
	{
		to: "/admin/projects",
		label: "Projects",
		icon: FolderKanban
	},
	{
		to: "/admin/invoices",
		label: "Invoices",
		icon: FileText
	}
];
function AdminLayout() {
	const qc = useQueryClient();
	const navigate = useNavigate();
	const q = useQuery({
		queryKey: ["is-admin"],
		queryFn: async () => {
			await supabase.rpc("claim_portal_access");
			const { data, error } = await supabase.rpc("is_admin");
			if (error) throw error;
			return !!data;
		}
	});
	async function signOut() {
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		navigate({
			to: "/portal",
			replace: true
		});
	}
	if (q.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen items-center justify-center",
		role: "status",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
			"aria-hidden": true,
			className: "size-6 animate-spin"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Loading"
		})]
	});
	if (!q.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "type-h3",
				children: "You do not have access to this page."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/portal",
				className: pillButton({ className: "mt-6" }),
				children: "Go to the client portal"
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg-soft md:flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "border-b border-border bg-background md:sticky md:top-0 md:h-screen md:w-60 md:shrink-0 md:border-r md:border-b-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-4 md:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: signOut,
						"aria-label": "Sign out",
						className: "rounded-full p-2 text-ink hover:bg-bg-soft md:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
							"aria-hidden": true,
							className: "size-5"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Admin",
					className: "flex gap-1 overflow-x-auto px-3 pb-3 md:flex-col md:px-4",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: n.to,
						activeOptions: { exact: "exact" in n },
						className: "flex shrink-0 items-center gap-3 rounded-full px-4 py-2 type-small font-medium text-ink hover:bg-bg-soft data-[status=active]:bg-ink data-[status=active]:text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, {
								"aria-hidden": true,
								className: "size-4"
							}),
							" ",
							n.label
						]
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden p-4 md:absolute md:bottom-0 md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: signOut,
						className: "flex items-center gap-2 type-small font-medium text-ink hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
							"aria-hidden": true,
							className: "size-4"
						}), " Sign out"]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-w-0 flex-1 p-4 md:p-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})]
	});
}
//#endregion
export { AdminLayout as component };
