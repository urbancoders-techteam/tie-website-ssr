// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Nunito', 'sans-serif'],
          nunito: ['Nunito', 'sans-serif'],
          roboto: ['Nunito', 'sans-serif'], /* kept for existing classes, now uses Nunito */
          poppins: ['Nunito', 'sans-serif'], /* kept for existing classes, now uses Nunito */
        },
        animation: {
          'spin-slow': 'spin 5s linear infinite',
        },
        clipPath: {
          hex: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        },
      },
    },
    plugins: [],
  };
  