import React from "react"
import Head from "next/head"
import type { AppProps } from "next/app"
import config from "../static/config.json"
import "../styles/index.scss"
import { Provider } from "mobx-react"
import { authStore } from "../store"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider authStore={authStore}>
      <Head>
        <title>{config.headerData.title}</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
