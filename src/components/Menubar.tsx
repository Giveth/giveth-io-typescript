import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from '@emotion/styled'
import Logo from '../../public/images/giveth-logo-blue.svg'
import { Button } from './styled-components/Button'
import { Giv_100, Primary_Deep_200, Primary_Deep_800 } from './styled-components/Colors'
import { FlexCenter } from './styled-components/Grid'
import Routes from '../lib/constants/Routes'
import defaultUserProfile from '../../public/images/defaultUserProfile.png'

const Menubar = () => {
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

  return (
    <Wrapper>
      <LogoBackground className='shadow_dark_500' onClick={() => router.push('/')}>
        <Image width={50} height={50} src={Logo} alt='Logo' />
      </LogoBackground>
      <MainRoutes className='shadow_dark_500'>
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
      <Button className='shadow_dark_500' small onClick={() => router.push(Routes.CreateProject)}>
        CREATE A PROJECT
      </Button>
      <WalletDetails className='flex-center shadow_dark_500'>
        <UserAvatar src={defaultUserProfile} width='24px' height='24px' />
        <div className='pl-2 pr-4'>
          <UserAddress>0xF278...42cc</UserAddress>
          <UserNetwork>Connected to xDai</UserNetwork>
        </div>
      </WalletDetails>
    </Wrapper>
  )
}

const MenuItem = styled.div`
  border-radius: 72px;
  background: white;
  height: 48px;
  color: ${Primary_Deep_800};
`

const UserAvatar = styled(Image)`
  border-radius: 50%;
`

const UserAddress = styled.div`
  font-size: 14px;
  line-height: 22px;
`

const UserNetwork = styled.div`
  color: ${Primary_Deep_200};
  font-size: 10px;
`

const WalletDetails = styled(MenuItem)`
  padding: 0 12.5px;
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
  display: flex;
  align-items: center;
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
  padding: 32px;
  z-index: 1000;
`

const LogoBackground = styled(FlexCenter)`
  background: white;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  cursor: pointer;
`

export default Menubar
