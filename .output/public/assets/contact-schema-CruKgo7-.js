import { i as string, n as number, r as object, t as _enum } from "./schemas-D7ISJfF9.js";
//#region src/lib/contact-schema.ts
var contactPlans = [
	"starter",
	"growth",
	"scale",
	"not_sure"
];
var planLabels = {
	starter: "Starter",
	growth: "Growth",
	scale: "Scale",
	not_sure: "Not sure yet"
};
var contactFields = object({
	name: string().trim().min(2, "Please enter at least 2 characters.").max(100, "Please keep this under 100 characters."),
	email: string().trim().email("Please enter a valid email address.").max(255),
	business_name: string().trim().max(120, "Please keep this under 120 characters.").optional().default(""),
	plan: _enum(contactPlans),
	message: string().trim().min(10, "Please write at least 10 characters.").max(3e3, "Please keep this under 3000 characters.")
});
contactFields.extend({
	source_page: string().trim().max(60).default("unknown"),
	website: string().max(500).optional().default(""),
	rendered_at: number()
});
function isPlan(v) {
	return typeof v === "string" && contactPlans.includes(v);
}
//#endregion
export { planLabels as i, contactPlans as n, isPlan as r, contactFields as t };
