import { House, PaintRoller, Plus, Scissors, Smile, Sparkles, type LucideIcon } from "lucide-react";
import type { TempImageId } from "./tempImages";

export interface IndustryCardItem {
  id: string;
  name: string;
  benefit: string;
  imageId: TempImageId;
  icon: LucideIcon;
  href: string;
  isCustomAction?: boolean;
  actionLabel?: string;
}

export const industryCards: IndustryCardItem[] = [
  {
    id: "roofing",
    name: "Roofing",
    benefit: "Never miss a job call on site",
    imageId: "industry-roofing",
    icon: House,
    href: "/industries/roofing",
  },
  {
    id: "epoxy-flooring",
    name: "Epoxy Flooring",
    benefit: "Quotes and bookings while you work",
    imageId: "industry-epoxy-flooring",
    icon: PaintRoller,
    href: "/industries/epoxy-flooring",
  },
  {
    id: "salons",
    name: "Salons",
    benefit: "Fill your chair, even mid-cut",
    imageId: "industry-salons",
    icon: Sparkles,
    href: "/industries/salons",
  },
  {
    id: "barber-shops",
    name: "Barber Shops",
    benefit: "Walk-ins and bookings handled for you",
    imageId: "industry-barber-shops",
    icon: Scissors,
    href: "/industries/barber-shops",
  },
  {
    id: "clinics",
    name: "Dental / Medical Clinics",
    benefit: "Appointments booked, reminders sent",
    imageId: "industry-clinics",
    icon: Smile,
    href: "/industries/dental-clinics",
  },
  {
    id: "custom",
    name: "Your business?",
    benefit: "Tell us what you need and we will build it",
    imageId: "industry-custom",
    icon: Plus,
    href: "#booking",
    isCustomAction: true,
    actionLabel: "Book a Free Call",
  },
];
