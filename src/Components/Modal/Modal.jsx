import React from "react";
import { createPortal } from "react-dom";
import Styles from "./Modal.style";
import PropType from "prop-types";

const Modal = ({ familyInPersian = "", family = "", closeModal }) => {
  const [isModalClosing, setModalClosing] = React.useState(false);
  const classes = Styles();
  const closingModal = () => {
    setModalClosing(true);
    setTimeout(() => {
      closeModal();
    }, 300);
  };

  return createPortal(
    <div
      onClick={() => closingModal()}
      className={`${classes.root} ${isModalClosing ? classes.closingRoot : ""}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${classes.content} ${
          isModalClosing ? classes.closingContent : ""
        }`}
      >
        <div onClick={() => closingModal()} className={classes.closeIcon}>
          <i className="material-icons">close</i>
        </div>
        <div className={classes.contentHeader}>
          <h2>
            دانلود فونت{" "}
            <span className={classes.fontName}>{familyInPersian}</span>
          </h2>
        </div>
        <p>
          درصورتی که میخواهید فونت انتخاب شده رو ما براتون سرو کنیم و از سرور ما
          دریافت کنید، تنها کافیه که کد زیر را در تگ head صفحه html خود قرار
          دهید
        </p>
        <div className={classes.codeBox}>
          <code>
            {`<link
                  rel="stylesheet"
                  href="https://api.fontgraphy.ir/css?family=${family}"></link>`}
          </code>
        </div>
        <hr />
        <h3>استفاده در CSS</h3>
        <p>برای استفاده از فونت باید از کد css زیر استفاده کنید</p>
        <div className={classes.codeBox}>
          <code>{`font-family: ${family}, sans-serif;`}</code>
        </div>
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  family: PropType.string.isReuired,
  familyInPersian: PropType.string.isRequired,
  closeModal: PropType.func.isRequired,
};

export default Modal;
