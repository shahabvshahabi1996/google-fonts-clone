import React from "react";
import Styles from "./ToolBox.style";
import SearchBox from "../SearchBox/";
import TextInput from "../TextInput";
import Slider from "../Slider";
import GridButton from "../GridButton/GridButton";

const ToolBox = () => {
  const classes = Styles();

  return (
    <div dir="rtl" className={`${classes.root}`}>
      <div className={`${classes.child} ${classes.flex4}`}>
        <SearchBox />
      </div>
      <div className={`${classes.child} hide_xs ${classes.flex3}`}>
        <TextInput />
      </div>
      <div className={`${classes.child} hide_xs ${classes.flex3}`}>
        <Slider />
      </div>
      <div className={`${classes.child} hide_xs ${classes.flex1}`}>
        <GridButton />
      </div>
    </div>
  );
};

export default ToolBox;
