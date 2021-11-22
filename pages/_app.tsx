import React from 'react'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { Web3ReactProvider } from '@web3-react/core'
import { ExternalProvider, Web3Provider } from '@ethersproject/providers'

import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import { Pinky_500 } from '../src/components/styled-components/Colors'
import UserProvider from '../src/contextProviders/UserProvider'

const getLibrary = (provider: ExternalProvider): Web3Provider => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNProgress color={Pinky_500} />
      <Web3ReactProvider getLibrary={getLibrary}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </Web3ReactProvider>
    </>
  )
}

export default MyApp
