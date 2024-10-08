/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF7F7",
        secondary: "#4A4947",
        tertiary: "#102C57",
      },
      fontFamily: {
        sans: "Nunito, sans-serif",
      },
      height: {
        screen: "100dvh",
      },
      scrollbar: {
        DEFAULT: {
          bg: "bg-red-800",
          thumb: "bg-gray-700",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
