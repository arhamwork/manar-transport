import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faChevronDown, faMagnifyingGlass, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { navGroups } from "@/data/siteData";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function Header() {
  const [location, navigate] = useLocation();
  const { direction, scrolled } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/search${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`);
    setSearchOpen(false);
    setMobileOpen(false);
  };

  return (
    <>
      <header className={`site-header ${direction === "down" && scrolled ? "site-header--hidden" : ""} ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="header-shell">
          <Link href="/" className="brand-lockup" aria-label="Manar Transport home">
            <span className="brand-mark">M</span>
            <span className="brand-copy"><strong>MANAR</strong><small>TRANSPORT</small></span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navGroups.map((group) => (
              <div className="nav-group" key={group.label}>
                <Link href={group.href} className={`nav-link ${location.startsWith(group.href) ? "is-active" : ""}`}>
                  {group.label} <FontAwesomeIcon icon={faChevronDown} className="nav-chevron" />
                </Link>
                <div className="nav-dropdown">
                  <div className="dropdown-kicker">Explore {group.label}</div>
                  {group.items.map((item) => <Link key={item.label} href={item.href} className="dropdown-link">{item.label}<FontAwesomeIcon icon={faArrowRight} /></Link>)}
                  <Link href={group.href} className="dropdown-view-all">View all <FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>
              </div>
            ))}
          </nav>

          <div className="header-actions">
            <button className="icon-button" aria-label="Search" onClick={() => setSearchOpen(true)}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <Link className="icon-button" href="/contact" aria-label="Contact Manar Transport"><FontAwesomeIcon icon={faPhone} /></Link>
            <Link className="header-cta" href="/contact">Book a ride <FontAwesomeIcon icon={faArrowRight} /></Link>
            <button className="mobile-menu-button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} onClick={() => setMobileOpen((open) => !open)}>
              <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} />
            </button>
          </div>
        </div>
      </header>

      {searchOpen && <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search Manar Transport">
        <button className="search-close" onClick={() => setSearchOpen(false)} aria-label="Close search"><FontAwesomeIcon icon={faXmark} /></button>
        <div className="search-panel">
          <span className="eyebrow">Search the journey</span>
          <h2>Find a service, route, or answer.</h2>
          <form onSubmit={submitSearch} className="search-form">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “Makkah”, “fleet”, or “privacy”" />
            <button type="submit">Search</button>
          </form>
          <p>Search is designed to help you reach the right page quickly. For a booking, use WhatsApp for the fastest follow-up.</p>
        </div>
      </div>}

      <div className={`mobile-drawer ${mobileOpen ? "mobile-drawer--open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="mobile-drawer__top"><span className="eyebrow">Navigation</span><button className="icon-button" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><FontAwesomeIcon icon={faXmark} /></button></div>
        <div className="mobile-drawer__links">
          {navGroups.map((group) => (
            <div className="mobile-nav-group" key={group.label}>
              <div className="mobile-nav-row"><Link href={group.href} onClick={() => setMobileOpen(false)}>{group.label}</Link><button onClick={() => setExpanded(expanded === group.label ? null : group.label)} aria-expanded={expanded === group.label}><FontAwesomeIcon icon={faChevronDown} /></button></div>
              <div className={`mobile-subnav ${expanded === group.label ? "mobile-subnav--open" : ""}`}>
                {group.items.map((item) => <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>)}
              </div>
            </div>
          ))}
        </div>
        <div className="mobile-drawer__footer"><Link className="gold-button gold-button--full" href="/contact" onClick={() => setMobileOpen(false)}>Start a booking <FontAwesomeIcon icon={faArrowRight} /></Link><span>031582422773</span></div>
      </div>
      {mobileOpen && <button className="mobile-scrim" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}
    </>
  );
}
