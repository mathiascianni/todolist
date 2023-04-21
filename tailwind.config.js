/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "title": ["Lato", "sans-serif"],
      "body": ["Roboto", "sans-serif"]
    }
  },
  plugins: [],
}