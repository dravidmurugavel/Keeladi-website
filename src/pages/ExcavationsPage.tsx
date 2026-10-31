import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';

const sites = [
  { name: 'Keeladi', desc: 'The primary habitation mound. 10 seasons of excavation revealing brick structures, ring-wells, and industrial complexes.', depth: 'Up to 443 cm', image: '/images/trench-aerial.jpg' },
  { name: 'Kondagai', desc: 'The associated burial ground located 1km away. Over 150 urn burials and extended burials yielding iron implements and carnelian beads.', depth: '100-120 cm', image: '/images/burial-urns.jpg' },
  { name: 'Agaram', desc: 'A habitation mound showing continuous cultural sequence from Early Historical to Medieval periods, notable for microlithic tools and ring-wells.', depth: 'Up to 500 cm', image: '/images/brick-layout-aerial.jpg' },
  { name: 'Manalur', desc: 'A site with medieval temple remnants and ancient ring-wells, confirming the continuous occupation and water management of the cluster.', depth: 'Up to 200 cm', image: '/images/terracotta-pipe.jpg' },
];

export default function ExcavationsPage() {
  const { lang } = useLang();
  return (
    <div className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">
            {lang === 'ta' ? 'அகழாய்வு தளங்கள்' : 'Excavation Sites'}
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">
            {lang === 'ta' ? 'கீழடி மற்றும் அதன் தொகுப்பு தளங்கள்' : 'Keeladi & Its Cluster Sites'}
          </h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            {lang === 'ta'
              ? 'ஒரே கிலோமீட்டர் சுற்றளவில் அமைந்துள்ள நான்கு இணைக்கப்பட்ட தொல்லியல் தளங்கள்.'
              : 'Four interconnected archaeological sites within a 1km radius, revealing a comprehensive picture of habitation, industry, and burial practices.'}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {sites.map((site, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-surface rounded-2xl overflow-hidden border border-border shadow-apple hover:shadow-apple-hover transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img src={site.image} alt={site.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h2 className="font-display text-2xl text-primary mb-3">{site.name}</h2>
                <p className="text-secondary mb-4 leading-relaxed">{site.desc}</p>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-accent bg-surface-elevated px-3 py-1.5 rounded-full border border-border">
                  <span>{lang === 'ta' ? 'அகழாய்வு ஆழம்' : 'Excavation Depth'}:</span>
                  <span className="font-bold">{site.depth}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
