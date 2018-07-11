// @flow
import React from 'react'
import { RouteData } from 'react-static'
//

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
          {children(routeProps)}
        </div>
      )}
    </RouteData>
  )
}
