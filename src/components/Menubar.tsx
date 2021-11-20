import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useWeb3React } from '@web3-react/core'

import { Button } from './styled-components/Button'
import { Giv_100, Giv_800, Primary_Deep_800 } from './styled-components/Colors'
import { Caption, Overline_Small } from './styled-components/Typography'
import { FlexCenter } from './styled-components/Grid'
import { Shadow } from './styled-components/Shadow'
import Routes from '../lib/constants/Routes'
import { networkIdToName, shortenAddress } from '../lib/helpers'
import useWallet from '../wallet/walletHooks'
import WalletModal from '../wallet/WalletModal'
import { injected } from '../wallet/walletConnectors'
import defaultUserProfile from '../../public/images/defaultUserProfile.png'
import Logo from '../../public/images/giveth-logo-blue.svg'

const Menubar = () => {
  const [showModal, setShowModal] = useState(false)

  const router = useRouter()

  let activeTab = ''
  switch (router.pathname) {
    case '/':
      activeTab = 'home'
      break
    case Routes.Projects:
      activeTab = 'projects'
      break
    case Routes.Join:
      activeTab = 'join'
      break
  }

  useWallet()
  const context = useWeb3React()
  const { connector, library, chainId, account, activate, deactivate, active, error } = context

  console.log({ connector, library, chainId, account, activate, deactivate, active, error })

  return (
    <Wrapper>
      {showModal && <WalletModal showModal={showModal} closeModal={() => setShowModal(false)} />}

      <LogoBackground onClick={() => router.push('/')}>
        <Image width={50} height={50} src={Logo} alt='Logo' />
      </LogoBackground>

      <MainRoutes>
        <Link href='/' passHref>
          <RoutesItem className={activeTab === 'home' ? 'active' : ''}>Home</RoutesItem>
        </Link>
        <Link href={Routes.Projects} passHref>
          <RoutesItem className={activeTab === 'projects' ? 'active' : ''}>Projects</RoutesItem>
        </Link>
        <Link href='/' passHref>
          <RoutesItem>GIVeconomy</RoutesItem>
        </Link>
        <Link href={Routes.Join} passHref>
          <RoutesItem className={activeTab === 'join' ? 'active' : ''}>Join</RoutesItem>
        </Link>
      </MainRoutes>

      <Button small onClick={() => router.push(Routes.CreateProject)}>
        CREATE A PROJECT
      </Button>

      {active ? (
        <WalletDetails onClick={() => setShowModal(true)}>
          <UserAvatar src={defaultUserProfile} width='24px' height='24px' />
          <div className='pl-2 pr-4'>
            <Caption color={Primary_Deep_800}>{shortenAddress(account)}</Caption>
            <Overline_Small color={Giv_800}>Connected to {networkIdToName(chainId)}</Overline_Small>
          </div>
        </WalletDetails>
      ) : (
        <Button small onClick={() => activate(injected)}>
          CONNECT WALLET
        </Button>
      )}
    </Wrapper>
  )
}

const MenuItem = styled(FlexCenter)`
  border-radius: 72px;
  background: white;
  height: 48px;
  color: ${Primary_Deep_800};
`

const UserAvatar = styled(Image)`
  border-radius: 50%;
`

const WalletDetails = styled(MenuItem)`
  padding: 0 12.5px;
  cursor: pointer;
`

const RoutesItem = styled.a`
  padding: 7px 15px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 72px;

  &.active {
    background: ${Giv_100};
  }
`

const MainRoutes = styled(MenuItem)`
  padding: 0 10px;
  width: 408px;
  justify-content: space-between;
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 32px;
  z-index: 1000;

  > * {
    box-shadow: ${Shadow.Dark[500]};
  }
`

const LogoBackground = styled(FlexCenter)`
  background: white;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  cursor: pointer;
`

export default Menubar
