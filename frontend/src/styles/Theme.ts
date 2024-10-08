import { DefaultTheme } from "styled-components";
import '@fontsource-variable/inter'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

export const theme: DefaultTheme = {
  colors: {
    primary: "#FAFAFA",
    secondary: "#FFC80A",
    tertiary: "#303030",
    backgroundRich: "#38D0A1",
    backgroundPoor: "#8FD1C4",
    text: "#000000",
    primaryTextColor: "#594F43",
    secondaryTextColor: "#777777",
    inputPlaceholder: "#C7C7C7",
    darkGrayText: "#303030",
    darkText: "#1A1A1A",
    black: "#000000",
    white: "#ffffff",
    dark: "",
    medium: "",
    light: "",
    danger: "",
    success: "#66A15A",

    // TeaserCard
    cardPrimary: "#F8F8F8",
    descriptorPrimary: "#7E7E7E",

    // Button
    buttonPrimary: "#8FD1C4",

    // Header/Footer
    headerFooterBg: "#F8F8F8",
    boxShadowUp: "0 -6px 6px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    boxShadowDown: "0px 7px 7px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  fonts: {
    inter: "Inter Variable",
    roboto: "Roboto",
  },
  sizes: {
    xs: "10px",
  },
  paddings: {
    container: "15px",
    pageTop: "30px",
  },
  margins: {
    pageTop: "30px",
  },
};
