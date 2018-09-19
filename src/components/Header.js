// @flow
import React from 'react'
import { tRouteProps } from '../types'
import styled from 'react-emotion'

export const Wrapper = styled('header')``


type tHeader = {
  routeProps: tRouteProps,
}

export function Header(props: tHeader) {
  const { routeProps, ...attrs } = props
  return <Wrapper {...attrs}>This is a header</Wrapper>
}
