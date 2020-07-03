import React, { createContext } from "react";
import PropType from "prop-types";

export const CustomThemeContext = createContext();

const CustomThemeProvider = ({ children }) => {
  const [containerStyle, setContainerStyle] = React.useState("GRID_BASE");

  const toggleGrid = () => {
    if (containerStyle === "GRID_BASE") {
      setContainerStyle("ROW_BASE");
    } else {
      setContainerStyle("GRID_BASE");
    }
  };

  return (
    <CustomThemeContext.Provider value={{ containerStyle, toggleGrid }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default CustomThemeProvider;
