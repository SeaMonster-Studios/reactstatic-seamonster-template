import * as React from "react"
import { css } from "react-emotion"
import PropTypes from "prop-types"

export class Header extends React.PureComponent {
  static propTypes = {}
  render() {
    return <header className={css``}>This is a header</header>
  }
}
