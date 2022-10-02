import JuraLightWoff from './fonts/Jura-Light.woff';
import JuraLightWoff2 from './fonts/Jura-Light.woff2';
import JuraLightTtf from './fonts/Jura-Light.ttf';

import JuraRegularWoff from './fonts/Jura-Regular.woff';
import JuraRegularWoff2 from './fonts/Jura-Regular.woff2';
import JuraRegularTtf from './fonts/Jura-Regular.ttf';

import JuraMediumWoff from './fonts/Jura-Medium.woff';
import JuraMediumWoff2 from './fonts/Jura-Medium.woff2';
import JuraMediumTtf from './fonts/Jura-Medium.ttf';

import JuraSemiBoldWoff from './fonts/Jura-SemiBold.woff';
import JuraSemiBoldWoff2 from './fonts/Jura-SemiBold.woff2';
import JuraSemiBoldTtf from './fonts/Jura-SemiBold.ttf';

import JuraBoldWoff from './fonts/Jura-Bold.woff';
import JuraBoldWoff2 from './fonts/Jura-Bold.woff2';
import JuraBoldTtf from './fonts/Jura-Bold.ttf';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-weight: 300;
    font-family: 'Jura-Light';
    font-style: normal;
    src: url(${JuraLightWoff2}) format("woff2"),
    url(${JuraLightWoff}) format("woff"),
    url(${JuraLightTtf}) format("ttf")
  }

  @font-face {
    font-weight: 400;
    font-family: 'Jura-Regular';
    font-style: normal;
    src: url(${JuraRegularWoff2}) format("woff2"),
    url(${JuraRegularWoff}) format("woff"),
    url(${JuraRegularTtf}) format('ttf');
  }

  @font-face {
    font-weight: 500;
    font-family: 'Jura-Medium';
    font-style: normal;
    src:
    url(${JuraMediumWoff2}) format("woff2"),
    url(${JuraMediumWoff}) format("woff"),
    url(${JuraMediumTtf}) format("ttf");
  }

  @font-face {
    font-weight: 600;
    font-family: 'Jura-SemiBold';
    font-style: normal;
    src:
    url(${JuraSemiBoldWoff2}) format("woff2"), 
    url(${JuraSemiBoldWoff}) format("woff"),
    url(${JuraSemiBoldTtf}) format("ttf");
  }

  @font-face {
    font-weight: 700;
    font-family: 'Jura-Bold';
    font-style: normal;
    src: 
    url(${JuraBoldWoff2}) format("woff2"), 
    url(${JuraBoldWoff}) format("woff"),
    url(${JuraBoldTtf}) format("ttf");
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Jura-Light', Helvetica, Arial, sans-serif;
  }
  
  :root {
    --main-color-bg: linear-gradient(121.89deg, #1A226B 1.22%, #391764 69.18%, #391764 69.18%);
  }

  #root {
    min-height: 100%;
    min-width: 100%;
    background: var(--main-color-bg);
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
