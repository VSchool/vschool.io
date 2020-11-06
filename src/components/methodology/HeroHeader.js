import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, black, blue, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const Container = styled.section`
    background-color: ${blue.lightest};
    padding-bottom: 56px;
    padding-top: 80px;

    @media (min-width: 1200px) {
        padding-bottom: 160px;
        padding-top: 96px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
        flex-direction: row;
        justify-content: center;
    }
`

const Img = styled.img`
    width: 100%;
    max-width: 467px;
    margin-bottom: 56px;

    @media (min-width: 1200px) {
        margin-bottom: 0;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
        align-items: flex-start;
        margin-right: 56px;
    }
`

const Title = styled.h4`
    color: ${blue.base};
    letter-spacing: 0.25px;
    line-height: 20px;
    font-weight: 800;
    margin-bottom: 16px;
    text-align: center;
    font-size: 14px;

    @media (min-width: 600px) {
        font-size: 16px;
        line-height: 24px;
    }

    @media (min-width: 1200px) {
        text-align: left;
    }
`

const Header = styled.h2`
    color: ${black};
    font-size: 44px;
    font-weight: 900;
    line-height: 56px;
    margin-bottom: 32px;
    text-align: center;
    max-width: 500px;

    @media (min-width: 600px) {
        font-size: 56px;
    }

    @media (min-width: 1200px) {
        text-align: left;
    }
`

const Info = styled.p`
    color: ${gray.darker};
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    max-width: 600px;
    text-align: center;
    margin-bottom: 48px;

    @media (min-width: 600px) {
        font-size: 20px;
    }

    @media (min-width: 1200px) {
        text-align: left;
        max-width: 489px;
        margin-bottom: 0;
    }
`

const StyledButton = styled(Button)`
    width: 305px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    outline: none;
    margin-bottom: 48px;

    @media (min-width: 300px) and (max-width: 380px) {
        width: 260px;
    }

    @media (min-width: 1200px) {
        font-size: 16px;
        letter-spacing: 1.14px;
        line-height: 24px;
        height: 56px;
        margin-top: 32px;
        margin-bottom: 0px;
    }
`

export default function HeroHeader(props) {
    const data = useStaticQuery(graphql`
    {
      prismicMethodologyPage {
        id
        data {
          page_subheader1 {
            text
          }
          page_header {
            text
          }
          page_subheader2 {
            text
          }
          hero_image {
            url
          }
          header_btn_link {
            url
          }
          header_btn {
            text
          }
        }
      }
    }
  `)

  const {
    page_subheader2: { text: pageSubheader2 },
    page_subheader1: { text: pageSubheader1 },
    page_header: { text: pageHeader },
    hero_image: { url: heroImg },
    header_btn_link: { url: headerBtnLink },
    header_btn: { text: headerBtnText }
} = data.prismicMethodologyPage.data

    return (
        <Container>
            <FlexContainer>
                <TextContainer>
                    <Header>{pageHeader}</Header>
                    <Title>{pageSubheader1}</Title>
                    <Info>{pageSubheader2}</Info>
                    <Link to={headerBtnLink}>
                        <StyledButton>{headerBtnText}</StyledButton>
                    </Link>
                </TextContainer>
                <Img src={heroImg} />
            </FlexContainer>
        </Container>
    )
}
