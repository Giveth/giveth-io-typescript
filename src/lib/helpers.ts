import Routes from './constants/Routes'
import { Cyan_500, Giv_500, Mustard_500 } from '../components/styled-components/Colors'
import config from '../../config'

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
