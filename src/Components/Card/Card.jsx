import React, { useEffect, memo } from "react";
import Styles from "./Card.styles";
import { useRecoilValue } from "recoil";
import { sliderStateValue } from "../../Selectors/Card.selector";
import { textInputValue } from "../../Selectors/TextContent.selector";
import CardSkeleton from "../CardSkeleton";
import PropType from "prop-types";

const Card = ({ familyInPersian, family, content }) => {
  const value = useRecoilValue(sliderStateValue);
  const classes = Styles({ fontSize: value, family });
  const [mounted, setMounted] = React.useState(false);
  const textValue = useRecoilValue(textInputValue);

  useEffect(() => {
    fetchFont();
  }, []);

  const fetchFont = () => {
    // eslint-disable-next-line no-undef
    new Promise((resolve) => {
      let head = document.head;
      let el = document.createElement("link");
      el.type = "text/css";
      el.rel = "stylesheet";
      el.href = `https://api.fontgraphy.ir/css?family=${family}`;
      resolve(head.appendChild(el));
    }).then(() => {
      setMounted(true);
    });
  };

  if (mounted) {
    return (
      <div className={classes.root}>
        <div className={classes.topBar}>
          <h3>{familyInPersian}</h3>
          <div className={classes.iconContainer}>
            <div>
              <i className="material-icons">arrow_downward</i>
            </div>
            {/* <div>
              <i className="material-icons">bookmark</i>
            </div> */}
          </div>
        </div>
        <div
          contentEditable={true}
          suppressContentEditableWarning={true}
          className={classes.content}
        >
          {textValue ? textValue : content}
        </div>
      </div>
    );
  }

  return <CardSkeleton />;
};

Card.propTypes = {
  familyInPersian: PropType.string.isRequired,
  family: PropType.string.isRequired,
  content: PropType.string.isRequired,
};

export default memo(Card);
