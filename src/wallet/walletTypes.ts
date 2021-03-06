import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { PortisConnector } from '@web3-react/portis-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import { TorusConnector } from '@web3-react/torus-connector'
import { AuthereumConnector } from '@web3-react/authereum-connector'
import metamaskIcon from '../../public/images/wallets/metamask.svg'
import walletConnectIcon from '../../public/images/wallets/walletconnect.svg'
import portisIcon from '../../public/images/wallets/portis.svg'
import fortmaticIcon from '../../public/images/wallets/fortmatic.svg'
import torusIcon from '../../public/images/wallets/torus.svg'
import authereumIcon from '../../public/images/wallets/authereum.svg'

export const injectedConnector = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 100] })
export const walletconnectConnector = new WalletConnectConnector({
  rpc: { 1: 'https://main-light.eth.linkpool.io' },
  qrcode: true
})
export const portisConnector = new PortisConnector({
  dAppId: process.env.PORTIS_DAPP_ID as string,
  networks: [1, 3, 100]
})
export const fortmaticConnector = new FortmaticConnector({
  apiKey: process.env.FORTMATIC_API_KEY as string,
  chainId: 1
})
export const torusConnector = new TorusConnector({ chainId: 1 })
export const authereumConnector = new AuthereumConnector({ chainId: 42 })

export type TWalletConnector =
  | InjectedConnector
  | WalletConnectConnector
  | PortisConnector
  | FortmaticConnector
  | TorusConnector
  | AuthereumConnector

export enum EWallets {
  METAMASK = 'metamask',
  WALLETCONNECT = 'wallet connect',
  PORTIS = 'portis',
  FORTMATIC = 'fortmatic',
  TORUS = 'torus',
  AUTHEREUM = 'authereum'
}

export const walletsArray = [
  {
    name: 'MetaMask',
    value: EWallets.METAMASK,
    image: metamaskIcon,
    connector: injectedConnector
  },
  {
    name: 'WallectConnect',
    value: EWallets.WALLETCONNECT,
    image: walletConnectIcon,
    connector: walletconnectConnector
  },
  {
    name: 'Portis',
    value: EWallets.PORTIS,
    image: portisIcon,
    connector: portisConnector
  },
  {
    name: 'Fortmatic',
    value: EWallets.FORTMATIC,
    image: fortmaticIcon,
    connector: fortmaticConnector
  },
  {
    name: 'Torus',
    value: EWallets.TORUS,
    image: torusIcon,
    connector: torusConnector
  },
  {
    name: 'Authereum',
    value: EWallets.AUTHEREUM,
    image: authereumIcon,
    connector: authereumConnector
  }
]
