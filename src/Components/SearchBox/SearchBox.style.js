import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  root: {
    border: `1px solid ${theme.borderColor}`,
    padding: "8px 10px",
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
    borderRadius: 8,
    flex: 3,
    width: "100%",
    "& > input": {
      all: "unset",
      color: `${theme.textColor}`,
      width: "calc(100% - 30px)",
      margin: "0 auto",
    },
    "& > i": {
      marginLeft: 5,
    },
  },
}));
