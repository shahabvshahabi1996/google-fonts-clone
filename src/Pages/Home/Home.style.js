import { createUseStyles } from "react-jss";

export default createUseStyles({
  parent: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
  },
  child: {
    flex: ({ containerStyle }) => {
      return containerStyle === "GRID_BASE" ? "1 0 33%" : "1 0 100%";
    },
    maxWidth: ({ containerStyle }) => {
      return containerStyle === "GRID_BASE" ? "33%" : "100%";
    },
    width: ({ containerStyle }) => {
      return containerStyle === "GRID_BASE" ? "30%" : "90%";
    },
    minHeight: 100,
    padding: 10,
    "@media screen and (max-width:720px)": {
      flex: "1 0 100% !important",
      width: "100% !important",
      maxWidth: "100% !important",
    },
  },
});
