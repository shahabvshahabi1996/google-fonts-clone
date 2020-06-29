import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: {
    margin: "10px auto",
    "& > div": {
      fontSize: ({ fontSize }) => {
        console.log(fontSize);
        return fontSize;
      },
      padding: 15,
      // backgroundColor: "#eee",
      borderTop: "1px solid #ddd",
      minHeight: 150,
    },
  },
});
