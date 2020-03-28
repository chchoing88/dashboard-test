import iconComm from "../../../assets/images/ico_comm_x2.png";

const commIconStyle = {
  backgroundImage: `url(${iconComm})`,
  backgroundSize: "50px 40px"
};

export const iconCollection = {
  menu: {
    ...commIconStyle,
    backgroundPosition: "0 0",
    width: "20px",
    height: "20px"
  },
  outLink: {
    display: "inline-block",
    ...commIconStyle,
    backgroundPosition: "-30px 0",
    width: "11px",
    height: "11px",
    verticalAlign: "top"
  },
  circleDel: {
    ...commIconStyle,
    backgroundPosition: "0 -20px",
    width: "16px",
    height: "16px",
    "&:hover": {
      backgroundPosition: "-20px -20px"
    }
  }
};
