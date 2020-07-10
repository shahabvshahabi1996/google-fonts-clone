import React, { useMemo } from "react";
import { createPortal } from "react-dom";
// import PropTypes from "prop-types";
import Styles from "./Drawer.style";

const Drawer = () => {
  const classes = Styles();
  return useMemo(() => {
    return createPortal(
      <div dir="ltr" className={`${classes.root}`}>
        <div
          dir="rtl"
          onClick={(e) => e.stopPropagation()}
          className={`${classes.content}`}
        >
          بوک مارک شده ها
        </div>
      </div>,
      document.body
    );
  }, []);
};

Drawer.propTypes = {};

export default Drawer;
