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
    clean: "#fff"
  },
  fontSizes: [12, 14, 16, 20, 24, 28, 32, 48, 64],
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256],
  text: {
    heading: {
      fontSize: [2, 2, 3]
    },
    secondaryHeading: {
      fontSize: [3, 3, 5]
    }
  },
  shadows: {
    card: "0 0 4px rgba(0, 0, 0, 0.125)"
  },
  buttons: {
    identifier: {
      bg: "point"
    }
  },
  variants: {
    activeNavi: {
      color: "clean",
      bg: "#282c34"
    },
    defaultNavi: {
      color: "#aaa",
      bg: "primary"
    },
    widgetCard: {
      bg: "clean",
      boxShadow: "card",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "rgb(212, 212, 213)"
    },
    section: {
      px: 3,
      py: 3,
      bg: "clean"
    }
  }
};

theme.breakpoints.sm = theme.breakpoints[0];
theme.breakpoints.md = theme.breakpoints[1];
theme.breakpoints.lg = theme.breakpoints[2];

export default theme;
