import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';

export default function Discovery() {
  const { t } = useLang();
  return (
    <section id="discovery" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">{t.discovery.label}</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6 leading-tight">{t.discovery.title}</h2>
          <p className="text-secondary text-lg leading-relaxed mb-6">{t.discovery.p1}</p>
          <p className="text-secondary text-lg leading-relaxed">{t.discovery.p2}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <img src="/images/trench-aerial.jpg" alt="Trench" className="rounded-2xl shadow-apple w-full h-[300px] md:h-[500px] object-cover" />
          <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-surface text-primary p-4 md:p-6 rounded-xl shadow-apple max-w-xs hidden md:block border border-border">
            <p className="font-editorial text-lg italic">{t.discovery.quote}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}