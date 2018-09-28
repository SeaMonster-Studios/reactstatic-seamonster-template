import * as React from "react"
import { hot } from "react-hot-loader"
import { RouteData } from "react-static"
import { Header } from "./Header"
import { Footer } from "./Footer"
import PropTypes from "prop-types"

class ScreenInner extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  render() {
    return (
      <RouteData>
        {(routeProps) => (
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
