'use client';

import '../sections.css';

const testimonials = [
  {
    id: 'testimonial-jennifer',
    stars: 5,
    quote:
      "We manage a 42-floor commercial tower in the financial district and had cycled through three security vendors in two years. Aegis Shield has been with us for 18 months now, and for the first time, I can genuinely say I don't think about security anymore—because I know it's handled. Their officers are impeccably presented, proactive about reporting, and the dispatch team responds to my calls within minutes. The ROI has been tangible: incidents are down 60%, and tenants have noticed the difference.",
    name: 'Jennifer M.',
    title: 'Corporate Facilities Director',
    company: 'Pinnacle Properties Group',
    initials: 'JM',
  },
  {
    id: 'testimonial-marcus',
    stars: 5,
    quote:
      "I produce large-scale corporate conferences and product launches—events where a single security misstep can end up on social media and tank a client relationship. Aegis Shield handled crowd management for our 4,200-person annual summit and was absolutely flawless. Pre-event planning was thorough, the team was briefed down to the detail, and on the day they blended in while running a tight operation. Not one incident. I won't work with anyone else for events of this scale.",
    name: 'Marcus T.',
    title: 'Senior Event Director',
    company: 'Apex Production Co.',
    initials: 'MT',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Client Stories</span>
          <h2 id="testimonials-title">Trusted by the People <br />Who Can't Afford a Mistake</h2>
          <div className="gold-line centered" aria-hidden="true" />
          <p>Real results from real clients who rely on us every day.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <blockquote key={t.id} className="testimonial-card" id={t.id} aria-label={`Testimonial from ${t.name}`}>
              <div className="quote-mark" aria-hidden="true">"</div>
              <div className="stars" aria-label={`${t.stars} out of 5 stars`}>
                {'★'.repeat(t.stars)}
              </div>
              <p className="testimonial-text">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="author-avatar" aria-hidden="true">{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-title">{t.title} · {t.company}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
