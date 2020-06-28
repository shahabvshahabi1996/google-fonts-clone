import React from "react";
import Styles from "./Card.styles";
import { useRecoilValue } from "recoil";
import { sliderStateValue } from "../../Selectors/Card.selector";

const Card = () => {
  const value = useRecoilValue(sliderStateValue);
  const classes = Styles({ fontSize: value });
  return (
    <div className={`col-md-4 ${classes.root}`}>
      <div>Card</div>
    </div>
  );
};

export default Card;
