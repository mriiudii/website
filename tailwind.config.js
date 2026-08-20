/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        // Near-black used for body text and dark surfaces
        ink: {
          DEFAULT: "#1a1a17",
          soft: "#3f3d38",
          muted: "#6b6862",
        },
        // Cool paper-like backgrounds — light blue tint to match the blue brand
        cream: "#f2f6fd",
        sand: "#e7edfa",
        // Primary brand accent — energetic blue ("дія")
        brand: {
          DEFAULT: "#1768e5",
          dark: "#1153bd",
          light: "#82aff5",
        },
        // Supporting tone — growth / development ("розвиток")
        moss: {
          DEFAULT: "#2f6b4f",
          dark: "#245540",
        },
      },
      fontFamily: {
        sans: [
          "Manrope",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "1.25rem",
      },
    },
  },
  plugins: [],
}
