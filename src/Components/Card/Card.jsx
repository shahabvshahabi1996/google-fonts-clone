import React, { useEffect } from "react";
import Styles from "./Card.styles";
import { useRecoilValue } from "recoil";
import { sliderStateValue } from "../../Selectors/Card.selector";
import CardSkeleton from "../CardSkeleton";

const Card = () => {
  const value = useRecoilValue(sliderStateValue);
  const classes = Styles({ fontSize: value });
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 1000);
  }, []);

  if (mounted) {
    return (
      <div className={classes.root}>
        <div>Card</div>
      </div>
    );
  }

  return <CardSkeleton />;
};

export default Card;
