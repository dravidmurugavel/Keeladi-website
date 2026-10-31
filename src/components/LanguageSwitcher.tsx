import { useLang } from '../i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center bg-surface-elevated rounded-full p-1 border border-border">
      <button
        onClick={() => setLang('en')}
        className={'px-3 py-1 text-xs font-medium rounded-full transition-all ' + (lang === 'en' ? 'bg-accent text-white' : 'text-secondary hover:text-primary')}
      >
        EN
      </button>
      <button
        onClick={() => setLang('ta')}
        className={'px-3 py-1 text-xs font-medium rounded-full transition-all ' + (lang === 'ta' ? 'bg-accent text-white' : 'text-secondary hover:text-primary')}
      >
        தமிழ்
      </button>
    </div>
  );
}
