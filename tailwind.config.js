/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
  'BGHome': "url('/public/BGHome.jpg')",
  'BGCombination': "url('/public/BGCombination.jpg')",
  'BGGuilds': "url('/src/assets/BGGuilds.jpg')",
  'BGLong': "url('/public/BGLong.png')",
},
    },
  },
  plugins: [require('daisyui')],
}

