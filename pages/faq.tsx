import React from 'react'
import Footer from '../src/components/Footer'
import MenuIndex from '../src/components/menu/MenuIndex'
import FAQIndex from '../src/components/views/FAQIndex'

const FAQRoute = () => {
  return (
    <div style={{ position: 'relative' }}>
      <MenuIndex />
      <FAQIndex />
      <Footer />
    </div>
  )
}

export default FAQRoute
