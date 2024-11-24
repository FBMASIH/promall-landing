import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {  
        'head': '0px 4px 26px 14px rgba(0, 0, 0, 0.53)',  
      },  
      fontFamily: {
        yekanbakh: ["Yekan Bakh VF", "Yekan Bakh Fa"],
      },
      backgroundImage: {
        gradiant: "linear-gradient(243.18deg, #100F17 0%, #1E2128 100%)",
      },
     
    },
  },
  plugins: [

  ],
} satisfies Config;
