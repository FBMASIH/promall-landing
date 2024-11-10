import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yekanbakh: ["Yekan Bakh VF", "Yekan Bakh Fa"],
      },
      backgroundImage: {
        gradiant: "linear-gradient(243.18deg, #100F17 0%, #1E2128 100%)",
      },
     
    },
  },
  plugins: [],
} satisfies Config;
