import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';

const layers = [
  { id: 'humus', name: 'Humus', depth: '0 – 18 cm', period: 'Modern / Recent', desc: 'Fibrous, root-mixed semi-compact clay. Contains modern glass bangle fragments and recent agricultural residue.', color: 'bg-earth-300' },
  { id: 'layer-1', name: 'Layer 1: Ashy Grey Deposit', depth: '10 – 68 cm', period: 'Late Phase (1st – 3rd/4th c. CE)', desc: 'Semi-compact ashy grey deposit. Yields crystal quartz, carnelian, banded agate beads, faience, and copper fragments. Marks the peak of glass bead density.', color: 'bg-earth-200' },
  { id: 'layer-2', name: 'Layer 2: Engineered Flooring', depth: '68 – 150 cm', period: 'Middle Phase (1st c. BCE – 3rd c. CE)', desc: 'Reddish-brown sand-mixed clay. Features a purposeful spread of roof tiles laid as deliberate pavement, indicating shared, repeated building methods.', color: 'bg-earth-400' },
  { id: 'layer-3', name: 'Layer 3: Transitional Deposit', depth: '150 – 190 cm', period: 'Middle Phase Transition', desc: 'Ashy brown top transitioning to reddish-brown clay. Yields unidentified copper/iron objects, weighing stones, bone points, and spindle whorls.', color: 'bg-earth-500' },
  { id: 'layer-4', name: 'Layer 4: The Literate Quarter', depth: '180 – 280 cm', period: 'Early Phase (6th – 5th c. BCE)', desc: 'Semi-compact sand-mixed deposit. Crucial layer yielding 172 Tamili-inscribed potsherds and 2,128 graffiti marks, pushing the antiquity of Tamil literacy to the 6th century BCE.', color: 'bg-earth-600' },
  { id: 'layer-5', name: 'Layer 5: Rammed Pavement', depth: '275 – 340 cm', period: 'Early Phase', desc: 'Compact deposit featuring rammed floor-like pavements. Patches of charcoal indicate consecutive, continuous firing activity (industrial/artisanal).', color: 'bg-earth-700' },
  { id: 'layer-6', name: 'Layer 6: Sterile Cultural Base', depth: '325 – 405 cm', period: 'Earliest Settlement Footprint', desc: 'Comparatively compact, yielding fewer potsherds. The deepest cultural layer before the land fell quiet, marking the initial settlement boundary.', color: 'bg-earth-800' },
  { id: 'virgin-soil', name: 'Virgin Soil: Natural River Sand', depth: '405 – 443 cm', period: 'Pre-human presence', desc: 'Undisturbed natural riverine sand, reddish in colour, completely devoid of manmade objects. The geological baseline predating human occupation.', color: 'bg-gray-400' },
];

export default function Stratigraphy() {
  const [active, setActive] = useState(layers[4]);
  const { t } = useLang();

  return (
    <section id="strata" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">{t.strata.label}</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">{t.strata.title}</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg font-editorial">{t.strata.desc}</p>
        </div>
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-4 flex flex-col rounded-2xl overflow-hidden shadow-apple border border-border bg-surface max-h-[400px] md:max-h-[600px] overflow-y-auto">
            {layers.map((l) => (
              <button
                key={l.id}
                onClick={() => setActive(l)}
                className={
                  'relative w-full text-left p-4 border-b border-border transition-all duration-200 ' +
                  (active.id === l.id
                    ? 'bg-accent/10 border-l-4 border-l-accent'
                    : ' hover:bg-surface-elevated border-l-4 border-l-transparent')
                }
              >
                <div className="flex justify-between items-center">
                  <span className={'font-semibold text-sm md:text-base ' + (active.id === l.id ? 'text-accent' : 'text-primary')}>
                    {l.name}
                  </span>
                  <span className="text-xs font-mono px-2 py-1 rounded-md bg-surface-elevated text-secondary">{l.depth}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="md:col-span-8 bg-surface p-6 md:p-12 rounded-2xl shadow-apple border border-border min-h-[300px] md:min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <span className={'w-4 h-4 rounded-full ' + active.color + ' border-2 border-border'}></span>
                  <h3 className="font-display text-2xl md:text-3xl text-primary">{active.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-border">
                  <div>
                    <span className="block text-secondary uppercase tracking-wider text-xs font-semibold mb-2">{t.strata.depth}</span>
                    <span className="font-editorial text-lg md:text-xl text-primary">{active.depth}</span>
                  </div>
                  <div>
                    <span className="block text-secondary uppercase tracking-wider text-xs font-semibold mb-2">{t.strata.period}</span>
                    <span className="font-editorial text-lg md:text-xl text-primary">{active.period}</span>
                  </div>
                </div>
                <div>
                  <span className="block text-secondary uppercase tracking-wider text-xs font-semibold mb-3">{t.strata.interpretation}</span>
                  <p className="text-primary text-base md:text-lg leading-relaxed">{active.desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}