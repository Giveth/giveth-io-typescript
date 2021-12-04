import React from 'react'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { Web3ReactProvider } from '@web3-react/core'
import { ExternalProvider, Web3Provider } from '@ethersproject/providers'
import { ApolloProvider } from '@apollo/client'

import { useApollo } from '../src/apollo/apolloClient'
import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import { Pinky_500 } from '../src/components/styled-components/Colors'
import UserProvider from '../src/contextProviders/UserProvider'

const getLibrary = (provider: ExternalProvider): Web3Provider => {
  return new Web3Provider(provider)
}

/*TODO all content with "Lorem ipsum" should be replaced*/

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps)

  return (
    <>
      <NextNProgress color={Pinky_500} />
      <Web3ReactProvider getLibrary={getLibrary}>
        <ApolloProvider client={apolloClient}>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </ApolloProvider>
      </Web3ReactProvider>
    </>
  )
}

export default MyApp
