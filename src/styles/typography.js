import { font, breakpoints } from "./variables"

export const typography = `
  h1, h2, .h1, .h2 {
    margin-bottom: 16px;
    line-height: 58px;
  }

  .h3, .h4, .h5, .h6 { font-family: ${font.family.sans}; }

  h1, .h1 { font-size: ${font.size.headingMobile[0]}; }
  h2, .h2 { font-size: ${font.size.headingMobile[1]}; }
  h3, .h3 { font-size: ${font.size.headingMobile[2]}; }
  h4, .h4 { font-size: ${font.size.headingMobile[3]}; }
  h5, .h5 { font-size: ${font.size.headingMobile[4]}; }
  h6, .h6 { font-size: ${font.size.headingMobile[5]}; }

  .text-sm { font-size: ${font.size.main[0]}}
  .text-lg { font-size: ${font.size.main[2]}}

  .title + .subtitle {
    font-family: ${font.family.sans};
    line-height: 25px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: ${font.size.headingMobile[3]};
  }

  @media (min-width: ${breakpoints.md}px) {
    h1, .h1 { font-size: ${font.size.heading[0]}; }
    h2, .h2 { font-size: ${font.size.heading[1]}; }
    h3, .h3 { font-size: ${font.size.heading[2]}; }
    h4, .h4, .title + .subtitle { font-size: ${font.size.heading[3]}; }
    h5, .h5 { font-size: ${font.size.heading[4]}; }
    h6, .h6 { font-size: ${font.size.heading[5]}; }
  }
`
