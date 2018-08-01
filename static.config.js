import React, { Component } from 'react'
import dotenv from 'dotenv'
//
// import { getRoutesWithData } from './src/config/routes'

dotenv.config()

export default {
  plugins: ['react-static-plugin-emotion'],
  siteRoot: process.env.SITE_ROOT,
  getSiteData: async () => ({
    title: 'Site Title',
  }),
  getRoutes: async () => [
    // ...(await getRoutesWithData()),
    {
      path: '/',
      component: 'src/screens/Home',
    },
    {
      path: '404',
      component: 'src/screens/NotFound',
    },
  ],
  webpack: (config, { stage }) => {
    if (stage === 'prod') {
      config.entry = ['babel-polyfill', config.entry]
    } else if (stage === 'dev') {
      config.entry = ['babel-polyfill', ...config.entry]
    }
    config.module.rules.push({
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      },
    })
  },
  devServer: {
    proxy: {
      '/.netlify/functions': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/\\.netlify/functions': '' },
      },
    },
  },
  Document: class CustomHtml extends Component<{
    Html: any,
    Head: any,
    Body: any,
    children: any,
    renderMeta: any,
  }> {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <script
              src="https://cdn.ravenjs.com/3.22.3/raven.min.js"
              crossOrigin="anonymous"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
