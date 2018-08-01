// @flow
import * as React from 'react'
import { RouteData } from 'react-static'
//
import { Wrapper } from './style'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { tRouteProps } from '../../types'

type tScreen = {
  children: ({}) => React.Node,
}

export function Screen(props: tScreen) {
  const { children, ...attrs } = props
  return (
    <RouteData>
      {(routeProps: tRouteProps) => (
        <Wrapper {...attrs}>
          <Header routeProps={routeProps} />
          <main>{children(routeProps)}</main>
          <Footer routeProps={routeProps} />
        </Wrapper>
      )}
    </RouteData>
  )
}
