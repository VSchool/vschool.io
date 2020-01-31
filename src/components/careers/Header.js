import React from 'react'
import styled from 'styled-components'
import { black, gray } from '@vschool/lotus'


const Container = styled.div`
  background-color: ${gray.light};
  padding-top: 96px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 40px;

  @media (min-width: 600px){
    padding-left: 32px; 
    padding-right: 32px;
    padding-bottom: 48px;
  }

  @media (min-width: 840px){
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 56px;
  }

  @media (min-width: 1200px){
    padding-left: 88px;
    padding-right: 88px;
    padding-bottom: 80px;
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`

const H1 = styled.h1`
  font-family: "aktiv-grotesk";	
  font-size: 36px;	
  font-weight: 900;	
  line-height: 40px;	
  text-align: center;
  color: ${black};
  margin-bottom: 16px;

  

  @media (min-width: 600px){
    font-size: 40px;
  }

  @media (min-width: 840px){
    font-size: 48px;
    line-height: 48px;
  }

  @media (min-width: 1200px){
    font-size: 56px;
    padding-left: 160px;
    padding-right: 160px;
    line-height: 56px;
  }
`

const P = styled.p`
  color: ${gray.darker};	
  font-family: "aktiv-grotesk";	
  font-size: 16px;	
  font-weight: 500;	
  line-height: 24px;	
  text-align: center;
  margin-bottom: 24px;
  width: 390px;

  @media (min-width: 840px){
    font-size: 18px;
    line-height: 26px;
    width: 600px;
  }

  @media (min-width: 1200px){
    font-size: 20px;
    line-height: 28px;
   
    width: 598px;
  }
`

export default function Header(props){
  const {
    header,
    subHeader,
    invite
  } = props
  
  return (
    <Container>
      <FlexContainer>
        <H1>{ header }</H1>
      </FlexContainer>
      <FlexContainer>
        <P>{ subHeader }</P>
      </FlexContainer>
      <FlexContainer>
        <P>{ invite }</P>
      </FlexContainer>
    </Container>
  )
}