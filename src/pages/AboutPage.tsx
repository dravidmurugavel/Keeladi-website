import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';

export default function AboutPage() {
  const { lang } = useLang();
  return (
    <div className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">
            {lang === 'ta' ? 'அருங்காட்சியகம் பற்றி' : 'About the Museum'}
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-8 leading-tight">
            {lang === 'ta' ? 'சங்க கால நாகரிகத்தின் சாட்சி' : 'Witness to the Sangam Age Civilization'}
          </h1>
          <div className="prose prose-lg text-secondary max-w-none">
            <p className="mb-6">
              {lang === 'ta'
                ? 'கீழடி அருங்காட்சியகம், வைகை ஆற்றங்கரையில் அமைந்துள்ள 2,600 ஆண்டுகள் பழமையான நகர நாகரிகத்தின் கண்டுபிடிப்புகளை பாதுகாத்து காட்சிப்படுத்துகிறது. 110 ஏக்கர் பரப்பளவில் தென்னந்தோப்புகளுக்கு மத்தியில் அமைந்துள்ள இந்த இடம், தமிழ்நாடு அரசு தொல்லியல் துறையால் அகழாய்வு செய்யப்பட்டு வருகிறது.'
                : 'The Keeladi Museum preserves and showcases the discoveries of a 2,600-year-old urban civilization situated on the banks of the Vaigai River. Spanning 110 acres amidst coconut groves, this site has been systematically excavated by the Tamil Nadu State Department of Archaeology, rewriting the historical timeline of early urbanization in South India.'}
            </p>
            <p className="mb-6">
              {lang === 'ta'
                ? '2014ஆம் ஆண்டில் இந்திய தொல்லியல் ஆய்வு மையத்தால் (ASI) தொடங்கப்பட்ட அகழாய்வு, 2017 முதல் தமிழ்நாடு அரசு தொல்லியல் துறையால் தொடர்ந்து நடத்தப்பட்டு வருகிறது. இதுவரை 13,000க்கும் மேற்பட்ட பொருட்கள் கண்டறியப்பட்டுள்ளன.'
                : 'Initiated by the Archaeological Survey of India (ASI) in 2014, the excavation has been continuously conducted by the Tamil Nadu State Department of Archaeology since 2017. To date, over 13,000 antiquities have been recovered, providing irrefutable evidence of a literate, industrial, and trade-connected society.'}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-surface p-6 rounded-2xl border border-border shadow-apple">
                <h3 className="font-display text-3xl text-accent mb-2">110+</h3>
                <p className="text-sm text-secondary">{lang === 'ta' ? 'ஏக்கர் அகழாய்வு பரப்பு' : 'Acres of Cultural Mound'}</p>
              </div>
              <div className="bg-surface p-6 rounded-2xl border border-border shadow-apple">
                <h3 className="font-display text-3xl text-accent mb-2">13,000+</h3>
                <p className="text-sm text-secondary">{lang === 'ta' ? 'மீட்கப்பட்ட பொருட்கள்' : 'Antiquities Recovered'}</p>
              </div>
              <div className="bg-surface p-6 rounded-2xl border border-border shadow-apple">
                <h3 className="font-display text-3xl text-accent mb-2">6th c. BCE</h3>
                <p className="text-sm text-secondary">{lang === 'ta' ? 'தமிழி எழுத்தின் தொன்மை' : 'Antiquity of Tamili Script'}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
