import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useLang } from '../i18n/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang } = useLang();

  const links = [
    { href: '#discovery', label: t.nav.discovery },
    { href: '#strata', label: t.nav.strata },
    { href: '#structures', label: t.nav.structures },
    { href: '#literacy', label: t.nav.literacy },
    { href: '#craft', label: t.nav.craft },
    { href: '#excavations', label: lang === 'ta' ? 'அகழாய்வுகள்' : 'Excavations' },
    { href: '#artifacts', label: lang === 'ta' ? 'பொருட்கள்' : 'Artifacts' },
    { href: '#gallery', label: lang === 'ta' ? 'காட்சியகம்' : 'Gallery' },
    { href: '#contact', label: lang === 'ta' ? 'தொடர்பு' : 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' +
        (scrolled ? 'py-2 border-b border-border shadow-apple' : 'py-3 border-b border-transparent')
      }
      style={{
        backgroundColor: 'var(--surface-blur)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Stacked Logo */}
        <a href="#discovery" className="flex flex-col leading-none gap-0.5" aria-label="Keeladi home">
          <span className="logo-main font-display font-bold text-primary tracking-tight">KEELADI</span>
          <span
            className="logo-sub font-bold text-accent"
            style={{ fontFamily: "'TAU-marudham', 'Mukta Malar', sans-serif" }}
          >
            கீழடி
          </span>
        </a>

        {/* Desktop Navigation (lg and up) */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5">
          {links.map((link, idx) => (
            <a key={idx} href={link.href} className="nav-link font-bold text-secondary hover:text-primary transition-colors whitespace-nowrap">
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle (lg and below) */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <button className="text-primary p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 bg-surface border-b border-border p-6 flex flex-col gap-4 shadow-apple max-h-[80vh] overflow-y-auto"
          style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
          {links.map((link, idx) => (
            <a key={idx} href={link.href} onClick={() => setIsOpen(false)} className="nav-link-mobile font-bold text-primary py-2 border-b border-border/50 last:border-0">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}