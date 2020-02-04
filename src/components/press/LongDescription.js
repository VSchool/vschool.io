import React from "react"
import styled from "styled-components"
import { black, gray } from "@vschool/lotus"

const Container = styled.div`
    padding: 0 24px 0 24px;
    background-color: ${gray.light};

    @media (min-width: 600px){
      padding: 0 44px 0 44px;
    }

    @media (min-width: 840px){
      padding: 0 88px 0 88px
    }

    @media (min-width: 1200px){
      padding: 0;
    }
`

const H3 = styled.h3`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 20px;
    font-weight: 800;
    padding-top: 40px;
    max-width: 848px;

    @media(max-width: 415px){
      font-size: 18px;
    }

    @media (min-width: 1200px){
      margin: 0 auto;
    }
    
`

const P = styled.p`
	color: ${gray.darker};
	font-family: "aktiv-grotesk";
	font-size: 16px;
	font-weight: 500;
  padding-top: 24px;
  max-width: 848px;

  @media(max-width: 415px){
    font-size: 14px;
  }

  @media (min-width: 1200px){
    margin: 0 auto;
  }
`

const GrayBar = styled.div`
  height: 192px;
`

export default function LongDescription(props){
  const {
    title,
    description1,
    description2,
    description3
  } = props
  return (
    <Container>
      <H3>{title}</H3>
      <P>{description1}</P>
      <P>{description2}</P>
      <P>{description3}</P>
      <GrayBar />
    </Container>
  )
}