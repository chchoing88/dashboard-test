export const THEME = {
  underLine: {
    ul: {
      borderBottomWidth: "1px",
      borderBottomStyle: "solid" as "solid", // Todo: 확인
      borderBottomColor: "rgba(0,0,0,.1)"
    }
  },
  fill: {
    ul: {
      position: "relative",
      borderRadius: "20px",
      overflow: "hidden",
      "&:before": {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: "20px",
        overflow: "hidden",
        borderWidth: "1px",
        borderStyle: "solid" as "solid",
        borderColor: "point",
        content: "''"
      }

      // bg: "clean",
      // borderBottomWidth: "1px",
      // borderBottomStyle: "solid" as "solid", // Todo: 확인
      // borderBottomColor: "rgba(0,0,0,.1)"
    }
  }
};
