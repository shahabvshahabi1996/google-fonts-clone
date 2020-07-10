import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  root: {
    width: 30,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: `${theme.primaryColor}`,
    color: `${theme.iconColor}`,
    cursor: "pointer",
    transition: "box-shadow 0.3s",
    "& > i": {
      fontSize: 20,
    },
    "&:hover": {
      boxShadow: `${theme.boxShadowStyle}`,
    },
  },

  darkRoot: {
    width: 30,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: `#eee`,
    color: `#333`,
    cursor: "pointer",
    transition: "box-shadow 0.3s",
    "& > i": {
      fontSize: 20,
    },
    "&:hover": {
      boxShadow: `0px 0px 1px 5px rgba(51, 51, 51,0.2)`,
    },
  },
}));
