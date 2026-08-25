/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            950: '#040E18',
            900: '#071A2B', // Deep Midnight Navy
            850: '#092137',
            800: '#0D2D4B',
            700: '#133D63',
          },
          blue: {
            900: '#082F49',
            800: '#075985',
            700: '#0C4A6E', // Pharma Blue
            600: '#0284C7',
            500: '#0EA5E9',
            100: '#E0F2FE',
            50: '#F0F9FF',
          },
          green: {
            600: '#12885E',
            500: '#17A673', // Energy Green Accent
            400: '#34D399',
            100: '#D1FAE5',
            50: '#ECFDF5',
          },
          light: '#F5F8FA',
          surface: '#F8FAFC',
          text: '#12212F',
          muted: '#64748B',
          border: '#E2E8F0',
          darkBorder: '#1E3A56',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.025em',
        tight: '-0.015em',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(7, 26, 43, 0.37)',
        'glass-light': '0 8px 32px 0 rgba(12, 74, 110, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(7, 26, 43, 0.12)',
        'glow-green': '0 0 25px -5px rgba(23, 166, 115, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
