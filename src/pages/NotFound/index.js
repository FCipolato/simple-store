import React from "react";

import { NotFoundDiv } from "./styles";

import NotFoundSVG from "../../assets/not-found.svg";

const NotFound = () => (
  <NotFoundDiv>
    <img src={NotFoundSVG} alt="not found" />
  </NotFoundDiv>
);

export default NotFound;
