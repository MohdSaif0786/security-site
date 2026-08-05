'use client';

import Image from 'next/image';
import '../sections.css';

const differentiators = [
  {
    icon: '🎯',
    title: 'Rigorous Multi-Stage Vetting',
    desc: 'Every officer undergoes a 7-point background check, psychological evaluation, and skills assessment before a single shift. Only the top 12% of applicants earn a badge.',
  },
  {
    icon: '📡',
    title: '24/7 Live Dispatch & Command Center',
    desc: 'Our staffed operations center monitors all deployments in real time. Need a shift adjustment at 3 AM? We answer. Every time.',
  },
  {
    icon: '🎓',
    title: 'Ongoing Tactical & Compliance Training',
    desc: 'Officers complete monthly scenario-based drills covering active threat response, first aid, de-escalation, and jurisdiction-specific legal updates.',
  },
  {
    icon: '⚡',
    title: 'Sub-60-Minute Rapid Deployment',
    desc: 'Emergency coverage gap? Our on-call response network dispatches a qualified replacement officer within 60 minutes—guaranteed in writing.',
  },
];

export default function WhyUs() {
  return (
    <section className="why-section" id="why-us" aria-labelledby="why-title">
      <div className="container">
        <div className="why-split">
          {/* Image column */}
          <div className="why-image-col">
            <div className="why-image-frame">
              <Image
                src="/services_collage.png"
                alt="Aegis Shield security team protecting multiple environments"
                width={600}
                height={520}
                style={{ width: '100%', height: '520px', objectFit: 'cover' }}
              />
            </div>
            <div className="why-badge-float" aria-label="15 plus years in service">
              <span className="big-num">15+</span>
              <span className="label">Years in Service</span>
            </div>
          </div>

          {/* Text column */}
          <div className="why-text-col">
            <span className="section-label">Why Aegis Shield</span>
            <h2 id="why-title">The Standard Others <br />Aspire To Reach</h2>
            <div className="gold-line" aria-hidden="true" />
            <p>
              In an industry plagued by high turnover and minimal oversight, Aegis Shield operates
              differently. We invest in people, process, and technology—so that when it matters
              most, our clients experience zero failures.
            </p>

            <div className="differentiators">
              {differentiators.map((d) => (
                <div key={d.title} className="diff-item">
                  <div className="diff-icon" aria-hidden="true">{d.icon}</div>
                  <div className="diff-text">
                    <h4>{d.title}</h4>
                    <p>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
