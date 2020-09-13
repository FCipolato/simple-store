import styled, { keyframes } from "styled-components";

import resolutions from "../../styles/resolutions";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderDiv = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 4px solid black;
    background: transparent;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  @media ${resolutions.laptop} {
    height: calc(100vh - 80px);

    div {
      width: 100px;
      height: 100px;
    }
  }

  @media ${resolutions.laptopM} {
    div {
      width: 80px;
      height: 80px;
    }
  }
`;

export default { LoaderDiv };
