// @flow
import * as React from 'react'
import { hot } from 'react-hot-loader'
//
import { Screen } from '../shared/components/Screen'

function Home(props: any) {
  return <h1>Home Page</h1>
}

function RenderHome(props: any) {
  return <Screen>{screenProps => <Home {...props} {...screenProps} />}</Screen>
}

export default hot(module)(RenderHome)
