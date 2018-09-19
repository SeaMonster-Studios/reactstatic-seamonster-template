import styled from "react-emotion"
import "reset-css"
//
import { font, color } from "./variables"
import { typography } from "./typography"
import { flexboxGrid } from "./flexbox-grid"

export const Styles = styled("div")({
  body: {
    background: `rgb(${color.black[0]})`,
    fontFamily: font.family.sans,
    minWidth: 1024,
  },
  "*": {
    fontFamily: font.family.sans,
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
  "#root": {
    main: {
      background: `rgb(${color.white[0]})`,
    },
  },
  ...typography,
  ...flexboxGrid,
})
