import React, { useContext } from "react";
import Styles from "./GridButton.style";
import { CustomThemeContext } from "../CustomThemeProvider/CustomThemeProvider";

const GridButton = () => {
  const classes = Styles();
  const { containerStyle, toggleGrid } = useContext(CustomThemeContext);
  return (
    <div onClick={() => toggleGrid()} className={classes.root}>
      <i className="material-icons">
        {containerStyle === "GRID_BASE" ? "grid_on" : "dehaze"}
      </i>
    </div>
  );
};

export default GridButton;
