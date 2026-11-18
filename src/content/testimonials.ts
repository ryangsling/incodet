export type Testimonial = {
  id: string;
  stat: string;
  quote: string;
  name: string;
  role: string;
  business: string;
  city: string;
  badge: string;
  rating: number;
  image: string;
  alt: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "clinic",
    stat: "100% attendance rate",
    quote:
      "Adding automated reminders and deposit booking didn't just eliminate no-shows, it changed the tone of our consultations and gave our clients a frictionless experience from day one.",
    name: "Dr. Claire Evans",
    role: "Clinical Director",
    business: "Rose City Wellness & Chiropractic",
    city: "Brighton",
    badge: "Rose City Clinic",
    rating: 5,
    image: "/images/testimonials/clinic.webp",
    alt: "Dr. Claire Evans in her bright consultation clinic",
  },
  {
    id: "salon",
    stat: "2 to 5 hours saved per week",
    quote:
      "Our clients book while we're mid-cut or late at night. The AI assistant replies to price and service questions instantly so my chair stays full without endless phone tag.",
    name: "Elena Rostova",
    role: "Founder & Master Stylist",
    business: "Bloom Aesthetic Studio",
    city: "London",
    badge: "Bloom Studio",
    rating: 5,
    image: "/images/testimonials/salon.webp",
    alt: "Elena Rostova smiling warmly in her modern salon studio",
  },
  {
    id: "roofing",
    stat: "Zero missed job calls",
    quote:
      "When you're up on ladders or driving between job sites, you can't pick up the phone. Incodet's AI calling agent answers within two rings, qualifies the lead, and books site inspections directly.",
    name: "Marcus Vance",
    role: "Managing Contractor",
    business: "Vance Roofing & Exteriors",
    city: "Toronto",
    badge: "Vance Roofing",
    rating: 5,
    image: "/images/testimonials/contractor.webp",
    alt: "Marcus Vance on a residential roofing project site",
  },
  {
    id: "chauffeur",
    stat: "$1,800 saved each month",
    quote:
      "Managing airport transfers and fleet dispatches manually used to eat our entire evening. The custom booking portal and automated client updates run like clockwork 24/7.",
    name: "Julian Hayes",
    role: "Operations Director",
    business: "Barkers Executive Travel",
    city: "Surrey & London",
    badge: "Barkers Executive",
    rating: 5,
    image: "/images/testimonials/chauffeur.webp",
    alt: "Julian Hayes standing by an executive transport vehicle",
  },
];
