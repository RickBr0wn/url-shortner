import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 7.5rem;
  width: 100vw;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: 'row';
  justify-content: space-evenly;
  padding: 0 6rem;
  border-bottom: solid rgba(0, 0, 0, 0.1) 2px;
`

const StyledNav = styled.nav`
  position: fixed;
`

const Logo = styled.div`
  flex: 1;
  font-size: 2rem;
  transition: all ease-in 0.2s;

  &:hover {
    color: var(--highlight-pink);
  }
`

const Links = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex: 3;
`

const Link = styled.a`
  list-style-type: none;
  transition: all ease-in 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--highlight-pink);
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 2.4rem;
  background-color: ${props => {
    switch (props.color) {
      case 'pink':
        return 'var(--highlight-pink)'
      case 'blue':
        return 'var(--highlight-blue)'
      default:
        return 'var(--highlight-pink)'
    }
  }};
  font-weight: 600;
  color: #fff;
  padding: 2.4rem 4.8rem;
  border-radius: 100px;
  border: none;
  text-transform: uppercase;
  margin-right: 1.2rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.7;
  font-size: 1.8rem;
  outline: none;
  transition: all ease-in 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
    -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  }
`

function Nav() {
  return (
    <StyledNav>
      <Wrapper>
        <Logo>tiny-url</Logo>
        <Links>
          <Link>Services</Link>
          <Link>Pricing</Link>
          <Link>Contact Us</Link>
        </Links>
        <Buttons>
          <Button color="pink">Log In</Button>
          <Button color="blue">Sign Up</Button>
        </Buttons>
      </Wrapper>
    </StyledNav>
  )
}

export default Nav
