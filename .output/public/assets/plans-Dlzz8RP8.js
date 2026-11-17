import { t as visible } from "./visible-V0DJ41aX.js";
var plans = visible([
	{
		id: "starter",
		name: "Starter",
		audience: "For small businesses",
		setup: "from $499",
		monthly: "Optional $19/month care (hosting, updates)",
		includes: [
			"Website",
			"Online booking",
			"Booking emails"
		],
		timeline: "Live in 1 to 2 weeks"
	},
	{
		id: "growth",
		name: "Growth",
		audience: "For growing businesses",
		setup: "from $999",
		monthly: "from $149/month, includes 300 AI call minutes",
		includes: [
			"Everything in Starter",
			"AI website chatbot",
			"24/7 AI calling agent",
			"Owner alerts by email and WhatsApp"
		],
		timeline: "Live in 2 to 3 weeks",
		featured: true
	},
	{
		id: "scale",
		name: "Scale",
		audience: "For established businesses",
		setup: "from $3,499",
		monthly: "from $299/month",
		includes: [
			"Multi-page or SaaS-level platform",
			"AI automation",
			"Client dashboards",
			"Custom integrations"
		],
		timeline: "Live in 4 to 8 weeks"
	}
], [
	"name",
	"audience",
	"setup",
	"monthly",
	"includes",
	"timeline"
]);
var plansNote = "Extra call minutes $0.20/min, billed only if used. Every feature is also available on its own.";
//#endregion
export { plansNote as n, plans as t };
