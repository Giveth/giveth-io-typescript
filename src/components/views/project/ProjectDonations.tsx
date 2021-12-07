import React from 'react'
import styled from '@emotion/styled'

import { IProject } from '../../../apollo/types/types'
import { IDonationsByProjectId } from '../../../apollo/types/gqlTypes'
import ProjectTotalFundCard from './ProjectTotalFundCard'
import ProjectDonationTable from './ProjectDonationTable'

const ProjectDonations = (props: {
  donationsByProjectId: IDonationsByProjectId
  project: IProject
}) => {
  const { donationsByProjectId, project } = props
  const { totalDonations, walletAddress } = project
  return (
    <Wrapper>
      <ProjectTotalFundCard address={walletAddress} totalFund={totalDonations} />
      <ProjectDonationTable donations={donationsByProjectId} />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default ProjectDonations
