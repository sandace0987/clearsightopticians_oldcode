/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#D4AF37', // Premium gold accent
          navy: '#0F1E36', // Sleek dark navy
          slate: '#2C3E50', // Gray slate
          cream: '#F9F6F0', // Warm off-white
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
