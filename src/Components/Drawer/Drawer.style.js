import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: {
    backgroundColor: "rgba(0,0,0,0.37)",
    backdropFilter: "blur(5px)",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 3,
    display: "flex",
    alignItems: "center",
    animation: "$fading 0.3s 1",
  },
  closingRoot: {
    animation: "$hiding 0.3s 1 !important",
  },

  closingContent: {
    animation: "$end 0.3s 1 !important",
  },

  content: {
    position: "relative",
    width: "30%",
    height: "100%",
    backgroundColor: "#fff",
    padding: "30px 50px 0 50px",
    animation: "$start 0.3s 1",
    color: "#717171",
    boxShadow: "0px 5px 5px #333",
    "& p": {
      fontSize: 16,
    },
    "@media screen and (max-width:720px)": {
      width: "80%",
      padding: "40px 15px 0 15px",
    },
  },
  contentHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  closeIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#eee",
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    cursor: "pointer",
  },
  "@keyframes start": {
    from: {
      transform: "translateX(-100%)",
    },
    to: {
      transform: "translateX(0%)",
    },
  },

  "@keyframes end": {
    from: {
      transform: "translateX(0%)",
    },
    to: {
      transform: "translateX(-100%)",
    },
  },

  "@keyframes fading": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },

  "@keyframes hiding": {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
});
