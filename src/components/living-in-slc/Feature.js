import React from 'react'
import { black } from "@vschool/lotus"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const H3 = styled.h3`
  color: ${black};	
  font-family: "aktiv-grotesk";	
  font-size: 32px;	
  font-weight: 900;	
  line-height: 28px;
  padding-top: 56px;
  padding-bottom: 16px;

  @media (min-width: 900px){
    padding-top: 48px;
  }
`

const P = styled.p`
  color: #514F4B;	
  font-family: "aktiv-grotesk";	
  font-size: 16px;	
  font-weight: 500;	
`

const Image = styled.img`

`

export default function Feature(props){
  const { feature_description, feature_title, feature_image, i } = props
  return(
    <Container>
      <Image src={feature_image.url} width={200}/>
      <TextContainer>
        <H3>{feature_title.text}</H3>
        <P>{feature_description.text}</P>
      </TextContainer>
    </Container>
  )
}