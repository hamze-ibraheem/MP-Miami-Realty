import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SchemaMarkup from './components/SchemaMarkup';
import DealsMap from './components/DealsMap';
import { LanguageProvider } from './i18n';

export default function App() {
  return (
    <LanguageProvider>
    <div className="min-h-screen font-sans text-slate-100 bg-[#0D0F12] selection:bg-sky-500/30 selection:text-sky-200">
      <SchemaMarkup />
      <Navbar />
      <main>
        <Hero />
        <About />
        <DealsMap />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
    </LanguageProvider>
  );
}
