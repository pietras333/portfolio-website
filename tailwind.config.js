/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "dotGrid": "url('./Assets/dot-grid.png')",
        "vector1": "url('./Assets/vector-1.png')",
        "vector2": "url('./Assets/vector-2.png')",
      }
    },
  },
  plugins: [],
}
