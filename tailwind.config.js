module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [require("tw-elements/dist/plugin")],
  theme: {
    extend: {
      animation: {
        loading: "loading  1.5s infinite ease",
      },
      keyframes: {
        loading: {
          "50%": { transform: "translateX(196px)" },
        },
      },
    },
  },
};
