import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 56px;
    padding-top: 80px;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
    }

    @media (min-width: 1200px) {
        padding-bottom: 160px;
        padding-left: 88px;
        padding-right: 88px;
        padding-top: 96px;
    }
`

const Header = styled.h2`
  font-size: 32px;
  line-height: 38px;
  font-family: "aktiv-grotesk";
  color: ${black};
  text-align: center;
  font-weight: 800;

  @media(min-width: 600px){
    font-size: 44px;
  }
`

export default function Differences(props){
  const { header, differences } = props
  return (
    <Container>
      <Header>{header}</Header>
    </Container>
  )
}