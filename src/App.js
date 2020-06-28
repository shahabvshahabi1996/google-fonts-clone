import React from "react";
import { ThemeProvider } from "react-jss";
import Home from "./Pages/Home";
import { RecoilRoot } from "recoil";

const theme = {
  borderColor: "#bcbcbc",
  textColor: "#333",
  primaryColor: "#f95658",
};

const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
