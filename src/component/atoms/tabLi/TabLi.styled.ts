export const THEME = {
  underLine: {
    li(isActive: boolean, index: number) {
      return {
        "&:before":
          index !== 0
            ? {
                position: "absolute",
                bg: "rgba(0,0,0,.1)",
                width: "1px",
                left: "0",
                height: "15px",
                top: "11px",
                content: "''"
              }
            : {
                display: "none"
              },
        "&:after": isActive
          ? {
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "2px",
              bg: "point",
              content: "''"
            }
          : {
              display: "none"
            }
      };
    }
  },
  fill: {
    li(isActive: boolean, index: number) {
      return {
        bg: isActive ? "point" : "none",
        "&:before":
          index !== 0
            ? {
                position: "absolute",
                bg: "point",
                width: "1px",
                left: "0",
                top: "0",
                bottom: "0",
                content: "''"
              }
            : {
                display: "none"
              }
      };
    }
  }
};
