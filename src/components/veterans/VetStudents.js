import React from 'react'
import styled from "styled-components"
import { yellow, gray } from "@vschool/lotus"

const Container = styled.div`
  background-color: ${yellow.lightest};
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px){
    padding-left: 32px; 
    padding-right: 32px;
  }

  @media (min-width: 840px){
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 96px;
  }

  @media (min-width: 1200px){
    padding-left: 88px;
    padding-right: 88px;
    padding-bottom: 160px;
  }
`

const Image = styled.img`
  width: 100%;
  display: block;
  height: auto;
  max-width: 911px;
  margin-top: -64px;

  @media (min-width: 840px){
    margin-top: -96px;
  }

  @media (min-width: 1200px){
    margin-top: -160px;
    width: 911px
  }
`

export default function VetStudents(props){
  const { img } = props
  return(
    <Container>
      <Image src={img}/>
    </Container>
  )
}