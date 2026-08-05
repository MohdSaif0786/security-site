'use client';

import { useState, FormEvent } from 'react';
import '../sections.css';

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  propertyType: string;
  securityNeeds: string;
};

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  propertyType: '',
  securityNeeds: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APP_SCRIPT_URL;
      
      if (!scriptUrl) {
        console.warn('Missing NEXT_PUBLIC_GOOGLE_APP_SCRIPT_URL. Simulating submission.');
        await new Promise((r) => setTimeout(r, 1200));
      } else {
        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
          formData.append(key, value as string);
        });

        // 'no-cors' is necessary here so the browser doesn't block the request,
        // though we won't be able to read the response payload.
        await fetch(scriptUrl, {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        });
      }

      setSubmitted(true);
      setForm(initialForm); // Reset the form
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show success anyway or handle error gracefully in a real app
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-inner">
          {/* Left: info */}
          <div className="contact-info">
            <span className="section-label">Get in Touch</span>
            <h2 id="contact-title">Secure Your Property <br />Today</h2>
            <div className="gold-line" aria-hidden="true" />
            <p>
              Tell us about your property and security needs, and one of our senior security
              consultants will contact you within 2 business hours with a custom plan and
              transparent pricing—no pressure, no obligation.
            </p>

            <div className="contact-details">
              {[
                { icon: '📞', label: 'Phone (24/7)', value: '(800) 555-0100', href: 'tel:+18005550100' },
                { icon: '✉️', label: 'Email', value: 'info@combatantsecuritas.com', href: 'mailto:info@combatantsecuritas.com' },
                { icon: '📍', label: 'Headquarters', value: '1200 Executive Blvd, Suite 400\nMetro City, CA 90210' },
                { icon: '🕐', label: 'Office Hours', value: 'Mon–Fri 7 AM–7 PM · 24/7 Dispatch' },
              ].map((item) => (
                <div key={item.label} className="contact-detail">
                  <div className="contact-detail-icon" aria-hidden="true">{item.icon}</div>
                  <div>
                    <strong>{item.label}</strong>
                    {item.href ? (
                      <a href={item.href} style={{ color: 'rgba(255,255,255,0.7)' }}>{item.value}</a>
                    ) : (
                      <span style={{ whiteSpace: 'pre-line' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: 'var(--white)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                  Request Received!
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                  A senior security consultant will contact you within 2 business hours.
                  If your need is urgent, call us directly at{' '}
                  <a href="tel:+18005550100" style={{ color: 'var(--gold)' }}>(800) 555-0100</a>.
                </p>
              </div>
            ) : (
              <>
                <h3>Request a Free Consultation</h3>
                <p className="form-subtitle">
                  Complete the form below · Response within 2 business hours
                </p>

                <form onSubmit={handleSubmit} noValidate aria-label="Security consultation request form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        placeholder="Jane"
                        value={form.firstName}
                        onChange={handleChange}
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        placeholder="Smith"
                        value={form.lastName}
                        onChange={handleChange}
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="propertyType">Property / Client Type *</label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      value={form.propertyType}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select your property type…</option>
                      <option value="commercial">Commercial / Corporate Office</option>
                      <option value="retail">Retail / Shopping Center</option>
                      <option value="residential">Residential Community / HOA</option>
                      <option value="event">Event / Entertainment Venue</option>
                      <option value="healthcare">Healthcare / Medical Facility</option>
                      <option value="executive">Executive / Personal Protection</option>
                      <option value="industrial">Industrial / Warehouse</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="securityNeeds">Security Needs & Details</label>
                    <textarea
                      id="securityNeeds"
                      name="securityNeeds"
                      placeholder="Briefly describe your property, current challenges, and what you're looking for (e.g., number of guards, schedule, armed vs. unarmed)…"
                      value={form.securityNeeds}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-red form-submit"
                    id="contact-form-submit"
                    disabled={loading}
                  >
                    {loading ? '⏳ Sending…' : '🛡 Send My Security Request'}
                  </button>
                </form>

                <p className="form-disclaimer">
                  🔒 Your information is private and never sold. We will only contact you about your security inquiry.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
