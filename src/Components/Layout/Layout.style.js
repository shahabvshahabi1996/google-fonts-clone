import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  header: {
    backgroundColor: "#fff",
    borderBottom: `1px solid ${theme.borderColor}`,
    padding: "10px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    "& > div": {
      display: "flex",
      alignItems: "center",
    },
    "& > a > img": {
      width: 140,
    },
    "& > div > a": {
      color: `${theme.textColor}`,
      margin: "0 10px",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
}));
