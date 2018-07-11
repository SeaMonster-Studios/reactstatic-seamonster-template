// @flow
import React from 'react'
import { RouteData } from 'react-static'
import { css } from 'emotion'
//
import { Header } from '../Header'
import { Footer } from '../Footer'

export function Screen(props: { children: any => any }) {
  const { children, ...attrs } = props
  return (
    <RouteData>
      {routeProps => (
        <div
          className={css({
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          })}
          {...attrs}
        >
          <Header routeProps={routeProps} />
          <main className={css({ flexGrow: 2 })}>{children(routeProps)}</main>
          <Footer routeProps={routeProps} />
        </div>
      )}
    </RouteData>
  )
}
