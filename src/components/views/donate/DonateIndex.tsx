import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ProjectCard from '../../project-card/ProjectCardAlt'
import { IProjectBySlug } from '../../../types/types'
import { H6, Subline, Body_P } from '../../styled-components/Typography'
import { Gray_700, Gray_200 } from '../../styled-components/Colors'
import { BigArc } from '../../styled-components/Arc'
import ArrowLeft from '../../../../public/images/arrow_left.svg'

const ProjectsIndex = (props: IProjectBySlug) => {
  const { project } = props

  return (
    <>
      <BigArc />
      <Wrapper>
        <TitleBox>
          <Image src={ArrowLeft} alt="arrow left" />
          <Title>{project.title}</Title>
        </TitleBox>

        <Sections>
          <Left>
            <ProjectCard key={project.id} project={project} />
          </Left>
          <Right></Right>
        </Sections>
      </Wrapper>
    </>
  )
}

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer !important;
  margin-bottom: 26px;
`
const Wrapper = styled.div`
  text-align: center;
  margin: 60px 194px;
  align-items: center;
`
const Sections = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(100px, auto);
`
const Left = styled.div`
  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  align-content: center;
  z-index: 1;
  grid-column: 1 / 2;
  grid-row: 1;
  background: ${Gray_200};
  padding: 29px 0;
`
const Right = styled.div`
  z-index: 1;
  grid-row: 1;
  background: white;
`
const Title = styled(H6)`
  margin-left: 30.67px;
  span {
    color: ${Gray_700};
  }
`

export default ProjectsIndex
