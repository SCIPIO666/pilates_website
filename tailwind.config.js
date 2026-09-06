/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  './src/pages/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{js,ts,jsx,tsx}',
  './src/app/**/*.{js,ts,jsx,tsx}',
  './src/data/**/*.{js,ts,jsx,tsx}',
],
  theme: {
    extend: {
      colors: {
        olive: '#5C6B3C',
        'olive-light': '#8A9B6A',
        'olive-mid': '#6E7F4E',
        bone: '#E8E0D4',
        ink: '#1A1A1A',
        clay: '#C4A882',
        'warm-white': '#F5F0EB',
        placeholder: '#D6CEC2',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Bricolage Grotesque', 'sans-serif'],
      },
      fontSize: {
        'xs': '10px',
        'sm': '12px',
        'base': '14px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '56px',
        '7xl': '72px',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '0.02em',
        normal: '0.04em',
        wide: '0.08em',
        wider: '0.1em',
        widest: '0.14em',
      },
    },
  },
  plugins: [],
};
