import client from '../apollo/apolloClient'
import { LOGIN_USER } from '../apollo/gql/gqlAuth'

export async function getToken(
  walletAddress: string | null | undefined,
  signature: string,
  networkId: number | undefined
) {
  if (signature && walletAddress && networkId) {
    try {
      const { data } = await client.mutate({
        mutation: LOGIN_USER,
        variables: {
          walletAddress,
          signature,
          // walletAddress: Web3.utils.toChecksumAddress(walletAddress),
          // email: user.email,
          // avatar: user.avatar,
          // name: user.name,
          hostname: window?.location.hostname,
          networkId
        }
      })
      return data?.loginWallet?.token
    } catch (error) {
      console.log('Error in token login: ', error)
    }
  } else {
    console.log('Input data for getting token is incomplete')
  }
}
