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
    },
  },
  plugins: [],
}
export default config
