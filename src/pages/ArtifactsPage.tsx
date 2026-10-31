import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';

const categories = [
  { title: 'Pottery', items: ['Black-and-Red Ware', 'Rouletted Ware', 'Red Slipped Ware', 'Russet Coated Painted Ware'], image: '/images/brw-sherds.jpg' },
  { title: 'Beads & Ornaments', items: ['Glass Beads (1,122+)', 'Carnelian Intaglio Seal', 'Agate & Quartz Beads', 'Gold Star Pendants'], image: '/images/glass-beads.jpg' },
  { title: 'Terracotta', items: ['Human & Animal Figurines', 'Spindle Whorls', 'Gamesmen & Dice', 'Seals with Concentric Circles'], image: '/images/pottery-profile.jpg' },
  { title: 'Iron & Metal', items: ['Wrought Iron Tools', 'Copper Antimony Rods', 'Silver Punch-marked Coins', 'Roman Copper Coins'], image: '/images/bone-points.jpg' },
];

export default function ArtifactsPage() {
  const { lang } = useLang();
  return (
    <div className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">
            {lang === 'ta' ? 'தொல்லியல் சேகரிப்புகள்' : 'Archaeological Collections'}
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">
            {lang === 'ta' ? 'கீழடி பொருட்கள்' : 'Keeladi Artifacts'}
          </h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            {lang === 'ta'
              ? '2,600 ஆண்டுகள் பழமையான நுண்கலை மற்றும் தொழில்நுட்பத் திறனின் சான்று.'
              : 'A testament to the sophisticated craftsmanship and technological prowess of a 2,600-year-old urban society.'}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface rounded-2xl overflow-hidden border border-border shadow-apple"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              </div>
              <div className="p-8 -mt-12 relative z-10">
                <h2 className="font-display text-2xl text-primary mb-4">{cat.title}</h2>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
