import React, { useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Modal from 'react-modal'
import { useWeb3React } from '@web3-react/core'

import backIcon from '../../public/images/back.svg'
import walletIcon from '../../public/images/wallet.svg'
import closeIcon from '../../public/images/close.svg'

import {
  Giv_500,
  Primary_Deep_900,
  Semantic_Link_500
} from '../components/styled-components/Colors'
import { H6, Body_P, Overline_Small } from '../components/styled-components/Typography'
import ExternalLink from '../components/ExternalLink'
import InfoBadge from '../components/badges/InfoBadge'
import { Shadow } from '../components/styled-components/Shadow'
import { EWallets, TWalletConnector } from './walletTypes'
import { walletsArray } from './walletTypes'
import { checkWalletName } from '../lib/helpers'

const WalletModal = (props: { showModal?: boolean; closeModal: () => void }) => {
  const { showModal, closeModal } = props

  const context = useWeb3React()
  const { activate } = context
  const selectedWallet = checkWalletName(context)

  const [showInfo, setShowInfo] = useState(false)

  const InfoPage = () => {
    return (
      <>
        <Title>
          <Image className='pointer' onClick={() => setShowInfo(false)} src={backIcon} alt='back' />
          <H6>What is a wallet?</H6>
        </Title>
        <InfoBody>
          Wallets are used to send, receive, and store digital assets like Ether. Wallets come in
          many forms.
          <br />
          <br />
          They are either built into your browser, an extension added to your browser, a piece of
          hardware plugged into your computer or even an app on your phone.
          <br />
          <br />
          {/* TODO fix explanation url*/}
          For more information about wallets, see <ExternalLink href='/' text='this explanation' />
        </InfoBody>
      </>
    )
  }

  const WalletsPage = () => {
    return (
      <>
        <Title>
          <Image src={walletIcon} alt='wallet' />
          <H6>Select a Wallet</H6>
        </Title>
        <Body_P>Please select a wallet to connect to this DApp</Body_P>
        <IconsContainer>
          {walletsArray.map(i => (
            <WalletItem
              onClick={() => handleSelect(i)}
              key={i.value}
              className={selectedWallet === i.value ? 'active' : ''}
            >
              {selectedWallet === i.value && <Badge>SELECTED</Badge>}
              <Image src={i.image} alt={i.name} />
              <Body_P bold>{i.name}</Body_P>
            </WalletItem>
          ))}
        </IconsContainer>
        <InfoSection onClick={() => setShowInfo(true)}>
          What is a wallet
          <InfoBadge />
        </InfoSection>
      </>
    )
  }

  const handleSelect = (selected: { connector: TWalletConnector; value: EWallets }) => {
    if (selectedWallet !== selected.value) {
      activate(selected.connector).then()
    }
    closeModal()
  }

  if (!showModal) return null
  return (
    <Modal isOpen={showModal} onRequestClose={closeModal} style={customStyles}>
      <CloseButton onClick={closeModal}>
        <Image src={closeIcon} alt='close' />
      </CloseButton>
      {showInfo ? <InfoPage /> : <WalletsPage />}
    </Modal>
  )
}

const InfoBody = styled(Body_P)`
  margin-top: 50px;
`

const CloseButton = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
`

const InfoSection = styled(Body_P)`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${Semantic_Link_500};
  cursor: pointer;
`

const Badge = styled(Overline_Small)`
  position: absolute;
  top: -7px;
  padding: 0 3px;
  background: white;
  font-weight: 500;
  color: ${Giv_500};
`

const WalletItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px 56px 8px 8px;
  border-radius: 12px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    box-shadow: ${Shadow.Neutral[500]};
  }

  &.active {
    border-color: ${Giv_500};
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 18px;
`

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 80px;
  margin: 40px 10px 50px 10px;
`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    borderRadius: '8px',
    maxWidth: '600px',
    minWidth: '350px',
    boxShadow: '0 5px 16px rgba(0, 0, 0, 0.15)',
    color: Primary_Deep_900,
    padding: '27px'
  },
  overlay: {
    backgroundColor: 'rgb(9 4 70 / 70%)',
    zIndex: 1070
  }
}

export default WalletModal
