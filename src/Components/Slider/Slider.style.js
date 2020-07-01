import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  root: {
    border: `1px solid ${theme.borderColor}`,
    padding: "8px 10px",
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
    borderRadius: 8,
    minHeight: 40,
    justifyContent: "space-between",
    "& > span": {
      margin: "0 10px",
      minWidth: 25,
      color: `${theme.primaryColor}`,
    },
  },

  sliderContainer: {
    position: "relative",
    width: "100%",
    borderRadius: 8,
    "& > input": {
      width: "100%",
      height: "10px",
      borderRadius: 8,
      backgroundColor: "transparent",
      verticalAlign: "middle",
      outline: "none",
    },
  },
  bar: {
    position: "absolute",
    backgroundColor: "rgba(249, 86, 88, 0.2)",
    width: "100%",
    top: 6,
    left: 0,
    height: "8px",
    borderRadius: 8,
    zIndex: 1,
    pointerEvents: "none",
  },
  fill: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: "0px 8px 8px 0px",
    backgroundColor: `${theme.primaryColor}`,
    width: ({ width }) => {
      return `${width}%`;
    },
    height: "100%",
    pointerEvents: "none",
  },
  thumb: {
    position: "absolute",
    right: ({ width }) => {
      return `calc(${width}% - 5px)`;
    },
    top: 3,
    height: 15,
    width: 15,
    borderRadius: "50%",
    backgroundColor: `${theme.primaryColor}`,
    transition: "box-shadow 0.3s",
    cursor: "pointer",
    "&:hover": {
      boxShadow: `${theme.boxShadowStyle}`,
    },
  },
}));
