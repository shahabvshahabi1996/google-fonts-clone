import React from "react";
import Styles from "./IconicButton.style";
import PropTypes from "prop-types";

const IconicButton = ({ className, iconName, type, ...props }) => {
  const classes = Styles();
  return (
    <div
      {...props}
      className={`${
        type === "dark" ? classes.darkRoot : classes.root
      } ${className}`}
    >
      <i className="material-icons">{iconName}</i>
    </div>
  );
};

IconicButton.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  type: PropTypes.string,
  props: PropTypes.object,
};

export default IconicButton;
