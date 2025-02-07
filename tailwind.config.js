/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "[3fr_1fr]": "3fr 1fr", // 행 비율 정의
        "[1fr_7fr]": "1fr 7fr",
      },
      gridTemplateColumns: {
        "[3fr_7fr]": "3fr 7fr", // 열 비율 정의
        "[4fr_6fr]": "4fr 6fr",
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-size': '60px 60px', // 격자 크기 조정
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".grid-areas-section-a": {
          display: "grid",
          gridTemplateAreas: `
            "image image"
            "title content"
          `,
        },
      });
    }),
  ],
};
