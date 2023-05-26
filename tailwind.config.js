/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      SourceCodePro: ["Source Code Pro", "monospace"],
      Knewave: ["Knewave", "cursive"],
      Quicksand: ["Quicksand", "sans-serif"],
      Righteous: ["Righteous", "cursive"],
      Raleway: ["Raleway", "sans-serif"],
      Fira: ["Fira Code", "monospace"],
    },
    extend: {
      animation: {
        tilt: "tilt 10s infinite linear",
        background: "background ease infinite",
      },

      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
        background: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      colors: {
        dark: {
          50: "#f4f6f7",
          100: "#e2e5e9",
          200: "#232323",
          300: "#202020",
          400: "#1d1d1d",
          500: "#0E0E0E",
          600: "#171717",
          700: "#111111",
          800: "#1d1d1d",
          900: "#141414",
          950: "#121212",
          1000: "#0d0d0d",
        },
        traffic: {
          closeRed: "#ff6159",
          closeRedActive: "#bf4942",
          closeRedIcon: "#4d0000",
          closeRedIconActive: "#190000",
          minimizeYellow: "#ffbd2e",
          minimizeYellowActive: "#bf8e22",
          minimizeYellowIcon: "#995700",
          minimizeYellowIconActive: "#592800",
          maximizeGreen: "#28c941",
          maximizeGreenActive: "#1d9730",
          maximizeGreenIcon: "#006500",
          maximizeGreenIconActive: "#003200",
        },
      },
      dropShadow: {
        "3xxl": "0 35px 35px rgba(0, 0, 0, 0.3)",
        "1xxl": "0 35px 35px rgba(234, 34, 3, 1)",
        // "4xl": "0 50px 50px rgba(0, 0, 0, 0.3)",
        "5xl": "0 75px 75px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "50%": "50%",
      },
    },
  },
  plugins: [],
};
