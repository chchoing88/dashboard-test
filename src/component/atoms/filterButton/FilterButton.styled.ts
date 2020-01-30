export const filterButtonStyle = (isActive: boolean) => ({
  height: "30px",
  pr: "14px",
  pl: "6px",
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
  outline: "none"
});

export const circleStyle = (isActive: boolean) => ({
  display: "inline-block",
  width: "17px",
  height: "17px",
  margin: "1px 5px 0 0",
  borderWidth: isActive ? "3px" : "1px",
  borderStyle: "solid",
  borderColor: isActive ? "#fff" : "point",
  borderRadius: "50%",
  verticalAlign: "top"
});
