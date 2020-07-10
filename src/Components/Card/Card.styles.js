import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: {
    margin: "10px auto",
    minHeight: 250,
    position: "relative",
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 5,
  },
  content: {
    fontSize: ({ fontSize }) => {
      return fontSize;
    },
    fontFamily: ({ family }) => {
      return family;
    },
    padding: "5px 10px",
    "&:focus": {
      outline: "none !important",
    },
  },
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // borderTop: "1px solid #ddd",
    "& > h3": {
      fontWeight: 300,
      fontSize: 20,
    },
  },
  iconContainer: {
    display: "flex",
    alignItems: "flex-end",
    "& > div": {
      marginLeft: 5,
    },
  },
});
