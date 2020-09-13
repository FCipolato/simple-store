/* eslint-disable no-unused-expressions */
import React from "react";

import Header from "./Header";

const PageLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default PageLayout;
