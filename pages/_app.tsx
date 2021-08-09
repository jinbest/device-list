import React from "react"
import Head from "next/head"
import type { AppProps } from "next/app"
import config from "../static/config.json"
import "../styles/index.scss"
import { Provider } from "mobx-react"
import { authStore, shopStore } from "../store"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider authStore={authStore} shopStore={shopStore}>
      <Head>
        <title>{config.headerData.title}</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

MyApp.getInitialProps = ({ ctx }: Record<string, any>) => {
  if (ctx && ctx.res && ctx.res.statusCode === 404) {
    ctx.res.writeHead(302, {
      Location: "/",
      "Content-Type": "text/html; charset=utf-8",
    })
    ctx.res.end()
  }
  return {
    notFound: true,
  }
}

export default MyApp
