import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emptyProgressBar: "#5D7FA3",
        bgBtn: "#134267",
        textBtnActive: "#93A8C1",
        darkText: "#96CAF7",
        bgContent: "#FFFFFF",
        inputColor: "#F8F9FC",
        labelInputColor: "#4F637D",
        placeHolder: "#C3CAD5",
        bgMainBtn: "#32ABF2",
        btnHover: "#2493D9", // Slightly darker for hover
        btnActive: "#1A7BB7",
        mobillProgressBar: "#C9D3E0",
        successColor: "#65BD47",
        googleColor: "#4285F4",
        bgConnect: "#F8F9FC",
      },
      backgroundImage: {
        bgSideBar: "linear-gradient(316deg, #0d3251 0%, #19476c 100%)",
      },
      lineHeight: {
        "150": "1.5", // 150%
      },
      letterSpacing: {
        tightest: "-0.01em",
      },
      // screens: {
      //   tablet: "1194px", // Define the custom screen breakpoint
      // },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "834px",
      xl: "1194px",
      "2xl": "1440px",
    },
  },
  plugins: [],
};
export default config;
