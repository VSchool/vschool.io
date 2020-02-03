import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { gray, black, Button, blue } from "@vschool/lotus"

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
    margin-bottom: 24px;

    @media (min-width: 600px) {
        font-size: 38px;
    }

    @media (min-width: 840px) {
        font-size: 40px;
    }

    @media (min-width: 1200px) {
        font-size: 44px;
    }
`

const NewsContainer = styled.div`
    padding-bottom: 96px;

    @media (min-width: 1200px) {
        width: 1130px;
        margin: 0 auto;
    }
`

const StyledButton = styled(Button)`
    outline: none;
    font-weight: 800;
    font-family: "aktiv-grotesk-extended";
    margin-top: 40px;
`

const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media(min-width: 1200px){
    grid-template-columns: 1fr 1fr;
  }
`

const Anchor = styled(Link)`
  padding: 8px 0;
  color: ${blue.base};
  font-family: "aktiv-grotesk";
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
`

export default function News(props) {
    const { header } = props
    return (
        <Container>
            <NewsContainer>
                <H1>{header}</H1>
                {/*
                  Will need to query/map out first news related articles.
                  Static data for testing/designing purposes.
                */}
                <Links>
                  {[
                      "Full stack Instructor (Full Time) - Salt Lake City",
                      "Full stack Instructor (Full Time) - Salt Lake City",
                      "Full stack Instructor (Full Time) - Salt Lake City",
                      "Full stack Instructor (Full Time) - Salt Lake City",
                      "Full stack Instructor (Full Time) - Salt Lake City",
                      "Full stack Instructor (Full Time) - Salt Lake City",
                  ].map(pos => (
                      <Anchor key={pos}>{pos}</Anchor>
                  ))}
                </Links>
                <StyledButton buttonStyle="primary-light">
                    View All
                </StyledButton>
            </NewsContainer>
        </Container>
    )
}
