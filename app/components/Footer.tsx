'use client';

import '../sections.css';

const quickLinks = [
  { label: 'Commercial Security', href: '#service-commercial' },
  { label: 'Event Security', href: '#service-events' },
  { label: 'Residential Patrol', href: '#service-residential' },
  { label: 'Executive Protection', href: '#service-executive' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Accessibility', href: '#' },
  { label: 'Sitemap', href: '#' },
];

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center' }}>
              <img src="/image.png" alt="Combatant Securitas Logo" style={{ height: '40px', marginRight: '12px' }} />
              <div className="logo-text">
                <div className="logo-name" style={{ fontSize: '1.2rem' }}>COMBATANT SECURITAS</div>
              </div>
            </div>
            <p>
              Providing elite private security guard services across the Greater Metro Area since 2009.
              Licensed, bonded, and trusted by 500+ clients.
            </p>
            <div className="footer-socials">
              {[
                { icon: '𝕏', label: 'Twitter / X' },
                { icon: 'in', label: 'LinkedIn' },
                { icon: 'f', label: 'Facebook' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Services</h4>
            <nav className="footer-links" aria-label="Service links">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-item">
              <strong style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', display: 'block', marginBottom: '0.15rem' }}>24/7 Dispatch</strong>
              <a href="tel:+919467295673" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>+91 94672 95673</a>
            </div>
            <div className="footer-contact-item">
              <strong style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', display: 'block', marginBottom: '0.15rem' }}>Email</strong>
              <a href="mailto:tinga.bull@gmail.com" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>tinga.bull@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <strong style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', display: 'block', marginBottom: '0.15rem' }}>Address</strong>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', display: 'block' }}>SHOP NO 1960, CABIN NO.1, FIRST FLOOR<br />SECTOR 45B, CHANDIGARH</span>
            </div>
          </div>

          {/* Licensing */}
          <div className="footer-col">
            <h4>Licensing</h4>
            <div className="footer-contact-item">
              <strong style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', display: 'block', marginBottom: '0.15rem' }}>PPO License</strong>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>State Lic. #PPO-18294-B</span>
            </div>
            <div className="footer-contact-item">
              <strong style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', display: 'block', marginBottom: '0.15rem' }}>Guard Registration</strong>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>BSIS Reg. #SG-2024-09412</span>
            </div>
            <div className="footer-contact-item">
              <strong style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', display: 'block', marginBottom: '0.15rem' }}>Liability Coverage</strong>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>$5M General Liability</span>
            </div>
            <div className="license-badge" aria-label="Verified licensed security operator">
              Verified Licensed Operator
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Combatant Securitas. All rights reserved.</p>
          <nav className="footer-bottom-links" aria-label="Legal links">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
