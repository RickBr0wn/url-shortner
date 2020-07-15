import React from 'react'
import styled from 'styled-components'
import {
  FaHandsHelping,
  FaLink,
  FaUserShield,
  FaBiohazard,
  FaMobile,
  FaStopwatch,
} from 'react-icons/fa'

const Wrapper = styled.div`
  width: 100rem;
  margin: 8rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6rem;
`

const Card = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;

  /* &:hover {
    -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
    -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  } */
`

const CardText = styled.p`
  font-weight: 300;
  text-align: center;
`

const Bold = styled.span`
  font-weight: 600;
  transition: all ease-in 0.2s;

  &:hover {
    color: var(--highlight-pink);
  }
`

const CardIcon = styled.div`
  font-size: 6rem;
  color: var(--highlight-pink);
`

function Examples() {
  return (
    <Wrapper>
      <Card>
        <CardIcon>
          <FaHandsHelping />
        </CardIcon>
        <CardText>
          <Bold>tiny-url</Bold> is easy and fast! Just enter a long link to get
          your shortened <Bold>tiny-url</Bold> .
        </CardText>
      </Card>
      <Card>
        <CardIcon>
          <FaLink />
        </CardIcon>
        <CardText>
          Use any link, no matter what size. <Bold>tiny-url</Bold> always
          shortens!
        </CardText>
      </Card>
      <Card>
        <CardIcon>
          <FaUserShield />
        </CardIcon>
        <CardText>
          <Bold>tiny-url</Bold> is fast and secure, our service use both `HTTPS
          protocol` and data encryption
        </CardText>
      </Card>
      <Card>
        <CardIcon>
          <FaStopwatch />
        </CardIcon>
        <CardText>
          Check the amount of clicks that your <Bold>tiny-url</Bold> received
        </CardText>
      </Card>
      <Card>
        <CardIcon>
          <FaBiohazard />
        </CardIcon>
        <CardText>
          All links that try to disseminate spam. All known viruses and malware
          are deleted.
        </CardText>
      </Card>
      <Card>
        <CardIcon>
          <FaMobile />
        </CardIcon>
        <CardText>
          <Bold>tiny-url</Bold> can be used anywhere. It is compatible with
          smartphones, tablets and desktops.
        </CardText>
      </Card>
    </Wrapper>
  )
}

export default Examples
