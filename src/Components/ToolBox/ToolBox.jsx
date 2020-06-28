import React from "react";
import Styles from "./ToolBox.style";
import SearchBox from "../SearchBox/";
import TextInput from "../TextInput";
import Slider from "../Slider";

const ToolBox = () => {
  const classes = Styles();

  return (
    <div dir="rtl" className={`${classes.root} col-md-12`}>
      <div className="col-md-4">
        <Slider />
      </div>

      <div className="col-md-4">
        <TextInput />
      </div>
      <div className="col-md-4">
        <SearchBox />
      </div>
    </div>
  );
};

export default ToolBox;
