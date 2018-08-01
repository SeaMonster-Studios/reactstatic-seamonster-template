// @flow
import React from 'react'
//
import { Wrapper } from './style'
import { tRouteProps } from '../../types'

type tFooter = {
  routeProps: tRouteProps,
}

export function Footer(props: tFooter) {
  const { routeProps, ...attrs } = props
  return <Wrapper {...attrs}>This is a footer</Wrapper>
}
