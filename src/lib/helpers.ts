import { keccak256 } from '@ethersproject/keccak256'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { TorusConnector } from '@web3-react/torus-connector'

import Routes from './constants/Routes'
import { Cyan_500, Giv_500, Mustard_500 } from '../components/styled-components/Colors'
import config from '../../config'
import { EWallets } from '../wallet/walletTypes'

declare let window: any

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

export const networkIdToName = (
  networkId?: number
): { networkToken: string; networkName: string } => {
  let network = { networkName: '', networkToken: '' }
  switch (networkId) {
    case 1:
      network = { networkName: 'Mainnet', networkToken: 'ETH' }
      break
    case 3:
      network = { networkName: 'Ropsten', networkToken: 'ETH' }
      break
    case 4:
      network = { networkName: 'Rinkeby', networkToken: 'ETH' }
      break
    case 5:
      network = { networkName: 'Goerli', networkToken: 'ETH' }
      break
    case 42:
      network = { networkName: 'Kovan', networkToken: 'ETH' }
      break
    case 100:
      network = { networkName: 'xDAI', networkToken: 'xDAI' }
      break
  }

  return network
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
