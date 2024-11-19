/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abril: ["Abril Fatface, serif"],
        lexend: ["lexend"]
      },
      colors: {
        black: "#000",
        red: "#D50133",
        pink: "#FFF3F6",
        gray: "#6F767E",
        white: "#fff",
        blue: "#F1F8FF",
        silver: "#C2C2C2",
        "misty-red": "#FEE6ED",
        "navy-blue": "#110C1E",
        "dark-gray": "#292D32",
        "white-dark": "#F1F8FF",
        "grayish-blue": "#B2B4BF",
        "light-gray": "#DBDBDB",
        "ghost-white": "#F6F7FA",
        "yellow-orange": "#FF980A",
        "serene-blue": "#F4F6FA",
        "light-navy":"#232846"
      },
      fontSize: {
        h1: ["var(--h1)"],
        h2: ["var(--h2)"],
        h3: ["var(--h3)"],
        h4: ["var(--h4)"],
        h5: ["var(--h5)"],
        h6: ["var(--h6)"],
        xl: ["var(--xl)"],
        lg: ["var(--lg)"],
        md: ["var(--md)"],
        sm: ["var(--sm)"]
      }
    },
  },
  plugins: [],
}

