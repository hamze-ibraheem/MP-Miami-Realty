import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';
type Translations = Record<string, string>;

const translations: Record<Language, Translations> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.properties': 'Properties',
    'nav.services': 'Services',
    'nav.testimonials': 'Testimonials',
    
    // Hero
    'hero.badge': '5.0 Star Google Verified Agent',
    'hero.title.1': 'Unlocking the',
    'hero.title.bestDeals': 'Best Real Estate Deals',
    'hero.title.2': 'in Miami.',
    'hero.subtitle': "We don't just show houses; we understand your goals. Experience personalized, 24/7 service dedicated to finding exactly what you're looking for.",
    'hero.cta.start': 'Start Your Journey',
    'hero.or': 'or',
    'hero.cta.call': 'Call (305) 281-3362',

    // About
    'about.badge.title': 'Available 24/7',
    'about.badge.subtitle': 'Open Now for Consultations',
    'about.label': 'About MP Miami Realty',
    'about.title': 'We listen first. Then, we find exactly what you need.',
    'about.desc': "At MP Miami Realty LLC, we believe that real estate isn't just about transactions; it's about relationships. We are distinguished in the Miami market simply because we take the time to truly understand our client's vision.",
    'about.point1': 'Truly listening to what clients are looking for',
    'about.point2': 'Expertly navigating the market for the best deals',
    'about.point3': 'Making the buying and selling process seamless',
    'about.point4': 'Fostering lifelong agent-client relationships',
    'about.quote': '"Our philosophy is uncompromising: put the client first, deliver maximum value, and make the process effortless."',

    // DealsMap
    'map.label': 'Exclusive Locations',
    'map.title': "Miami's Most Coveted Deals",
    'map.desc': 'Explore our heat map of trending neighborhoods and discover exclusive listings only available through MP Miami Realty.',
    'map.deals': 'Exclusive Deals in this area',
    'map.newDeal': 'New Deal',

    // Services
    'services.label': 'Our Expertise',
    'services.title': 'Comprehensive Client-First Services',
    'services.desc': 'From your first question to the final closing, we manage every detail. We are renowned for making complex processes feel incredibly easy.',
    'services.1.title': 'Buying Properties',
    'services.1.desc': 'Navigate the competitive Miami real estate market with confidence. We specialize in locating the perfect home at the very best price, perfectly tuned to your lifestyle requirements.',
    'services.2.title': 'Selling Properties',
    'services.2.desc': "Maximize your property's market value. We leverage deep market analytics to strategically price, beautifully present, and confidently negotiate the sale of your Miami property.",
    'services.3.title': 'Market Consultation',
    'services.3.desc': "Whether you're looking for your next investment property or just want to understand the current landscape, get actionable insights to make highly informed real estate decisions.",

    // Calculator
    'calc.title': 'Mortgage Calculator',
    'calc.desc': 'Estimate your monthly payments to help plan your investment.',
    'calc.price': 'Home Price ($)',
    'calc.down': 'Down Payment (%)',
    'calc.rate': 'Interest Rate (%)',
    'calc.years': 'Loan Term (Years)',
    'calc.result': 'Estimated Monthly Payment',

    // Testimonials
    'testimonials.title': '"The Best Agent In My Life"',
    'testimonials.desc': "Don't just take our word for it. Read what our verified clients have to say about their experience with MP Miami Realty.",
    'testimonials.1.text': 'The agent truly listens and understands exactly what we were looking for. They are an absolute expert at finding the best deals in the market.',
    'testimonials.1.author': 'Verified Buyer',
    'testimonials.2.text': 'MP Miami Realty made the buying process incredibly easy for us. Exceptional customer service! Truly the best agent in my life.',
    'testimonials.2.author': 'Satisfied Client',
    'testimonials.3.text': 'Highly recommended! I was nervous about selling, but they handled everything with such professionalism and negotiated an amazing deal.',
    'testimonials.3.author': 'Repeat Client',

    // Contact
    'contact.label': 'Get in Touch',
    'contact.title': "Let's find your ultimate Miami property.",
    'contact.desc': "We are available 24 hours a day, 7 days a week. Reach out now, and let's start discussing your real estate goals immediately.",
    'contact.phone.title': 'Call Us Anytime',
    'contact.hours.title': 'Business Hours',
    'contact.hours.desc': 'Open 24/7 - We operate on your schedule.',
    'contact.location.title': 'Location Location Location',
    'contact.location.desc': 'Serving the greater Miami, Florida area.',
    'contact.form.title': 'Send an Inquiry',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your full name',
    'contact.form.phone': 'Phone',
    'contact.form.phone.placeholder': 'Your phone number',
    'contact.form.intent': 'I am looking to...',
    'contact.form.buy': 'Buy',
    'contact.form.sell': 'Sell',
    'contact.form.submit': 'Request a Callback',
    'contact.form.note': "We'll reach out promptly. Your information is kept strictly confidential.",

    // Footer
    'footer.desc': 'The premier choice for buyers and sellers in Miami. Unlocking the best real estate deals while delivering an unparalleled 5-star customer experience.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.newsletter.title': 'Market Alerts',
    'footer.newsletter.desc': 'Subscribe for exclusive Miami off-market deals and updates.',
    'footer.newsletter.placeholder': 'Email address',
    'footer.newsletter.button': 'Subscribe',
    'footer.newsletter.success': 'Subscribed successfully!',
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.properties': 'Propiedades',
    'nav.services': 'Servicios',
    'nav.testimonials': 'Testimonios',

    // Hero
    'hero.badge': 'Agente Verificado por Google de 5.0 Estrellas',
    'hero.title.1': 'Encuentre las',
    'hero.title.bestDeals': 'Mejores Ofertas',
    'hero.title.2': 'en Miami.',
    'hero.subtitle': 'No solo mostramos casas; entendemos sus metas. Experimente un servicio personalizado las 24 horas del día, dedicado a buscar exactamente lo que necesita.',
    'hero.cta.start': 'Comience su Viaje',
    'hero.or': 'o',
    'hero.cta.call': 'Llamar al (305) 281-3362',

    // About
    'about.badge.title': 'Disponible 24/7',
    'about.badge.subtitle': 'Abierto Ahora para Consultas',
    'about.label': 'Sobre MP Miami Realty',
    'about.title': 'Escuchamos primero. Luego, encontramos exactamente lo que necesita.',
    'about.desc': 'En MP Miami Realty LLC, creemos que los bienes raíces no se tratan solo de transacciones; se trata de relaciones. Nos distinguimos en el mercado de Miami porque nos tomamos el tiempo de comprender verdaderamente la visión de nuestros clientes.',
    'about.point1': 'Escuchar verdaderamente lo que buscan los clientes',
    'about.point2': 'Navegar de manera experta el mercado para encontrar ofertas',
    'about.point3': 'Facilitar un proceso de compra y venta perfecto',
    'about.point4': 'Fomentar relaciones duraderas con los clientes',
    'about.quote': '"Nuestra filosofía es firme: poner al cliente primero, ofrecer el máximo valor y hacer que el proceso sea sencillo."',

    // DealsMap
    'map.label': 'Ubicaciones Exclusivas',
    'map.title': 'Las Ofertas Más Codiciadas',
    'map.desc': 'Explore nuestro mapa de vecindarios populares y descubra propiedades exclusivas disponibles solo a través de MP Miami Realty.',
    'map.deals': 'Ofertas Exclusivas en esta zona',
    'map.newDeal': 'Nueva Oferta',

    // Services
    'services.label': 'Nuestra Experiencia',
    'services.title': 'Servicios Integrales para el Cliente',
    'services.desc': 'Desde su primera pregunta hasta el cierre final, gestionamos cada detalle. Nos distingue el hacer que procesos complejos parezcan increíblemente fáciles.',
    'services.1.title': 'Compra de Propiedades',
    'services.1.desc': 'Navegue con confianza por el mercado competitivo de Miami. Nos especializamos en encontrar la casa perfecta al mejor precio, ajustada a su estilo de vida.',
    'services.2.title': 'Venta de Propiedades',
    'services.2.desc': 'Maximice el valor de su propiedad. Utilizamos análisis de mercado para fijar precios estratégicamente, presentar y negociar la venta de su inmueble.',
    'services.3.title': 'Consultoría de Mercado',
    'services.3.desc': 'Ya sea que busque su próxima inversión o desee comprender el mercado actual, obtenga información útil para tomar decisiones informadas.',

    // Calculator
    'calc.title': 'Calculadora de Hipotecas',
    'calc.desc': 'Estime sus pagos mensuales para ayudar a planificar su inversión.',
    'calc.price': 'Precio de la Casa ($)',
    'calc.down': 'Pago Inicial (%)',
    'calc.rate': 'Tasa de Interés (%)',
    'calc.years': 'Plazo del Préstamo (Años)',
    'calc.result': 'Pago Mensual Estimado',

    // Testimonials
    'testimonials.title': '"El Mejor Agente de mi Vida"',
    'testimonials.desc': 'No confíe solo en nuestra palabra. Lea lo que dicen nuestros clientes verificados acerca de su experiencia con MP Miami Realty.',
    'testimonials.1.text': 'El agente realmente escucha y entiende exactamente lo que buscábamos. Son expertos absolutos en encontrar las mejores ofertas en el mercado.',
    'testimonials.1.author': 'Comprador Verificado',
    'testimonials.2.text': 'MP Miami Realty hizo que el proceso de compra fuera increíblemente fácil para nosotros. ¡Servicio al cliente excepcional! El mejor agente de mi vida.',
    'testimonials.2.author': 'Cliente Satisfecho',
    'testimonials.3.text': '¡Muy recomendado! Estaba nervioso por vender, pero manejaron todo con gran profesionalismo y negociaron un trato increíble.',
    'testimonials.3.author': 'Cliente Frecuente',

    // Contact
    'contact.label': 'Ponte en Contacto',
    'contact.title': 'Encontremos su propiedad ideal en Miami.',
    'contact.desc': 'Estamos disponibles las 24 horas del día. Comuníquese ahora y comencemos a hablar sobre sus metas inmobiliarias.',
    'contact.phone.title': 'Llamenos en Cualquier Momento',
    'contact.hours.title': 'Horario de Atención',
    'contact.hours.desc': 'Abierto 24/7 - Trabajamos a su horario.',
    'contact.location.title': 'Ubicación Premium',
    'contact.location.desc': 'Dando servicio en el área de Miami, Florida.',
    'contact.form.title': 'Enviar una Consulta',
    'contact.form.name': 'Nombre',
    'contact.form.name.placeholder': 'Su nombre completo',
    'contact.form.phone': 'WhatsApp / Teléfono',
    'contact.form.phone.placeholder': 'Su número de contacto',
    'contact.form.intent': 'Deseo...',
    'contact.form.buy': 'Comprar',
    'contact.form.sell': 'Vender',
    'contact.form.submit': 'Solicitar una Llamada',
    'contact.form.note': 'Nos pondremos en contacto rápido. Su información es confidencial.',

    // Footer
    'footer.desc': 'La mejor opción para compradores y vendedores en Miami. Logrando las mejores ofertas con una experiencia de 5 estrellas incomparable.',
    'footer.links': 'Enlaces Rápidos',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.newsletter.title': 'Alertas del Mercado',
    'footer.newsletter.desc': 'Suscríbase para recibir ofertas exclusivas y actualizaciones del mercado de Miami.',
    'footer.newsletter.placeholder': 'Correo electrónico',
    'footer.newsletter.button': 'Suscribirse',
    'footer.newsletter.success': '¡Suscrito con éxito!',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
