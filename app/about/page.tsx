import Image from 'next/image';
import { Shield, Zap, Handshake } from 'lucide-react';
import './about.css';

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="about-hero">
        <div className="container">
          <span className="section-label">Our Story</span>
          <h1>Who We Are</h1>
          <div className="gold-line centered"></div>
          <p>
            Combatant Securitas was founded on a simple principle: to provide unparalleled security 
            solutions tailored to the unique needs of our clients.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Mission</h2>
              <div className="gold-line"></div>
              <p>
                We believe that safety is not a privilege, but a fundamental right. Our mission is to 
                deliver elite armed and unarmed guard services with precision, discretion, and unwavering reliability.
              </p>
              <p>
                Whether protecting a corporate campus, a residential community, a high-profile event, or 
                an executive principal, our highly trained professionals are equipped to handle any situation 
                with the utmost professionalism.
              </p>
              <br />
              <a href="/#contact" className="btn-primary">
                Partner With Us
              </a>
            </div>
            <div className="about-image">
              <Image 
                src="/guard_corporate.png" 
                alt="Professional security guard at a corporate building" 
                fill 
              />
            </div>
          </div>

          <div className="about-grid reverse">
            <div className="about-text">
              <h2>Uncompromising Standards</h2>
              <div className="gold-line" style={{ marginLeft: 'auto' }}></div>
              <p>
                Our team consists of former law enforcement and military personnel who bring decades of 
                real-world experience to the private sector. Every Combatant Securitas officer undergoes 
                rigorous background checks, continuous training, and performance evaluations.
              </p>
              <p>
                We leverage state-of-the-art technology and advanced tactical strategies to ensure 
                comprehensive protection. From 24/7 dispatch centers to real-time incident reporting, 
                we stay one step ahead so you can have peace of mind.
              </p>
            </div>
            <div className="about-image">
              <Image 
                src="/executive_protection.png" 
                alt="Executive protection security detail" 
                fill 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="core-values">
        <div className="container">
          <span className="section-label">Our DNA</span>
          <h2>Core Values</h2>
          <div className="gold-line centered"></div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><Shield size={32} /></div>
              <h3>Integrity</h3>
              <p>
                We operate with absolute transparency and honesty. Trust is the foundation of our business, 
                and we never compromise our ethical standards.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Zap size={32} /></div>
              <h3>Vigilance</h3>
              <p>
                Our guards are trained to anticipate, identify, and neutralize threats before they escalate. 
                We maintain a constant state of readiness.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Handshake size={32} /></div>
              <h3>Excellence</h3>
              <p>
                Good is never good enough. We continually refine our training, adopt new technologies, and 
                strive for perfection in every assignment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
