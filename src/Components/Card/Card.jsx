import React, { useEffect } from "react";
import Styles from "./Card.styles";
import { useRecoilValue } from "recoil";
import { sliderStateValue } from "../../Selectors/Card.selector";
import { textInputValue } from "../../Selectors/TextContent.selector";
import CardSkeleton from "../CardSkeleton";

const Card = () => {
  const value = useRecoilValue(sliderStateValue);
  const classes = Styles({ fontSize: value });
  const [mounted, setMounted] = React.useState(false);
  const textValue = useRecoilValue(textInputValue);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 1000);
  }, []);

  if (mounted) {
    return (
      <div className={classes.root}>
        <div className={classes.topBar}>
          <h3>نام فونت</h3>
          <div className={classes.iconContainer}>
            <div>
              <i className="material-icons">arrow_downward</i>
            </div>
            <div>
              <i className="material-icons">bookmark</i>
            </div>
          </div>
        </div>
        <div contentEditable className={classes.content}>
          {textValue ? textValue : "این یک نوشته است"}
        </div>
      </div>
    );
  }

  return <CardSkeleton />;
};

export default Card;
