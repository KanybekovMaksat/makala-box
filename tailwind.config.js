/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    fontFamily: {
      serif: ['Golos Text', 'serif'],
      sans: ['Golos Text', 'sans'],
    },
    colors: {
      'pc-100': '#F9F9F9',
      'pc-200': '#CDCDCD',
      'pc-300': '#ABABAB',
      'pc-400': '#898989',
      'pc-500': '#676767',
      'sc-100': '#EFEFEF',
    },
    extend: {},
  },
  plugins: [],
};
