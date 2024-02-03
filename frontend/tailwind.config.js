/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
],
  theme: {
    extend: {
      colors: {
        'mpRed': '#e63946',
        'mpGrey': '#f1faee',
        'mpBlue': '#00a8e8',
        'mpDBlue': '#0d1b2a',
        'mpYellow': '#fca311',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space': ['Space-Grotesk', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}