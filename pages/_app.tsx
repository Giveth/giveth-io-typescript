import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/bootstrap.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
