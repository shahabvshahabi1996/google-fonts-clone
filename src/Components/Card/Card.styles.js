import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  root: {
    margin: "10px auto",
    minHeight: 150,
    position: "relative",
  },
  content: {
    fontSize: ({ fontSize }) => {
      console.log(fontSize);
      return fontSize;
    },
    padding: 15,
  },
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd",
    "& > h3": {
      fontWeight: 300,
      fontSize: 20,
    },
  },
  iconContainer: {
    display: "flex",
    alignItems: "flex-end",
    "& > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 30,
      height: 30,
      borderRadius: "50%",
      backgroundColor: `${theme.primaryColor}`,
      marginLeft: 5,
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
  },
}));
