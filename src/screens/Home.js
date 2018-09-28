import * as React from "react"
import { css } from "react-emotion"
import { Screen } from "../components/Screen"
import PropTypes from "prop-types"

export default class Home extends React.PureComponent {
  static propTypes = {}
  render() {
    return (
      <Screen>
        {(routeProps) => <div className={css``}>This is the home screen</div>}
      </Screen>
    )
  }
}
