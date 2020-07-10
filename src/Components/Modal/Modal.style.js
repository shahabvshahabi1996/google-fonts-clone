import { createUseStyles } from "react-jss";
export default createUseStyles((theme) => ({
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
    alignItems: "flex-end",
    justifyContent: "flex-start",
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
    width: "60%",
    minHeight: 450,
    margin: "0 auto",
    backgroundColor: "#fff",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: "30px 50px 0 50px",
    animation: "$start 0.3s 1",
    color: "#717171",
    boxShadow: "0px 5px 5px #333",
    "& p": {
      fontSize: 16,
    },
    "@media screen and (max-width:720px)": {
      width: "95vw",
      padding: "40px 15px 0 15px",
    },
  },
  contentHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  iconButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: `${theme.primaryColor}`,
    verticalAlign: "middle",
    transition: "box-shadow 0.3s",
    color: "#fff",
    backgroundSize: "contain",
    "& > i": {
      fontSize: 20,
      display: "inline-flex",
      verticalAlign: "middle",
    },
    "&:hover": {
      boxShadow: `${theme.boxShadowStyle}`,
    },
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
  fontName: {
    color: "#4a4a4a",
  },
  codeBox: {
    backgroundColor: "#eee",
    padding: "20px 25px",
    direction: "ltr",
    "& > code": {
      wordBreak: "break-word",
    },
  },
  "@keyframes start": {
    from: {
      transform: "translateY(100%)",
    },
    to: {
      transform: "translateY(0%)",
    },
  },

  "@keyframes end": {
    from: {
      transform: "translateY(0%)",
    },
    to: {
      transform: "translateY(100%)",
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
}));
