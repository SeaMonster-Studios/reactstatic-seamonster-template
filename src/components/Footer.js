// @flow
import React from "react"
import { tRouteProps } from "../types"
import { css } from "react-emotion"

type tFooter = {
  routeProps: tRouteProps,
}

export class Footer extends React.PureComponent<tFooter> {
  render() {
    return <footer className={css``}>This is a footer</footer>
  }
}
