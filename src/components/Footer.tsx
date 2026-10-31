import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
  const { lang } = useLang();
  const isTa = lang === 'ta';

  return (
    <footer className="bg-surface text-secondary py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column: Author Attribution & Concise Disclaimer */}
        <div>
          <h3 className="font-display text-2xl text-primary mb-4">Keeladi</h3>
          <p className="text-sm leading-relaxed opacity-80 mb-4 font-editorial">
            {isTa
              ? 'சுயாதீன தொல்லியல் ஆராய்ச்சியாளர் டிராவிட் முருகவேல் அவர்களின் முயற்சி.'
              : 'An Attempt by Independent Archaeologist Dravid Murugavel.'}
          </p>
          <p className="text-xs leading-relaxed opacity-60 mb-4">
            {isTa
              ? 'இந்த விவரிப்பு பொதுவாகக் கிடைக்கும் ஆதாரங்களிலிருந்து ஆசிரியரின் பார்வையை மட்டுமே அடிப்படையாகக் கொண்டது. இது முற்றிலும் கல்வி நோக்கத்திற்காக மட்டுமே. உரிய உரிமையாளர்களின் பதிப்புரிமை மரியாதைக்குரியது.'
              : "The narration is entirely based on the author's perspective from existing publicly available sources. This is for educational purposes only. Respective rights belong to respective owners."}
          </p>
          <Link
            to="/policy"
            className="text-xs text-accent hover:text-accent-hover underline decoration-accent/30 underline-offset-4 transition-colors"
          >
            {isTa ? 'முழுமையான நிவாரணம் & பதிப்புரிமை கொள்கையைப் படிக்கவும்' : 'Read Full Disclaimer & Copyright Policy'}
          </Link>
        </div>

        {/* Right Column: Quick Links */}
        <div>
          <h4 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">
            {isTa ? 'விரைவு இணைப்புகள்' : 'Quick Links'}
          </h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <a href="/#discovery" className="hover:text-accent transition-colors">
                {isTa ? 'முகப்பு' : 'Home'}
              </a>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent transition-colors">
                {isTa ? 'அருங்காட்சியகம் பற்றி' : 'About the Museum'}
              </Link>
            </li>
            <li>
              <a href="/#excavations" className="hover:text-accent transition-colors">
                {isTa ? 'அகழாய்வுகள்' : 'Excavations'}
              </a>
            </li>
            <li>
              <Link to="/policy" className="hover:text-accent transition-colors">
                {isTa ? 'கொள்கை & நிவாரணம்' : 'Disclaimer & Policy'}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border text-center text-xs opacity-60">
        © 2026 Dravid Murugavel.{' '}
        {isTa ? 'கல்வி மற்றும் பண்பாட்டுக் கதை சொல்லலுக்காக உருவாக்கப்பட்டது.' : 'Built for educational, non-commercial storytelling.'}
      </div>
    </footer>
  );
}
