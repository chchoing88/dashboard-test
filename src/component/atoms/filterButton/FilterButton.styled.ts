export const filterButtonStyle = (isActive: boolean, isDisable: boolean) => ({
  borderRadius: "25px",
  fontSize: 1,
  height: "30px",
  pr: "14px",
  py: 0,
  outline: "none",
  pl: isActive ? "6px" : "14px",
  ml: "10px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: isDisable ? "content" : "point",
  color: isDisable ? "content" : isActive ? "clean" : "point",
  bg: isActive ? "point" : "claen",
  boxShadow: isActive ? "button" : "none",
  cursor: isDisable ? "default" : "pointer",
  svg: {
    mr: 1
  }
});
