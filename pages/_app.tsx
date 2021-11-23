import React from 'react'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import { Pinky_500 } from '../src/components/styled-components/Colors'

/*TODO all content with "Lorem ipsum" should be replaced*/

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color={Pinky_500} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
