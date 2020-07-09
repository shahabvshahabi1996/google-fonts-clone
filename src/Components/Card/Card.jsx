import React, { useEffect, memo } from "react";
import Styles from "./Card.styles";
import { useRecoilValue } from "recoil";
import { sliderStateValue } from "../../Selectors/Card.selector";
import { textInputValue } from "../../Selectors/TextContent.selector";
import CardSkeleton from "../CardSkeleton";
import PropType from "prop-types";
import Modal from "../Modal";

const Card = ({ familyInPersian, family, content }) => {
  const value = useRecoilValue(sliderStateValue);
  const classes = Styles({ fontSize: value, family });
  const [mounted, setMounted] = React.useState(false);
  const [openModal, setModalOpen] = React.useState(false);
  const textValue = useRecoilValue(textInputValue);

  useEffect(() => {
    fetchFont();
  }, []);

  const fetchFont = () => {
    let head = document.head;
    let el = document.createElement("link");
    el.type = "text/css";
    el.rel = "stylesheet";
    el.href = `https://api.fontgraphy.ir/css?family=${family}`;
    head.appendChild(el);
    el.onload = () => {
      setTimeout(() => {
        setMounted(true);
      }, 500);
    };
  };

  const closeModal = () => {
    setModalOpen(false);
    return;
  };

  if (mounted) {
    return (
      <>
        {openModal && (
          <Modal
            closeModal={closeModal}
            familyInPersian={familyInPersian}
            family={family}
          />
        )}
        <div className={classes.root}>
          <div className={classes.topBar}>
            <h3>{familyInPersian}</h3>
            <div className={classes.iconContainer}>
              <div onClick={() => setModalOpen(true)}>
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
      </>
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
