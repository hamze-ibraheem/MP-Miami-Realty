import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-30 grayscale mix-blend-overlay">
        <img 
          src="https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=2600&auto=format&fit=crop" 
          alt="Miami Skyline at dusk" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-white text-sm font-medium tracking-wide">{t('hero.badge')}</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 max-w-4xl mx-auto"
        >
          {t('hero.title.1')} <span className="text-sky-400 italic">{t('hero.title.bestDeals')}</span> {t('hero.title.2')}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a filter="#contact" href="#contact" className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 group uppercase tracking-tighter">
            {t('hero.cta.start')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="text-white/60 font-medium">{t('hero.or')}</div>
          <a href="tel:+13052813362" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-semibold px-8 py-4 rounded-full transition-all">
            {t('hero.cta.call')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
