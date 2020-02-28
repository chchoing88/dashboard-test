import iconComm from "../../../assets/images/ico_comm_x2.png";

const commIconStyle = {
  backgroundImage: `url(${iconComm})`,
  backgroundSize: "50px 30px"
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
  }
};
