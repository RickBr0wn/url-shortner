import React from 'react'
import styled from 'styled-components'

import svg from '../images/undraw_shopping.svg'

import { Button } from './Navbar'

const Wrapper = styled.div`
  height: 50rem;
  display: flex;
  align-items: space-around;
  justify-content: center;
  max-width: 110rem;
  margin-top: 12rem;
`

const Panel = styled.div`
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 48rem;
  margin: 0 4rem;
`

const Image = styled.img`
  height: 40rem;
`

const Statement = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2.7rem;
  font-weight: 400;
  line-height: 1;
`

const Title = styled.h1`
  color: var(--header-color);
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 6rem;
  line-height: 1;
  margin-top: 1.2rem;
`

const HookLine = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  line-height: 1;
  margin-top: 1.2rem;
  margin-bottom: 3.2rem;
`

function Main() {
  return (
    <Wrapper>
      <Panel>
        <Image src={svg} alt="woman online shopping" />
      </Panel>
      <Panel>
        <Statement>Multi-purpose URL shortener</Statement>
        <Title>Create Click-Worthy Links</Title>
        <HookLine>
          Build and protect your brand using powerful, recognizable short links.
        </HookLine>
        <Button color="pink">Get started</Button>
      </Panel>
    </Wrapper>
  )
}

export default Main
