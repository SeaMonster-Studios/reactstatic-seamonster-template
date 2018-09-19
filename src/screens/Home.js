// @flow
import * as React from "react"
import { css } from "react-emotion"
import { tRouteProps } from "../types"
import { Screen } from "../components/Screen"

type tHome = {}

export default class Home extends React.PureComponent<tHome> {
  render() {
    return (
      <Screen>
        {(routeProps: tRouteProps) => (
          <div className={css``}>This is the home screen</div>
        )}
      </Screen>
    )
  }
}
