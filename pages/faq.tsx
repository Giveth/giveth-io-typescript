import React from 'react'
import Footer from '../src/components/Footer'
import MenuInedx from '../src/components/menu/MenuInedx'
import FAQIndex from '../src/components/views/FAQIndex'

const FAQRoute = () => {
  return (
    <div style={{ position: 'relative' }}>
      <MenuInedx />
      <FAQIndex />
      <Footer />
    </div>
  )
}

export default FAQRoute
