// @flow
import * as React from 'react'
import { hot } from 'react-hot-loader'
//
import { Screen } from '../shared/components/Screen'

function NotFound(props: any) {
  return <h1>404 Page</h1>
}

function RenderNotFound(props: any) {
  return (
    <Screen>{screenProps => <NotFound {...props} {...screenProps} />}</Screen>
  )
}

export default hot(module)(RenderNotFound)
