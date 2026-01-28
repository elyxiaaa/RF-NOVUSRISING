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
      fontFamily: {
        ITC: ['ITC', 'sans-serif'],
        ITC2: ['ITC2', 'sans-serif'],
        StrongSword: ['StrongSword', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}
