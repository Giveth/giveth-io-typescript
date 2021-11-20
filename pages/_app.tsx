import React from 'react'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import { Pinky_500 } from '../src/components/styled-components/Colors'

const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color={Pinky_500} />
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </>
  )
}

export default MyApp
