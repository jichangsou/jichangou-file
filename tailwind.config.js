/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        stix: ['"STIX Two Text"', 'serif'],
        suisse: ['"Suisse Intl"', '"Suisse Int\'l"', 'sans-serif'],
      },
      colors: {
        cream: '#FFF4E7',
        tan: '#DABFA0',
        dark: '#0A0707',
        'dark-blue': '#0A1B2D',
        'panel-dark': 'rgba(17, 16, 15, 0.35)',
        'title-bar': '#191C1F',
        'dot-inactive': '#3E332F',
      },
    },
  },
  plugins: [],
}
