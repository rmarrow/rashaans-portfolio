/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      spacing: {
        'big':"48rem"
      }
    }
    },
  plugins: [require("daisyui")],
}