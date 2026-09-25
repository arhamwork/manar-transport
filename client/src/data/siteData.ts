export const media = {
  makkah: "/manus-storage/Gkuw1PM9uov1_cc931477.jpg",
  van: "/manus-storage/2JQbULixoQaA_ec833dc5.jpg",
  desert: "/manus-storage/Ru8agv27jXfv_56781793.jpg",
  tower: "/manus-storage/epkIDHTw2BKc_bc638c67.jpg",
  chauffeur: "/manus-storage/skGDcAD5VzkI_fba53f0c.jpg",
};

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  icon: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "airport-transfers",
    title: "Airport Pick & Drop",
    eyebrow: "Arrive with ease",
    description: "A calm, punctual welcome from the terminal to your hotel, residence, or next connection.",
    image: media.van,
    icon: "plane",
    details: ["Meet-and-greet flow", "Flexible arrival coordination", "Luggage-conscious vehicles"],
  },
  {
    slug: "makkah-transfers",
    title: "Makkah Transfers",
    eyebrow: "Sacred city access",
    description: "Thoughtful transportation for guests travelling to and around Makkah with comfort in mind.",
    image: media.makkah,
    icon: "mosque",
    details: ["Hotel and station connections", "Family-friendly coordination", "Professional driver support"],
  },
  {
    slug: "madinah-transfers",
    title: "Madinah Transfers",
    eyebrow: "A considered journey",
    description: "Reliable connections for Madinah stays, airport movements, and intercity travel planning.",
    image: media.tower,
    icon: "landmark",
    details: ["Intercity coordination", "Comfort-first routing", "Clear WhatsApp follow-up"],
  },
  {
    slug: "ziyarat-transportation",
    title: "Ziyarat Transportation",
    eyebrow: "Move with intention",
    description: "Private transportation for planned Ziyarat visits, paced around your group and itinerary.",
    image: media.desert,
    icon: "route",
    details: ["Private group journeys", "Flexible day planning", "Local route placeholder"],
  },
  {
    slug: "intercity-transportation",
    title: "Intercity Transfers",
    eyebrow: "Beyond one destination",
    description: "Connect cities and stays with a calm, private travel experience for individuals and groups.",
    image: media.desert,
    icon: "road",
    details: ["Point-to-point planning", "Comfortable long-distance travel", "Vehicle options by group size"],
  },
  {
    slug: "vip-transportation",
    title: "VIP Transportation",
    eyebrow: "A quieter standard",
    description: "A discreet, polished travel layer for guests who value privacy, presentation, and ease.",
    image: media.chauffeur,
    icon: "star",
    details: ["Premium vehicle options", "Chauffeur-style service", "Priority coordination"],
  },
];

export type Vehicle = {
  slug: string;
  name: string;
  category: string;
  intro: string;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  seats: string;
  luggage: string;
};

export const vehicles: Vehicle[] = [
  {
    slug: "executive-sedan",
    name: "Executive Sedan",
    category: "Luxury Sedan",
    intro: "A composed, comfortable choice for airport journeys and city transfers.",
    description: "[ADD VEHICLE DETAILS] This vehicle profile is intentionally structured for your final fleet specifications, model name, and approved imagery.",
    image: media.chauffeur,
    gallery: [media.chauffeur, media.van, media.desert],
    features: ["Quiet cabin", "Air conditioning", "Professional driver", "Flexible luggage space"],
    seats: "[ADD SEATING INFO]",
    luggage: "[ADD LUGGAGE INFO]",
  },
  {
    slug: "premium-van",
    name: "Premium Van",
    category: "Van",
    intro: "A practical, elevated option for families, small groups, and pilgrimage travel.",
    description: "[ADD VEHICLE DETAILS] Add the approved model, specifications, and final service inclusions here.",
    image: media.van,
    gallery: [media.van, media.chauffeur, media.desert],
    features: ["Group-friendly layout", "Comfort-focused seating", "Large luggage zone", "Smooth airport access"],
    seats: "[ADD SEATING INFO]",
    luggage: "[ADD LUGGAGE INFO]",
  },
  {
    slug: "desert-suv",
    name: "Journey SUV",
    category: "Premium SUV",
    intro: "A confident companion for intercity routes, Ziyarat plans, and longer Saudi journeys.",
    description: "[ADD VEHICLE DETAILS] Replace the placeholder with the final SUV model and confirmed equipment list.",
    image: media.desert,
    gallery: [media.desert, media.van, media.tower],
    features: ["Road-trip comfort", "Elevated driving position", "Climate control", "Flexible route planning"],
    seats: "[ADD SEATING INFO]",
    luggage: "[ADD LUGGAGE INFO]",
  },
  {
    slug: "city-transfer",
    name: "City Transfer Vehicle",
    category: "Sedan",
    intro: "A refined everyday option for hotel transfers, city movement, and private bookings.",
    description: "[ADD VEHICLE DETAILS] Add the approved vehicle data and imagery once the final fleet list is confirmed.",
    image: media.tower,
    gallery: [media.tower, media.chauffeur, media.makkah],
    features: ["Clean interior", "Air conditioning", "Private travel", "Planned pick-up"],
    seats: "[ADD SEATING INFO]",
    luggage: "[ADD LUGGAGE INFO]",
  },
];

export const fleetCategories = [
  { slug: "sedans", label: "Sedans", title: "Sedans for composed city movement.", body: "A refined choice for airport arrivals, hotel transfers, and private city journeys where comfort and presentation matter.", image: media.chauffeur, match: "Sedan" },
  { slug: "luxury", label: "Luxury", title: "Luxury travel, quietly considered.", body: "A premium vehicle category for guests who want a more elevated cabin, a polished welcome, and a calmer road experience.", image: media.tower, match: "Luxury" },
  { slug: "suvs", label: "SUVs", title: "SUVs for the longer road.", body: "Confident vehicles for intercity movement, Ziyarat plans, and routes where space and road-trip comfort make the difference.", image: media.desert, match: "SUV" },
  { slug: "vans", label: "Vans", title: "Room for the people and the plan.", body: "Practical, comfortable group transportation for families, small groups, luggage, and pilgrimage travel planning.", image: media.van, match: "Van" },
];

export const infoPages = [
  { slug: "useful-information", label: "Useful Information", title: "The practical things, in one place.", eyebrow: "Useful information", body: "A clear starting point for airport arrivals, booking preparation, and the small details that make a travel day easier.", image: media.makkah, details: ["Share your arrival or departure point", "Keep baggage and group size in the request", "Use WhatsApp for the fastest follow-up"] },
  { slug: "hajj-umrah-information", label: "Hajj & Umrah Information", title: "Plan the movement around a meaningful journey.", eyebrow: "Hajj & Umrah information", body: "Transportation planning for Hajj and Umrah-related journeys, with current religious and regulatory guidance always confirmed through official authorities.", image: media.tower, details: ["Confirm current requirements with official Saudi sources", "Share hotel, city, group, and timing details", "Ask the Manar team about available transport options"] },
  { slug: "travel-information", label: "Travel Information", title: "A little more clarity before you go.", eyebrow: "Travel information", body: "Helpful travel-planning notes for routes between airports, hotels, Makkah, Madinah, and the destinations in between.", image: media.desert, details: ["Allow time for airport formalities and baggage", "Plan intercity routes around your real schedule", "Keep a direct contact channel open for changes"] },
];

export const navGroups = [
  { label: "Services", href: "/services", items: services.map(({ title, slug }) => ({ label: title, href: `/services/${slug}` })) },
  { label: "Fleet", href: "/fleet", items: fleetCategories.map(({ label, slug }) => ({ label, href: `/fleet/${slug}` })) },
  { label: "About", href: "/about", items: [{ label: "Our Story & Mission", href: "/about/our-story" }, { label: "CEO Message", href: "/about/ceo-message" }] },
  { label: "Info", href: "/info", items: infoPages.map(({ label, slug }) => ({ label, href: `/info/${slug}` })) },
  { label: "Policies", href: "/policies", items: [{ label: "Terms & Conditions", href: "/policies/terms" }, { label: "Privacy Policy", href: "/policies/privacy" }, { label: "Refund / Cancellation", href: "/policies/refund" }] },
  { label: "Travel Agent", href: "/travel-agent", items: [{ label: "Partner Login", href: "/travel-agent/partner-login" }, { label: "Commission Program", href: "/travel-agent/commission-program" }] },
];

export const reels = [
  { title: "A calm arrival in Makkah", label: "Makkah", image: media.makkah },
  { title: "Roads between moments", label: "Saudi travel", image: media.desert },
  { title: "Quiet details, considered service", label: "Experience", image: media.chauffeur },
  { title: "Move together, comfortably", label: "Group travel", image: media.van },
];

export const faqs = [
  { question: "How does booking through WhatsApp work?", answer: "Complete the short form and choose Send via WhatsApp. Your message opens in WhatsApp so you can review and send it directly to Manar Transport. Staff can then follow up with availability and final details." },
  { question: "Can I request a vehicle for a group?", answer: "Yes. Share your group size and trip details in the booking form. The team can then recommend an available vehicle category." },
  { question: "Do you provide Hajj and Umrah transportation?", answer: "The site is structured for Hajj and Umrah-related transportation inquiries. Final availability, routes, and current requirements should be confirmed with Manar Transport and official Saudi authorities." },
  { question: "Where can I see the final fleet specifications?", answer: "The fleet pages include editable placeholders for approved vehicle specifications. Replace the marked fields in client/src/data/siteData.ts once the company confirms the final list." },
];

export const contact = {
  whatsapp: "031582422773",
  email: "manartransportservice@gmail.com",
  address: "24 B, Islamabad, Sector F-14",
};

export const tickerItems = ["Airport Transfers", "Makkah Transportation", "Madinah Transportation", "Hajj & Umrah", "Ziyarat Trips", "VIP Transportation", "24/7 Support"];
