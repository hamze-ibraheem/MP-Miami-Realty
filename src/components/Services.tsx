import { motion } from 'motion/react';
import { Home, Building2, TrendingUp } from 'lucide-react';
import { useLanguage } from '../i18n';
import MortgageCalculator from './MortgageCalculator';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t('services.1.title'),
      description: t('services.1.desc')
    },
    {
      icon: Building2,
      title: t('services.2.title'),
      description: t('services.2.desc')
    },
    {
      icon: TrendingUp,
      title: t('services.3.title'),
      description: t('services.3.desc')
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0D0F12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sky-500 font-bold tracking-widest uppercase text-sm mb-3"
          >
            {t('services.label')}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            {t('services.title')}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 font-light"
          >
            {t('services.desc')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`bg-white/5 p-8 md:p-10 rounded-2xl border border-white/5 hover:border-white/10 transition-all group ${index === 2 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="w-14 h-14 bg-slate-800/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors">
                    <Icon className="w-7 h-7 text-sky-400 group-hover:text-slate-950 transition-colors" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-white mb-4">{service.title}</h4>
                  <p className="text-slate-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
          <div className="lg:col-span-1">
            <MortgageCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}
