import { contact } from "@/data/siteData";

export type BookingData = {
  fullName: string;
  email: string;
  whatsapp: string;
  travelDate: string;
  tripDetails: string;
  notes?: string;
};

const waNumber = `92${contact.whatsapp.replace(/^0/, "")}`;

export function buildWhatsAppMessage(data: BookingData) {
  return [
    "New Booking Request - Manar Transport",
    "",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `WhatsApp: ${data.whatsapp}`,
    `Travel Date: ${data.travelDate}`,
    `Trip Details: ${data.tripDetails}`,
    `Additional Notes: ${data.notes?.trim() || "None"}`,
  ].join("\n");
}

export function buildWhatsAppUrl(data: BookingData) {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(buildWhatsAppMessage(data))}`;
}

export function buildWhatsAppContactUrl(message = "Hello Manar Transport, I would like to ask about a booking.") {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppContact(message?: string) {
  window.open(buildWhatsAppContactUrl(message), "_blank", "noopener,noreferrer");
}
