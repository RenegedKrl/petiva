/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F3682",
        accent: "#29B6B9",
        background: "#FFFFFF",
        surface: "#F8FAFC",
        text: {
          main: "#1F3682",
          body: "#334155"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
