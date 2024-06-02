/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./**/*.vue'],
  theme: {
    extend: {
      colors: {
        green: '#34D399',
        gray: '#EAF0F6',
        'light-gray': '#F8FAFC',
        black: '#1E293B',
        'defaul-text-gray': '#64748B',
        'default-border-gray': '#E2E8F0',
        red: '#DC2626',
      },
      borderRadius: {
        DEFAULT: '3px',
      },
      fontFamily: {
        sans: ['"Inter var", sans-serif'],
      },
    },
  },
  plugins: [],
};
