import React from 'react'
import Footer from '../src/components/Footer'
import MenuIndex from '../src/components/menu/MenuIndex'
import JoinIndex from '../src/components/views/join/JoinIndex'
import JoinEngage from '../src/components/views/join/JoinEngage'

const Join = () => {
  return (
    <>
      <MenuIndex />
      <JoinIndex />
      <JoinEngage />
      <Footer />
    </>
  )
}

export default Join
