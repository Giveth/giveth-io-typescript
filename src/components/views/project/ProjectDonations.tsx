import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

import { Subline, H2, H5, H6 } from '../../styled-components/Typography'
import { Shadow } from '../../styled-components/Shadow'
import { Gray_200, Gray_300, Gray_500, Primary_Deep_800 } from '../../styled-components/Colors'
import { IProject } from '../../../apollo/types/types'
import { IDonationsByProjectId } from '../../../apollo/types/gqlTypes'
import WalletIcon from '../../../../public/images/wallet_donate_tab.svg'
import SearchBox from '../../SearchBox'

const ProjectDonations = (props: {
  donationsByProjectId: IDonationsByProjectId
  project: IProject
}) => {
  console.log(props)
  const { donationsByProjectId, project } = props
  const { totalDonations, walletAddress } = project
  const { donations, totalCount } = donationsByProjectId
  return (
    <Wrapper>
      <TotalContainer>
        <TotalUpper>
          <div>
            <Subline>All time funding received</Subline>
            <H2>{'$' + totalDonations}</H2>
          </div>
          <div>
            <Subline>Funding from Traces</Subline>
            <TotalFromTraces>$50.32</TotalFromTraces>
          </div>
        </TotalUpper>
        <TotalBottom>
          <Image src={WalletIcon} alt='wallet icon' />
          <Subline>{walletAddress}</Subline>
        </TotalBottom>
      </TotalContainer>
      <DonationContainer>
        <H6>Donations</H6>
        <H6>Traces</H6>
        {/*TODO implement search func*/}
        <SearchBox onChange={console.log} />
      </DonationContainer>
    </Wrapper>
  )
}

const DonationContainer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 16px;

  > h6:nth-of-type(2) {
    font-weight: 400;
    border-left: 2px solid ${Gray_300};
    padding-left: 16px;
  }
`

const TotalBottom = styled.div`
  background: ${Gray_200};
  padding: 9.5px 22px;
  display: flex;
  gap: 8px;
  color: ${Gray_500};
`

const TotalFromTraces = styled(H5)`
  margin-top: 12px;
  font-weight: 400;
`

const TotalUpper = styled.div`
  padding: 24px 21px 16px 21px;
  color: ${Primary_Deep_800};
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 150px;
`

const TotalContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: ${Shadow.Neutral[400]};
  overflow: hidden;
`

const Wrapper = styled.div``

export default ProjectDonations
