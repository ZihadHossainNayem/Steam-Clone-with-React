/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      cus2: "1470px",
      cus1: "1555px",
      cus3: "1600px",
      cus4: "1650px",
      cus5: "1700px",
      cus6: "1800px",
    },
    extend: {
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.5) 0px 5px 10px;", // Replace the color and opacity values with your desired values
      },
    },
  },
  plugins: [],
};
