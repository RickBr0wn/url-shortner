import React from 'react'
import styled from 'styled-components'

import Navbar from './components/Navbar'
import Main from './components/Main'
import Examples from './components/Examples'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Main />
        <Examples />
        <Pricing />
        <Contact />
        <Footer />
      </Wrapper>
    </div>
  )
}

export default App
