import { TorusConnector } from '@web3-react/torus-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import torusIcon from '../../public/images/wallets/torus.svg'
import metamaskIcon from '../../public/images/wallets/metamask.svg'

export const injectedConnector = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 100] })
export const torusConnector = new TorusConnector({ chainId: 1 })

export type TWalletConnector = TorusConnector | InjectedConnector

export enum EWallets {
  METAMASK = 'metamask',
  TORUS = 'torus'
}

export const walletsArray = [
  {
    name: 'MetaMask',
    value: EWallets.METAMASK,
    image: metamaskIcon,
    connector: injectedConnector
  },
  {
    name: 'Torus',
    value: EWallets.TORUS,
    image: torusIcon,
    connector: torusConnector
  }
]
