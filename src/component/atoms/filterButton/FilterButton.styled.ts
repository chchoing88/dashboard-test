export const filterButtonStyle = (isActive: boolean, isDisable: boolean) => ({
  height: "30px",
  pr: "14px",
  pl: isActive ? "6px" : "14px",
  py: 0,
  ml: "10px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: isDisable ? "content" : "point",
  borderRadius: "25px",
  fontSize: 1,
  color: isDisable ? "content" : isActive ? "#fff" : "point",
  bg: isActive ? "point" : "#fff",
  boxShadow: isActive ? "button" : "none",
  outline: "none",
  cursor: isDisable ? "default" : "pointer",
  svg: {
    mr: "4px"
  }
});
