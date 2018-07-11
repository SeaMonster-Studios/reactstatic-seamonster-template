// @flow
import React from 'react'
//

export function Footer(props: { routeProps: {} }) {
  const { routeProps, ...attrs } = props
  return <footer {...attrs}>This is a footer</footer>
}
