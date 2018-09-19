// @flow
import * as React from "react"
import { Screen } from "../components/Screen"
import { css } from "react-emotion"

class NotFound extends React.PureComponent<{}> {
  render() {
    return (
      <Screen
        css={css`
          background-color: black;

          main {
            padding: 20% 0;
            text-align: center;
          }

          h1 {
            color: white;
            text-decoration: underline;
          }
        `}
      >
        {() => (
          <div>
            <div className="container">
              <h1>404</h1>
              <h2 className="h3">
                This is not the page you&rsquo;re looking for.
              </h2>
            </div>
          </div>
        )}
      </Screen>
    )
  }
}

export default NotFound
