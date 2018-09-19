import * as React from "react"
import { Router, Route } from "react-static"
import Routes from "react-static-routes"
import { ErrorBoundary } from "./shared/components/ErrorBoundary"
import { Styles } from "./shared/components/Styles"
import { Spring, animated } from "react-spring"

const AnimatedStyles = animated(Styles)

const RenderRoutes = ({ getComponentForPath }: any) => (
  // The default renderer uses a catch all route to recieve the pathname
  <Route
    path="*"
    render={(props) => {
      // The pathname is used to retrieve the component for that path
      let Comp = getComponentForPath(props.location.pathname)
      // The component is rendered!
      return (
        <Spring
          from={{ opacity: 0, transform: "scale(1.02)" }}
          to={{ opacity: 1, transform: "scale(1)" }}
        >
          {(styles) => (
            <AnimatedStyles style={styles}>
              <Comp key={props.location.pathname} {...props} />
            </AnimatedStyles>
          )}
        </Spring>
      )
    }}
  />
)

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <ErrorBoundary>
          <Routes component={RenderRoutes} />
        </ErrorBoundary>
      </Router>
    )
  }
}
