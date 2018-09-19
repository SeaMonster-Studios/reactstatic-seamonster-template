import { injectGlobal } from "react-emotion"
import "reset-css"
import { font, color } from "./variables"
import { typography } from "./typography"

injectGlobal(`
  @font-face {
    font-family: 'ernest_and_emily_slantedRg';
    src: url('/fonts/nicky_laatz__-_ernest_and_emily_slanted-webfont.woff2')
        format('woff2'),
      url('/fonts/nicky_laatz__-_ernest_and_emily_slanted-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700');

  body {
    background: ${color.white.rgb[0]};
    font-family: ${font.family.sans};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    &, a {
      color: ${color.gray.rgb[0]};
      transition: color 0.5s ease, background 0.5s ease, border 0.5s ease, translate 0.5s ease, opacity 0.5s ease;
    }

    path {
      transition: fill 0.5s ease;
    }

    a {
      text-decoration: none;
      font-weight: 700;

      &:hover, &:focus {
        text-decoration: underline;
      }
    }

    button a {
      &:hover, &:focus { text-decoration: none; }
    }
  }

  * {
    font-family: ${font.family.sans};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  strong {
    font-weight: 600;
    color: #000;
  }

  em { font-style: italic; }

  #root main {
    background ${color.white.rgb[0]};
  }

  ${typography};
`)

