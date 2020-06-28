import React from "react";
import Styles from "./Layout.style";
import PropTypes from "prop-types";
import ToolBox from "../ToolBox";

const Layout = ({ children }) => {
  const classes = Styles();
  return (
    <div>
      <header className={classes.header}>
        <a>
          <img src="https://fontgraphy.ir/img/logo.9b97fa60.png"></img>
        </a>
        <div>
          <a>درباره ما</a>
          <i className="material-icons">bookmark</i>
        </div>
      </header>
      <div className="container">
        <ToolBox />
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
