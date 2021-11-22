import Routes from './constants/Routes'
import { Cyan_500, Giv_500, Mustard_500 } from '../components/styled-components/Colors'
import config from '../../config'
import { Web3Provider } from '@ethersproject/providers'
import { keccak256 } from '@ethersproject/keccak256'

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

export const noImgIcon = config.APP_URL + '/images/GIV-icon-text.svg'

export const isNoImg = (image: string | undefined) => !(image && !Number(image))

const breakpoints: { [index: string]: number } = {
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1200
}
export const mq = Object.keys(breakpoints)
  .map(key => [key, breakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint}px)`
    return prev
  }, {} as { [index: string]: string })

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

export const networkIdToName = (networkId?: number) => {
  let networkName
  switch (networkId) {
    case 1:
      networkName = 'Mainnet'
      break
    case 3:
      networkName = 'Ropsten'
      break
    case 4:
      networkName = 'Rinkeby'
      break
    case 5:
      networkName = 'Goerli'
      break
    case 42:
      networkName = 'Kovan'
      break
    case 100:
      networkName = 'xDai'
      break
  }

  return networkName
}

export async function signMessage(
  message: string,
  address: string | undefined | null,
  chainId?: number,
  web3?: Web3Provider
) {
  try {
    const customPrefix = `\u0019${window.location.hostname} Signed Message:\n`
    const prefixWithLength = Buffer.from(`${customPrefix}${message.length.toString()}`, 'utf-8')
    const finalMessage = Buffer.concat([prefixWithLength, Buffer.from(message)])

    const hashedMsg = keccak256(finalMessage)
    // const provider = web3?.provider.JsonRpcProvider()
    const msgParams = JSON.stringify({
      primaryType: 'Login',
      types: {
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'version', type: 'string' }
        ],
        Login: [{ name: 'user', type: 'User' }],
        User: [{ name: 'wallets', type: 'address[]' }]
      },
      domain: {
        name: 'Giveth Login',
        chainId,
        version: '1'
      },
      message: {
        contents: hashedMsg,
        user: {
          wallets: [address]
        }
      }
    })
    // const { result } = await send({
    //   method: 'eth_signTypedData_v4',
    //   params: [address, msgParams],
    //   from: address
    // })
    //
    // return result
  } catch (error) {
    console.log('Signing Error!', { error })
    return false
  }
}

export const LocalStorageTokenLabel = 'userToken'
