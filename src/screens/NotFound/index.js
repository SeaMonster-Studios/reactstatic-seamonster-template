// @flow
import * as React from 'react'
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

export default RenderNotFound
