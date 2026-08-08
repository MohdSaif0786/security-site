import Image from 'next/image';
import './galery.css';

export default function GalleryPage() {
  const galleryItems = [
    {
      src: '/guard_corporate.png',
      title: 'Corporate Security',
      description: 'Professional presence ensuring safety in modern business environments.',
    },
    {
      src: '/executive_protection.png',
      title: 'Executive Protection',
      description: 'Discreet and highly trained bodyguards for VIPs and executives.',
    },
    {
      src: '/control_room.png',
      title: '24/7 Monitoring',
      description: 'State-of-the-art surveillance centers equipped with advanced tech.',
    },
    {
      src: '/event_security.png',
      title: 'Event Management',
      description: 'Crowd control and secure perimeters for high-profile gatherings.',
    }
  ];

  return (
    <main id="main-content">
      <section className="gallery-hero">
        <div className="container">
          <span className="section-label">Operations in Action</span>
          <h1>Our Gallery</h1>
          <div className="gold-line centered"></div>
          <p>
            Take a look behind the scenes at how Combatant Securitas operates. From high-tech 
            control rooms to on-the-ground deployments, we set the standard.
          </p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery-item">
                <Image 
                  src={item.src} 
                  alt={item.title}
                  fill
                />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
