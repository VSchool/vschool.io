import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-top: 64px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 48px;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 96px;
        padding-top: 96px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
    }
`

const H1 = styled.h1`
  font-family: "aktiv-grotesk";	
  font-size: 36px;	
  font-weight: 900;	
  color: ${black};
  margin-bottom: 16px;

  @media (min-width: 600px){
    font-size: 38px;
  }

  @media (min-width: 840px){
    font-size: 40px;
  }

  @media (min-width: 1200px){
    font-size: 44px;
  }
`

const NewsContainer = styled.div`

  @media(min-width: 1200px){
    width: 1130px;
    margin: 0 auto;
  }
`

export default function News(props) {
    const {header} = props
    return (
      <Container>
        <NewsContainer>
          <H1>{header}</H1>

        </NewsContainer>
      </Container>
    )
}
