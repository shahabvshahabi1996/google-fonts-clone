import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: {
    marginBottom: "0px 10px auto auto",
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderBottom: "1px solid #eee",
    paddingBottom: 10,
    "@media screen and (max-width:720px)": {
      flexWrap: "wrap",
    },
  },
  child: {
    margin: 5,
    "@media screen and (max-width:720px)": {
      "&.hide_xs": {
        display: "none",
      },
    },
  },
  flex3: {
    flex: 3,
  },
  flex1: {
    flex: 1,
  },
  flex4: {
    flex: 4,
  },
});
