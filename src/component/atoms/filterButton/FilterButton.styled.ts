export const filterButtonStyle = (isActive: boolean) => ({
  height: "30px",
  pr: "14px",
  pl: isActive ? "6px" : "14px",
  py: 0,
  ml: "10px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "point",
  borderRadius: "25px",
  fontSize: 1,
  color: isActive ? "#fff" : "point",
  bg: isActive ? "point" : "#fff",
  boxShadow: isActive ? "2px 0 4px rgba(21, 70, 103, 0.5)" : "none",
  outline: "none",
  svg: {
    mr: "4px"
  }
});
