import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faRobot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { openWhatsAppContact } from "@/utils/whatsapp";

function replyFor(message: string) {
  const value = message.toLowerCase();
  if (/[\u0600-\u06ff]/.test(message)) return "يمكن لفريق مانار للنقل مساعدتك في تفاصيل الرحلة والحجز. لمعلومات الحج والعمرة الرسمية، يرجى الرجوع إلى الجهات السعودية المختصة.";
  if (/urdu|السلام|hajj|umrah|makkah|madinah/.test(value)) return "Manar Transport aap ki booking aur travel details mein madad kar sakti hai. Hajj & Umrah ki official maloomat ke liye Saudi authorities se tasdeeq karein.";
  if (/booking|book|ride|airport|transfer/.test(value)) return "We can help start a booking. Share your route, date, group size, and preferred WhatsApp number, or use the WhatsApp button below.";
  return "For further assistance, please contact Manar Transport on WhatsApp. Our team can confirm routes, availability, and final details.";
}

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([]);
  const send = (event: React.FormEvent) => { event.preventDefault(); if (!message.trim()) return; setMessages((items) => [...items, { from: "user", text: message }, { from: "bot", text: replyFor(message) }]); setMessage(""); };
  return <>
    <div className="floating-actions">
      <button className="floating-button floating-button--chat" aria-label="Open multilingual chatbot" onClick={() => setOpen((value) => !value)}><FontAwesomeIcon icon={faRobot} /></button>
      <button className="floating-button floating-button--whatsapp" aria-label="Chat on WhatsApp" onClick={() => openWhatsAppContact()}><FontAwesomeIcon icon={faMessage} /></button>
    </div>
    {open && <div className="chatbot-panel" role="dialog" aria-label="Manar Transport assistant">
      <div className="chatbot-head"><div><span className="eyebrow">Manar assistant</span><strong>How can we help?</strong></div><button className="icon-button" onClick={() => setOpen(false)} aria-label="Close assistant">×</button></div>
      <div className="chatbot-body"><div className="chat-message chat-message--bot">Assalam-o-alaikum. Ask in English, Urdu, Roman Urdu, or Arabic.</div>{messages.map((item, index) => <div className={`chat-message chat-message--${item.from}`} key={`${item.text}-${index}`}>{item.text}</div>)}</div>
      <form className="chatbot-form" onSubmit={send}><input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Ask about a booking..." aria-label="Chat message" /><button type="submit"><FontAwesomeIcon icon={faMessage} /></button></form>
      <button className="chatbot-escalate" onClick={() => openWhatsAppContact()}>Continue on WhatsApp</button>
    </div>}
  </>;
}
