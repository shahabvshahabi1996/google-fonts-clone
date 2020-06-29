import { createUseStyles } from "react-jss";

createUseStyles({
  root: {
    margin: "10px auto",
    "& > div": {
      padding: 15,
      backgroundColor: "#eee",
      borderRadius: 8,
      minHeight: 150,
    },
  },
});
