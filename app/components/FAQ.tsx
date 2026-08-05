'use client';

import { useState } from 'react';
import '../sections.css';

const faqs = [
  {
    id: 'armed',
    question: 'Are your guards armed or unarmed—and how do I choose?',
    answer:
      'We offer both armed and unarmed security personnel. Unarmed guards are ideal for customer-facing environments like retail, hospitality, and corporate lobbies where a professional, non-threatening presence is preferred. Armed officers—all of whom hold valid state firearms permits and complete quarterly range qualifications—are deployed for high-value asset protection, executive escorts, and situations where the threat profile warrants an elevated deterrent. During your free consultation, we conduct a risk assessment and make a tailored recommendation for your specific situation.',
  },
  {
    id: 'deployment',
    question: 'How quickly can you deploy a guard after I sign a contract?',
    answer:
      'Standard placements are fulfilled within 24–48 hours. For urgent or emergency situations, our rapid-response program can have a qualified officer on-site within 60 minutes anywhere within our service radius. We maintain a roster of on-call, fully vetted officers specifically for this purpose. You will never be left without coverage.',
  },
  {
    id: 'licensing',
    question: 'Is Aegis Shield fully licensed, bonded, and insured?',
    answer:
      "Absolutely. Aegis Shield Security Group holds a current state Private Patrol Operator (PPO) license, maintains $5 million in general liability coverage, and carries a $1 million workers' compensation policy. All deployed officers hold individual Guard Registration certificates. We are happy to provide certificates of insurance naming your organization as an additional insured upon request.",
  },
  {
    id: 'contract',
    question: 'Do I have to commit to a long-term contract?',
    answer:
      'No, we offer flexible engagement models—event-based single-day deployments, short-term month-to-month agreements, and long-term retainer contracts for ongoing coverage. There are no hidden cancellation fees for standard agreements. Our goal is to earn your business through performance, not lock-in clauses.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('armed');

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Questions & Answers</span>
          <h2 id="faq-title">Frequently Asked Questions</h2>
          <div className="gold-line centered" aria-hidden="true" />
          <p>Transparency builds trust. Here are the questions we hear most often—answered plainly.</p>
        </div>

        <div className="faq-container" role="list">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`faq-item${isOpen ? ' open' : ''}`}
                role="listitem"
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <span className="faq-chevron" aria-hidden="true">▾</span>
                </button>
                <div
                  id={`faq-answer-${faq.id}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                >
                  <div className="faq-answer-inner">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
