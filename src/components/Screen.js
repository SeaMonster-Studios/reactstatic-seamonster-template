// @flow
import * as React from "react"
import { hot } from "react-hot-loader"
import { RouteData } from "react-static"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { tRouteProps } from "../types"

type tScreen = {
  children: (routeProps: tRouteProps) => React.Node,
}

class ScreenInner extends React.PureComponent<tScreen> {
  render() {
    return (
      <RouteData>
        {(routeProps: tRouteProps) => (
          <>
            <Header routeProps={routeProps} />
            <main>{this.props.children(routeProps)}</main>
            <Footer routeProps={routeProps} />
          </>
        )}
      </RouteData>
    )
  }
}

export const Screen = hot(module)(ScreenInner)
