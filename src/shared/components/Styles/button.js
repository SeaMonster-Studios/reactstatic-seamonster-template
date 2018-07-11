//
import { color } from './'

export const button = (() => {
  const c = {
    // c for common
    hoverEffect: 'default',
    textColor: color.white[0],
    inverse: false,
    inverseStyle: 'default',
    styles: {
      transition: 'color 0.5s ease, background 0.5s ease',
      fontSize: 16,
      padding: '12px 30px',
      fontWeight: 600,
      border: 'none',

      '&:hover, &:focus': {
        outline: 'none',
      },

      'svg + span': {
        paddingLeft: 5,
      },
    },
  }
  return {
    primary: {
      ...c,
      baseColor: color.button,
      hoverBaseColor: color.buttonHover,
    },
    secondary: {
      ...c,
      baseColor: color.gray[0],
      hoverBaseColor: color.gray[1],
    },
  }
})()
