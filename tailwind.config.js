export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-primary)',
        surface: 'var(--bg-secondary)',
        'surface-elevated': 'var(--bg-tertiary)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        accent: { DEFAULT: 'var(--accent)', hover: 'var(--accent-hover)' },
        border: 'var(--border-color)',
        halo: 'var(--halo-color)',
        earth: {
          100: '#f5ebe0',
          200: '#e3d5ca',
          300: '#d5bdaf',
          400: '#c9ada7',
          500: '#a98467',
          600: '#8a6a50',
          700: '#6b4c3a',
          800: '#4c3326',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        editorial: ['var(--font-editorial)', 'serif'],
        sans: ['var(--font-body)', 'sans-serif'],
        tamil: ['var(--font-tamil)', 'sans-serif'],
      },
      borderRadius: { 'xl': '12px', '2xl': '16px', '3xl': '24px' },
      boxShadow: {
        'apple': '0 4px 24px rgba(0, 0, 0, 0.04)',
        'apple-hover': '0 8px 32px rgba(0, 0, 0, 0.08)',
      }
    }
  },
  plugins: [],
}
