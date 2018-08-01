// @flow
import React from 'react'
//
import { Wrapper } from './style'
import { tRouteProps } from '../../types'

type tHeader = {
  routeProps: tRouteProps,
}

export function Header(props: tHeader) {
  const { routeProps, ...attrs } = props
  return <Wrapper {...attrs}>This is a header</Wrapper>
}
