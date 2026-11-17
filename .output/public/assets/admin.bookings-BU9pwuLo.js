import { n as __toESM } from "./rolldown-runtime-BPOCksWG.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as useQuery } from "./useQuery-BOQB-CBd.js";
import { M as useQueryClient, N as supabase } from "./index-BA3xrQIk.js";
import { t as booking } from "./booking-CDuk7ZBX.js";
import { t as Button } from "./button-CfK1iZoW.js";
import { t as AdminTitle } from "./ui-vUwY-ayg.js";
//#region src/routes/_authenticated/admin.bookings.tsx?tsr-split=component
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminBookings() {
	const [tab, setTab] = (0, import_react.useState)("Upcoming");
	const [expanded, setExpanded] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)("");
	const qc = useQueryClient();
	const q = useQuery({
		queryKey: ["admin-bookings", tab],
		queryFn: async () => {
			let query = supabase.from("bookings").select("*").order("slot_start", { ascending: tab === "Upcoming" });
			query = tab === "Upcoming" ? query.gte("slot_end", (/* @__PURE__ */ new Date()).toISOString()) : query.lt("slot_end", (/* @__PURE__ */ new Date()).toISOString());
			const result = await query;
			if (result.error) throw result.error;
			return result.data;
		}
	});
	async function update(id, status) {
		setBusy(id);
		setError("");
		if ((await supabase.from("bookings").update({ status }).eq("id", id).select("id").single()).error) setError("Could not update this booking. Please try again.");
		else {
			await qc.invalidateQueries({ queryKey: ["admin-bookings"] });
			await qc.invalidateQueries({ queryKey: ["admin-overview"] });
		}
		setBusy("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTitle, { title: "Bookings" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "tablist",
			"aria-label": "Booking period",
			className: "mb-6 flex gap-2",
			children: ["Upcoming", "Past"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				role: "tab",
				"aria-selected": tab === t,
				variant: tab === t ? "default" : "outline",
				onClick: () => setTab(t),
				children: t
			}, t))
		}),
		q.isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			role: "status",
			children: "Loading bookings…"
		}),
		(q.error || error) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			role: "alert",
			className: "text-destructive",
			children: error || "Could not load bookings."
		}),
		!q.isPending && !q.error && q.data?.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-muted-foreground",
			children: [
				"No ",
				tab.toLowerCase(),
				" bookings."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: q.data?.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-md border border-border bg-background p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[20px] font-medium text-ink",
								children: row.full_name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 type-small",
								children: [
									new Intl.DateTimeFormat("en", {
										timeZone: booking.timezone,
										dateStyle: "full",
										timeStyle: "short"
									}).format(new Date(row.slot_start)),
									" ",
									"(",
									booking.timezone,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 type-small",
								children: [
									row.company_name,
									" · ",
									row.status
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							"aria-expanded": expanded === row.id,
							onClick: () => setExpanded(expanded === row.id ? "" : row.id),
							children: "Details"
						})]
					}),
					expanded === row.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-2",
						children: [
							["Company email", row.company_email],
							["Phone", row.phone || "Not provided"],
							["Project type", row.project_type],
							["Budget", row.budget],
							["Preferred delivery", row.delivery_time],
							["Visitor timezone", row.visitor_timezone],
							["Message", row.message]
						].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "type-small text-muted-foreground",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 whitespace-pre-wrap break-words text-ink",
							children: value
						})] }, label))
					}),
					row.status !== "cancelled" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex gap-3",
						children: [row.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							disabled: busy === row.id,
							onClick: () => void update(row.id, "confirmed"),
							children: "Confirm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							disabled: busy === row.id,
							onClick: () => void update(row.id, "cancelled"),
							children: "Cancel booking"
						})]
					})
				]
			}, row.id))
		})
	] });
}
//#endregion
export { AdminBookings as component };
