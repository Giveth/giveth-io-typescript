import gql from 'graphql-tag'

export const gqlEnums = {
  QUALITYSCORE: 'QualityScore',
  CREATIONDATE: 'CreationDate',
  BALANCE: 'Balance',
  VERIFIED: 'Verified',
  HEARTS: 'Reactions',
  DONATIONS: 'Donations',
  RECENTLYADDED: 'RecentlyAdded',
  OLD: 'OldProjects',
  DESC: 'DESC',
  ASC: 'ASC',
}

export const FETCH_LISTED_TOKENS = gql`
  query FetchListedTokens {
    tokens {
      name
      symbol
      chainId
    }
  }
`
