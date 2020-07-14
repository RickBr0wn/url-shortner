import React from 'react'
import styled from 'styled-components'

import Navbar from './components/Navbar'
import Main from './components/Main'
import Examples from './components/Examples'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Examples />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
