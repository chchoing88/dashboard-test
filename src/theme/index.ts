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
    point: "#4F9DDA",
    base: "#F3F3F7",
    content: "#8B8B8B",
    title: "#202020"
  },
  fontSizes: [12, 14, 16, 20, 24, 28, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  text: {
    heading: {
      fontSize: [2, 2, 3]
    },
    secondaryHeading: {
      fontSize: [3, 3, 5]
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
