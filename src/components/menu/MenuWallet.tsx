import React, { useContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { useWeb3React } from '@web3-react/core'
import { formatEther } from '@ethersproject/units'
import { BigNumberish } from '@ethersproject/bignumber'

import defaultUserProfile from '../../../public/images/default_user_profile.png'
import { Body_P, Link_Medium, Overline_Small, Subline } from '../styled-components/Typography'
import {
  Giv_800,
  Gray_200,
  Gray_300,
  Gray_800,
  Pinky_500,
  Primary_Deep_800
} from '../styled-components/Colors'
import { Shadow } from '../styled-components/Shadow'
import { FlexCenter } from '../styled-components/Grid'
import { Context as UserContext } from '../../contextProviders/UserProvider'
import WalletModal from '../../wallet/WalletModal'
import { EWallets } from '../../wallet/walletTypes'
import Routes from '../../lib/constants/Routes'
import { checkWalletName, mediaQueries, shortenAddress, switchNetwork } from '../../lib/helpers'
import config from '../../../config'
import { networkInfo } from '../../lib/constants/NetworksObj'

const MenuWallet = () => {
  const [showModal, setShowModal] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [balance, setBalance] = useState<string | null>(null)

  const {
    state: { user }
  } = useContext(UserContext)

  const context = useWeb3React()
  const { chainId, account, library } = context

  useEffect(() => {
    if (!!account && !!library) {
      library
        .getBalance(account)
        .then((_balance: BigNumberish) => {
          setBalance(parseFloat(formatEther(_balance)).toFixed(3))
        })
        .catch(() => setBalance(null))
    }
  }, [account, library, chainId])

  const { networkName, networkToken } = networkInfo(chainId)
  const isMetaMask = checkWalletName(context) === EWallets.METAMASK

  return (
    <Wrapper onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      {showModal && <WalletModal showModal={showModal} closeModal={() => setShowModal(false)} />}
      <WalletClosed isOpen={isOpen}>
        <UserAvatar src={defaultUserProfile} />
        <UserDetails>
          <Link_Medium color={Primary_Deep_800}>
            {user?.name || shortenAddress(account)}
          </Link_Medium>
          <Overline_Small color={Giv_800}>Connected to {networkName}</Overline_Small>
        </UserDetails>
      </WalletClosed>

      <WalletOpened isOpen={isOpen}>
        <Title>WALLET</Title>
        <Subtitle>
          <LeftSection>
            {balance + ' '}
            <span>{networkToken}</span>
          </LeftSection>
          <StyledButton onClick={() => setShowModal(true)}>Change wallet</StyledButton>
        </Subtitle>
        <Title>NETWORK</Title>
        <Subtitle>
          <LeftSection>{networkName}</LeftSection>
          {isMetaMask && (
            <StyledButton onClick={() => switchNetwork(chainId)}>Switch network</StyledButton>
          )}
        </Subtitle>
        <Menus>
          {walletMenuArray.map(i => (
            <Link href={i.url} key={i.title} passHref>
              <MenuItem>{i.title}</MenuItem>
            </Link>
          ))}
          <MenuItem>Sign out</MenuItem>
        </Menus>
      </WalletOpened>
    </Wrapper>
  )
}

const walletMenuArray = [
  { title: 'My Account', url: Routes.MyAccount },
  { title: 'My Projects', url: Routes.MyProjects },
  { title: 'My Donations', url: Routes.MyDonations },
  { title: 'Create a Project', url: Routes.CreateProject },
  { title: 'Report a bug', url: config.LINKS.REPORT_ISSUE },
  { title: 'Support', url: Routes.Support }
]

const Wrapper = styled.div`
  position: relative;
  z-index: 1000;
  color: ${Primary_Deep_800};
`

const MenuItem = styled.a`
  height: 45px;
  line-height: 45px;
  border-top: 2px solid ${Gray_300};
  color: ${Primary_Deep_800};
  padding: 0 16px;
  font-size: 14px;
  cursor: pointer;

  :hover {
    background: ${Gray_200};
    color: ${Pinky_500} !important;
  }
`

const Menus = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  padding: 0 !important;
  border-bottom: 2px solid ${Gray_300};
`

const UserAvatar = styled(Image)`
  border-radius: 50%;
  width: 24px;
  height: 24px;
`

const UserDetails = styled.div`
  display: none;

  ${mediaQueries.sm} {
    display: unset;
    padding-left: 8px;
    padding-right: 13px;
  }
`

const WalletClosed = styled(FlexCenter)<{ isOpen: boolean }>`
  position: relative;
  z-index: 1080;
  border-radius: 72px;
  background: white;
  height: 48px;
  box-shadow: ${props => (props.isOpen ? 'none' : Shadow.Dark['500'])};
  padding: 0 12.5px;
  cursor: pointer;
`

const WalletOpened = styled.div<{ isOpen: boolean }>`
  background: white;
  border-radius: 12px;
  box-shadow: ${Shadow.Dark[500]};
  width: 250px;
  position: absolute;
  right: 0;
  top: 22px;
  z-index: 1070;
  padding: 40px 0 5px 0;
  color: ${Primary_Deep_800};
  max-height: ${props => (props.isOpen ? '600px' : '0px')};
  transition: max-height 0.25s ease-in, opacity 0.25s ease-in;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpen ? 1 : 0)};

  > * {
    opacity: ${props => (props.isOpen ? 1 : 0)};
    transition: opacity 0.25s ease-in;
    transition-delay: 0.25s;
    padding: 0 16px;
  }
`

const StyledButton = styled(Subline)`
  color: ${Pinky_500};
  cursor: pointer;
`

const LeftSection = styled(Body_P)`
  font-weight: 500;

  > span {
    font-size: 14px;
    font-weight: 400;
  }
`

const Subtitle = styled(Overline_Small)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
`

const Title = styled(Overline_Small)`
  color: ${Gray_800};
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 2px;
`

export default MenuWallet
