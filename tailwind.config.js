/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        paddingTop:"1rem",
        screens: {
          lg: "11024px",
          xl: "1024px",
          "2xl": "1024px"
        },
      },
    },
  },
  plugins: [],
}

