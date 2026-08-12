'use client';

import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Shield, Lock } from 'lucide-react';
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
      // Replace this with your actual Google Apps Script Web App URL
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APP_SCRIPT_URL || '';
      
      if (!scriptUrl) {
        console.warn('Missing Google App Script URL. Simulating submission.');
        await new Promise((r) => setTimeout(r, 1200));
      } else {
     
        const formBody = Object.keys(form)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(form[key as keyof FormData]))
          .join('&');


        await fetch(scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: formBody,
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
              transparent pricing.
            </p>

            <div className="contact-details">
              {[
                { icon: <Phone size={20} />, label: 'Phone (24/7)', value: '+91 94672 95673', href: 'tel:+919467295673' },
                { icon: <Mail size={20} />, label: 'Email', value: 'combatantsecuritas@gmail.com', href: 'mailto:combatantsecuritas@gmail.com' },
                { icon: <MapPin size={20} />, label: 'Headquarters', value: 'SHOP NO 1960, CABIN NO.1, FIRST FLOOR\nSECTOR 45B, CHANDIGARH' },
                { icon: <Clock size={20} />, label: 'Office Hours', value: 'Mon–Fri 7 AM–7 PM · 24/7 Dispatch' },
              ].map((item) => (
                <div key={item.label} className="contact-detail">
                  <div className="contact-detail-icon" aria-hidden="true">{item.icon}</div>
                  <div>
                    <strong>{item.label}</strong>
                    {item.href ? (
                      <a href={item.href} style={{ color: 'rgba(0, 0, 0, 0.7)' }}>{item.value}</a>
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
              <div style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <style>
                  {`
                    @keyframes scaleInCheck {
                      0% { transform: scale(0.5); opacity: 0; }
                      100% { transform: scale(1); opacity: 1; }
                    }
                    .success-icon-container {
                      animation: scaleInCheck 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                    }
                  `}
                </style>
                
                {/* Subtle top accent */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--gold)' }}></div>

                <div className="success-icon-container" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '1.25rem',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}>
                    <CheckCircle size={56} color="#10b981" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 style={{ color: '#000000', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  Request Received
                </h3>
                <p style={{ color: 'rgba(0,0,0,0.7)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2.5rem', padding: '0 1rem' }}>
                  Thank you for reaching out. A senior security consultant will review your details and contact you within <strong style={{ color: '#000000', fontWeight: 700 }}>2 business hours</strong> to discuss a custom plan.
                </p>
                <div style={{
                  padding: '1.5rem',
                  background: 'rgba(0,0,0,0.03)',
                  borderRadius: '12px',
                  display: 'inline-block',
                  border: '1px solid rgba(0,0,0,0.05)',
                  width: '100%',
                  maxWidth: '300px'
                }}>
                  <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.8rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>
                    Need immediate assistance?
                  </p>
                  <a href="tel:+919467295673" style={{ color: '#000000', fontSize: '1.15rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <Phone size={18} color="var(--gold)" />
                    +91 94672 95673
                  </a>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: '2.5rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'rgba(0,0,0,0.6)',
                    padding: '0.75rem 1.5rem',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                    fontWeight: 500
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.color = '#000000'; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(0,0,0,0.6)'; }}
                >
                  Send Another Request
                </button>
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
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                  >
                    {loading ? '⏳ Sending…' : <><Shield size={20} /> Send My Security Request</>}
                  </button>
                </form>

                <p className="form-disclaimer">
                  <Lock size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Your information is private and never sold. We will only contact you about your security inquiry.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
