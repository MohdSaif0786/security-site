'use client';

import { useState, useEffect } from 'react';
import '../navbar.css';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Documents', href: '#documents' },
  { label: 'About', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container navbar-inner">
          <a href="#" className="logo" aria-label="Combatant Securitas Home" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/image.png" alt="Combatant Securitas Logo" style={{ height: '40px', marginRight: '12px' }} />
            <div className="logo-text">
              <div className="logo-name" style={{ fontSize: '1.2rem' }}>COMBATANT SECURITAS</div>
            </div>
          </a>

          <ul className="nav-links" role="list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
            id="nav-cta-btn"
          >
            Free Consultation
          </a>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="mobile-nav-link"
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-primary"
          onClick={(e) => handleNavClick(e, '#contact')}
          style={{ marginTop: '1rem' }}
        >
          Free Consultation
        </a>
      </div>
    </>
  );
}
