//
import { color, font } from './'

export const formFields = (() => {
  const c = {
    fontFamily: font.family.sans,
    border: `2px solid rgb(${color.gray[0]})`,
    padding: '0 15px',
    lineHeight: 2.857142857,
    fontSize: 14,
    color: `rgb(${color.black[3]})`,
    minWidth: 345,
    transition: 'all 0.5s ease',

    '&:hover, &:focus': {
      boxShadow: '2px 2px 16px rgba(0, 0, 0, 0.15)',
      outline: 'none',

      '&:disabled': {
        boxShadow: 'none',
      },
    },

    '&:disabled': {
      opacity: 0.5,
    },
  }
  return {
    common: c,
  }
})()
