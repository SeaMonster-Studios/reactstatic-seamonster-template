// @flow
import React from 'react'
//

export function Header(props: { routeProps: {} }) {
  const { routeProps, ...attrs } = props
  return <header {...attrs}>This is a header</header>
}
