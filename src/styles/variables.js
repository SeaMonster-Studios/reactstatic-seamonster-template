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
  black: ["0,0,0"],
  gray: ["240,240,240"],
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
