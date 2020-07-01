import React from "react";
import { ThemeProvider } from "react-jss";
import Home from "./Pages/Home";
import { RecoilRoot } from "recoil";

const theme = {
  borderColor: "#bcbcbc",
  textColor: "#333",
  iconColor: "#fff",
  primaryColor: "#f95658",
  boxShadowColor: "rgba(249, 86, 88,0.2)",
  boxShadowStyle: "0px 0px 1px 5px rgba(249, 86, 88,0.2)",
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
