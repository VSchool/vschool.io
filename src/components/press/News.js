import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-top: 32px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 48px;

    @media (min-width: 600px) {
        padding-left: 44px;
        padding-right: 44px;
    }

    @media (min-width: 840px) {
        padding-left: 88px;
        padding-right: 88px;
        padding-bottom: 96px;
        padding-top: 88px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
        padding-top: 56px;
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

const Links = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }
`

const TempText = styled.p`
    font-family: "aktiv-grotesk";
    font-size: 14px;
    color: #a09c96;
    font-weight: 500;
`

export default function News(props) {
    const { header } = props
    return (
        <Container>
            <NewsContainer>
                <H1>{header}</H1>
                <Links>
                    {/* {[   This will be used to map out the queried news articles */}
                    <TempText>Nothing yet, but stay tuned!</TempText>
                    {/* ].map(pos => (
                      <Anchor to="/" key={pos}>{pos}</Anchor>
                  ))} */}
                </Links>
                {/*  Re-add this button when blog/events is done */}
                {/* <StyledButton buttonStyle="primary-light" disabled>
                    View All
                </StyledButton> */}
            </NewsContainer>
        </Container>
    )
}
