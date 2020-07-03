import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  root: {
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 5,
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    cursor: "pointer",
    flex: 1,
    "& > i": {
      color: theme.primaryColor,
    },
  },
}));
