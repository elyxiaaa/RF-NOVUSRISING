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
        'BGGuilds': "url('/src/assets/BGGuilds.png')",
        'BGLong': "url('/public/BGLong.png')",
        'BGStreamers': "url('/src/assets/BGStreamers.png')",
      },
      fontFamily: {
        ITC: ['ITC', 'sans-serif'],
        ITC2: ['ITC2', 'sans-serif'],
        StrongSword: ['StrongSword', 'sans-serif'],
      },
      keyframes: {
        pulseGlow: {
          '0%': {
            boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(255, 215, 0, 1)',
          },
          '100%': {
            boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
          },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require('daisyui')],
}
