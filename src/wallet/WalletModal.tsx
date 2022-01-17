import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Modal from 'react-modal'
import { useWeb3React } from '@web3-react/core'

import closeIcon from '../../public/images/close.svg'

import {
  Giv_500,
  Gray_200,
  Gray_600,
  Primary_Deep_900
} from '../components/styled-components/Colors'
import { FlexCenter } from '../components/styled-components/Grid'
import { Lead, H5, Overline_Small } from '../components/styled-components/Typography'
import { EWallets, TWalletConnector } from './walletTypes'
import { walletsArray } from './walletTypes'
import { checkWalletName, mediaQueries } from '../lib/helpers'

interface IWalletModal {
  showModal?: boolean
  closeModal: () => void
  closeParentModal?: () => void
}

const WalletModal = ({ showModal, closeModal, closeParentModal }: IWalletModal) => {
  const context = useWeb3React()
  const { activate } = context
  const selectedWallet = checkWalletName(context)

  const handleSelect = (selected: { connector: TWalletConnector; value: EWallets }) => {
    if (selectedWallet !== selected.value) {
      activate(selected.connector)
        .then(() => (closeParentModal ? closeParentModal() : undefined))
        .catch(e => {
          // toast to inform error
          console.log(e)
        })
    }
    closeModal()
  }

  if (!showModal) return null

  Modal.setAppElement('body')

  return (
    <Modal isOpen={showModal} onRequestClose={closeModal} style={customStyles}>
      <CloseButton onClick={closeModal}>
        <Image src={closeIcon} alt='close' />
      </CloseButton>
      <IconsContainer>
        {walletsArray.map(i => (
          <WalletItem
            onClick={() => handleSelect(i)}
            key={i.value}
            className={selectedWallet === i.value ? 'active' : ''}
          >
            {selectedWallet === i.value && <Badge>SELECTED</Badge>}
            <Image src={i.image} alt={i.name} height={64} width={64} />
            <H5>{i.name}</H5>
            <Lead color={Gray_600}>Connect with your {i.name}</Lead>
          </WalletItem>
        ))}
      </IconsContainer>
    </Modal>
  )
}

const CloseButton = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
`

const IconsContainer = styled.div`
  display: grid;
  grid-gap: 1px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${Gray_600};
  max-height: 420px;

  ${mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    max-height: none;
  }
`

const WalletItem = styled(FlexCenter)`
  background-color: white;
  flex-direction: column;
  gap: 2px;
  min-width: 355px;
  min-height: 190px;
  padding: 20px 40px;
  cursor: pointer;

  &:hover {
    background: radial-gradient(#fff, ${Gray_200});
  }

  &.active {
    border-color: ${Giv_500};
  }
`

const Badge = styled(Overline_Small)`
  position: relative;
  height: 0px;
  top: 15px;
  transform: rotate(-45deg);
  left: -120px;
  background: white;
  font-weight: 700;
  color: ${Giv_500};
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
    minWidth: '330px',
    boxShadow: '0 5px 16px rgba(0, 0, 0, 0.15)',
    color: Primary_Deep_900,
    padding: '0px'
  },
  overlay: {
    backgroundColor: 'rgb(9 4 70 / 70%)',
    zIndex: 1070
  }
}

export default WalletModal
