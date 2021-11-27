import React, { createContext, ReactElement, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'

import useWallet from '../wallet/walletHooks'
import client from '../apollo/apolloClient'
import { GET_USER_BY_ADDRESS } from '../apollo/gql/gqlUser'
import { IUserByAddress } from '../types/types_graphql'
import { LocalStorageTokenLabel, signMessage } from '../lib/helpers'
import config from '../../config'
import { getToken } from '../services/token'

interface IUserContext {
  state: {
    user?: IUserByAddress
  }
}

const Context = createContext<IUserContext>({ state: {} })
const { Provider } = Context

const UserProvider = (props: { children: ReactElement }) => {
  const [user, setUser] = useState<IUserByAddress | undefined>()

  useWallet()
  const context = useWeb3React()
  const { library, chainId, account, active } = context

  useEffect(() => {
    localStorage.removeItem(LocalStorageTokenLabel)
    if (active && account) {
      fetchUser().then(setUser)
    } else {
      user && setUser(undefined)
    }
  }, [active, account])

  useEffect(() => {
    if (user) {
      // setToken().then()
    }
  }, [user])

  const fetchUser = () => {
    return client
      .query({
        query: GET_USER_BY_ADDRESS,
        variables: {
          address: account?.toLowerCase()
        },
        fetchPolicy: 'network-only'
      })
      .then(res => res.data?.userByAddress)
      .catch(console.log)
  }

  const setToken = async () => {
    const signedMessage = await signMessage(
      config.OUR_SECRET,
      account,
      chainId,
      library.getSigner()
    )
    console.log('signedMessage', signedMessage)
    if (!signedMessage) return false
    const token = await getToken(account, signedMessage, chainId, user)
    console.log('token', token)
    localStorage.setItem(LocalStorageTokenLabel, token)
    return true
  }

  return (
    <Provider
      value={{
        state: {
          user
        }
        // actions: {
        // updateUser,
        // showSign,
        // signModalContent,
        // setToken
        // }
      }}
    >
      {props.children}
    </Provider>
  )
}

export { Context }
export default UserProvider
