import React from 'react'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../src/apollo/apolloClient'
import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import { Pinky_500 } from '../src/components/styled-components/Colors'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <NextNProgress color={Pinky_500} />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp
