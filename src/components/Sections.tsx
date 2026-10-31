import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import LightRevealCard from './LightRevealCard';
import { amsTimeline } from '../data/keeladi';

export function Structures() {
  const { t } = useLang();
  return (
    <section id="structures" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">{t.structures.label}</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">{t.structures.title}</h2>
          <p className="text-secondary max-w-3xl mx-auto text-lg font-editorial">{t.structures.desc}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <LightRevealCard className="group">
            <img src="/images/industrial-complex-aerial.jpg" alt="Industrial" className="w-full h-[300px] md:h-[400px] object-cover" />
            <div className="p-6 md:p-8">
              <h3 className="font-display text-2xl mb-2 text-primary">{t.structures.industrialTitle}</h3>
              <p className="text-secondary text-sm leading-relaxed">{t.structures.industrialDesc}</p>
            </div>
          </LightRevealCard>
          <LightRevealCard className="group">
            <img src="/images/ring-well-strata.jpg" alt="Well" className="w-full h-[300px] md:h-[400px] object-cover" />
            <div className="p-6 md:p-8">
              <h3 className="font-display text-2xl mb-2 text-primary">{t.structures.wellTitle}</h3>
              <p className="text-secondary text-sm leading-relaxed">{t.structures.wellDesc}</p>
            </div>
          </LightRevealCard>
        </div>
        <div className="bg-surface p-8 md:p-16 rounded-2xl shadow-apple border border-border text-center">
          <h3 className="font-display text-3xl mb-4 text-accent">{t.structures.engineeredTitle}</h3>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-primary font-editorial">
            {t.structures.engineeredDesc}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Literacy() {
  const { t } = useLang();
  return (
    <section id="literacy" className="py-16 md:py-24 px-4 md:px-6 bg-surface-elevated">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 md:order-1">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">{t.literacy.label}</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6 leading-tight">{t.literacy.title}</h2>
          <p className="text-secondary text-lg leading-relaxed mb-6 font-editorial">{t.literacy.p1}</p>
          <p className="text-secondary text-lg leading-relaxed mb-6">{t.literacy.p2}</p>
          <div className="bg-surface p-6 rounded-xl border-l-4 border-accent shadow-sm">
            <p className="font-editorial italic text-primary">{t.literacy.quote}</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 md:order-2">
          <img src="/images/graffiti-chart.jpg" alt="Graffiti" className="rounded-2xl shadow-apple w-full h-[300px] md:h-[500px] object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

export function Craft() {
  const { t } = useLang();
  return (
    <section id="craft" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">{t.craft.label}</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">{t.craft.title}</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg font-editorial">{t.craft.desc}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { title: t.craft.nanoTitle, desc: t.craft.nanoDesc },
            { title: t.craft.weaveTitle, desc: t.craft.weaveDesc },
            { title: t.craft.metalTitle, desc: t.craft.metalDesc },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-surface p-6 md:p-8 rounded-2xl shadow-apple border-t-4 border-accent"
            >
              <h3 className="font-display text-2xl text-primary mb-4">{item.title}</h3>
              <p className="text-secondary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <LightRevealCard>
            <img src="/images/brw-sherds.jpg" alt="BRW" className="w-full h-[300px] md:h-[400px] object-cover" />
          </LightRevealCard>
          <LightRevealCard>
            <img src="/images/bone-points.jpg" alt="Bones" className="w-full h-[300px] md:h-[400px] object-cover" />
          </LightRevealCard>
        </div>
      </div>
    </section>
  );
}

export function Trade() {
  const { t } = useLang();
  return (
    <section id="trade" className="py-16 md:py-24 px-4 md:px-6 bg-surface-elevated">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 md:order-1">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">{t.trade.label}</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6 leading-tight">{t.trade.title}</h2>
          <p className="text-secondary text-lg leading-relaxed mb-6 font-editorial">{t.trade.p1}</p>
          <p className="text-secondary text-lg leading-relaxed">{t.trade.p2}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 md:order-2">
          <img src="/images/carnelian-seal.jpg" alt="Seal" className="rounded-2xl shadow-apple w-full h-[300px] md:h-[400px] object-cover mb-6" />
          <img src="/images/glass-beads.jpg" alt="Beads" className="rounded-2xl shadow-apple w-full h-[250px] md:h-[350px] object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

export function Burials() {
  const { t } = useLang();
  return (
    <section id="burials" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 md:order-1">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">{t.burials.label}</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6 leading-tight">{t.burials.title}</h2>
          <p className="text-secondary text-lg leading-relaxed mb-6 font-editorial">{t.burials.p1}</p>
          <p className="text-secondary text-lg leading-relaxed mb-6">{t.burials.p2}</p>
          <div className="bg-surface-elevated p-6 rounded-xl border-l-4 border-accent shadow-sm">
            <p className="font-editorial italic text-primary">{t.burials.quote}</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 md:order-2">
          <img src="/images/burial-urns.jpg" alt="Urns" className="rounded-2xl shadow-apple w-full h-[300px] md:h-[500px] object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

export function Chronology() {
  const { t } = useLang();
  return (
    <section id="chronology" className="py-16 md:py-24 px-4 md:px-6 bg-surface text-primary">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">{t.chronology.label}</span>
          <h2 className="font-display text-4xl md:text-5xl mb-6">{t.chronology.title}</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg font-editorial">{t.chronology.desc}</p>
        </div>
        <div className="relative border-l-2 border-accent ml-4 md:ml-0 md:pl-0 space-y-8 md:space-y-12">
          {amsTimeline.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative md:grid md:grid-cols-5 md:gap-8 items-start"
            >
              <div className="md:col-span-1 md:text-right mb-2 md:mb-0">
                <span className="inline-flex items-center gap-2 font-bold text-accent bg-surface-elevated px-4 py-2 rounded-full text-sm border border-border">
                  {event.period}
                </span>
              </div>
              <div className="absolute left-[-9px] md:left-auto md:right-[-17px] top-2 w-4 h-4 rounded-full bg-accent border-4 border-surface"></div>
              <div className="md:col-span-4 bg-surface-elevated p-6 md:p-8 rounded-xl border border-border">
                <h3 className="font-display text-2xl text-primary mb-3">{event.title}</h3>
                <p className="text-secondary leading-relaxed mb-4">{event.description}</p>
                <span className="text-xs font-mono text-accent bg-background/50 px-3 py-1 rounded border border-border">
                  {t.chronology.depthLabel}: {event.depth}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}