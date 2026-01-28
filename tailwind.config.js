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
  'BGHome': "url('/src/assets/BGHome.jpg')",
  'BGCombination': "url('/src/assets/BGCombination.jpg')",
  'BGGuilds': "url('/src/assets/BGGuilds.jpg')",
  'BGLong': "url('/src/assets/BGLong.png')",
},
    },
  },
  plugins: [require('daisyui')],
}

