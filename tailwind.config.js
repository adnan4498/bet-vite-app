/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          // DEFAULT: '1rem',
          // xs: '1rem',
          sm: '4rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },

      fontSize: (() => {
        const fontSizeValues = {};
        for (let i = 1; i <= 20; i++) {
          fontSizeValues[i] = `${i}px`;
        }
        return fontSizeValues;
      })(),

      spacing: (() => {
        const spacingValues = {};
        for (let i = 1; i <= 600; i++) {
          spacingValues[i] = `${i}px`;
        }
        return spacingValues;
      })(),

      backgroundColor: {
        websiteBgColor : "#3A126A",
        navbarBgColor : "#1F186B",
        loginBgColor : "#ffbb00",
      }
    },

    screens: {
      // 'xs' : '320px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}