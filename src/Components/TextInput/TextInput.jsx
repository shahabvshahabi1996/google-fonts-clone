import React from "react";
import Styles from "./TextInput.style";

const TextInput = () => {
  const classes = Styles();
  return (
    <div className={classes.root}>
      <input value="همین جا بنویس" />
    </div>
  );
};

export default TextInput;
