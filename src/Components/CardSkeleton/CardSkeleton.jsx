import React from "react";
import Styles from "./CardSkeleton.style";

const CardSkeleton = () => {
  const classes = Styles();
  return (
    <div className={classes.root}>
      <div></div>
    </div>
  );
};

export default CardSkeleton;
