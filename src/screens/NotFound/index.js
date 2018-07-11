// @flow
import * as React from 'react'
//
import { Screen } from '../shared/components/Screen'
import { Header } from '../shared/components/Header'
import { Footer } from '../shared/components/Footer'

function NotFound(props: any) {
  return <h1>404 Page</h1>
}

function RenderNotFound(props: any) {
  return (
    <Screen>
      {screenProps => (
        <React.Fragment>
          <Header />
          <main>
            <NotFound {...props} {...screenProps} />
          </main>
          <Footer />
        </React.Fragment>
      )}
    </Screen>
  )
}

export default RenderNotFound
