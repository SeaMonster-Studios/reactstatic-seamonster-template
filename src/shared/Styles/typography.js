//
import { font } from './variables'

export const typography = {
  'h1, h2, h3, h4, h5, h6': {
    lineHeight: 1.2,
  },
  'h1, h2, h3': {
    fontWeight: 700,
  },
  'h1, .h1': {
    fontSize: font.size.heading[0],
  },
  'h2, .h2': {
    fontSize: font.size.heading[1],
  },
  'h3, .h3': {
    fontSize: font.size.heading[2],
  },
  'h4, .h4': {
    fontSize: font.size.heading[3],
  },
  'h5, .h5': {
    fontSize: font.size.heading[4],
  },
  'h6, .h6': {
    fontSize: font.size.heading[5],
  },
  '.h4': {
    fontWeight: 400,
    maxWidth: 760,
  },
}
