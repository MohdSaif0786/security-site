import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'Professional Security Guard Services | Aegis Shield',
  description:
    'Hire licensed private security guards for commercial, residential, events & executive protection. Aegis Shield — trusted, 24/7 armed & unarmed security.',
  keywords: [
    'professional security guard services',
    'hire private security',
    'armed security guards',
    'event security',
    'executive protection',
    'residential security patrol',
    'corporate security guards',
  ],
  authors: [{ name: 'Aegis Shield Security Group' }],
  openGraph: {
    title: 'Professional Security Guard Services | Aegis Shield Security Group',
    description:
      'Elite armed and unarmed private security for commercial properties, events, residential communities, and executive protection. Fully licensed & insured.',
    type: 'website',
    url: 'https://aegisshieldsecurity.com',
    siteName: 'Aegis Shield Security Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Security Guard Services | Aegis Shield',
    description: 'Elite private security guard services. Licensed, insured, 24/7 dispatch.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
