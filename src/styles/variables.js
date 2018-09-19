import {
  createColors,
  createMediaQueries,
} from "@bit/seamonster-studios.react.utils.styles"

export const breakpoints = {
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400,
}

export const color = createColors({
  white: ["255,255,255"],
  black: ["41,44,49", "0,0,0"], // 0 > nav, 1 > all other black
  gray: ["113,112,112", "155,155,156", "240,240,240", "230,230,230"], // 0 > button color, 1 > text color, 2 > border color
  purple: ["148,9,68", "108,79,110"], // 0 > hr, 1 > primary, purple btn
  violet: ["115,113,187", "102,102,143"], // 0 > violet, 1 > violet dark
  orange: ["237,145,80"], // secondary
  blue: ["99,145,194", "101,131,158"], // 0 > blue btn, 1 > dark blue btn
  teal: ["47,160,191", "46,139,165"], // 0,1 > hrs
  navy: ["2,104,197"], // 0 > hr
  green: ["101,178,76", "134,154,129"], // 0 > hr, 1 > dark green btn
  yellow: ["189,158,107"],
  red: ["208,2,27"],
  rose: ["162,143,143"],
  tan: ["172,147,104"],
})

export const mq = createMediaQueries(breakpoints)

export const font = {
  size: {
    main: ["14px", "16px", "18px"], // sm, md, lg
    heading: ["64px", "48px", "32px", "20px", "16px", "14px"],
    headingMobile: ["42px", "36px", "24px", "18px", "14px", "14px"],
  },
  family: {
    sans: "'Open Sans', Helvetica, Arial, sans-serif",
  },
}
