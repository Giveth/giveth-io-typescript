import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useWeb3React } from '@web3-react/core'

import { Button } from '../styled-components/Button'
import { FlexCenter } from '../styled-components/Grid'
import { Shadow } from '../styled-components/Shadow'
import { mediaQueries } from '../../lib/helpers'
import Routes from '../../lib/constants/Routes'
import MenuRoutesResponsive from './MenuRoutesResponsive'
import MenuRoutesDesktop from './MenuRoutesDesktop'
import MenuWallet from './MenuWallet'
import Logo from '../../../public/images/giveth-logo-blue.svg'
import MenuGivItem from './MenuGivItem'
import WalletModal from '../../wallet/WalletModal'

const MenuIndex = () => {
  const context = useWeb3React()
  const { active } = context
  const [showModal, setShowModal] = useState(false)

  return (
    <Wrapper>
      {showModal && <WalletModal showModal={showModal} closeModal={() => setShowModal(false)} />}

      <LeftMenus>
        <Link href={Routes.Home}>
          <a>
            <LogoBackground>
              <Image src={Logo} alt='Logo' />
            </LogoBackground>
          </a>
        </Link>
        <MenuRoutesResponsive />
      </LeftMenus>

      <MenuRoutesDesktop />

      <RightMenus>
        <Link href={Routes.CreateProject} passHref>
          <LinkStyled>
            <Button small>CREATE A PROJECT</Button>
          </LinkStyled>
        </Link>
        <MenuGivItem />
        {active ? (
          <MenuWallet />
        ) : (
          <Button onClick={() => setShowModal(true)} small>
            SIGN IN
          </Button>
        )}
      </RightMenus>
    </Wrapper>
  )
}

const RightMenus = styled.div`
  display: flex;
  gap: 8px;
  button {
    box-shadow: ${Shadow.Dark[500]};
  }
`

const LinkStyled = styled.a`
  display: none;
  ${mediaQueries.md} {
    display: unset;
  }
`

const LeftMenus = styled(FlexCenter)`
  gap: 12px;
`

const Wrapper = styled.div`
  position: fixed;
  top: 2px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  padding: 10px;

  ${mediaQueries.md} {
    padding: 28px 32px;
  }
`

const LogoBackground = styled(FlexCenter)`
  box-shadow: ${Shadow.Dark[500]};
  background: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: none;

  img {
    width: 40px !important;
    height: 40px !important;
  }

  ${mediaQueries.sm} {
    display: flex;
  }
  ${mediaQueries.md} {
    width: 66px;
    height: 66px;
    img {
      width: 50px !important;
      height: 50px !important;
    }
  }
`

export default MenuIndex
