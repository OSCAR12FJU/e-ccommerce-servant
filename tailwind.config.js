/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary: '#fff',
        second: '#212529',
        tercer: "#ffbe00"
      },
      maxHeight:{
        card: '200px!important'
      },
      spacing: {
        'scrollbar-hide': 'scrollbar-width: none; -ms-overflow-style: none;',
      },


    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          'overflow': 'hidden', // O bien, si necesitas scroll: 'auto'
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
};

