/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
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
        // Warm paper-like backgrounds
        cream: "#faf6ee",
        sand: "#f2ece0",
        // Primary brand accent — warm, energetic ("дія")
        brand: {
          DEFAULT: "#e2601f",
          dark: "#c14f16",
          light: "#f4a261",
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
