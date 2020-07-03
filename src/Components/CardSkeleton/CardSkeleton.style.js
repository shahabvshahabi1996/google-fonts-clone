import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: {
    margin: "10px auto",
    "& > div": {
      padding: 15,
      backgroundColor: "#DDDBDD",
      borderRadius: 8,
      minHeight: 250,
      position: "relative",
      overflow: "hidden",
      "&:after": {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        content: '""',
        backgroundImage:
          "linear-gradient(90deg,rgba(1,1,1, 0) 0,rgba(1,1,1, 0.2) 20%,rgba(1,1,1, 0.4) 60%,rgba(1,1,1, 0))",
        transform: "translateX(-100%)",
        animation: "$loading 2s infinite",
      },
    },
  },
  "@keyframes loading": {
    to: { transform: "translateX(100%)" },
  },
});
