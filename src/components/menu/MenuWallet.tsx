import React, { useContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useWeb3React } from '@web3-react/core'
import { formatEther } from '@ethersproject/units'
import { BigNumberish } from '@ethersproject/bignumber'

import defaultUserProfile from '../../../public/images/defaultUserProfile.png'
import { Body_P, Caption, Overline_Small, Subline } from '../styled-components/Typography'
import { Giv_800, Gray_800, Pinky_500, Primary_Deep_800 } from '../styled-components/Colors'
import { checkWalletName, networkIdToName, shortenAddress, switchNetwork } from '../../lib/helpers'
import { Shadow } from '../styled-components/Shadow'
import { FlexCenter } from '../styled-components/Grid'
import { Context as UserContext } from '../../contextProviders/UserProvider'
import WalletModal from '../../wallet/WalletModal'
import { EWallets } from '../../wallet/walletTypes'

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
          const roundedBalance = _balance && parseFloat(formatEther(_balance)).toFixed(3)
          roundedBalance && setBalance(roundedBalance)
        })
        .catch(() => setBalance(null))
    }
  }, [account, library, chainId])

  const networkName = networkIdToName(chainId)
  const isMetaMask = checkWalletName(context) === EWallets.METAMASK

  return (
    <>
      {showModal && <WalletModal showModal={showModal} closeModal={() => setShowModal(false)} />}
      <WalletClosed isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <UserAvatar src={defaultUserProfile} />
        <div className='pl-2 pr-4'>
          <Caption color={Primary_Deep_800}>{user?.name || shortenAddress(account)}</Caption>
          <Overline_Small color={Giv_800}>Connected to {networkName}</Overline_Small>
        </div>
      </WalletClosed>

      {isOpen && (
        <WalletOpened>
          <Title>WALLET</Title>
          <Subtitle>
            <LeftSection>
              {balance}
              <span>{' xDai'}</span>
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
        </WalletOpened>
      )}
    </>
  )
}

const UserAvatar = styled(Image)`
  border-radius: 50%;
  width: 24px;
  height: 24px;
`

const WalletClosed = styled(FlexCenter)<{ isOpen: boolean }>`
  padding: 0 12.5px;
  cursor: pointer;
  border-radius: 72px;
  background: white;
  height: 48px;
  color: ${Primary_Deep_800};
  box-shadow: ${props => (props.isOpen ? 'none' : Shadow.Dark['500'])};
`

const WalletOpened = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: ${Shadow.Dark[500]};
  width: 250px;
  height: 453px;
  position: absolute;
  right: 32px;
  top: 55px;
  z-index: -1;
  padding: 40px 16px;
  color: ${Primary_Deep_800};
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
