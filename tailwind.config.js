/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // primaryColor: "#8873ef",
        primaryColor: "#2b1de1",
        headingColor: "#081e21",
        smallTextColor: "#193256",
      },
      boxShadow: {
        md: "0 10px 10px 5px #8873ef",
      },
    },
  },
  plugins: [],
};
