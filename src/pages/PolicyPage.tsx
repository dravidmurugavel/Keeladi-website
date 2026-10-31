import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import { Shield, Copyright, BookOpen, AlertTriangle } from 'lucide-react';

export default function PolicyPage() {
  const { lang } = useLang();
  const isTa = lang === 'ta';

  return (
    <div className="py-24 px-6 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">
            {isTa ? 'சட்டப்பூர்வ அறிவிப்பு' : 'Legal Notice'}
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-primary mb-6 leading-tight">
            {isTa ? 'நிவாரணம் & பதிப்புரிமை கொள்கை' : 'Disclaimer & Copyright Policy'}
          </h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg font-editorial">
            {isTa
              ? 'இந்த டிஜிட்டல் காட்சியகத்தின் பயன்பாடு, உள்ளடக்கம் மற்றும் பதிப்புரிமை தொடர்பான விதிமுறைகள்.'
              : 'Terms governing the use, content, and copyright of this digital archive.'}
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Section 1: Educational Purpose */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-8 md:p-10 rounded-2xl border border-border shadow-apple"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-accent" size={24} />
              <h2 className="font-display text-2xl text-primary">
                {isTa ? '1. கல்வி நோக்கம்' : '1. Educational & Non-Commercial Purpose'}
              </h2>
            </div>
            <p className="text-secondary leading-relaxed font-editorial">
              {isTa
                ? 'இந்த இணையதளம் முற்றிலும் கல்வி, ஆராய்ச்சி மற்றும் பொது விழிப்புணர்வு நோக்கங்களுக்காக மட்டுமே உருவாக்கப்பட்டுள்ளது. இது இலாப நோக்கற்றது. இங்கு வழங்கப்படும் தகவல்கள் பொது மக்களுக்கு தொல்லியல் மரபுரிமையைப் புரிந்துகொள்ள உதவுவதை நோக்கமாகக் கொண்டுள்ளன.'
                : 'This website is created strictly for educational, research, and public awareness purposes. It is entirely non-commercial. The information provided is intended to help the public understand and appreciate our archaeological heritage.'}
            </p>
          </motion.section>

          {/* Section 2: Independent Narrative */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-8 md:p-10 rounded-2xl border border-border shadow-apple"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-accent" size={24} />
              <h2 className="font-display text-2xl text-primary">
                {isTa ? '2. சுயாதீன காட்சியகம்' : '2. Independent Digital Narrative'}
              </h2>
            </div>
            <p className="text-secondary leading-relaxed font-editorial mb-4">
              {isTa
                ? 'இந்த இணையதளம் சுயாதீன தொல்லியல் ஆராய்ச்சியாளர் டிராவிட் முருகவேல் அவர்களால் உருவாக்கப்பட்டது. இங்குள்ள விவரிப்பு மற்றும் விளக்கங்கள், தமிழ்நாடு அரசு தொல்லியல் துறை மற்றும் இந்திய தொல்லியல் ஆய்வு மையம் (ASI) ஆகியவற்றின் பொதுவாகக் கிடைக்கும் அறிக்கைகள் (2025 preliminary excavation report) மற்றும் பொது ஆதாரங்களின் அடிப்படையில் ஆசிரியரின் சொந்தப் பார்வையை மட்டுமே பிரதிபலிக்கின்றன.'
                : 'This website is an independent digital narrative curated by Independent Archaeologist Dravid Murugavel. The narration, interpretations, and perspectives presented here are solely those of the author, based on publicly available reports (including the 2025 preliminary excavation report by the Tamil Nadu State Department of Archaeology) and open-source academic data.'}
            </p>
            <p className="text-secondary leading-relaxed font-editorial">
              {isTa
                ? 'இது அரசு நிறுவனங்களின் அதிகாரப்பூர்வ நிலைப்பாட்டை பிரதிநிதித்துவப்படுத்தாது.'
                : 'It does not represent the official stance or endorsement of any government archaeological body.'}
            </p>
          </motion.section>

          {/* Section 3: Copyright & Fair Use */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-8 md:p-10 rounded-2xl border border-border shadow-apple"
          >
            <div className="flex items-center gap-3 mb-6">
              <Copyright className="text-accent" size={24} />
              <h2 className="font-display text-2xl text-primary">
                {isTa ? '3. பதிப்புரிமை & நியாயமான பயன்பாடு' : '3. Copyright & Fair Use'}
              </h2>
            </div>
            <p className="text-secondary leading-relaxed font-editorial mb-4">
              {isTa
                ? 'இந்த இணையதளத்தில் பயன்படுத்தப்பட்டுள்ள அனைத்து தொல்லியல் படங்கள், வரைபடங்கள், தரவுகள் மற்றும் ஊடகங்களின் பதிப்புரிமை அவற்றின் உரிய உரிமையாளர்களுக்கே (எ.கா., தமிழ்நாடு அரசு தொல்லியல் துறை, ASI, அல்லது தனிப்பட்ட புகைப்படக் கலைஞர்கள்) சொந்தமானது.'
                : 'All archaeological images, maps, data, and media used on this website remain the exclusive property of their respective copyright holders (e.g., Tamil Nadu State Department of Archaeology, ASI, or individual photographers).'}
            </p>
            <p className="text-secondary leading-relaxed font-editorial">
              {isTa
                ? 'இவை "நியாயமான பயன்பாடு" (Fair Use) மற்றும் கல்வி விதிவிலக்குகளின் கீழ், எந்தவொரு வணிக லாபமும் இன்றி, மரியாதையுடன் பயன்படுத்தப்பட்டுள்ளன. பதிப்புரிமை மீறல் நோக்கம் எதுவும் இல்லை. உரிமையாளர்கள் நீக்கம் கோரினால், உரிய மரியாதையுடன் உடனடியாக நீக்கப்படும்.'
                : 'They are utilized here under "Fair Use" and educational exceptions, strictly without commercial gain and with full attribution. No copyright infringement is intended. Upon valid request by rights holders, content will be promptly removed or credited appropriately.'}
            </p>
          </motion.section>

          {/* Section 4: Accuracy */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-8 md:p-10 rounded-2xl border border-border shadow-apple"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-accent" size={24} />
              <h2 className="font-display text-2xl text-primary">
                {isTa ? '4. துல்லியம் & பொறுப்பு' : '4. Accuracy & Limitation of Liability'}
              </h2>
            </div>
            <p className="text-secondary leading-relaxed font-editorial">
              {isTa
                ? 'தொல்லியல் ஆய்வுகள் தொடர்ந்து புதுப்பிக்கப்படுகின்றன. தகவல்கள் துல்லியமாக இருக்க முயற்சித்தாலும், புதிய கண்டுபிடிப்புகளின் அடிப்படையில் மாற்றங்கள் ஏற்படலாம். இந்த இணையதளத்தின் பயன்பாட்டால் ஏற்படும் எந்தவொரு நேரடி அல்லது மறைமுக இழப்புகளுக்கும் ஆசிரியர் பொறுப்பேற்க மாட்டார்.'
                : 'Archaeological science is continuously evolving. While every effort is made to ensure accuracy, interpretations may change based on new findings. The author assumes no liability for any direct or indirect losses arising from the use of information on this website.'}
            </p>
          </motion.section>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-secondary font-editorial">
            {isTa ? 'கடைசியாக புதுப்பிக்கப்பட்டது: 2026' : 'Last Updated: 2026'}
          </p>
        </div>
      </div>
    </div>
  );
}
