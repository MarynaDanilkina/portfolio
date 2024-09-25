import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./react/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        teal: "#366977",
        dark_navy: "#0B1D26",
        golden: "#FBD784",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        acme: ["var(--font-acme)"],
        aDLaM: ["var(--font-aDLaM)"],
      },
      letterSpacing: {
        "custom-wide": "0.33em",
      },
      screens: {
        xs: "500px",
        sm: "768px",
        sl: "990px",
        md: "1440px",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, #0b1d26, transparent 87%)",
        "number-gradient":
          "linear-gradient(134deg, #fff 0%, #366977 56%, #0b1d26 100%);",
      },
    },
  },
  plugins: [],
}
export default config
