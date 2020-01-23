interface Breakpoints extends Array<string> {
  sm?: string;
  md?: string;
  lg?: string;
}

interface Thmeme {
  breakpoints: Breakpoints;
  [key: string]: object | (string | number)[];
}

const theme: Thmeme = {
  breakpoints: ["360px", "720px", "1280px"],
  colors: {
    primary: "#4F9DDA",
    secondary: "#F3F3F7"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  text: {
    heading: {
      fontSize: [2, 2, 3]
    }
  },
  variants: {
    activeNavi: {
      color: "#fff",
      backgroundColor: "#2A7FB6"
    },
    defaultNavi: {
      color: "#fff",
      backgroundColor: "primary"
    }
  }
};

theme.breakpoints.sm = theme.breakpoints[0];
theme.breakpoints.md = theme.breakpoints[1];
theme.breakpoints.lg = theme.breakpoints[2];

export default theme;
