import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #F3F4F0;
    z-index: 1000;
  }

  main {
    margin-top: 60px;
    padding: 16px;
  }
`;

export default GlobalStyles;
