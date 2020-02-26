import React from "react"
import styled from "styled-components"
import { gray, black, pink } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 56px;
    padding-top: 56px;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 96px;
    }

    @media (min-width: 1200px) {
        padding-bottom: 160px;
        padding-left: 88px;
        padding-right: 88px;
        padding-top: 24px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1200px){
      flex-direction: row;
      justify-content: center;
    }
`

const Img = styled.img`
    width: 100%;
    max-width: 467px;
    margin-bottom: 56px;

    @media(min-width: 1200px){
      margin-bottom: 0;
      margin-right: 56px;
    }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 1200px){
    align-items: flex-start;
  }
`

const Title = styled.h4`
    color: ${pink.darker};
    font-family: "aktiv-grotesk-extended";
    font-size: 16px;
    letter-spacing: 0.25px;
    line-height: 24px;
    font-weight: 800;
    margin-bottom: 16px;

    @media(min-width: 1200px){
      text-align: left;
    }
`

const Header = styled.h2`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 44px;
    font-weight: 900;
    line-height: 48px;
    margin-bottom: 16px;
    text-align: center;

    @media(min-width: 1200px){
      text-align: left;
    }
`

const Info = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    max-width: 600px;
    text-align: center;

    @media(min-width: 1200px){
      text-align: left;
      max-width: 489px;
    }
`

export default function InternshipDetails(props) {
    const { title, header, info, img } = props
    return (
        <Container>
            <FlexContainer>
                <Img src={img} />
                <TextContainer>
                    <Title>{title}</Title>
                    <Header>{header}</Header>
                    <Info>{info}</Info>
                </TextContainer>
            </FlexContainer>
        </Container>
    )
}
