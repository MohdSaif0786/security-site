'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import '../hero.css';

type Particle = { id: number; size: number; left: number; duration: number; delay: number };

function useParticles(count: number): Particle[] {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 3,
        left: Math.random() * 100,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 15,
      }))
    );
  }, [count]);
  return particles;
}

export default function Hero() {
  const particles = useParticles(14);
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero" id="home" aria-label="Hero">
        <div className="hero-bg">
          <Image
            src="/hero_guard_new.png"
            alt="Professional Aegis Shield security operations center"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.25 }}
            priority
          />
        </div>

        {/* Decorative particles */}
        <div className="hero-particles" aria-hidden="true">
          {particles.map((p) => (
            <span
              key={p.id}
              className="particle"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.left}%`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="container">
          <div className="hero-content">

            <h1>
              Protecting What <br />
              <span className="accent">Matters Most</span> — <br />
              Around the Clock.
            </h1>

            <p className="hero-sub">
              Aegis Shield Security Group delivers elite armed and unarmed guard services for
              corporate campuses, residential communities, high-profile events, and executive
              principals. Precision. Discretion. Unwavering reliability.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary" id="hero-cta-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Get a Custom Security Plan
              </a>
              <a href="tel:+18005550100" className="btn-secondary" id="hero-cta-call">
                Call (800) 555-0100
              </a>
            </div>

            {/* Trust badges row */}
            <div className="hero-trust-row">
              {[
                { text: 'Fully Licensed & Insured' },
                { text: '24/7 Dispatch Center' },
                { text: 'Veteran-Owned' },
                { text: 'BSIS Compliant' },
              ].map((b) => (
                <div key={b.text} className="trust-badge">
                  {b.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="hero-stats" aria-label="Key statistics">
          {[
            { num: '500+', label: 'Clients Protected' },
            { num: '15+', label: 'Years Experience' },
            { num: '< 24h', label: 'Response Time' },
          ].map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-number">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </section>

      {/* ── Social Proof Banner ── */}
      <div className="proof-banner" aria-label="Trusted by leading organizations">
        <p className="proof-label">Trusted by top businesses and communities in the Greater Metro Area</p>
        <div className="proof-track" role="list">
          {[
            'Meridian Capital Group',
            'Northgate Plaza Mall',
            'Horizon Medical Center',
            'The Wyndover HOA',
            'TechSphere Conference',
            'Sterling Logistics',
            'Crestview Estates',
            'Summit Investment Bank',
            // duplicate for seamless loop
            'Meridian Capital Group',
            'Northgate Plaza Mall',
            'Horizon Medical Center',
            'The Wyndover HOA',
            'TechSphere Conference',
            'Sterling Logistics',
            'Crestview Estates',
            'Summit Investment Bank',
          ].map((name, i) => (
            <div key={i} className="proof-item" role="listitem">
              <div className="proof-dot" aria-hidden="true" />
              {name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
