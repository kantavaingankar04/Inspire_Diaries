/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F9F5F0', // Cream
        secondary: '#FFFFFF', // White
        accent: '#D4AF37', // Gold
        text: '#2C241B', // Dark Brown
        muted: '#6B5D52', // Muted Brown
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
