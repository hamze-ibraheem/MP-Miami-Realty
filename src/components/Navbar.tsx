import { motion } from 'motion/react';
import { Menu, Phone, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../i18n';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.properties'), href: '#properties' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.testimonials'), href: '#testimonials' },
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0D0F12]/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="font-serif text-2xl font-bold tracking-tight text-white">
              MP Miami <span className="text-sky-500">Realty</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-400 hover:text-sky-400 transition-colors font-medium text-sm tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors font-medium text-sm tracking-wide uppercase mr-2"
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </button>
            <a 
              href="#contact"
              className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 px-5 py-2.5 rounded-full transition-colors font-medium text-sm font-sans"
            >
              <Phone className="w-4 h-4" />
              <span>(305) 281-3362</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-slate-300 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="md:hidden bg-[#1A1D23] border-t border-white/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-sky-400 hover:bg-white/5 rounded-md uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setLanguage(language === 'en' ? 'es' : 'en');
                setIsOpen(false);
              }}
              className="flex w-full px-3 py-3 items-center gap-2 text-base font-medium text-slate-300 hover:text-sky-400 hover:bg-white/5 rounded-md uppercase tracking-wide"
            >
              <Globe className="w-5 h-5" />
              {language === 'en' ? 'Español' : 'English'}
            </button>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 w-full bg-sky-500 text-slate-950 px-5 py-3 rounded-md font-medium text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>(305) 281-3362</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
