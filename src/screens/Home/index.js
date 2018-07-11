// @flow
import * as React from 'react'
//
import { Screen } from '../../shared/components/Screen'
import { Header } from '../../shared/components/Header'
import { Footer } from '../../shared/components/Footer'

function Home(props: any) {
  return <h1>Home Page</h1>
}

function RenderHome(props: any) {
  return (
    <Screen>
      {screenProps => (
        <React.Fragment>
          <Header />
          <main>
            <Home {...props} {...screenProps} />
          </main>
          <Footer />
        </React.Fragment>
      )}
    </Screen>
  )
}

export default RenderHome
