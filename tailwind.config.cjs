/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Neutral/DarkGrayushRed": "#413A3A",
        "Neutral/bgWhite": "#F0F0F0",
        "Neutral/gray": "#DECACC",
        "primary/DesaturatedRed": "#CE9797",
        "primary/Stockgray": "#D7BDBE",
        "primary/SoftRed": "#F96262",
        Gradient: {
          button: {
            start: "#F8BFBF",
            end: "#EE8C8C",
          },
          background: {
            start: "#FFFFFF",
            end: "#FFF5F5",
          },
        },
      },

      backgroundImage: {
        "hero-pattern": "url('./images/bg-pattern-desktop.png')",
      },

      fontSize: {
        sm: ["0.875rem", "1.375rem"],
        base: ["1rem", "1.75rem"],
        xl: ["2.5rem", "2.688rem"],
        "2xl": ["2.625rem", "2.688rem"],
        "3xl": ["3.875rem", "3.875rem"],
      },
      fontFamily: {
        Josefin: ["Josefin Sans", "serif"],
      },
      boxShadow: {
        "shadow-blue-in-gray":
          "0px 4px 8px 0px rgba(83,104,223,0.15), 0px 0px 4px 0px rgba(83,104,223,0.08)",
      },
    },
  },
  plugins: [],
};
