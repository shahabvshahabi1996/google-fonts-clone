import React from "react";
import Styless from "./SearchBox.style";

const SearchBox = () => {
  const classes = Styless();
  return (
    <div className={classes.root}>
      <i className="material-icons">search</i>
      <input />
    </div>
  );
};

export default SearchBox;
