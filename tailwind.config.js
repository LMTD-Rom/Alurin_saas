/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          700: '#1E4FD8',
          600: '#2563EB',
          500: '#3B82F6',
          400: '#6AA3FF',
          300: '#A9C8FF',
          100: '#E6EEFF',
          50:  '#F3F7FF',
        },
        navy: {
          900: '#0A1530',
          700: '#1B2A4E',
        },
        ink: {
          DEFAULT: '#0A1530',
          soft: '#5F6B85',
        },
        page: '#F8FAFF',
        green: {
          DEFAULT: '#16A34A',
          bg: '#E7F8EE',
        },
        red: {
          DEFAULT: '#E5484D',
          bg: '#FDECEC',
        },
        amber: {
          DEFAULT: '#D97706',
          bg: '#FFF3DD',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', '"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        hero: '28px',
        card: '24px',
        field: '12px',
      },
      backgroundImage: {
        hero: 'linear-gradient(180deg, #2F6BF2 0%, #4D8DFB 48%, #9DC4FF 100%)',
        'card-blue': 'linear-gradient(135deg, #2F6BF2 0%, #7DB1FF 100%)',
        'btn-blue':  'linear-gradient(180deg, #3B82F6 0%, #1D4ED8 100%)',
      },
      boxShadow: {
        card: '0 24px 60px -12px rgba(37,99,235,.18), 0 2px 6px rgba(15,30,80,.04)',
        strong: '0 30px 70px -10px rgba(37,99,235,.35)',
      },
    },
  },
  plugins: [],
}
