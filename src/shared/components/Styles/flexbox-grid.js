//
import { container, padding, mq } from "./variables"

export const flexboxGrid = {
  html: {
    boxSizing: "border-box",
    "-ms-overflow-style": "scrollbar",
  },
  "*, *::before, *::after": {
    boxSizing: "inherit",
  },
  ".container": {
    width: "100%",
    paddingRight: padding[0],
    paddingLeft: padding[0],
    marginRight: "auto",
    marginLeft: "auto",
  },

  ".container-fluid": {
    width: "100%",
    paddingRight: padding[0],
    paddingLeft: padding[0],
    marginRight: "auto",
    marginLeft: "auto",
  },

  ".row": {
    display: ["-webkit-box", "-ms-flexbox", "flex"],
    "-ms-flexWrap": "wrap",
    flexWrap: "wrap",
    marginRigh: -padding[0],
    marginLeft: -padding[0],
  },

  ".no-gutters": {
    marginRight: 0,
    marginLeft: 0,
  },

  '.no-gutters > .col, .no-gutters > [class*="col-"]': {
    paddingRight: 0,
    paddingLeft: 0,
  },

  ".col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto": {
    position: "relative",
    width: "100%",
    minHeight: 1,
    paddingRight: padding[0],
    paddingLeft: padding[0],
  },
  ".col": {
    "-ms-flex-preferred-size": 0,
    flexBasis: 0,
    "-webkit-box-flex": 1,
    "-ms-flex-positive": 1,
    flexGrow: 1,
    maxWidth: "100%",
  },

  ".col-auto": {
    "-webkit-box-flex": 0,
    "-ms-flex": "0 0 auto",
    flex: "0 0 auto",
    width: "auto",
    maxWidth: "none",
  },

  ".col-1": {
    "-webkit-box-flex": 0,
    "-ms-flex": "0 0 8.333333%",
    flex: "0 0 8.333333%",
    maxWidth: "8.333333%",
  },

  ".col-2": {
    "-webkit-box-flex": 0,
    "-ms-flex": "0 0 16.666667%",
    flex: "0 0 16.666667%",
    maxWidth: "16.666667%",
  },

  ".col-3": {
    "-webkit-box-flex": 0,
    "-ms-flex": "0 0 25%",
    flex: "0 0 25%",
    maxWidth: "25%",
  },

  ".col-4": {
    "-webkit-box-flex": 0,
    "-ms-flex": "0 0 33.333333%",
    flex: "0 0 33.333333%",
    maxWidth: "33.333333%",
  },

  ".col-5": {
    "-webkit-box-flex": 0,
    "-ms-flex": "0 0 41.666667%",
    flex: "0 0 41.666667%",
    maxWidth: "41.666667%",
  },

  ".col-6": {
    "-webkit-box-flex": 0,
    "-ms-flex": "0 0 50%",
    flex: "0 0 50%",
    maxWidth: "50%",
  },

  ".col-7": {
    "-webkit-box-flex": 0,
    "-ms-flex": "0 0 58.333333%",
    flex: "0 0 58.333333%",
    maxWidth: "58.333333%",
  },

  ".col-8": {
    "-webkit-box-flex": 0,
    "-ms-flex": "0 0 66.666667%",
    flex: "0 0 66.666667%",
    maxWidth: "66.666667%",
  },

  ".col-9": {
    "-webkit-box-flex": 0,
    "-ms-flex": "0 0 75%",
    flex: "0 0 75%",
    maxWidth: "75%",
  },

  ".col-10": {
    "-webkit-box-flex": 0,
    "-ms-flex": "0 0 83.333333%",
    flex: "0 0 83.333333%",
    maxWidth: "83.333333%",
  },

  ".col-11": {
    "-webkit-box-flex": 0,
    "-ms-flex": "0 0 91.666667%",
    flex: "0 0 91.666667%",
    maxWidth: "91.666667%",
  },

  ".col-12": {
    "-webkit-box-flex": 0,
    "-ms-flex": "0 0 100%",
    flex: "0 0 100%",
    maxWidth: "100%",
  },

  ".order-first": {
    "-webkit-box-ordinal-group": 0,
    "-ms-flex-order": -1,
    order: -1,
  },

  ".order-last": {
    "-webkit-box-ordinal-group": 14,
    "-ms-flex-order": 13,
    order: 13,
  },

  ".order-0": {
    "-webkit-box-ordinal-group": 1,
    "-ms-flex-order": 0,
    order: 0,
  },

  ".order-1": {
    "-webkit-box-ordinal-group": 2,
    "-ms-flex-order": 1,
    order: 1,
  },

  ".order-2": {
    "-webkit-box-ordinal-group": 3,
    "-ms-flex-order": 2,
    order: 2,
  },

  ".order-3": {
    "-webkit-box-ordinal-group": 4,
    "-ms-flex-order": 3,
    order: 3,
  },

  ".order-4": {
    "-webkit-box-ordinal-group": 5,
    "-ms-flex-order": 4,
    order: 4,
  },

  ".order-5": {
    "-webkit-box-ordinal-group": 6,
    "-ms-flex-order": 5,
    order: 5,
  },

  ".order-6": {
    "-webkit-box-ordinal-group": 7,
    "-ms-flex-order": 6,
    order: 6,
  },

  ".order-7": {
    "-webkit-box-ordinal-group": 8,
    "-ms-flex-order": 7,
    order: 7,
  },

  ".order-8": {
    "-webkit-box-ordinal-group": 9,
    "-ms-flex-order": 8,
    order: 8,
  },

  ".order-9": {
    "-webkit-box-ordinal-group": 10,
    "-ms-flex-order": 9,
    order: 9,
  },

  ".order-10": {
    "-webkit-box-ordinal-group": 11,
    "-ms-flex-order": 10,
    order: 10,
  },

  ".order-11": {
    "-webkit-box-ordinal-group": 12,
    "-ms-flex-order": 11,
    order: 11,
  },

  ".order-12": {
    "-webkit-box-ordinal-group": 13,
    "-ms-flex-order": 12,
    order: 12,
  },

  ".offset-1": {
    marginLeft: "8.333333%",
  },

  ".offset-2": {
    marginLeft: "16.666667%",
  },

  ".offset-3": {
    marginLeft: "25%",
  },

  ".offset-4": {
    marginLeft: "33.333333%",
  },

  ".offset-5": {
    marginLeft: "41.666667%",
  },

  ".offset-6": {
    marginLeft: "50%",
  },

  ".offset-7": {
    marginLeft: "58.333333%",
  },

  ".offset-8": {
    marginLeft: "66.666667%",
  },

  ".offset-9": {
    marginLeft: "75%",
  },

  ".offset-10": {
    marginLeft: "83.333333%",
  },

  ".offset-11": {
    marginLeft: "91.666667%",
  },

  ".d-none": {
    display: "none",
  },

  ".d-inline": {
    display: "inline",
  },

  ".d-inline-block": {
    display: "inline-block",
  },

  ".d-block": {
    display: "block",
  },

  ".d-table": {
    display: "table",
  },

  ".d-table-row": {
    display: "table-row",
  },

  ".d-table-cell": {
    display: "table-cell",
  },

  ".d-flex": {
    display: ["-webkit-box", "-ms-flexbox", "flex"],
  },

  ".d-inline-flex": {
    display: ["-webkit-inline-box", "-ms-inline-flexbox", "inline-flex"],
  },

  "@media print": {
    ".d-print-none": {
      display: "none",
    },
    ".d-print-inline": {
      display: "inline",
    },
    ".d-print-inline-block": {
      display: "inline-block",
    },
    ".d-print-block": {
      display: "block",
    },
    ".d-print-table": {
      display: "table",
    },
    ".d-print-table-row": {
      display: "table-row",
    },
    ".d-print-table-cell": {
      display: "table-cell",
    },
    ".d-print-flex": {
      display: ["-webkit-box", "-ms-flexbox", "flex"],
    },
    ".d-print-inline-flex": {
      display: ["-webkit-inline-box", "-ms-inline-flexbox", "inline-flex"],
    },
  },

  ".flex-row": {
    "-webkit-box-orient": "horizontal",
    "-webkit-box-direction": "normal",
    "-ms-flex-direction": "row",
    "flex-direction": "row",
  },

  ".flex-column": {
    "-webkit-box-orient": "vertical",
    "-webkit-box-direction": "normal",
    "-ms-flex-direction": "column",
    "flex-direction": "column",
  },

  ".flex-row-reverse": {
    "-webkit-box-orient": "horizontal",
    "-webkit-box-direction": "reverse",
    "-ms-flex-direction": "row-reverse",
    "flex-direction": "row-reverse",
  },

  ".flex-column-reverse": {
    "-webkit-box-orient": "vertical",
    "-webkit-box-direction": "reverse",
    "-ms-flex-direction": "column-reverse",
    "flex-direction": "column-reverse",
  },

  ".flex-wrap": {
    "-ms-flexWrap": "wrap",
    flexWrap: "wrap",
  },

  ".flex-nowrap": {
    "-ms-flexWrap": "nowrap",
    flexWrap: "nowrap",
  },

  ".flex-wrap-reverse": {
    "-ms-flexWrap": "wrap-reverse",
    flexWrap: "wrap-reverse",
  },

  ".justify-content-start": {
    "-webkit-box-pack": "start",
    "-ms-flex-pack": "start",
    justifyContent: "flex-start",
  },

  ".justify-content-end": {
    "-webkit-box-pack": "end",
    "-ms-flex-pack": "end",
    justifyContent: "flex-end",
  },

  ".justify-content-center": {
    "-webkit-box-pack": "center",
    "-ms-flex-pack": "center",
    justifyContent: "center",
  },

  ".justify-content-between": {
    "-webkit-box-pack": "justify",
    "-ms-flex-pack": "justify",
    justifyContent: "space-between",
  },

  ".justify-content-around": {
    "-ms-flex-pack": "distribute",
    justifyContent: "space-around",
  },

  ".align-items-start": {
    "-webkit-box-align": "start",
    "-ms-flex-align": "start",
    "align-items": "flex-start",
  },

  ".align-items-end": {
    "-webkit-box-align": "end",
    "-ms-flex-align": "end",
    "align-items": "flex-end",
  },

  ".align-items-center": {
    "-webkit-box-align": "center",
    "-ms-flex-align": "center",
    "align-items": "center",
  },

  ".align-items-baseline": {
    "-webkit-box-align": "baseline",
    "-ms-flex-align": "baseline",
    "align-items": "baseline",
  },

  ".align-items-stretch": {
    "-webkit-box-align": "stretch",
    "-ms-flex-align": "stretch",
    "align-items": "stretch",
  },

  ".align-content-start": {
    "-ms-flex-line-pack": "start",
    "align-content": "flex-start",
  },

  ".align-content-end": {
    "-ms-flex-line-pack": "end",
    "align-content": "flex-end",
  },

  ".align-content-center": {
    "-ms-flex-line-pack": "center",
    "align-content": "center",
  },

  ".align-content-between": {
    "-ms-flex-line-pack": "justify ",
    "align-content": "space-between ",
  },

  ".align-content-around": {
    "-ms-flex-line-pack": "distribute",
    "align-content": "space-around",
  },

  ".align-content-stretch": {
    "-ms-flex-line-pack": "stretch",
    "align-content": "stretch",
  },

  ".align-self-auto": {
    "-ms-flex-item-align": "auto",
    "align-self": "auto",
  },

  ".align-self-start": {
    "-ms-flex-item-align": "start",
    "align-self": "flex-start",
  },

  ".align-self-end": {
    "-ms-flex-item-align": "end",
    "align-self": "flex-end",
  },

  ".align-self-center": {
    "-ms-flex-item-align": "center",
    "align-self": "center",
  },

  ".align-self-baseline": {
    "-ms-flex-item-align": "baseline",
    "align-self": "baseline",
  },

  ".align-self-stretch": {
    "-ms-flex-item-align": "stretch",
    "align-self": "stretch",
  },

  [mq[0]]: {
    ".container": {
      maxWidth: container[0],
    },
    ".col-sm": {
      "-ms-flex-preferred-size": 0,
      flexBasis: 0,
      "-webkit-box-flex": 1,
      "-ms-flex-positive": 1,
      flexGrow: 1,
      maxWidth: "100%",
    },
    ".col-sm-auto": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 auto",
      flex: "0 0 auto",
      width: "auto",
      maxWidth: "none",
    },
    ".col-sm-1": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 8.333333%",
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%",
    },
    ".col-sm-2": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 16.666667%",
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
    },
    ".col-sm-3": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 25%",
      flex: "0 0 25%",
      maxWidth: "25%",
    },
    ".col-sm-4": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 33.333333%",
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
    },
    ".col-sm-5": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 41.666667%",
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%",
    },
    ".col-sm-6": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 50%",
      flex: "0 0 50%",
      maxWidth: "50%",
    },
    ".col-sm-7": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 58.333333%",
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%",
    },
    ".col-sm-8": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 66.666667%",
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%",
    },
    ".col-sm-9": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 75%",
      flex: "0 0 75%",
      maxWidth: "75%",
    },
    ".col-sm-10": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 83.333333%",
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%",
    },
    ".col-sm-11": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 91.666667%",
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%",
    },
    ".col-sm-12": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 100%",
      flex: "0 0 100%",
      maxWidth: "100%",
    },
    ".order-sm-first": {
      "-webkit-box-ordinal-group": 0,
      "-ms-flex-order": -1,
      order: -1,
    },
    ".order-sm-last": {
      "-webkit-box-ordinal-group": 14,
      "-ms-flex-order": 13,
      order: 13,
    },
    ".order-sm-0": {
      "-webkit-box-ordinal-group": 1,
      "-ms-flex-order": 0,
      order: 0,
    },
    ".order-sm-1": {
      "-webkit-box-ordinal-group": 2,
      "-ms-flex-order": 1,
      order: 1,
    },
    ".order-sm-2": {
      "-webkit-box-ordinal-group": 3,
      "-ms-flex-order": 2,
      order: 2,
    },
    ".order-sm-3": {
      "-webkit-box-ordinal-group": 4,
      "-ms-flex-order": 3,
      order: 3,
    },
    ".order-sm-4": {
      "-webkit-box-ordinal-group": 5,
      "-ms-flex-order": 4,
      order: 4,
    },
    ".order-sm-5": {
      "-webkit-box-ordinal-group": 6,
      "-ms-flex-order": 5,
      order: 5,
    },
    ".order-sm-6": {
      "-webkit-box-ordinal-group": 7,
      "-ms-flex-order": 6,
      order: 6,
    },
    ".order-sm-7": {
      "-webkit-box-ordinal-group": 8,
      "-ms-flex-order": 7,
      order: 7,
    },
    ".order-sm-8": {
      "-webkit-box-ordinal-group": 9,
      "-ms-flex-order": 8,
      order: 8,
    },
    ".order-sm-9": {
      "-webkit-box-ordinal-group": 10,
      "-ms-flex-order": 9,
      order: 9,
    },
    ".order-sm-10": {
      "-webkit-box-ordinal-group": 11,
      "-ms-flex-order": 10,
      order: 10,
    },
    ".order-sm-11": {
      "-webkit-box-ordinal-group": 12,
      "-ms-flex-order": 11,
      order: 11,
    },
    ".order-sm-12": {
      "-webkit-box-ordinal-group": 13,
      "-ms-flex-order": 12,
      order: 12,
    },
    ".offset-sm-0": {
      marginLeft: 0,
    },
    ".offset-sm-1": {
      marginLeft: "8.333333%",
    },
    ".offset-sm-2": {
      marginLeft: "16.666667%",
    },
    ".offset-sm-3": {
      marginLeft: "25%",
    },
    ".offset-sm-4": {
      marginLeft: "33.333333%",
    },
    ".offset-sm-5": {
      marginLeft: "41.666667%",
    },
    ".offset-sm-6": {
      marginLeft: "50%",
    },
    ".offset-sm-7": {
      marginLeft: "58.333333%",
    },
    ".offset-sm-8": {
      marginLeft: "66.666667%",
    },
    ".offset-sm-9": {
      marginLeft: "75%",
    },
    ".offset-sm-10": {
      marginLeft: "83.333333%",
    },
    ".offset-sm-11": {
      marginLeft: "91.666667%",
    },
    ".d-sm-none": {
      display: "none",
    },
    ".d-sm-inline": {
      display: "inline",
    },
    ".d-sm-inline-block": {
      display: "inline-block",
    },
    ".d-sm-block": {
      display: "block",
    },
    ".d-sm-table": {
      display: "table",
    },
    ".d-sm-table-row": {
      display: "table-row",
    },
    ".d-sm-table-cell": {
      display: "table-cell",
    },
    ".d-sm-flex": {
      display: ["-webkit-box", "-ms-flexbox", "flex"],
    },
    ".d-sm-inline-flex": {
      display: ["-webkit-inline-box", "-ms-inline-flexbox", "inline-flex"],
    },
    ".flex-sm-row": {
      "-webkit-box-orient": "horizontal",
      "-webkit-box-direction": "normal",
      "-ms-flex-direction": "row",
      "flex-direction": "row",
    },
    ".flex-sm-column": {
      "-webkit-box-orient": "vertical",
      "-webkit-box-direction": "normal",
      "-ms-flex-direction": "column",
      "flex-direction": "column",
    },
    ".flex-sm-row-reverse": {
      "-webkit-box-orient": "horizontal",
      "-webkit-box-direction": "reverse",
      "-ms-flex-direction": "row-reverse",
      "flex-direction": "row-reverse",
    },
    ".flex-sm-column-reverse": {
      "-webkit-box-orient": "vertical",
      "-webkit-box-direction": "reverse",
      "-ms-flex-direction": "column-reverse",
      "flex-direction": "column-reverse",
    },
    ".flex-sm-wrap": {
      "-ms-flexWrap": "wrap",
      flexWrap: "wrap",
    },
    ".flex-sm-nowrap": {
      "-ms-flexWrap": "nowrap",
      flexWrap: "nowrap",
    },
    ".flex-sm-wrap-reverse": {
      "-ms-flexWrap": "wrap-reverse",
      flexWrap: "wrap-reverse",
    },
    ".justify-content-sm-start": {
      "-webkit-box-pack": "start",
      "-ms-flex-pack": "start",
      justifyContent: "flex-start",
    },
    ".justify-content-sm-end": {
      "-webkit-box-pack": "end",
      "-ms-flex-pack": "end",
      justifyContent: "flex-end",
    },
    ".justify-content-sm-center": {
      "-webkit-box-pack": "center",
      "-ms-flex-pack": "center",
      justifyContent: "center",
    },
    ".justify-content-sm-between": {
      "-webkit-box-pack": "justify ",
      "-ms-flex-pack": "justify ",
      justifyContent: "space-between ",
    },
    ".justify-content-sm-around": {
      "-ms-flex-pack": "distribute",
      justifyContent: "space-around",
    },
    ".align-items-sm-start": {
      "-webkit-box-align": "start",
      "-ms-flex-align": "start",
      "align-items": "flex-start",
    },
    ".align-items-sm-end": {
      "-webkit-box-align": "end",
      "-ms-flex-align": "end",
      "align-items": "flex-end",
    },
    ".align-items-sm-center": {
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
    },
    ".align-items-sm-baseline": {
      "-webkit-box-align": "baseline",
      "-ms-flex-align": "baseline",
      "align-items": "baseline",
    },
    ".align-items-sm-stretch": {
      "-webkit-box-align": "stretch",
      "-ms-flex-align": "stretch",
      "align-items": "stretch",
    },
    ".align-content-sm-start": {
      "-ms-flex-line-pack": "start",
      "align-content": "flex-start",
    },
    ".align-content-sm-end": {
      "-ms-flex-line-pack": "end",
      "align-content": "flex-end",
    },
    ".align-content-sm-center": {
      "-ms-flex-line-pack": "center",
      "align-content": "center",
    },
    ".align-content-sm-between": {
      "-ms-flex-line-pack": "justify ",
      "align-content": "space-between ",
    },
    ".align-content-sm-around": {
      "-ms-flex-line-pack": "distribute",
      "align-content": "space-around",
    },
    ".align-content-sm-stretch": {
      "-ms-flex-line-pack": "stretch",
      "align-content": "stretch",
    },
    ".align-self-sm-auto": {
      "-ms-flex-item-align": "auto",
      "align-self": "auto",
    },
    ".align-self-sm-start": {
      "-ms-flex-item-align": "start",
      "align-self": "flex-start",
    },
    ".align-self-sm-end": {
      "-ms-flex-item-align": "end",
      "align-self": "flex-end",
    },
    ".align-self-sm-center": {
      "-ms-flex-item-align": "center",
      "align-self": "center",
    },
    ".align-self-sm-baseline": {
      "-ms-flex-item-align": "baseline",
      "align-self": "baseline",
    },
    ".align-self-sm-stretch": {
      "-ms-flex-item-align": "stretch",
      "align-self": "stretch",
    },
  },
  [mq[1]]: {
    ".container": {
      maxWidth: container[1],
    },
    ".col-md": {
      "-ms-flex-preferred-size": 0,
      flexBasis: 0,
      "-webkit-box-flex": 1,
      "-ms-flex-positive": 1,
      flexGrow: 1,
      maxWidth: "100%",
    },
    ".col-md-auto": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 auto",
      flex: "0 0 auto",
      width: "auto",
      maxWidth: "none",
    },
    ".col-md-1": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 8.333333%",
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%",
    },
    ".col-md-2": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 16.666667%",
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
    },
    ".col-md-3": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 25%",
      flex: "0 0 25%",
      maxWidth: "25%",
    },
    ".col-md-4": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 33.333333%",
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
    },
    ".col-md-5": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 41.666667%",
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%",
    },
    ".col-md-6": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 50%",
      flex: "0 0 50%",
      maxWidth: "50%",
    },
    ".col-md-7": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 58.333333%",
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%",
    },
    ".col-md-8": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 66.666667%",
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%",
    },
    ".col-md-9": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 75%",
      flex: "0 0 75%",
      maxWidth: "75%",
    },
    ".col-md-10": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 83.333333%",
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%",
    },
    ".col-md-11": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 91.666667%",
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%",
    },
    ".col-md-12": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 100%",
      flex: "0 0 100%",
      maxWidth: "100%",
    },
    ".order-md-first": {
      "-webkit-box-ordinal-group": 0,
      "-ms-flex-order": -1,
      order: -1,
    },
    ".order-md-last": {
      "-webkit-box-ordinal-group": 14,
      "-ms-flex-order": 13,
      order: 13,
    },
    ".order-md-0": {
      "-webkit-box-ordinal-group": 1,
      "-ms-flex-order": 0,
      order: 0,
    },
    ".order-md-1": {
      "-webkit-box-ordinal-group": 2,
      "-ms-flex-order": 1,
      order: 1,
    },
    ".order-md-2": {
      "-webkit-box-ordinal-group": 3,
      "-ms-flex-order": 2,
      order: 2,
    },
    ".order-md-3": {
      "-webkit-box-ordinal-group": 4,
      "-ms-flex-order": 3,
      order: 3,
    },
    ".order-md-4": {
      "-webkit-box-ordinal-group": 5,
      "-ms-flex-order": 4,
      order: 4,
    },
    ".order-md-5": {
      "-webkit-box-ordinal-group": 6,
      "-ms-flex-order": 5,
      order: 5,
    },
    ".order-md-6": {
      "-webkit-box-ordinal-group": 7,
      "-ms-flex-order": 6,
      order: 6,
    },
    ".order-md-7": {
      "-webkit-box-ordinal-group": 8,
      "-ms-flex-order": 7,
      order: 7,
    },
    ".order-md-8": {
      "-webkit-box-ordinal-group": 9,
      "-ms-flex-order": 8,
      order: 8,
    },
    ".order-md-9": {
      "-webkit-box-ordinal-group": 10,
      "-ms-flex-order": 9,
      order: 9,
    },
    ".order-md-10": {
      "-webkit-box-ordinal-group": 11,
      "-ms-flex-order": 10,
      order: 10,
    },
    ".order-md-11": {
      "-webkit-box-ordinal-group": 12,
      "-ms-flex-order": 11,
      order: 11,
    },
    ".order-md-12": {
      "-webkit-box-ordinal-group": 13,
      "-ms-flex-order": 12,
      order: 12,
    },
    ".offset-md-0": {
      marginLeft: 0,
    },
    ".offset-md-1": {
      marginLeft: "8.333333%",
    },
    ".offset-md-2": {
      marginLeft: "16.666667%",
    },
    ".offset-md-3": {
      marginLeft: "25%",
    },
    ".offset-md-4": {
      marginLeft: "33.333333%",
    },
    ".offset-md-5": {
      marginLeft: "41.666667%",
    },
    ".offset-md-6": {
      marginLeft: "50%",
    },
    ".offset-md-7": {
      marginLeft: "58.333333%",
    },
    ".offset-md-8": {
      marginLeft: "66.666667%",
    },
    ".offset-md-9": {
      marginLeft: "75%",
    },
    ".offset-md-10": {
      marginLeft: "83.333333%",
    },
    ".offset-md-11": {
      marginLeft: "91.666667%",
    },
    ".d-md-none": {
      display: "none",
    },
    ".d-md-inline": {
      display: "inline",
    },
    ".d-md-inline-block": {
      display: "inline-block",
    },
    ".d-md-block": {
      display: "block",
    },
    ".d-md-table": {
      display: "table",
    },
    ".d-md-table-row": {
      display: "table-row",
    },
    ".d-md-table-cell": {
      display: "table-cell",
    },
    ".d-md-flex": {
      display: ["-webkit-box", "-ms-flexbox", "flex"],
    },
    ".d-md-inline-flex": {
      display: ["-webkit-inline-box", "-ms-inline-flexbox", "inline-flex"],
    },
    ".flex-md-row": {
      "-webkit-box-orient": "horizontal",
      "-webkit-box-direction": "normal",
      "-ms-flex-direction": "row",
      "flex-direction": "row",
    },
    ".flex-md-column": {
      "-webkit-box-orient": "vertical",
      "-webkit-box-direction": "normal",
      "-ms-flex-direction": "column",
      "flex-direction": "column",
    },
    ".flex-md-row-reverse": {
      "-webkit-box-orient": "horizontal",
      "-webkit-box-direction": "reverse",
      "-ms-flex-direction": "row-reverse",
      "flex-direction": "row-reverse",
    },
    ".flex-md-column-reverse": {
      "-webkit-box-orient": "vertical",
      "-webkit-box-direction": "reverse",
      "-ms-flex-direction": "column-reverse",
      "flex-direction": "column-reverse",
    },
    ".flex-md-wrap": {
      "-ms-flexWrap": "wrap",
      flexWrap: "wrap",
    },
    ".flex-md-nowrap": {
      "-ms-flexWrap": "nowrap",
      flexWrap: "nowrap",
    },
    ".flex-md-wrap-reverse": {
      "-ms-flexWrap": "wrap-reverse",
      flexWrap: "wrap-reverse",
    },
    ".justify-content-md-start": {
      "-webkit-box-pack": "start",
      "-ms-flex-pack": "start",
      justifyContent: "flex-start",
    },
    ".justify-content-md-end": {
      "-webkit-box-pack": "end",
      "-ms-flex-pack": "end",
      justifyContent: "flex-end",
    },
    ".justify-content-md-center": {
      "-webkit-box-pack": "center",
      "-ms-flex-pack": "center",
      justifyContent: "center",
    },
    ".justify-content-md-between": {
      "-webkit-box-pack": "justify ",
      "-ms-flex-pack": "justify ",
      justifyContent: "space-between ",
    },
    ".justify-content-md-around": {
      "-ms-flex-pack": "distribute",
      justifyContent: "space-around",
    },
    ".align-items-md-start": {
      "-webkit-box-align": "start",
      "-ms-flex-align": "start",
      "align-items": "flex-start",
    },
    ".align-items-md-end": {
      "-webkit-box-align": "end",
      "-ms-flex-align": "end",
      "align-items": "flex-end",
    },
    ".align-items-md-center": {
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
    },
    ".align-items-md-baseline": {
      "-webkit-box-align": "baseline",
      "-ms-flex-align": "baseline",
      "align-items": "baseline",
    },
    ".align-items-md-stretch": {
      "-webkit-box-align": "stretch",
      "-ms-flex-align": "stretch",
      "align-items": "stretch",
    },
    ".align-content-md-start": {
      "-ms-flex-line-pack": "start",
      "align-content": "flex-start",
    },
    ".align-content-md-end": {
      "-ms-flex-line-pack": "end",
      "align-content": "flex-end",
    },
    ".align-content-md-center": {
      "-ms-flex-line-pack": "center",
      "align-content": "center",
    },
    ".align-content-md-between": {
      "-ms-flex-line-pack": "justify ",
      "align-content": "space-between ",
    },
    ".align-content-md-around": {
      "-ms-flex-line-pack": "distribute",
      "align-content": "space-around",
    },
    ".align-content-md-stretch": {
      "-ms-flex-line-pack": "stretch",
      "align-content": "stretch",
    },
    ".align-self-md-auto": {
      "-ms-flex-item-align": "auto",
      "align-self": "auto",
    },
    ".align-self-md-start": {
      "-ms-flex-item-align": "start",
      "align-self": "flex-start",
    },
    ".align-self-md-end": {
      "-ms-flex-item-align": "end",
      "align-self": "flex-end",
    },
    ".align-self-md-center": {
      "-ms-flex-item-align": "center",
      "align-self": "center",
    },
    ".align-self-md-baseline": {
      "-ms-flex-item-align": "baseline",
      "align-self": "baseline",
    },
    ".align-self-md-stretch": {
      "-ms-flex-item-align": "stretch",
      "align-self": "stretch",
    },
  },
  [mq[2]]: {
    ".container": {
      maxWidth: container[2],
      paddingRight: padding[1],
      paddingLeft: padding[1],
    },
    ".col-lg": {
      "-ms-flex-preferred-size": 0,
      flexBasis: 0,
      "-webkit-box-flex": 1,
      "-ms-flex-positive": 1,
      flexGrow: 1,
      maxWidth: "100%",
    },
    ".col-lg-auto": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 auto",
      flex: "0 0 auto",
      width: "auto",
      maxWidth: "none",
    },
    ".col-lg-1": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 8.333333%",
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%",
    },
    ".col-lg-2": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 16.666667%",
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
    },
    ".col-lg-3": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 25%",
      flex: "0 0 25%",
      maxWidth: "25%",
    },
    ".col-lg-4": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 33.333333%",
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
    },
    ".col-lg-5": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 41.666667%",
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%",
    },
    ".col-lg-6": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 50%",
      flex: "0 0 50%",
      maxWidth: "50%",
    },
    ".col-lg-7": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 58.333333%",
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%",
    },
    ".col-lg-8": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 66.666667%",
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%",
    },
    ".col-lg-9": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 75%",
      flex: "0 0 75%",
      maxWidth: "75%",
    },
    ".col-lg-10": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 83.333333%",
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%",
    },
    ".col-lg-11": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 91.666667%",
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%",
    },
    ".col-lg-12": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 100%",
      flex: "0 0 100%",
      maxWidth: "100%",
    },
    ".order-lg-first": {
      "-webkit-box-ordinal-group": 0,
      "-ms-flex-order": -1,
      order: -1,
    },
    ".order-lg-last": {
      "-webkit-box-ordinal-group": 14,
      "-ms-flex-order": 13,
      order: 13,
    },
    ".order-lg-0": {
      "-webkit-box-ordinal-group": 1,
      "-ms-flex-order": 0,
      order: 0,
    },
    ".order-lg-1": {
      "-webkit-box-ordinal-group": 2,
      "-ms-flex-order": 1,
      order: 1,
    },
    ".order-lg-2": {
      "-webkit-box-ordinal-group": 3,
      "-ms-flex-order": 2,
      order: 2,
    },
    ".order-lg-3": {
      "-webkit-box-ordinal-group": 4,
      "-ms-flex-order": 3,
      order: 3,
    },
    ".order-lg-4": {
      "-webkit-box-ordinal-group": 5,
      "-ms-flex-order": 4,
      order: 4,
    },
    ".order-lg-5": {
      "-webkit-box-ordinal-group": 6,
      "-ms-flex-order": 5,
      order: 5,
    },
    ".order-lg-6": {
      "-webkit-box-ordinal-group": 7,
      "-ms-flex-order": 6,
      order: 6,
    },
    ".order-lg-7": {
      "-webkit-box-ordinal-group": 8,
      "-ms-flex-order": 7,
      order: 7,
    },
    ".order-lg-8": {
      "-webkit-box-ordinal-group": 9,
      "-ms-flex-order": 8,
      order: 8,
    },
    ".order-lg-9": {
      "-webkit-box-ordinal-group": 10,
      "-ms-flex-order": 9,
      order: 9,
    },
    ".order-lg-10": {
      "-webkit-box-ordinal-group": 11,
      "-ms-flex-order": 10,
      order: 10,
    },
    ".order-lg-11": {
      "-webkit-box-ordinal-group": 12,
      "-ms-flex-order": 11,
      order: 11,
    },
    ".order-lg-12": {
      "-webkit-box-ordinal-group": 13,
      "-ms-flex-order": 12,
      order: 12,
    },
    ".offset-lg-0": {
      marginLeft: 0,
    },
    ".offset-lg-1": {
      marginLeft: "8.333333%",
    },
    ".offset-lg-2": {
      marginLeft: "16.666667%",
    },
    ".offset-lg-3": {
      marginLeft: "25%",
    },
    ".offset-lg-4": {
      marginLeft: "33.333333%",
    },
    ".offset-lg-5": {
      marginLeft: "41.666667%",
    },
    ".offset-lg-6": {
      marginLeft: "50%",
    },
    ".offset-lg-7": {
      marginLeft: "58.333333%",
    },
    ".offset-lg-8": {
      marginLeft: "66.666667%",
    },
    ".offset-lg-9": {
      marginLeft: "75%",
    },
    ".offset-lg-10": {
      marginLeft: "83.333333%",
    },
    ".offset-lg-11": {
      marginLeft: "91.666667%",
    },
    ".d-lg-none": {
      display: "none",
    },
    ".d-lg-inline": {
      display: "inline",
    },
    ".d-lg-inline-block": {
      display: "inline-block",
    },
    ".d-lg-block": {
      display: "block",
    },
    ".d-lg-table": {
      display: "table",
    },
    ".d-lg-table-row": {
      display: "table-row",
    },
    ".d-lg-table-cell": {
      display: "table-cell",
    },
    ".d-lg-flex": {
      display: ["-webkit-box", "-ms-flexbox", "flex"],
    },
    ".d-lg-inline-flex": {
      display: ["-webkit-inline-box", "-ms-inline-flexbox", "inline-flex"],
    },
    ".flex-lg-row": {
      "-webkit-box-orient": "horizontal",
      "-webkit-box-direction": "normal",
      "-ms-flex-direction": "row",
      "flex-direction": "row",
    },
    ".flex-lg-column": {
      "-webkit-box-orient": "vertical",
      "-webkit-box-direction": "normal",
      "-ms-flex-direction": "column",
      "flex-direction": "column",
    },
    ".flex-lg-row-reverse": {
      "-webkit-box-orient": "horizontal",
      "-webkit-box-direction": "reverse",
      "-ms-flex-direction": "row-reverse",
      "flex-direction": "row-reverse",
    },
    ".flex-lg-column-reverse": {
      "-webkit-box-orient": "vertical",
      "-webkit-box-direction": "reverse",
      "-ms-flex-direction": "column-reverse",
      "flex-direction": "column-reverse",
    },
    ".flex-lg-wrap": {
      "-ms-flexWrap": "wrap",
      flexWrap: "wrap",
    },
    ".flex-lg-nowrap": {
      "-ms-flexWrap": "nowrap",
      flexWrap: "nowrap",
    },
    ".flex-lg-wrap-reverse": {
      "-ms-flexWrap": "wrap-reverse",
      flexWrap: "wrap-reverse",
    },
    ".justify-content-lg-start": {
      "-webkit-box-pack": "start",
      "-ms-flex-pack": "start",
      justifyContent: "flex-start",
    },
    ".justify-content-lg-end": {
      "-webkit-box-pack": "end",
      "-ms-flex-pack": "end",
      justifyContent: "flex-end",
    },
    ".justify-content-lg-center": {
      "-webkit-box-pack": "center",
      "-ms-flex-pack": "center",
      justifyContent: "center",
    },
    ".justify-content-lg-between": {
      "-webkit-box-pack": "justify ",
      "-ms-flex-pack": "justify ",
      justifyContent: "space-between ",
    },
    ".justify-content-lg-around": {
      "-ms-flex-pack": "distribute",
      justifyContent: "space-around",
    },
    ".align-items-lg-start": {
      "-webkit-box-align": "start",
      "-ms-flex-align": "start",
      "align-items": "flex-start",
    },
    ".align-items-lg-end": {
      "-webkit-box-align": "end",
      "-ms-flex-align": "end",
      "align-items": "flex-end",
    },
    ".align-items-lg-center": {
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
    },
    ".align-items-lg-baseline": {
      "-webkit-box-align": "baseline",
      "-ms-flex-align": "baseline",
      "align-items": "baseline",
    },
    ".align-items-lg-stretch": {
      "-webkit-box-align": "stretch",
      "-ms-flex-align": "stretch",
      "align-items": "stretch",
    },
    ".align-content-lg-start": {
      "-ms-flex-line-pack": "start",
      "align-content": "flex-start",
    },
    ".align-content-lg-end": {
      "-ms-flex-line-pack": "end",
      "align-content": "flex-end",
    },
    ".align-content-lg-center": {
      "-ms-flex-line-pack": "center",
      "align-content": "center",
    },
    ".align-content-lg-between": {
      "-ms-flex-line-pack": "justify ",
      "align-content": "space-between ",
    },
    ".align-content-lg-around": {
      "-ms-flex-line-pack": "distribute",
      "align-content": "space-around",
    },
    ".align-content-lg-stretch": {
      "-ms-flex-line-pack": "stretch",
      "align-content": "stretch",
    },
    ".align-self-lg-auto": {
      "-ms-flex-item-align": "auto",
      "align-self": "auto",
    },
    ".align-self-lg-start": {
      "-ms-flex-item-align": "start",
      "align-self": "flex-start",
    },
    ".align-self-lg-end": {
      "-ms-flex-item-align": "end",
      "align-self": "flex-end",
    },
    ".align-self-lg-center": {
      "-ms-flex-item-align": "center",
      "align-self": "center",
    },
    ".align-self-lg-baseline": {
      "-ms-flex-item-align": "baseline",
      "align-self": "baseline",
    },
    ".align-self-lg-stretch": {
      "-ms-flex-item-align": "stretch",
      "align-self": "stretch",
    },
  },
  [mq[3]]: {
    ".container": {
      maxWidth: container[3],
    },
    ".col-xl": {
      "-ms-flex-preferred-size": 0,
      flexBasis: 0,
      "-webkit-box-flex": 1,
      "-ms-flex-positive": 1,
      flexGrow: 1,
      maxWidth: "100%",
    },
    ".col-xl-auto": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 auto",
      flex: "0 0 auto",
      width: "auto",
      maxWidth: "none",
    },
    ".col-xl-1": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 8.333333%",
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%",
    },
    ".col-xl-2": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 16.666667%",
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
    },
    ".col-xl-3": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 25%",
      flex: "0 0 25%",
      maxWidth: "25%",
    },
    ".col-xl-4": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 33.333333%",
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
    },
    ".col-xl-5": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 41.666667%",
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%",
    },
    ".col-xl-6": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 50%",
      flex: "0 0 50%",
      maxWidth: "50%",
    },
    ".col-xl-7": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 58.333333%",
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%",
    },
    ".col-xl-8": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 66.666667%",
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%",
    },
    ".col-xl-9": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 75%",
      flex: "0 0 75%",
      maxWidth: "75%",
    },
    ".col-xl-10": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 83.333333%",
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%",
    },
    ".col-xl-11": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 91.666667%",
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%",
    },
    ".col-xl-12": {
      "-webkit-box-flex": 0,
      "-ms-flex": "0 0 100%",
      flex: "0 0 100%",
      maxWidth: "100%",
    },
    ".order-xl-first": {
      "-webkit-box-ordinal-group": 0,
      "-ms-flex-order": -1,
      order: -1,
    },
    ".order-xl-last": {
      "-webkit-box-ordinal-group": 14,
      "-ms-flex-order": 13,
      order: 13,
    },
    ".order-xl-0": {
      "-webkit-box-ordinal-group": 1,
      "-ms-flex-order": 0,
      order: 0,
    },
    ".order-xl-1": {
      "-webkit-box-ordinal-group": 2,
      "-ms-flex-order": 1,
      order: 1,
    },
    ".order-xl-2": {
      "-webkit-box-ordinal-group": 3,
      "-ms-flex-order": 2,
      order: 2,
    },
    ".order-xl-3": {
      "-webkit-box-ordinal-group": 4,
      "-ms-flex-order": 3,
      order: 3,
    },
    ".order-xl-4": {
      "-webkit-box-ordinal-group": 5,
      "-ms-flex-order": 4,
      order: 4,
    },
    ".order-xl-5": {
      "-webkit-box-ordinal-group": 6,
      "-ms-flex-order": 5,
      order: 5,
    },
    ".order-xl-6": {
      "-webkit-box-ordinal-group": 7,
      "-ms-flex-order": 6,
      order: 6,
    },
    ".order-xl-7": {
      "-webkit-box-ordinal-group": 8,
      "-ms-flex-order": 7,
      order: 7,
    },
    ".order-xl-8": {
      "-webkit-box-ordinal-group": 9,
      "-ms-flex-order": 8,
      order: 8,
    },
    ".order-xl-9": {
      "-webkit-box-ordinal-group": 10,
      "-ms-flex-order": 9,
      order: 9,
    },
    ".order-xl-10": {
      "-webkit-box-ordinal-group": 11,
      "-ms-flex-order": 10,
      order: 10,
    },
    ".order-xl-11": {
      "-webkit-box-ordinal-group": 12,
      "-ms-flex-order": 11,
      order: 11,
    },
    ".order-xl-12": {
      "-webkit-box-ordinal-group": 13,
      "-ms-flex-order": 12,
      order: 12,
    },
    ".offset-xl-0": {
      marginLeft: 0,
    },
    ".offset-xl-1": {
      marginLeft: "8.333333%",
    },
    ".offset-xl-2": {
      marginLeft: "16.666667%",
    },
    ".offset-xl-3": {
      marginLeft: "25%",
    },
    ".offset-xl-4": {
      marginLeft: "33.333333%",
    },
    ".offset-xl-5": {
      marginLeft: "41.666667%",
    },
    ".offset-xl-6": {
      marginLeft: "50%",
    },
    ".offset-xl-7": {
      marginLeft: "58.333333%",
    },
    ".offset-xl-8": {
      marginLeft: "66.666667%",
    },
    ".offset-xl-9": {
      marginLeft: "75%",
    },
    ".offset-xl-10": {
      marginLeft: "83.333333%",
    },
    ".offset-xl-11": {
      marginLeft: "91.666667%",
    },
    ".d-xl-none": {
      display: "none",
    },
    ".d-xl-inline": {
      display: "inline",
    },
    ".d-xl-inline-block": {
      display: "inline-block",
    },
    ".d-xl-block": {
      display: "block",
    },
    ".d-xl-table": {
      display: "table",
    },
    ".d-xl-table-row": {
      display: "table-row",
    },
    ".d-xl-table-cell": {
      display: "table-cell",
    },
    ".d-xl-flex": {
      display: ["-webkit-box", "-ms-flexbox", "flex"],
    },
    ".d-xl-inline-flex": {
      display: ["-webkit-inline-box", "-ms-inline-flexbox", "inline-flex"],
    },
    ".flex-xl-row": {
      "-webkit-box-orient": "horizontal",
      "-webkit-box-direction": "normal",
      "-ms-flex-direction": "row",
      "flex-direction": "row",
    },
    ".flex-xl-column": {
      "-webkit-box-orient": "vertical",
      "-webkit-box-direction": "normal",
      "-ms-flex-direction": "column",
      "flex-direction": "column",
    },
    ".flex-xl-row-reverse": {
      "-webkit-box-orient": "horizontal",
      "-webkit-box-direction": "reverse",
      "-ms-flex-direction": "row-reverse",
      "flex-direction": "row-reverse",
    },
    ".flex-xl-column-reverse": {
      "-webkit-box-orient": "vertical",
      "-webkit-box-direction": "reverse",
      "-ms-flex-direction": "column-reverse",
      "flex-direction": "column-reverse",
    },
    ".flex-xl-wrap": {
      "-ms-flexWrap": "wrap",
      flexWrap: "wrap",
    },
    ".flex-xl-nowrap": {
      "-ms-flexWrap": "nowrap",
      flexWrap: "nowrap",
    },
    ".flex-xl-wrap-reverse": {
      "-ms-flexWrap": "wrap-reverse",
      flexWrap: "wrap-reverse",
    },
    ".justify-content-xl-start": {
      "-webkit-box-pack": "start",
      "-ms-flex-pack": "start",
      justifyContent: "flex-start",
    },
    ".justify-content-xl-end": {
      "-webkit-box-pack": "end",
      "-ms-flex-pack": "end",
      justifyContent: "flex-end",
    },
    ".justify-content-xl-center": {
      "-webkit-box-pack": "center",
      "-ms-flex-pack": "center",
      justifyContent: "center",
    },
    ".justify-content-xl-between": {
      "-webkit-box-pack": "justify ",
      "-ms-flex-pack": "justify ",
      justifyContent: "space-between ",
    },
    ".justify-content-xl-around": {
      "-ms-flex-pack": "distribute",
      justifyContent: "space-around",
    },
    ".align-items-xl-start": {
      "-webkit-box-align": "start",
      "-ms-flex-align": "start",
      "align-items": "flex-start",
    },
    ".align-items-xl-end": {
      "-webkit-box-align": "end",
      "-ms-flex-align": "end",
      "align-items": "flex-end",
    },
    ".align-items-xl-center": {
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
    },
    ".align-items-xl-baseline": {
      "-webkit-box-align": "baseline",
      "-ms-flex-align": "baseline",
      "align-items": "baseline",
    },
    ".align-items-xl-stretch": {
      "-webkit-box-align": "stretch",
      "-ms-flex-align": "stretch",
      "align-items": "stretch",
    },
    ".align-content-xl-start": {
      "-ms-flex-line-pack": "start",
      "align-content": "flex-start",
    },
    ".align-content-xl-end": {
      "-ms-flex-line-pack": "end",
      "align-content": "flex-end",
    },
    ".align-content-xl-center": {
      "-ms-flex-line-pack": "center",
      "align-content": "center",
    },
    ".align-content-xl-between": {
      "-ms-flex-line-pack": "justify ",
      "align-content": "space-between ",
    },
    ".align-content-xl-around": {
      "-ms-flex-line-pack": "distribute",
      "align-content": "space-around",
    },
    ".align-content-xl-stretch": {
      "-ms-flex-line-pack": "stretch",
      "align-content": "stretch",
    },
    ".align-self-xl-auto": {
      "-ms-flex-item-align": "auto",
      "align-self": "auto",
    },
    ".align-self-xl-start": {
      "-ms-flex-item-align": "start",
      "align-self": "flex-start",
    },
    ".align-self-xl-end": {
      "-ms-flex-item-align": "end",
      "align-self": "flex-end",
    },
    ".align-self-xl-center": {
      "-ms-flex-item-align": "center",
      "align-self": "center",
    },
    ".align-self-xl-baseline": {
      "-ms-flex-item-align": "baseline",
      "align-self": "baseline",
    },
    ".align-self-xl-stretch": {
      "-ms-flex-item-align": "stretch",
      "align-self": "stretch",
    },
  },

  [mq[4]]: {
    ".container": {
      maxWidth: container[4],
    },
  },
}
