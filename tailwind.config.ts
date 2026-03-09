// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          poppins: ['Roboto', 'sans-serif'], /* kept for existing classes, now uses Roboto */
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
  