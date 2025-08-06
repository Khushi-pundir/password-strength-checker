const tailwindcss = require('@tailwindcss/postcss');

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
