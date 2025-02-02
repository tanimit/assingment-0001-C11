/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }


  // tailwind.config.js
mmodule.exports = {
  theme: {
    extend: {
      animation: {
        'color-change': 'colorChange 5s infinite ease-in-out',
      },
      keyframes: {
        colorChange: {
          '0%': { color: '#FF6347' }, // Red
          '25%': { color: '#FFD700' }, // Yellow
          '50%': { color: '#32CD32' }, // Green
          '75%': { color: '#1E90FF' }, // Blue
          '100%': { color: '#FF6347' }, // Red again
        },
      },
    },
  },
}
