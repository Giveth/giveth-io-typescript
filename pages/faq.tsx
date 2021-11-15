import React from 'react'
import Footer from '../src/components/Footer'
import Menubar from '../src/components/Menubar'
import FAQIndex from '../src/components/views/FAQIndex'

const FAQRoute = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Menubar />
      <FAQIndex />
      <Footer />
    </div>
  )
}

export default FAQRoute
