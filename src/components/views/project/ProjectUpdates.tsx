import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import client from '../../../apollo/apolloClient'
import { FETCH_PROJECT_UPDATES } from '../../../apollo/gql/gqlProjects'
import ProjectTimeline from './ProjectTimeline'
import { IFetchProjectUpdates, IProjectBySlug } from '../../../types/types_graphql'

const ProjectUpdates = (props: IProjectBySlug) => {
  const { id, creationDate } = props.project
  const [updates, setUpdates] = useState<IFetchProjectUpdates[]>()

  useEffect(() => {
    if (id) {
      client
        .query({
          query: FETCH_PROJECT_UPDATES,
          variables: { projectId: parseInt(id), take: 100, skip: 0 },
          fetchPolicy: 'no-cache'
        })
        .then(res => setUpdates(res.data.getProjectUpdates))
        .catch(console.log)
    }
  }, [id])

  return (
    <Wrapper>
      {updates?.map(i => (
        <ProjectTimeline key={i.projectUpdate.id} projectUpdate={i.projectUpdate} />
      ))}
      <ProjectTimeline creationDate={creationDate} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-left: 20px;
`

export default ProjectUpdates
