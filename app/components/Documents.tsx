'use client';

import '../sections.css';

const documents = [
  {
    id: 'doc-certificate',
    title: 'Certificate of Allotment',
    filename: 'PBCHD3622874000_certificate_allotment.pdf',
    desc: 'Official Certificate of Allotment documentation.',
  },
  {
    id: 'doc-pscea',
    title: 'PSCEA 2025',
    filename: 'PSCEA_2025_00954 (2).pdf',
    desc: 'PSCEA 2025 Compliance Document.',
  },
  {
    id: 'doc-rc',
    title: 'RC06062025',
    filename: 'AA040625000442U_RC06062025.pdf',
    desc: 'Regulatory Compliance Certificate.',
  },
  {
    id: 'doc-01661',
    title: 'Document 01661',
    filename: '01661.pdf',
    desc: 'Additional official documentation.',
  },
];

export default function Documents() {
  return (
    <section className="services-section" id="documents" aria-labelledby="documents-title" style={{ background: 'var(--navy)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Official Documents</span>
          <h2 id="documents-title">Licenses & Certifications</h2>
          <div className="gold-line centered" aria-hidden="true" />
          <p>View our official licenses, certificates, and compliance documents.</p>
        </div>

        <div className="services-grid">
          {documents.map((doc) => (
            <div key={doc.id} className="service-card">
              <h3>{doc.title}</h3>
              <p>{doc.desc}</p>
              <a
                href={`/r/${doc.filename}`}
                target="_blank"
                rel="noopener noreferrer"
                className="service-link"
                aria-label={`View ${doc.title} PDF`}
              >
                View PDF <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
