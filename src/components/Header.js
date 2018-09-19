// @flow
import * as React from 'react'
import { tRouteProps } from "../types"
import {css} from 'react-emotion'

type tHeader = {
  routeProps: tRouteProps,
}

export class Header extends React.PureComponent<tHeader> {
  render() {
    return (
      <header className={css``}>
        This is a header
      </header>
    );
  }
}
