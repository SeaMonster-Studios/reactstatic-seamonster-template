import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import * as Sentry from '@sentry/browser'

// Your top level component
import App from "./App"

if (
  typeof document !== "undefined" &&
  typeof window !== "undefined" &&
  window.location.hostname !== "localhost"
) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: "production",
    ignoreUrls: [/.*localhost.* /],
  })
}

// Export your top level component (for static rendering)
export default App

// Render your app
if (typeof document !== "undefined") {
  const render = (Comp) => {
    ReactDOM.hydrate(
      <AppContainer>
        <Comp />
      </AppContainer>,
      document.getElementById("root"),
    )
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept("./App", () => {
      render(require("./App").default)
    })
  }
}
