// @flow
import React from 'react'
import { RouteData } from 'react-static'
//
import { Header } from '../Header'
import { Footer } from '../Footer'

export function Screen(props: {
  children: any => any,
  css?: '', // Emotion css object
  className?: string,
}) {
  const { css, children, className, ...attrs } = props
  return (
    <RouteData>
      {routeProps => (
        <div
          className={`${css ? css : ''} ${className ? className : ''}`}
          {...attrs}
        >
          <Header {...routeProps} />
          <main>{children(routeProps)}</main>
          <Footer {...routeProps} />
        </div>
      )}
    </RouteData>
  )
}
