import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faLocationDot, faMessage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";
import { contact } from "@/data/siteData";
import { buildWhatsAppContactUrl } from "@/utils/whatsapp";

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-main container">
      <div className="footer-brand-col">
        <Link href="/" className="brand-lockup brand-lockup--footer"><span className="brand-mark">M</span><span className="brand-copy"><strong>MANAR</strong><small>TRANSPORT</small></span></Link>
        <p>Considered transportation for Saudi journeys, airport transfers, and Hajj &amp; Umrah travel planning.</p>
        <a className="footer-whatsapp" href={buildWhatsAppContactUrl()} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMessage} /> WhatsApp the team <FontAwesomeIcon icon={faArrowRight} /></a>
      </div>
      <div><span className="footer-label">Navigate</span><div className="footer-links"><Link href="/services">Services</Link><Link href="/fleet">Fleet</Link><Link href="/about">About</Link><Link href="/info">Information</Link><Link href="/contact">Contact</Link></div></div>
      <div><span className="footer-label">Company</span><div className="footer-links"><Link href="/about/our-story">Our story</Link><Link href="/travel-agent">Travel agent</Link><Link href="/policies">Policies</Link><Link href="/travel-agent/partner-login">Partner login</Link></div></div>
      <div className="footer-contact"><span className="footer-label">Contact</span><a href={buildWhatsAppContactUrl()} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMessage} /> {contact.whatsapp}</a><a href={`mailto:${contact.email}`}><FontAwesomeIcon icon={faEnvelope} /> {contact.email}</a><span><FontAwesomeIcon icon={faLocationDot} /> {contact.address}</span></div>
    </div>
    <div className="footer-bottom container"><span>© {new Date().getFullYear()} Manar Transport. All rights reserved.</span><span>Built for safe, comfortable movement.</span></div>
  </footer>;
}
