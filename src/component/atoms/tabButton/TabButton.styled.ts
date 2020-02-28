export const THEME = {
  underLine: {
    button(isActive: boolean) {
      return {
        color: isActive ? "point" : "black",
        fontSizes: 2
      };
    }
  },
  fill: {
    button(isActive: boolean) {
      return {
        color: isActive ? "clean" : "point",
        fontSize: 2,
        py: 3
      };
    }
  }
};
