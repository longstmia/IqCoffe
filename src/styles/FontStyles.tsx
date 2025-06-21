import { createGlobalStyle } from 'styled-components';
import GilroyLight from '../fonts/GilroyLight.otf';
import GilroyExtraBold from '../fonts/GilroyExtraBold.otf';

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyLight}) format('opentype');
    font-weight: 300; 
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyExtraBold}) format('opentype');
    font-weight: 800; 
    font-style: normal;
  }

  body {
    font-family: 'Gilroy', sans-serif;
  }
`;
