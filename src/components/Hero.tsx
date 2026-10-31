import { motion } from 'framer-motion';
import { ArrowDown, Box, Play } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import { useState } from 'react';
import VideoModal from './VideoModal';

export default function Hero() {
  const { t, lang } = useLang();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gray-800">
        {/* Desktop: Video Background */}
        <div className="absolute inset-0 z-0 hidden md:block">
          {!videoLoaded && (
            <img 
              src="/images/coconut-grove-aerial.jpg" 
              alt="Aerial view" 
              className="w-full h-full object-cover"
            />
          )}
          <iframe
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            src="https://www.youtube.com/embed/zD2ZUvWlVec?autoplay=1&mute=1&loop=1&playlist=zD2ZUvWlVec&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            title="Keeladi Background Video"
            allow="autoplay; encrypted-media"
            style={{ border: 'none', pointerEvents: 'none' }}
            onLoad={() => setVideoLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        </div>

        {/* Mobile: Static Image Background */}
        <div className="absolute inset-0 z-0 md:hidden">
          <img 
            src="/images/coconut-grove-aerial.jpg" 
            alt="Aerial view" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Video Credit */}
        <div className="absolute bottom-4 right-6 z-20 text-white/60 text-xs font-medium hidden md:block">
          Video: <a href="https://www.youtube.com/@Keeladimuseum" target="_blank" rel="noopener noreferrer" className="hover:text-white/90 transition-colors underline decoration-white/30">Keeladi Museum</a>
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <span className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-widest uppercase bg-accent/90 text-white rounded-full backdrop-blur-sm">
            {t.hero.subtitle}
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] text-white">
            {t.hero.title1} <br /> {t.hero.title2}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed font-light font-editorial">
            {t.hero.desc}
          </p>

          {/* Buttons */}
          <div className="mb-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://my.matterport.com/show/?m=tcQQkmPGKzZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
            >
              <Box size={20} />
              {lang === 'ta' ? 'மெய்நிகர் சுற்றுப்பயணம்' : 'Take a Virtual Tour'}
            </a>

            {/* Watch Video Button - Mobile Only */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="md:hidden inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full transition-all hover:-translate-y-1"
            >
              <Play size={20} />
              {lang === 'ta' ? 'வீடியோ பார்க்க' : 'Watch Video'}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm font-medium">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-bold text-white">{t.hero.stat1}</span>
              <span className="text-white/70 text-xs mt-1 uppercase tracking-wider">{t.hero.stat1Label}</span>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-bold text-white">{t.hero.stat2}</span>
              <span className="text-white/70 text-xs mt-1 uppercase tracking-wider">{t.hero.stat2Label}</span>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-bold text-white">{t.hero.stat3}</span>
              <span className="text-white/70 text-xs mt-1 uppercase tracking-wider">{t.hero.stat3Label}</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }} 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
        >
          <ArrowDown size={28} />
        </motion.div>
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </>
  );
}