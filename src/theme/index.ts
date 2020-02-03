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
    point: "#497adc",
    base: "#F3F3F7",
    content: "#8B8B8B",
    title: "#202020",
    clean: "#fff",
    black: "#333"
  },
  fontSizes: [12, 14, 16, 20, 24, 28, 32, 48, 64],
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256],
  text: {
    heading: {
      fontSize: 3
    },
    secondaryHeading: {
      fontSize: 5
    }
  },
  shadows: {
    card: "0 7px 30px -10px rgba(150,170,180,0.5);"
  },
  buttons: {
    identifier: {
      bg: "point"
    },
    tab: {
      width: "100%",
      color: "black",
      fontSizes: 2,
      outline: "none"
    }
  },
  variants: {
    widgetCard: {
      bg: "clean",
      boxShadow: "card"
    },
    section: {
      px: 4,
      py: 5,
      bg: "clean"
    }
  }
};

theme.breakpoints.sm = theme.breakpoints[0];
theme.breakpoints.md = theme.breakpoints[1];
theme.breakpoints.lg = theme.breakpoints[2];

export default theme;
