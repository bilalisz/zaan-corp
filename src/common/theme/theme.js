import { createTheme } from "@mui/material";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

import palette from "./palette";

const breakpoints = createBreakpoints({});

const { gray, primary, common } = palette;

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', 'sans-serif'",
    h1: {
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      marginBottom: 10,
      color: gray[600],
      fontFamily: "'Roboto', 'sans-serif'",
      [breakpoints.down("xs")]: {
        fontSize: 35,
      },
    },
    h2: {
      fontSize: 44,
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      marginBottom: 10,
      color: gray[600],
      fontFamily: "'Roboto', 'sans-serif'",
      [breakpoints.down("xs")]: {
        fontSize: 30,
      },
    },
    h3: {
      fontSize: 26,
      fontWeight: 500,
      lineHeight: 1.25,
      letterSpacing: "-0.01562em",
      marginBottom: 10,
      color: gray[800],
      fontFamily: "'Roboto', 'sans-serif'",
      [breakpoints.down("xs")]: {
        fontSize: 22,
      },
    },
    h4: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      marginBottom: 10,
      fontFamily: "'Roboto', 'sans-serif'",
      color: gray[800],
    },
    h5: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      fontFamily: "'Roboto', 'sans-serif'",
      marginBottom: 10,
      color: gray[800],
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
      color: gray[600],
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
      color: gray[600],
    },
    body1: {
      fontWeight: 400,
      fontSize: 15,
      lineHeight: 1.5,
      color: gray[600],
    },
    small: {
      fontWeight: 300,
      fontSize: 12,
      lineHeight: 1,
      color: "#898d91",
    },
    mediumSmall: {
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1,
      color: "#898d91",
    },
  },
  palette: {
    primary: {
      main: primary.dark,
    },
    background: {
      blue: primary.dark,
      blueMedium: primary.medium,
      blueMediumLight: primary.mediumLight,
      blueLight: primary.light,
      blueExtraLight: primary.extraLight,
      orangeLight: palette.orange[100],
      orangeMediumLight: palette.orange[200],
      orangeDark: palette.orange[300],
      orangeMediumDark: palette.orange[300],
      skyblue: palette.skyblue[100],
      skyblueDark: palette.skyblue[300],
      pinkLight: palette.pink[100],
      pinkDark: palette.pink[200],
      lightBlue1: palette.common.blue,
      lightBlue: palette.common.lightBlue,
      lightGreen: palette.common.lightGreen,
      iconEnable: palette.common.iconEnbale,
      iconDisable: palette.common.iconDisable,
      white: palette.common.white,
      black: palette.common.black,
      success: palette.common.success,
      danger: palette.common.danger,
      lightGray: common.lightGray,
      lightGreen1: common.lightGreen1,
    },
    icon: {
      white: common.white,
      blue: primary.dark,
      blueMedium: primary.medium,
      blueLight: primary.light,
      lightBlack: common.lightBlack,
      lightGray: common.lightGray,
      lightDanger: common.lightDanger,
      danger: palette.common.danger,
    },

    typography: {
      black: common.black,
      blue: primary.dark,
      blue0: primary.extraLight,
      blueMedium: primary.medium,
      white: common.white,
      gray: common.gray,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  padding: {
    section: "0 50px",
  },
  // border: {
  //   light: `1px solid ${gray[100]}`,
  //   white: `1px solid ${common.white}`,
  //   medium: `1px solid ${gray[200]}`,
  //   dark: `1px solid ${gray[300]}`,
  //   blue: `1px solid ${primary.dark}`,
  //   blueBorder: `1px solid ${primary.medium}`,
  //   greenBorder: `1px solid ${green[200]}`,
  //   orangeBorder: `1px solid ${orange[200]}`,
  //   darkRedBorder: `1px solid ${red[300]}`,
  // },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1540,
      xl: 1836,
    },
  },
});

export default theme;
