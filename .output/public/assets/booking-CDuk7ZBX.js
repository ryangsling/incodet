//#region src/config/booking.ts
var booking = {
	timezone: "Australia/Perth",
	workingDays: [
		0,
		1,
		2,
		3,
		4,
		5,
		6
	],
	slotMinutes: 30,
	minNoticeHours: 12,
	maxDaysAhead: 30,
	meetingLabel: "30 minute video call"
};
/** Quick picks in the booking time zone picker, shown under "Your time zone" before any search. */
var quickPickZones = [
	"Asia/Dhaka",
	"Asia/Kolkata",
	"Australia/Perth",
	"Australia/Sydney",
	"Europe/London",
	"America/Toronto",
	"America/New_York",
	"America/Los_Angeles"
];
var projectTypes = [
	"Booking website",
	"AI website chatbot",
	"24/7 AI calling agent",
	"Website + AI agent",
	"Mobile app",
	"UI/UX design",
	"Custom software or SaaS",
	"Business automation",
	"Social media growth",
	"Not sure yet"
];
var budgets = [
	"Under $500",
	"$500 to $1,000",
	"$1,000 to $3,500",
	"$3,500 to $10,000",
	"$10,000+"
];
var deliveryTimes = [
	"1 to 2 weeks",
	"2 to 4 weeks",
	"1 to 2 months",
	"2 months or more",
	"Flexible"
];
//#endregion
export { quickPickZones as a, projectTypes as i, budgets as n, deliveryTimes as r, booking as t };
