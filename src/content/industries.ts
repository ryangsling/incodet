import type { FaqItem } from "./faq";
import { visible } from "./visible";

export type Industry = {
  slug: string;
  name: string;
  to: string;
  icon:
    | "roof"
    | "floor"
    | "salon"
    | "barber"
    | "restaurant"
    | "hotel"
    | "car"
    | "wash"
    | "dental"
    | "medical"
    | "firm";
  page: {
    title: string;
    description: string;
    h1: string;
    intro: string;
    /** Concise 40-60 word Answer-First paragraph directly under H1 for AI search citation. */
    answerFirst: string;
    pains: { title: string; body: string }[];
    transcript: { caller: string; ai: string; alert: string };
    /** Tailored 3-4 visible FAQs synced 1:1 with JSON-LD FAQPage schema. */
    faq: FaqItem[];
    /** Small note shown under the transcript. */
    note?: string;
    /** Case study slug shown under "Related work". */
    relatedWork?: string;
  };
  todo?: boolean;
};

const medicalNote =
  "The AI agent handles bookings and general questions only. It never gives medical advice and directs urgent cases to emergency services.";

const all: Industry[] = [
  {
    slug: "roofing",
    name: "Roofing",
    to: "/industries/roofing",
    icon: "roof",
    page: {
      title: "Websites, CRM & 24/7 AI Receptionist for Roofers | Incodet",
      description:
        "High-converting roofing websites with built-in CRM and 24/7 AI Voice Calling Agents (+44 UK, +1 US/CA, +61 AU) that book roof inspections while you are on a job.",
      h1: "Never miss another roofing job",
      intro:
        "Booking websites with built-in CRM and a 24/7 AI calling agent for roofing companies across the UK, US, Canada, and Australia.",
      answerFirst:
        "Incodet builds high-converting roofing websites with built-in CRM and online inspection scheduling, paired with a 24/7 AI Voice Calling Agent connected to your website and local business phone number (+44 UK, +1 US/Canada, +61 Australia). Roofers stop losing storm damage and replacement leads while up on ladders, booking every inspection automatically.",
      pains: [
        {
          title: "Calls come in while you are on a roof",
          body: "You cannot answer the phone safely with a ladder or shingle nailer in hand.",
        },
        {
          title: "Storm season floods the phone",
          body: "Dozens of urgent leak and hail calls hit all at once on the same morning.",
        },
        {
          title: "Missed calls go to the next roofer",
          body: "Homeowners rarely leave a voicemail when water is dripping; they call another crew.",
        },
      ],
      transcript: {
        caller:
          "Hi, my roof started leaking after last night's storm. Can someone come and look at it?",
        ai: "Sorry to hear that. I can book a free roof inspection right now. What is the property address, and does tomorrow morning or afternoon suit your schedule?",
        alert: "New inspection booked: storm roof leak, tomorrow morning — added to CRM.",
      },
      faq: [
        {
          question:
            "How does the 24/7 AI voice agent answer roofing calls on our local number and website?",
          answer:
            "It connects directly to your existing +44 UK, +1 US/Canada, or +61 Australia roofing phone line and embeds as a voice/chat assistant on your website, picking up every inspection enquiry around the clock.",
        },
        {
          question: "Do booked roof inspections sync directly into a CRM and calendar?",
          answer:
            "Yes. Every caller's name, property address, roof issue, and timezone-aware inspection slot writes straight into the website's built-in CRM and sends instant email and WhatsApp alerts.",
        },
        {
          question: "What is the ROI for roofers, and is it GDPR, TCPA, and APP compliant?",
          answer:
            "Capturing just one missed roof repair or full replacement typically covers a full year of service. Call flows follow UK GDPR, US TCPA, Canadian PIPEDA, and Australian Privacy Principles rules.",
        },
      ],
      relatedWork: "summit-ridge-roofing",
    },
  },
  {
    slug: "epoxy-flooring",
    name: "Epoxy Flooring",
    to: "/industries/epoxy-flooring",
    icon: "floor",
    page: {
      title: "Websites, CRM & 24/7 AI Receptionist for Epoxy Flooring | Incodet",
      description:
        "Custom epoxy flooring websites with built-in CRM and 24/7 AI Voice Calling Agents (+44 UK, +1 US/CA, +61 AU) that capture floor size and book site visits.",
      h1: "Turn every enquiry into a booked quote",
      intro:
        "Booking websites with built-in CRM and a 24/7 AI calling agent for epoxy flooring contractors across the UK, US, Canada, and Australia.",
      answerFirst:
        "Incodet delivers custom epoxy flooring websites with built-in CRM quoting forms and a 24/7 AI Voice Calling Agent connected to your local business line (+44 UK, +1 US/Canada, +61 Australia). While crews are mid-pour, every caller is greeted, asked garage square footage and slab condition, and booked for a site visit.",
      pains: [
        {
          title: "You are mid-pour when the phone rings",
          body: "Epoxy pot life will not wait while you peel off gloves to answer calls.",
        },
        {
          title: "Quotes need job details first",
          body: "Floor area, existing slab condition, and desired flake or metallic finish every time.",
        },
        {
          title: "Unanswered leads go cold fast",
          body: "Homeowners and warehouse managers book whichever contractor replies first.",
        },
      ],
      transcript: {
        caller: "Hi, I would like a quote for an epoxy garage floor.",
        ai: "Happy to help. Roughly how big is the garage, and is the slab bare concrete or already coated? I can book a free site measure straight into our calendar.",
        alert: "New site visit booked: 2-car garage epoxy quote — CRM record created.",
      },
      faq: [
        {
          question:
            "How does the AI agent work on both my website and local contractor phone line?",
          answer:
            "Callers dialing your +44, +1, or +61 number and visitors using your website widget talk to the same AI agent trained on your coating packages, lead times, and coverage areas.",
        },
        {
          question: "Does it save floor measurements and schedule quotes into my CRM?",
          answer:
            "Yes. It captures square footage, slab condition, and preferred callback times straight into your built-in CRM and books timezone-aware estimate visits onto your calendar.",
        },
        {
          question: "How does this protect revenue and follow regional privacy laws?",
          answer:
            "Every missed resin job costs hundreds or thousands in lost margin. Our forms and call disclosures support UK GDPR, US TCPA, Canadian PIPEDA, and Australian Privacy Principles compliance.",
        },
      ],
    },
  },
  {
    slug: "salons",
    name: "Salons",
    to: "/industries/salons",
    icon: "salon",
    page: {
      title: "Booking Websites, CRM & 24/7 AI Receptionist for Salons | Incodet",
      description:
        "Salon websites with built-in CRM, online booking, and a 24/7 AI voice agent (+44 UK, +1 US/CA, +61 AU) so clients book anytime without interrupting chair time.",
      h1: "Bookings that run while you work",
      intro:
        "Booking websites with built-in CRM, AI chat, and a 24/7 AI calling agent for hair and beauty salons across the UK, US, Canada, and Australia.",
      answerFirst:
        "Incodet creates mobile-first salon websites with built-in CRM and 24/7 online booking alongside an AI Voice Calling Agent wired to your local phone number (+44 UK, +1 US/Canada, +61 Australia). Stylists stay focused on clients in the chair while callers book treatments, reschedule, and fill late-evening diary gaps automatically.",
      pains: [
        {
          title: "The phone rings mid-colour or cut",
          body: "Stopping to pick up interrupts the guest sitting in front of you.",
        },
        {
          title: "Clients browse and book at 10pm",
          body: "When your salon closes at 6pm, evening enquiries slip away without online booking.",
        },
        {
          title: "Empty chair gaps reduce weekly margin",
          body: "Missed calls and late cancellations leave open appointments unbooked.",
        },
      ],
      transcript: {
        caller: "Hi, can I book a cut and colour this Saturday?",
        ai: "Of course. I have 11:00 or 14:30 open this Saturday in your local timezone. Which slot would you like me to reserve for you?",
        alert: "New booking: cut and colour, Saturday 11:00 — synced to salon CRM.",
      },
      faq: [
        {
          question: "How does the AI calling agent handle calls on our salon phone and website?",
          answer:
            "It answers your +44, +1, or +61 reception number and powers your website booking chat 24/7, quoting treatment times and prices before confirming open slots.",
        },
        {
          question: "Do online and phone bookings sync into one salon calendar and CRM?",
          answer:
            "Yes. Every cut, colour, and consultation writes into your built-in CRM and calendar with automated SMS or email reminders to keep no-shows low.",
        },
        {
          question: "What missed-call ROI do salons see, and is client data compliant?",
          answer:
            "Filling just 2 to 3 missed colour bookings a week covers your Growth plan easily. Client consent and records are handled cleanly under UK GDPR, TCPA, PIPEDA, and APPs.",
        },
      ],
      relatedWork: "bloom-studio",
    },
  },
  {
    slug: "barber-shops",
    name: "Barber Shops",
    to: "/industries/barber-shops",
    icon: "barber",
    page: {
      title: "Booking Websites, CRM & AI Receptionist for Barber Shops | Incodet",
      description:
        "Barber shop websites with built-in CRM, online booking, and a 24/7 AI voice receptionist (+44 UK, +1 US/CA, +61 AU) that answers while you keep cutting.",
      h1: "Keep cutting. We will pick up the phone.",
      intro:
        "Booking websites with built-in CRM and a 24/7 AI calling agent for barber shops across the UK, US, Canada, and Australia.",
      answerFirst:
        "Incodet builds barber shop websites with built-in CRM scheduling and a 24/7 AI Voice Calling Agent embedded online and on your local shop line (+44 UK, +1 US/Canada, +61 Australia). Barbers keep their clippers moving while the AI answers opening-hour questions, books timezone-aware chair slots, and fills after-hours bookings.",
      pains: [
        {
          title: "Clippers in hand, phone ringing",
          body: "You cannot pause a skin fade halfway through to check tomorrow's diary.",
        },
        {
          title: "Same routine questions all day",
          body: "Walk-in waits, cut prices, parking, and weekend opening hours.",
        },
        {
          title: "Late-evening enquiries go to voicemail",
          body: "Clients decide to book a trim after work when the shop lights are off.",
        },
      ],
      transcript: {
        caller: "Have you got anything this afternoon for a skin fade?",
        ai: "Yes, we have 15:30 or 16:15 open today. Can I take your name and mobile number to lock in 15:30?",
        alert: "New booking: skin fade, today 15:30 — saved in CRM.",
      },
      faq: [
        {
          question: "How does the 24/7 AI voice agent answer calls while we are cutting hair?",
          answer:
            "When your shop phone (+44, +1, or +61) rings during a busy rush or after hours, our AI greets the caller, answers hours and service questions, and offers open website or phone booking.",
        },
        {
          question: "Can clients book specific times straight into our CRM and chair calendar?",
          answer:
            "Yes. Both your custom website and AI voice agent read live availability in your local timezone, reserve the slot, and update your built-in CRM automatically.",
        },
        {
          question: "Does automating bookings pay off and meet UK, US, CA, and AU privacy rules?",
          answer:
            "Turning missed weekend calls into booked cuts fills quiet weekday chairs fast. Opt-in SMS/email confirmations follow GDPR, TCPA, PIPEDA, and Australian Privacy Principles.",
        },
      ],
      relatedWork: "bloom-studio",
    },
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    to: "/industries/restaurants",
    icon: "restaurant",
    page: {
      title: "Booking Websites, CRM & 24/7 AI Receptionist for Restaurants | Incodet",
      description:
        "Restaurant websites with online table reservations, built-in CRM, and a 24/7 AI phone agent (+44 UK, +1 US/CA, +61 AU) answering calls during dinner rush.",
      h1: "Every table booked, every call answered",
      intro:
        "Booking websites with built-in CRM and a 24/7 AI calling agent for restaurants across the UK, US, Canada, and Australia.",
      answerFirst:
        "Incodet builds restaurant websites with integrated table reservations, built-in CRM guest tracking, and a 24/7 AI Voice Calling Agent on your local dining number (+44 UK, +1 US/Canada, +61 Australia). Front-of-house teams serve seated diners during peak service while every phone enquiry gets answered with instant table bookings.",
      pains: [
        {
          title: "Phones ring non-stop during dinner service",
          body: "Hosts are seating tables and running plates when peak reservation calls arrive.",
        },
        {
          title: "Repetitive menu and hours questions",
          body: "Dietary options, parking, private dining, and last kitchen orders all day.",
        },
        {
          title: "Missed calls mean lost covers",
          body: "Hungry groups book whichever venue answers the phone or website first.",
        },
      ],
      transcript: {
        caller: "Hi, can I book a table for four tomorrow at 7pm?",
        ai: "Yes, we have a table for four open tomorrow at 7pm local time. May I take your name and mobile number to confirm the reservation?",
        alert: "New reservation: table for 4, tomorrow 7pm — confirmed in CRM.",
      },
      faq: [
        {
          question:
            "How does the 24/7 AI voice receptionist handle dinner-rush calls and website chat?",
          answer:
            "It connects to your +44, +1, or +61 venue number and website simultaneously, answering parking or allergen questions and reserving tables even at peak Friday night service.",
        },
        {
          question: "Do table reservations sync directly with our built-in CRM and host calendar?",
          answer:
            "Yes. Guest names, party sizes, dietary notes, and timezone-aware booking slots sync straight into the CRM and send instant confirmation emails or owner alerts.",
        },
        {
          question: "How fast does it pay back in extra covers, and is guest data compliant?",
          answer:
            "Saving even a single table of four each weekend outweighs the monthly plan, while reservation records comply with UK GDPR, US TCPA, Canadian PIPEDA, and APPs.",
        },
      ],
    },
  },
  {
    slug: "hotels",
    name: "Hotels",
    to: "/industries/hotels",
    icon: "hotel",
    page: {
      title: "Direct Booking Websites & 24/7 AI Front Desk for Hotels | Incodet",
      description:
        "Direct-booking hotel websites with built-in CRM and 24/7 AI phone and chat concierge (+44 UK, +1 US/CA, +61 AU) that cut third-party OTA commissions.",
      h1: "A front desk that never sleeps",
      intro:
        "Direct-booking websites with built-in CRM, AI chat, and a 24/7 AI calling agent for hotels and guesthouses across the UK, US, Canada, and Australia.",
      answerFirst:
        "Incodet builds direct-booking hotel websites with built-in CRM guest management and a 24/7 AI Voice Calling Agent connected to your reception number (+44 UK, +1 US/Canada, +61 Australia). Guesthouses and boutique hotels capture after-hours room enquiries around the clock and win more direct bookings instead of paying high OTA commissions.",
      pains: [
        {
          title: "International and 2am guest calls",
          body: "Late flight arrivals and overseas guests call across every timezone.",
        },
        {
          title: "Front desk stretched between guests and phones",
          body: "Check-in queues stall when receptionists stop to answer routine room calls.",
        },
        {
          title: "Losing margin to third-party OTA fees",
          body: "Unanswered direct enquiries click back onto booking portals charging 15% to 25%.",
        },
      ],
      transcript: {
        caller: "Do you have a double room free this Friday and Saturday?",
        ai: "Yes, we have a double room open for Friday and Saturday night. I can lock in your direct booking request right now — what name should I place it under?",
        alert: "New direct room booking request: double room, Fri–Sat — saved in CRM.",
      },
      faq: [
        {
          question:
            "How does the AI front desk cover +44, +1, and +61 numbers and website chat 24/7?",
          answer:
            "Callers dialing reception and guests browsing your website both reach your AI concierge, which handles check-in times, parking, room types, and direct stay enquiries across timezones.",
        },
        {
          question: "Do room requests sync with our CRM and property calendar?",
          answer:
            "Yes. Every guest enquiry logs into your built-in CRM with stay dates and preferences, alerting reception immediately via email and WhatsApp.",
        },
        {
          question: "What is the commission-saving ROI, and is guest data privacy covered?",
          answer:
            "Converting just two direct weekend stays a month saves significant OTA fees while guest records respect UK GDPR, TCPA, PIPEDA, and Australian Privacy Principles.",
        },
      ],
      relatedWork: "a1-airport-cars",
    },
  },
  {
    slug: "car-rentals",
    name: "Car Rentals",
    to: "/industries/car-rentals",
    icon: "car",
    page: {
      title: "Booking Websites, CRM & 24/7 AI Agent for Car Rentals | Incodet",
      description:
        "Car rental websites with built-in CRM and 24/7 AI Voice Calling Agents (+44 UK, +1 US/CA, +61 AU) answering fleet availability, deposits, and pickup times.",
      h1: "Rental enquiries answered in seconds",
      intro:
        "Booking websites with built-in CRM and a 24/7 AI calling agent for car rental and executive hire firms across the UK, US, Canada, and Australia.",
      answerFirst:
        "Incodet builds car rental websites with live fleet enquiry forms, built-in CRM, and a 24/7 AI Voice Calling Agent on your local dispatch line (+44 UK, +1 US/Canada, +61 Australia). Late-night flight arrivals and rental shoppers get instant vehicle availability, deposit answers, and confirmed reservation requests without hold music.",
      pains: [
        {
          title: "Renters want immediate vehicle answers",
          body: "If your desk misses one ring, travellers dial the next airport rental counter.",
        },
        {
          title: "Repetitive deposit and licence questions",
          body: "Daily rates, insurance excess, age limits, and pickup hours repeated nonstop.",
        },
        {
          title: "Delayed flights bring late-night calls",
          body: "Customers arriving past closing still need vehicle pickup help.",
        },
      ],
      transcript: {
        caller: "Do you have an automatic SUV free from Monday to Thursday?",
        ai: "Yes, an automatic SUV is open Monday through Thursday. What local pickup time suits you so I can send your reservation straight to dispatch?",
        alert: "New rental enquiry: automatic SUV, Mon–Thu — logged in CRM.",
      },
      faq: [
        {
          question:
            "How does the AI voice agent handle both our website and +44 / +1 / +61 rental lines?",
          answer:
            "Embedded on your fleet website and wired to your local branch phone number, the AI answers vehicle, mileage, and deposit rules immediately before capturing pickup times.",
        },
        {
          question: "Do reservations write directly into our rental CRM and pickup calendar?",
          answer:
            "Yes. Vehicle class, hire dates, and timezone-aware pickup times sync straight into your built-in CRM and notify dispatch by email and WhatsApp.",
        },
        {
          question: "How quickly does it recoup costs, and are driver records compliant?",
          answer:
            "Winning back even one multi-day SUV rental a week covers the system effortlessly, with customer data workflows aligned to UK GDPR, US TCPA, PIPEDA, and APPs.",
        },
      ],
      relatedWork: "barkers-executive",
    },
  },
  {
    slug: "car-wash",
    name: "Car Wash",
    to: "/industries/car-wash",
    icon: "wash",
    page: {
      title: "Booking Websites, CRM & AI Receptionist for Car Washes | Incodet",
      description:
        "Car wash and detailing websites with online booking, built-in CRM, and a 24/7 AI calling agent (+44 UK, +1 US/CA, +61 AU) that keeps detailing bays booked.",
      h1: "More washes booked, fewer missed calls",
      intro:
        "Online booking websites with built-in CRM and a 24/7 AI calling agent for car washes and detailers across the UK, US, Canada, and Australia.",
      answerFirst:
        "Incodet builds car wash and auto detailing websites with package booking, built-in CRM reminders, and a 24/7 AI Voice Calling Agent connected to your local number (+44 UK, +1 US/Canada, +61 Australia). Detailers keep working in the bays while callers book full valets and weekday slots directly into the calendar.",
      pains: [
        {
          title: "Hands wet or busy polishing when phones ring",
          body: "Pressure washers and buffers drown out calls throughout the day.",
        },
        {
          title: "Packed Saturdays, quiet Tuesday bays",
          body: "No automated booking engine to steer regulars into open midweek slots.",
        },
        {
          title: "Constant package and ceramic pricing calls",
          body: "Same wash tiers, ceramic coating timelines, and drop-off questions.",
        },
      ],
      transcript: {
        caller: "Can I book a full valet on Saturday morning?",
        ai: "Of course. A full valet takes about two hours. We have 9:00 or 11:30 open Saturday local time — which suits your drop-off?",
        alert: "New booking: full valet, Saturday 9:00 — synced to bay calendar & CRM.",
      },
      faq: [
        {
          question: "How does the 24/7 AI agent answer bay calls and web enquiries?",
          answer:
            "It answers your +44, +1, or +61 shop number and powers your website booking chat 24/7, explaining wash packages before booking open bay times.",
        },
        {
          question: "Are appointments synced into our detailing CRM and bay calendar?",
          answer:
            "Yes. Every valet, ceramic prep, or exterior wash syncs directly into your built-in CRM and timezone-aware bay calendar with automated reminder alerts.",
        },
        {
          question: "How does missed-call capture improve revenue, and is it GDPR/TCPA/APP safe?",
          answer:
            "Booking just two extra full details a week yields high monthly profit, with customer data and opt-in reminders supporting GDPR, TCPA, PIPEDA, and APPs.",
        },
      ],
    },
  },
  {
    slug: "dental-clinics",
    name: "Dental Clinics",
    to: "/industries/dental-clinics",
    icon: "dental",
    page: {
      title: "Patient Booking Websites & 24/7 AI Receptionist for Dentists | Incodet",
      description:
        "High-converting dental clinic websites with built-in patient CRM, transparent fees, and 24/7 AI Voice Calling Agents (+44 UK, +1 US/CA, +61 AU) that book chairs.",
      h1: "Patients booked, front desk freed up",
      intro:
        "Patient booking websites with built-in CRM and a 24/7 AI calling agent for dental practices across the UK, US, Canada, and Australia.",
      answerFirst:
        "Incodet delivers transparent dental clinic websites with built-in patient CRM, clinician slot booking, and a 24/7 AI Voice Calling Agent on your practice number (+44 UK, +1 US/Canada, +61 Australia). Front desks handle fewer routine calls while new patients book check-ups and emergency appointments online or by phone anytime.",
      pains: [
        {
          title: "Reception desks are permanently double-booked",
          body: "Checking patients in and taking payments leaves inbound phone lines ringing out.",
        },
        {
          title: "After-hours toothache and urgent requests",
          body: "Patients search late at night and book whichever clinic confirms an appointment first.",
        },
        {
          title: "Empty hygiene chairs from missed reminders",
          body: "Unconfirmed follow-ups leave costly clinician gaps in the daily diary.",
        },
      ],
      transcript: {
        caller: "Hi, I have a toothache. Can I get an appointment this week?",
        ai: "I am sorry you are in discomfort. Our earliest open emergency assessment is Wednesday at 10:15 local time. Shall I reserve that slot for you?",
        alert: "New patient appointment: emergency toothache, Wed 10:15 — added to CRM.",
      },
      faq: [
        {
          question: "How does the 24/7 AI voice receptionist work on our dental line and website?",
          answer:
            "Connected to your +44, +1, or +61 clinic line and embedded on your website, it answers new patient enquiries, shares treatment fees, and schedules open appointments 24/7.",
        },
        {
          question: "Does it sync appointments into our CRM and clinician schedule?",
          answer:
            "Yes. Confirmed check-ups, hygiene slots, and emergency triage requests write into your built-in CRM with timezone-aware calendar sync and automated patient reminders.",
        },
        {
          question: "What is the practice ROI, and how do you handle clinical privacy compliance?",
          answer:
            "Just one or two recovered high-value treatment plans cover the entire system. Non-clinical reception workflows align cleanly with UK GDPR, US TCPA, PIPEDA, and APPs, never offering medical advice.",
        },
      ],
      note: medicalNote,
      relatedWork: "northpoint-dental",
    },
  },
  {
    slug: "medical-clinics",
    name: "Medical Clinics",
    to: "/industries/medical-clinics",
    icon: "medical",
    page: {
      title: "Patient Booking Websites & 24/7 AI Receptionist for Clinics | Incodet",
      description:
        "Medical clinic websites with built-in CRM, online scheduling, and 24/7 AI calling agents (+44 UK, +1 US/CA, +61 AU) that eliminate the 8am phone queue.",
      h1: "Appointments booked without the phone queue",
      intro:
        "Patient booking websites with built-in CRM and a 24/7 AI calling agent for private medical, physio, and wellness clinics across the UK, US, Canada, and Australia.",
      answerFirst:
        "Incodet builds medical clinic websites with online patient scheduling, built-in CRM workflows, and a 24/7 AI Voice Calling Agent connected to your reception line (+44 UK, +1 US/Canada, +61 Australia). Practices relieve morning phone queues with instant appointment rescheduling and general reception answers while strictly directing emergencies appropriately.",
      pains: [
        {
          title: "The 8am morning phone rush",
          body: "Dozens of callers jam reception lines simultaneously at opening time.",
        },
        {
          title: "Routine rescheduling drains admin hours",
          body: "Moving one follow-up takes multiple minutes of receptionist time.",
        },
        {
          title: "Same reception questions all day",
          body: "Parking, opening hours, new-patient intake, and insurance acceptance.",
        },
      ],
      transcript: {
        caller: "I need to move my appointment on Thursday to next week.",
        ai: "No problem. In your local timezone, I can offer Tuesday at 9:40 or Wednesday at 14:00. Which time suits you best?",
        alert: "Appointment rescheduled: Thursday moved to Tuesday 9:40 — CRM updated.",
      },
      faq: [
        {
          question:
            "Can the 24/7 AI voice agent reduce phone queues on our local clinic number and website?",
          answer:
            "Yes. Handling multiple callers concurrently on your +44, +1, or +61 line and website chat clears 8am hold queues for bookings, rescheduling, and location questions.",
        },
        {
          question: "How do patient bookings sync into the clinic CRM and practitioner calendars?",
          answer:
            "Bookings and reschedules update your built-in CRM and practitioner schedules in real time using timezone-aware validation, while alerting front-desk staff immediately.",
        },
        {
          question:
            "Is the AI compliant with GDPR, TCPA, PIPEDA, and Australian Privacy Principles?",
          answer:
            "Yes. The receptionist handles non-clinical scheduling and general information only, follows emergency escalation guardrails, and aligns with regional privacy rules.",
        },
      ],
      note: medicalNote,
      relatedWork: "northpoint-dental",
    },
  },
  {
    slug: "professional-firms",
    name: "Law & Accounting Firms",
    to: "/industries/professional-firms",
    icon: "firm",
    page: {
      title: "Websites, CRM & 24/7 AI Receptionist for Law & Accounting | Incodet",
      description:
        "Professional firm websites with built-in CRM intake and 24/7 AI Voice Calling Agents (+44 UK, +1 US/CA, +61 AU) that capture consultations without disrupting billable work.",
      h1: "Every enquiry captured, every consultation booked",
      intro:
        "Client websites with built-in CRM, AI chat, and a 24/7 AI calling agent for law practices, accountants, and consultants across the UK, US, Canada, and Australia.",
      answerFirst:
        "Incodet builds client acquisition websites with built-in CRM intake and a 24/7 AI Voice Calling Agent on your firm's local number (+44 UK, +1 US/Canada, +61 Australia) for law practices, accountants, and consultants. Partners protect billable hours while qualified prospects answer intake questions and book timezone-aware consultations anytime.",
      pains: [
        {
          title: "Billable focus broken by unscreened calls",
          body: "Every unplanned enquiry pulls partners and senior staff out of deep client work.",
        },
        {
          title: "After-hours retainers slip away",
          body: "Founders and families research legal or tax support in the evening.",
        },
        {
          title: "Out-of-scope enquiries waste partner time",
          body: "Without structured intake, staff spend hours fielding matters you do not take on.",
        },
      ],
      transcript: {
        caller: "Hi, I need help with my small business tax return. Can I speak to someone?",
        ai: "I can book you an initial consultation with an advisor. In your timezone, does tomorrow at 11:00 or 15:30 work better?",
        alert: "New consultation booked: small business tax intake, tomorrow 11:00 — in CRM.",
      },
      faq: [
        {
          question:
            "How does the 24/7 AI voice agent handle firm calls (+44, +1, +61) and web intake?",
          answer:
            "It answers your firm's local phone line and website intake drawer around the clock, screening enquiry type and practice fit before offering consultation slots.",
        },
        {
          question: "Does qualified intake sync directly into our CRM and partner calendars?",
          answer:
            "Yes. Caller details, matter summaries, and timezone-aware consultation times sync directly into your built-in CRM and calendar with instant partner alerts.",
        },
        {
          question: "How does automation improve billable ROI while respecting privacy rules?",
          answer:
            "Just one retained corporate or legal client far exceeds the monthly investment, while client intake follows UK GDPR, US TCPA, Canadian PIPEDA, and APPs.",
        },
      ],
      relatedWork: "humandata-labs",
    },
  },
];

export const industries = visible(all, ["name", "to"]);

export function getIndustry(slug: string): Industry {
  const i = all.find((x) => x.slug === slug);
  if (!i) throw new Error(`Unknown industry: ${slug}`);
  return i;
}

export const industryWhatYouGet = [
  "High-converting custom website with built-in CRM and 24/7 online booking",
  "24/7 AI Voice Calling Agent embedded on your website and local (+44, +1, +61) line",
  "Timezone-aware calendar synchronization and AI website chatbot",
  "Instant owner alerts by email and WhatsApp for every lead and booking",
];

export const industryFaq = [
  "How does the 24/7 AI calling agent work?",
  "How long does it take?",
  "Is there a contract?",
];
