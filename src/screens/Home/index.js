// @flow
import * as React from 'react'
//
import { Screen } from '../shared/components/Screen'
import { tRouteProps } from '../shared/types'

type tHome = any

function Home(props: tHome & tRouteProps) {
  return <h1>Home Page</h1>
}

function RenderHome(props: tHome) {
  return <Screen>{routeProps => <Home {...props} {...routeProps} />}</Screen>
}

export default RenderHome
