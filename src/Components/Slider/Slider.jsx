import React from "react";
import Styles from "./Slider.style";
import "./Slider.css";
import { useRecoilState } from "recoil";
import { sliderState } from "../../Atoms/Slider.atom";

const Slider = () => {
  const [value, setValue] = useRecoilState(sliderState);
  const classes = Styles({ width: value });
  return (
    <div className={classes.root}>
      <span>{value}</span>
      <div className={classes.sliderContainer}>
        <div className={classes.thumb}></div>
        <div className={classes.bar}>
          <span className={classes.fill}></span>
        </div>
        <input
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="slider"
          type="range"
          min="0"
          max="100"
          value={value}
        />
      </div>
    </div>
  );
};

export default Slider;
