import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as Link } from "./link-DhZbiYXQ.js";
import { t as useQuery } from "./useQuery-BOQB-CBd.js";
import { N as supabase } from "./index-BA3xrQIk.js";
import { t as booking } from "./booking-CDuk7ZBX.js";
import { a as dateKey } from "./booking-BFMO2lpw.js";
import { t as AdminTitle } from "./ui-vUwY-ayg.js";
//#region src/routes/_authenticated/admin.index.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
async function count(table, col, values) {
	const { count: c } = await supabase.from(table).select("id", {
		count: "exact",
		head: true
	}).in(col, values);
	return c ?? 0;
}
function Overview() {
	const q = useQuery({
		queryKey: ["admin-overview"],
		queryFn: async () => {
			const [messages, projects, unpaid, pending] = await Promise.all([
				count("contact_messages", "status", ["new"]),
				count("projects", "status", [
					"planning",
					"in_progress",
					"review"
				]),
				count("invoices", "status", ["sent", "overdue"]),
				count("invoices", "status", ["pending_confirmation"])
			]);
			const day = dateKey(/* @__PURE__ */ new Date(), booking.timezone);
			const start = /* @__PURE__ */ new Date(`${day}T00:00:00+08:00`);
			const { count: bookings, error } = await supabase.from("bookings").select("id", {
				count: "exact",
				head: true
			}).gte("slot_start", start.toISOString()).lt("slot_start", new Date(start.getTime() + 864e5).toISOString()).neq("status", "cancelled");
			if (error) throw error;
			return {
				messages,
				projects,
				unpaid,
				pending,
				bookings
			};
		}
	});
	const cards = [
		{
			label: "Today's bookings",
			value: q.data?.bookings,
			to: "/admin/bookings"
		},
		{
			label: "New messages",
			value: q.data?.messages,
			to: "/admin/messages"
		},
		{
			label: "Active projects",
			value: q.data?.projects,
			to: "/admin/projects"
		},
		{
			label: "Unpaid invoices",
			value: q.data?.unpaid,
			to: "/admin/invoices"
		},
		{
			label: "Pending confirmation",
			value: q.data?.pending,
			to: "/admin/invoices"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTitle, { title: "Overview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
		children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: c.to,
			className: "rounded-2xl border border-border bg-background p-6 hover:border-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[44px] leading-none font-medium text-ink",
				children: c.value ?? "…"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 type-small text-muted-foreground",
				children: c.label
			})]
		}, c.label))
	})] });
}
//#endregion
export { Overview as component };
