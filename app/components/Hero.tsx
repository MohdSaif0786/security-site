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
  const particles = useParticles(20);
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero" id="home" aria-label="Hero">
        <div className="hero-bg">
          <Image
            src="/ai_hero_guard.png"
            alt="AI Professional Combatant Securitas operations center"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            priority
          />
          <div className="hero-overlay"></div>
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

        <div className="hero-container">
          <div className="hero-content">
            <div className="badge-glow">
              <span className="badge-text">Next-Generation Security Solutions</span>
            </div>
            
            <h1 className="hero-title">
              Protecting What <br />
              <span className="accent">Matters Most</span> <br />
            </h1>

            <p className="hero-sub">
              Combatant Securitas delivers elite armed and unarmed guard services for
              corporate campuses, residential communities, high-profile events, and executive
              principals.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary-glow" id="hero-cta-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Get a Custom Security Plan
              </a>
              <a href="tel:+919467295673" className="btn-secondary-outline" id="hero-cta-call">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Call +91 94672 95673
              </a>
            </div>

            {/* Trust badges row */}
            <div className="hero-trust-row">
              <div className="trust-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Fully Licensed & Insured
              </div>
              <div className="trust-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                24/7 Dispatch Center
              </div>
              <div className="trust-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                Veteran-Owned
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glass-panel">
              <div className="glass-stats">
                {[
                  { num: '500+', label: 'Clients Protected', icon: 'shield' },
                  { num: '15+', label: 'Years Experience', icon: 'star' },
                  { num: '< 24h', label: 'Response Time', icon: 'zap' },
                ].map((s) => (
                  <div key={s.label} className="glass-stat-item">
                    <div className="stat-icon-wrapper">
                      {s.icon === 'shield' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                      {s.icon === 'star' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>}
                      {s.icon === 'zap' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>}
                    </div>
                    <div className="stat-text-wrapper">
                      <div className="glass-stat-num">{s.num}</div>
                      <div className="glass-stat-label">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
            // duplicate for seamless loop
            'Meridian Capital Group',
            'Northgate Plaza Mall',
            'Horizon Medical Center',
            'The Wyndover HOA',
            'TechSphere Conference',
            'Sterling Logistics',
            'Crestview Estates',
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
