import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Neue';
    src: url("assets/fonts/HelveticaNeue.ttc") format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  body {
    font-family: 'Helvetica Neue';
  }
`;

export default GlobalStyle;
