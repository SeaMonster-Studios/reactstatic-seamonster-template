// @flow
import * as React from 'react'
//
import { Screen } from '../shared/components/Screen'
import { className } from './style'
import { tRouteProps } from '../shared/types'

type tNotFound = any

function NotFound(props: tRouteProps & tNotFound) {
  return (
    <div>
      <div className="container">
        <h1>404</h1>
        <h2 className="h3">This is not the page you&rsquo;re looking for.</h2>
      </div>
    </div>
  )
}

function RenderNotFound(props: tNotFound) {
  return (
    <Screen css={className}>
      {routeProps => <NotFound {...props} {...routeProps} />}
    </Screen>
  )
}

export default RenderNotFound
