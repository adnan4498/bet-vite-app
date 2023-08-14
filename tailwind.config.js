/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: (() => {
        const maxWidthValues = {};
        for (let i = 100; i <= 130; i++) {
          maxWidthValues[i.toString()] = `${i}%`;
        }
        return maxWidthValues;
      })(),

      fontSize: (() => {
        const fontSizeValues = {};
        for (let i = 1; i <= 100; i++) {
          fontSizeValues[`${i}`] = `${i}px`;
        }
        return fontSizeValues;
      })(),

      lineHeight: (() => {
        const lineHeightValues = {};
        for (let i = 1; i <= 100; i++) {
          lineHeightValues[`${i}`] = `${i}px`;
        }
        return lineHeightValues;
      })(),

      spacing: (() => {
        const spacingValues = {};
        for (let i = 1; i <= 3000; i++) {
          spacingValues[i] = `${i}px`;
        }
        return spacingValues;
      })(),

      backgroundColor: {
        websiteBgColor: "#3A126A",
        navbarBgColor: "#1F186B",
        loginBgColor: "#ffbb00",
        cardDarkBlue: "#060041",
        cardBlue:"#1d1379",
        cardPurple: "#3f368c"
      },
    },

    screens: {
      // 'xs' : '320px',

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
