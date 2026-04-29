/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#c81e1e',
          dark: '#8f1c1c',
          deeper: '#791616',
          soft: '#fae8e8',
        },
        navy: {
          DEFAULT: '#111827',
          muted: '#1f2937',
        },
        cream: '#fff7f8',
        blush: '#fff0f3',
        ink: '#121827',
        body: '#495466',
        muted: '#6b7280',
        line: '#d6dde5',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 16px 40px rgba(17, 24, 39, 0.06)',
        soft: '0 10px 28px rgba(17, 24, 39, 0.08)',
      },
    },
  },
  plugins: [],
}
