import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';

const images = [
  { src: '/images/coconut-grove-aerial.jpg', caption: 'Aerial view of the 110-acre archaeological mound' },
  { src: '/images/trench-aerial.jpg', caption: 'Systematic grid layout of excavation trenches' },
  { src: '/images/industrial-complex-aerial.jpg', caption: 'Exposed brick channels and industrial structures' },
  { src: '/images/ring-well-strata.jpg', caption: 'Stratigraphic section showing the 37-course ring-well' },
  { src: '/images/graffiti-chart.jpg', caption: 'Tamili script and graffiti marks on potsherds' },
  { src: '/images/brw-sherds.jpg', caption: 'Black-and-Red Ware with nano-technology glaze' },
  { src: '/images/glass-beads.jpg', caption: 'Collection of 1,122+ glass beads' },
  { src: '/images/carnelian-seal.jpg', caption: 'Carnelian intaglio seal with wild boar motif' },
  { src: '/images/burial-urns.jpg', caption: 'Urn burials excavated at Kondagai' },
];

export default function GalleryPage() {
  const { lang } = useLang();
  return (
    <div className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">
            {lang === 'ta' ? 'ஒளிப்படத் தொகுப்பு' : 'Photo Gallery'}
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">
            {lang === 'ta' ? 'கீழடி காட்சியகம்' : 'Keeladi Gallery'}
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-border shadow-apple bg-surface"
            >
              <img src={img.src} alt={img.caption} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm font-medium">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
