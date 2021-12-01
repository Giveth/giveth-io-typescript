import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import config from '../../config'

const ssrMode = typeof window === 'undefined'

const httpLink = createHttpLink({
  uri: config.LINKS.BACKEND
})

const client = new ApolloClient({
  ssrMode,
  cache: new InMemoryCache(),
  link: httpLink,
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    },
    query: {
      fetchPolicy: 'network-only'
    }
  }
})

export default client
