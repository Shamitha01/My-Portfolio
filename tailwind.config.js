// tailwind.config.js
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f0f4ff' // or any light color you prefer
        }
      }
    }
  },
  plugins: []
}
