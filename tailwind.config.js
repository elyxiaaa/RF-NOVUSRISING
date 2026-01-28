/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       backgroundImage: {
        'BGHome': "url('/src/assets/BG/BGHome.jpg')",
        'BGCombination': "url('/src/assets/BG/BGCombination.jpg')",
        'BGGuilds': "url('/src/assets/BG/BGGuilds.jpg')",
        'BGLong': "url('/src/assets/BG/BGLong.png')",
      },
    },
  },
  plugins: [require('daisyui')],
}

