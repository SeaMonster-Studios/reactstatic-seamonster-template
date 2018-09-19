// @flow
import React from 'react'
import { tRouteProps } from '../types'
import styled from 'react-emotion'

export const Wrapper = styled('footer')``


type tFooter = {
  routeProps: tRouteProps,
}

export function Footer(props: tFooter) {
  const { routeProps, ...attrs } = props
  return <Wrapper {...attrs}>This is a footer</Wrapper>
}
