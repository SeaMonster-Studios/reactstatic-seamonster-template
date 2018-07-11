// @flow
import React from 'react'
//

export function Header(props: {}) {
  const { ...attrs } = props
  return <header {...attrs}>This is a header</header>
}
