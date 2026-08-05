'use client';

import '../sections.css';

const services = [
  {
    id: 'commercial',
    title: 'Commercial & Corporate Security',
    desc: 'Protect your assets, employees, and brand reputation with dedicated on-site guards trained in access control, surveillance monitoring, and crisis de-escalation. Our corporate security officers integrate seamlessly into your workplace culture—visible enough to deter threats, professional enough to impress clients.',
    link: '#contact',
  },
  {
    id: 'events',
    title: 'Event & Crowd Management',
    desc: 'From intimate VIP gatherings to stadium-scale conferences, our event security specialists create a safe environment where guests can focus on the experience. We handle perimeter control, credential verification, and real-time threat assessment with zero disruption to your event flow.',
    link: '#contact',
  },
  {
    id: 'residential',
    title: 'Residential & Patrol Services',
    desc: 'Gated communities, luxury condominiums, and HOA neighborhoods trust our uniformed patrol officers to maintain order and provide rapid incident response. Regular roving patrols, visitor management, and 24/7 monitoring give residents genuine peace of mind.',
    link: '#contact',
  },
  {
    id: 'executive',
    title: 'Executive Protection (EP)',
    desc: 'Our close-protection specialists—drawn from military and law enforcement backgrounds—provide discreet, layered security for C-suite executives, dignitaries, and high-net-worth individuals. From advance route planning to secure transportation coordination, we anticipate threats before they materialize.',
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
            requirements—because no two clients face the same risk landscape.
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
