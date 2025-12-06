/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'racing-sans': ['Racing Sans One', 'sans-serif'],
        'tasa-orbiter': ['TASA Orbiter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

