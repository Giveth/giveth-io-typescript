import React from 'react'
import ReactQuill from 'react-quill'
import styled from "@emotion/styled";
import {Primary_Deep_900} from "./styled-components/Colors";

const RichTextViewer = (props: { content: string | undefined }) => {
  return (
    <Wrapper>
      <ReactQuill
        style={{ fontFamily: `Red Hat Text, sans serif` }}
        value={props.content}
        readOnly
        theme='bubble'
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 26px;
  color: ${Primary_Deep_900};

  a {
    color: #007bff !important;
    &:hover {
      text-decoration: underline !important;
    }
  }
`

export default RichTextViewer
