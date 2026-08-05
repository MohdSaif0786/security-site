import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
