/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    typography: {
      heading1: {
        fontSize: "40px",
        lineHeight: "46.88px",
        fontWeight: "700",
      },
      heading2: {
        fontSize: "32px",
        lineHeight: "37.5px",
        fontWeight: "600",
      },
      heading3: {
        fontSize: "24px",
        lineHeight: "28.1px",
        fontWeight: "600",
      },
      heading4: {
        fontSize: "20px",
        lineHeight: "23.44px",
        fontWeight: "500",
      },
      bigBodyTextM: {
        fontSize: "18px",
        lineHeight: "21.6px",
        fontWeight: "500",
      },
      bigBodyTextR: {
        fontSize: "18px",
        lineHeight: "21.6px",
        fontWeight: "400",
      },
      mediumBodyTextM: {
        fontSize: "16px",
        lineHeight: "18.75px",
        fontWeight: "500",
      },
      mediumBodyTextR: {
        fontSize: "16px",
        lineHeight: "18.75px",
        fontWeight: "400",
      },
      smallBodyTextM: {
        fontSize: "14px",
        lineHeight: "16.41px",
        fontWeight: "500",
      },
      smallBodyTextR: {
        fontSize: "14px",
        lineHeight: "16.41px",
        fontWeight: "400",
      },
      tinyBodyTextM: {
        fontSize: "12px",
        lineHeight: "14.06px",
        fontWeight: "500",
      },
      tinyBodyTextR: {
        fontSize: "12px",
        lineHeight: "14.06px",
        fontWeight: "400",
      },
      tinyBodyTextEL: {
        fontSize: "12px",
        lineHeight: "14.06px",
        fontWeight: "200",
      },
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#00008B",
        primaryShade1: "#2A2A9E",
        primaryShade2: "#5555B2",
        primaryShade3: "#8080C5",
        primaryShade4: "#F3F9FE",
        primaryShade5: "#CCCCE8",
        dashboardBlue: "#0177FB",
        dashboardLightGray: "#EAEBF0",
        dashboardDarkBlue: "#272D37",
        darkColors: {
          brown: "#311412",
          black: "#0A0404",
          grey: "#5C5858",
          gray: "#5F6D7E",
          lightGrey: "#848181",
          lighterGrey: "#CECDCD",
          lightestGrey: "#F5F5F5",
        },
        statusColors: {
          success: "#26B735",
          warning: "#F3DE27",
          error: "#E81010",
        },
        white: "#FFFFFF",
      },
      boxShadow: {
        "card-shadow": "0 4px 6px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [
    tailwindScrollbar,
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".heading1": {
          fontSize: theme("typography.heading1.fontSize"),
          lineHeight: theme("typography.heading1.lineHeight"),
          fontWeight: theme("typography.heading1.fontWeight"),
        },
        ".heading2": {
          fontSize: theme("typography.heading2.fontSize"),
          lineHeight: theme("typography.heading2.lineHeight"),
          fontWeight: theme("typography.heading2.fontWeight"),
        },
        ".heading3": {
          fontSize: theme("typography.heading3.fontSize"),
          lineHeight: theme("typography.heading3.lineHeight"),
          fontWeight: theme("typography.heading3.fontWeight"),
        },
        ".heading4": {
          fontSize: theme("typography.heading4.fontSize"),
          lineHeight: theme("typography.heading4.lineHeight"),
          fontWeight: theme("typography.heading4.fontWeight"),
        },
        ".bigBodyTextM": {
          fontSize: theme("typography.bigBodyTextM.fontSize"),
          lineHeight: theme("typography.bigBodyTextM.lineHeight"),
          fontWeight: theme("typography.bigBodyTextM.fontWeight"),
        },
        ".bigBodyTextR": {
          fontSize: theme("typography.bigBodyTextR.fontSize"),
          lineHeight: theme("typography.bigBodyTextR.lineHeight"),
          fontWeight: theme("typography.bigBodyTextR.fontWeight"),
        },
        ".mediumBodyTextM": {
          fontSize: theme("typography.mediumBodyTextM.fontSize"),
          lineHeight: theme("typography.mediumBodyTextM.lineHeight"),
          fontWeight: theme("typography.mediumBodyTextM.fontWeight"),
        },
        ".mediumBodyTextR": {
          fontSize: theme("typography.mediumBodyTextR.fontSize"),
          lineHeight: theme("typography.mediumBodyTextR.lineHeight"),
          fontWeight: theme("typography.mediumBodyTextR.fontWeight"),
        },
        ".smallBodyTextM": {
          fontSize: theme("typography.smallBodyTextM.fontSize"),
          lineHeight: theme("typography.smallBodyTextM.lineHeight"),
          fontWeight: theme("typography.smallBodyTextM.fontWeight"),
        },
        ".smallBodyTextR": {
          fontSize: theme("typography.smallBodyTextR.fontSize"),
          lineHeight: theme("typography.smallBodyTextR.lineHeight"),
          fontWeight: theme("typography.smallBodyTextR.fontWeight"),
        },
        ".tinyBodyTextM": {
          fontSize: theme("typography.tinyBodyTextM.fontSize"),
          lineHeight: theme("typography.tinyBodyTextM.lineHeight"),
          fontWeight: theme("typography.tinyBodyTextM.fontWeight"),
        },
        ".tinyBodyTextR": {
          fontSize: theme("typography.tinyBodyTextR.fontSize"),
          lineHeight: theme("typography.tinyBodyTextR.lineHeight"),
          fontWeight: theme("typography.tinyBodyTextR.fontWeight"),
        },
        ".tinyBodyTextEL": {
          fontSize: theme("typography.tinyBodyTextEL.fontSize"),
          lineHeight: theme("typography.tinyBodyTextEL.lineHeight"),
          fontWeight: theme("typography.tinyBodyTextEL.fontWeight"),
        },
      });
    }),
  ],
};
