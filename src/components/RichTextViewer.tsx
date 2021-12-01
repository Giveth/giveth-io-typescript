import React from 'react'
import ReactQuill from 'react-quill'
import styled from '@emotion/styled'

const RichTextViewer = (props: { content?: string }) => {
  return (
    <Wrapper>
      <ReactQuill value={props.content} readOnly theme='bubble' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  a {
    color: #007bff !important;
    &:hover {
      text-decoration: underline !important;
    }
  }
`

export default RichTextViewer
