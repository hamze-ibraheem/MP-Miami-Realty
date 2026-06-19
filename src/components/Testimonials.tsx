import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Testimonials() {
  const { t } = useLanguage();

  const reviews = [
    {
      text: t('testimonials.1.text'),
      author: t('testimonials.1.author'),
      location: "Miami, FL"
    },
    {
      text: t('testimonials.2.text'),
      author: t('testimonials.2.author'),
      location: "Miami, FL"
    },
    {
      text: t('testimonials.3.text'),
      author: t('testimonials.3.author'),
      location: "Miami Beach"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-transparent text-white relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center flex-row gap-1 text-yellow-400 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold mb-6"
          >
            {t('testimonials.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 font-light"
          >
            {t('testimonials.desc')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#1A1D23] border border-sky-500/20 backdrop-blur-sm p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-sky-500/20" />
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-lg text-slate-200 mb-8 italic font-light leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <div className="font-semibold text-white">{review.author}</div>
                <div className="text-sm text-slate-400">{review.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
