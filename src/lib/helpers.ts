import { keccak256 } from '@ethersproject/keccak256'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { TorusConnector } from '@web3-react/torus-connector'

import Routes from './constants/Routes'
import { Cyan_500, Giv_500, Mustard_500 } from '../components/styled-components/Colors'
import config from '../../config'
import { EWallets } from '../wallet/walletTypes'
import { networkInfo } from './constants/NetworksObj'

declare let window: any

export const isSSRMode = typeof window === 'undefined'

export const slugToProjectView = (slug: string) => {
  return Routes.Project + '/' + slug
}

export const slugToProjectDonate = (slug: string) => {
  return Routes.Donate + '/' + slug
}

export const htmlToText = (text?: string) => {
  if (!text) return
  return text
    .replace(/<\/(?:.|\n)*?>/gm, ' ') // replace closing tags w/ a space
    .replace(/<(?:.|\n)*?>/gm, '') // strip opening tags
    .trim()
}

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const noImgColors = [Cyan_500, Mustard_500, Giv_500]
export const noImgColor = () => noImgColors[Math.floor(Math.random() * 3)]

export const noImgIcon = config.LINKS.FRONTEND + '/images/GIV-icon-text.svg'

export const isNoImg = (image: string | undefined) => !(image && !Number(image))

export const mediaQueries = {
  sm: '@media (min-width: 500px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 992px)',
  xl: '@media (min-width: 1200px)'
}

export const shortenAddress = (address: string | null | undefined, charsLength = 4) => {
  const prefixLength = 2 // "0x"
  if (!address) {
    return ''
  }
  if (address.length < charsLength * 2 + prefixLength) {
    return address
  }
  return `${address.slice(0, charsLength + prefixLength)}…${address.slice(-charsLength)}`
}

export const formatDate = (date: string) => {
  const nDate = new Date(date)
  const year = nDate.getFullYear()
  const month = nDate.toLocaleString('default', { month: 'short' })
  const day = nDate.getDay()
  return month + ' ' + day + ', ' + year
}

export function formatTxLink(chainId: number | undefined, hash: string | undefined) {
  return `${networkInfo(chainId).networkPrefix}tx/${hash}`
}

export const checkWalletName = (Web3ReactContext: Web3ReactContextInterface) => {
  const { library, connector } = Web3ReactContext
  if (connector instanceof TorusConnector) return EWallets.TORUS
  return library?.connection?.url
}

export const switchNetwork = (currentNetworkId?: number) => {
  let chainId = config.PRIMARY_NETWORK.chain
  const defaultNetworkId = config.PRIMARY_NETWORK.id
  if (currentNetworkId === defaultNetworkId) {
    chainId = config.SECONDARY_NETWORK.chain
  }

  window?.ethereum
    .request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId }]
    })
    .then()
}

export async function signMessage(
  message: string,
  address: string | undefined | null,
  chainId?: number,
  signer?: any
) {
  try {
    const customPrefix = `\u0019${window.location.hostname} Signed Message:\n`
    const prefixWithLength = Buffer.from(`${customPrefix}${message.length.toString()}`, 'utf-8')
    const finalMessage = Buffer.concat([prefixWithLength, Buffer.from(message)])

    const hashedMsg = keccak256(finalMessage)

    // console.log(hashedMsg)

    const domain = {
      name: 'Giveth Login',
      chainId,
      version: '1'
    }
    const value = {
      contents: hashedMsg,
      user: {
        wallets: [address]
      }
    }
    const types = {
      EIP712Domain: [
        { name: 'name', type: 'string' },
        { name: 'chainId', type: 'uint256' },
        { name: 'version', type: 'string' }
        // { name: 'verifyingContract', type: 'address' }
      ],
      Login: [{ name: 'user', type: 'User' }],
      User: [{ name: 'wallets', type: 'address[]' }]
    }

    return await signer._signTypedData(domain, types, value)
  } catch (error) {
    console.log('Signing Error!', { error })
    return false
  }
}

export const LocalStorageTokenLabel = 'userToken'
