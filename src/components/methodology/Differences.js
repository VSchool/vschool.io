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
        padding-left: 88px;
        padding-right: 88px;
        padding-top: 80px;
    }
`

const Header = styled.h2`
  font-size: 32px;
  line-height: 38px;
  font-family: "aktiv-grotesk";
  color: ${black};
  text-align: center;
  font-weight: 800;
  margin-bottom: 16px;

  @media(min-width: 600px){
    font-size: 44px;
  }

  @media(min-width: 1100px){
    margin-top: 56px;
  }
`

const DifferencesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 1100px){
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`

const Difference = styled.div`
  width: 100%;
  max-width: 320px;

  @media(min-width: 1100px){
    margin: 0 24px;
  }
`

const Title = styled.h4`
  margin-top: 48px;
  margin-bottom: 16px;
  font-size: 20px;
  line-height: 26px;
  font-family: "aktiv-grotesk";
  color: ${black};
  font-weight: 800;
`

const Info = styled.p`
  color: ${gray.darker};
  font-size: 18px;
  line-height: 26px;
  font-family: "aktiv-grotesk";
`

export default function Differences(props){
  const { header, differences } = props
  return (
    <Container>
      <Header>{header}</Header>
      <DifferencesContainer>
        { differences.map(item => (
          <Difference key={item.title.text}>
            <Title>{item.title.text}</Title>
            <Info>{item.info.text}</Info>
          </Difference>
        ))}
      </DifferencesContainer>
    </Container>
  )
}