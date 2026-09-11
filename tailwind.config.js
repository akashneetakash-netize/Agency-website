/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#EEF1F8',
        'bg-secondary': '#F8FAFF',
        surface: '#FFFFFF',
        'accent-blue': '#2563EB',
        'accent-hover': '#1d4ed8',
        'accent-light': '#DBEAFE',
        'accent-purple': '#7C3AED',
        'text-main': '#0F172A',
        'text-secondary': '#334155',
        'text-muted': '#64748B',
        'text-dim': '#94A3B8',
        'border-light': '#E2E8F0',
        'border-medium': '#CBD5E1',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 16px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 12px 32px rgba(15, 23, 42, 0.12)',
        'blue-glow': '0 0 25px rgba(37, 99, 235, 0.2)',
        'btn-blue': '0 4px 14px rgba(37, 99, 235, 0.3)',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #1d4ed8 0%, #2563EB 60%, #7C3AED 100%)',
        'gradient-radial-hero': 'radial-gradient(circle at 60% 0%, rgba(37,99,235,0.08) 0%, transparent 65%)',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'float-glow': 'floatGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'counter-up': 'counterUp 0.8s cubic-bezier(0, 0, 0.2, 1) both',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatGlow: {
          '0%, 100%': { transform: 'translateY(0px)', filter: 'brightness(1)' },
          '50%': { transform: 'translateY(-10px)', filter: 'brightness(1.1)' },
        },
        counterUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
