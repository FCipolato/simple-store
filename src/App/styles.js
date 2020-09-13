import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    /*height: 100%;*/
    width: 100vw;
    font-family: 'Roboto';
  }
  html {
    font-size: 10px;
  }
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  ul {
    list-style-type: none;
  }
  ::-webkit-scrollbar {
    width: 3px;
  }
  
  ::-webkit-scrollbar-track {
      border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
      border-radius: 10px;
  }
`;

export default { GlobalStyle };
