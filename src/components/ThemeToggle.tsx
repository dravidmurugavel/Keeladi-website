import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor;
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-surface-elevated hover:bg-border text-secondary hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label="Toggle theme"
    >
      <Icon size={18} strokeWidth={2} />
    </button>
  );
}
