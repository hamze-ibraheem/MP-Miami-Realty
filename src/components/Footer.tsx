import { useState } from 'react';
import { Home, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0D0F12] text-slate-300 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8 pb-8 border-b border-white/10">
          <div className="lg:col-span-4">
            <a href="#home" className="inline-block font-serif text-2xl font-bold tracking-tight text-white mb-4">
              MP Miami <span className="text-sky-500">Realty</span> LLC
            </a>
            <p className="text-slate-400 max-w-sm font-light">
              {t('footer.desc')}
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">{t('footer.links')}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-sky-400 transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition-colors">{t('nav.about')}</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">{t('nav.services')}</a></li>
              <li><a href="#testimonials" className="hover:text-sky-400 transition-colors">{t('nav.testimonials')}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-slate-400">
              <li>{t('contact.hours.desc')}</li>
              <li>{t('contact.location.desc')}</li>
              <li className="mt-4 text-white font-medium">+1 305-281-3362</li>
            </ul>
          </div>

          <div className="lg:col-span-4 lg:pl-4">
            <h4 className="text-white font-semibold mb-4">{t('footer.newsletter.title')}</h4>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed max-w-sm">
              {t('footer.newsletter.desc')}
            </p>
            {subscribed ? (
              <div className="bg-sky-500/10 border border-sky-500/20 text-sky-400 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                {t('footer.newsletter.success')}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder={t('footer.newsletter.placeholder')}
                  className="w-full pl-4 pr-12 py-3 rounded-lg border border-white/10 bg-white/5 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all text-white placeholder-slate-500 text-sm"
                />
                <button 
                  type="submit" 
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 px-3 rounded-md transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                  <span className="sr-only">{t('footer.newsletter.button')}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} MP Miami Realty LLC. {t('footer.rights')}</p>
          <div className="flex gap-4">
            <span className="hover:text-sky-400 transition-colors cursor-pointer">{t('footer.privacy')}</span>
            <span className="hover:text-sky-400 transition-colors cursor-pointer">{t('footer.terms')}</span>
          </div>
        </div>
        
        {/* Hidden SEO Keywords Text (Screen Reader Friendly) */}
        <div className="sr-only">
          Best real estate deals miami, Miami property agent, Miami real estate, buy home miami, sell property miami, 24/7 real estate agent florida.
        </div>
      </div>
    </footer>
  );
}
