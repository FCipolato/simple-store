import React from "react";
import { ToastContainer } from "react-toastify";

import Routes from "../routes";

import { GlobalStyle } from "./styles";

const App = () => (
  <>
    <GlobalStyle />
    <ToastContainer />
    <Routes />
  </>
);

export default App;
