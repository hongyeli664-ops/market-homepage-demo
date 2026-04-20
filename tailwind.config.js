/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff5f0",
          100: "#ffe5d6",
          200: "#ffc4a6",
          300: "#ff9f72",
          400: "#ff7947",
          500: "#f75a1e",
          600: "#dd4210",
          700: "#b53111",
          800: "#912a15",
          900: "#762615"
        },
        ink: {
          900: "#151822",
          800: "#222736",
          700: "#3a4258"
        },
        sand: "#f7f3ef"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(17, 24, 39, 0.08)",
        card: "0 10px 30px rgba(15, 23, 42, 0.08)",
        glow: "0 25px 55px rgba(247, 90, 30, 0.18)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)"
      },
      fontFamily: {
        sans: ["Segoe UI", "PingFang SC", "Microsoft YaHei", "sans-serif"]
      }
    }
  },
  plugins: []
};
