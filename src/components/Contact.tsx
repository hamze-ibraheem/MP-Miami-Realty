import { motion } from 'motion/react';
import { Phone, Clock, MapPin, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-[#0D0F12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sky-500 font-bold tracking-widest uppercase text-xs mb-3">{t('contact.label')}</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              {t('contact.title')}
            </h3>
            <p className="text-lg text-slate-400 mb-10 font-light">
              {t('contact.desc')}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-lg">{t('contact.phone.title')}</h4>
                  <a href="tel:+13052813362" className="text-2xl font-bold text-sky-500 hover:text-sky-400 transition-colors">
                    +1 305-281-3362
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-lg">{t('contact.hours.title')}</h4>
                  <p className="text-slate-400">{t('contact.hours.desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-lg">{t('contact.location.title')}</h4>
                  <p className="text-slate-400">{t('contact.location.desc')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-white/5"
          >
            <h4 className="text-2xl font-serif font-bold text-white mb-6">{t('contact.form.title')}</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  placeholder={t('contact.form.name.placeholder')}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all text-white placeholder-slate-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{t('contact.form.phone')}</label>
                <input 
                  type="tel" 
                  placeholder={t('contact.form.phone.placeholder')}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all text-white placeholder-slate-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{t('contact.form.intent')}</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex flex-col items-center justify-center p-4 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 hover:border-sky-400 transition-all has-[:checked]:bg-sky-500/10 has-[:checked]:border-sky-500 has-[:checked]:ring-1 has-[:checked]:ring-sky-500">
                    <input type="radio" name="intent" className="sr-only" />
                    <span className="font-medium text-slate-300">{t('contact.form.buy')}</span>
                  </label>
                  <label className="flex flex-col items-center justify-center p-4 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 hover:border-sky-400 transition-all has-[:checked]:bg-sky-500/10 has-[:checked]:border-sky-500 has-[:checked]:ring-1 has-[:checked]:ring-sky-500">
                    <input type="radio" name="intent" className="sr-only" />
                    <span className="font-medium text-slate-300">{t('contact.form.sell')}</span>
                  </label>
                </div>
              </div>
              <button className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold py-4 rounded-xl transition-all uppercase tracking-tighter flex items-center justify-center gap-2 group">
                {t('contact.form.submit')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-center text-slate-500 mt-4">
                {t('contact.form.note')}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
