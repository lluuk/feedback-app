/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./**/*.vue'],
  theme: {
    extend: {
      colors: {
        green: '#34D399',
        gray: '#EAF0F6',
        lightGray: '#F8FAFC',
        textBlack: '#1E293B',
        textGray: '#64748B',
        borderGray: '#E2E8F0',
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
