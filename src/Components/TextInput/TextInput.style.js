import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  root: {
    border: `1px solid ${theme.borderColor}`,
    padding: "8px 10px",
    display: "flex",
    flex: 3,
    alignItems: "center",
    margin: "0 auto",
    borderRadius: 8,
    "& > input": {
      all: "unset",
      color: `${theme.textColor}`,
      width: "calc(100% - 30px)",
      margin: "0 auto",
    },
  },
}));
