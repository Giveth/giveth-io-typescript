import React from 'react'
import Footer from '../src/components/Footer'
import Menubar from '../src/components/Menubar'
import JoinIndex from '../src/components/views/join/JoinIndex'
import JoinEngage from '../src/components/views/join/JoinEngage'

const Join = () => {
  return (
    <>
      <Menubar />
      <JoinIndex />
      <JoinEngage />
      <Footer />
    </>
  )
}

export default Join
