import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import client from '../../../apollo/apolloClient'
import { FETCH_PROJECT_UPDATES } from '../../../apollo/gql/gqlProjects'
import ProjectTimeline from './ProjectTimeline'
import { IFetchProjectUpdates } from '../../../types/types_graphql'

const ProjectUpdates = (props: { projectId?: string }) => {
  const { projectId } = props
  const [updates, setUpdates] = useState<IFetchProjectUpdates[]>()

  useEffect(() => {
    if (projectId) {
      client
        .query({
          query: FETCH_PROJECT_UPDATES,
          variables: { projectId: parseInt(projectId), take: 100, skip: 0 },
          fetchPolicy: 'no-cache'
        })
        .then(res => setUpdates(res.data.getProjectUpdates))
        .catch(console.log)
    }
  }, [projectId])

  return (
    <Wrapper>
      {updates?.map(i => (
        <ProjectTimeline key={i.projectUpdate.id} projectUpdate={i.projectUpdate} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-left: 20px;
`

export default ProjectUpdates
