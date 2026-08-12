'use client';

import '../sections.css';

const services = [
  {
    id: 'commercial',
    title: 'Commercial & Corporate Security',
    desc: 'Dedicated on-site guards trained in access control, surveillance monitoring, and crisis de-escalation.',
    link: '#contact',
  },
  {
    id: 'events',
    title: 'Event & Crowd Management',
    desc: 'We handle perimeter control, credential verification, and real-time threat assessment with zero disruption to your event flow.',
    link: '#contact',
  },
  {
    id: 'residential',
    title: 'Residential & Patrol Services',
    desc: 'Uniformed patrol officers to maintain order and provide rapid incident response. Regular roving patrols, visitor management, and 24/7 monitoring ',
    link: '#contact',
  },
  {
    id: 'executive',
    title: 'Executive Protection (EP)',
    desc: 'Discreet, layered security for C-suite executives, dignitaries, and high-net-worth individuals. From advance route planning to secure transportation coordination',
    link: '#contact',
  },
];

export default function Services() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Do</span>
          <h2 id="services-title">Comprehensive Security <br />Solutions, Tailored to You</h2>
          <div className="gold-line centered" aria-hidden="true" />
          <p>
            Every deployment is custom-scoped to your property, threat profile, and operational
            requirements.
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc) => (
            <article key={svc.id} className="service-card" id={`service-${svc.id}`}>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <a
                href={svc.link}
                className="service-link"
                onClick={(e) => handleScroll(e, svc.link)}
                aria-label={`Learn more about ${svc.title}`}
              >
                Request a Quote <span className="arrow">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
