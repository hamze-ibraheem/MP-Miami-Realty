import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function About() {
  const { t } = useLanguage();

  const points = [
    t('about.point1'),
    t('about.point2'),
    t('about.point3'),
    t('about.point4')
  ];

  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop" 
                alt="Luxurious Miami interior" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* 24/7 Badge overlay */}
            <div className="absolute -bottom-6 -right-6 bg-[#1A1D23] text-white p-6 rounded-2xl shadow-xl hidden md:flex items-center gap-4 border border-sky-500/20">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-widest">{t('about.badge.title')}</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wide">{t('about.badge.subtitle')}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sky-500 font-bold tracking-widest uppercase text-xs mb-3">{t('about.label')}</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              {t('about.title')}
            </h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              {t('about.desc')}
            </p>
            
            <div className="space-y-4 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-sky-500 shrink-0 mt-0.5" />
                  <span className="text-lg">{point}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
              <p className="italic text-slate-400 text-lg">
                {t('about.quote')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
