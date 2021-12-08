import React from 'react'
import styled from '@emotion/styled'
import { Giv_500, Gray_400, Gray_600, Primary_Deep_900 } from './styled-components/Colors'

interface IPagination {
  setPage: (number: number) => void
  pageCount: number
  currentPage: number
}

const Pagination = (props: IPagination) => {
  const { setPage, currentPage, pageCount } = props

  const handleNext = () => {
    if (currentPage !== pageCount) return setPage(currentPage + 1)
  }
  const handlePrev = () => {
    if (currentPage !== 1) return setPage(currentPage - 1)
  }
  const handleSelect = (num: number) => {
    if (num !== currentPage) return setPage(num)
  }

  if (pageCount < 2) return null
  return (
    <div>
      <UlStyled>
        <LiStyled onClick={handlePrev} className={currentPage === 1 ? 'disabled' : ''}>
          {'< Prev'}
        </LiStyled>
        {[...Array(pageCount)].map((i, index) => {
          return (
            <LiStyled
              style={{ width: '12px' }}
              onClick={() => handleSelect(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
              key={index}
            >
              {index + 1}
            </LiStyled>
          )
        })}
        <LiStyled onClick={handleNext} className={currentPage === pageCount ? 'disabled' : ''}>
          {'Next >'}
        </LiStyled>
      </UlStyled>
    </div>
  )
}

const LiStyled = styled.li`
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;
  color: ${Gray_600};
  cursor: pointer;

  &.active {
    cursor: default;
    font-weight: 500;
    color: ${Primary_Deep_900};
    border-bottom: 2px solid ${Giv_500};
  }

  &:nth-of-type(1) {
    padding-right: 16px;
    color: ${Primary_Deep_900};
    &.disabled {
      cursor: default;
      color: ${Gray_400};
    }
  }

  &:last-of-type {
    padding-left: 16px;
    color: ${Primary_Deep_900};
    &.disabled {
      cursor: default;
      color: ${Gray_400};
    }
  }
`

const UlStyled = styled.ul`
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style: none;
  display: flex;
  gap: 16px;
`

export default Pagination
