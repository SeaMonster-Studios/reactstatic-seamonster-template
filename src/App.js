import * as React from "react"
import { Router } from "react-static"
import Routes from "react-static-routes"
import "./styles"
import { ErrorBoundary } from "@bit/seamonster-studios.react.components.error-boundary"

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </Router>
    )
  }
}
