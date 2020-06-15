import React from "react"
import styled from "styled-components"
import { gray, black, green } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${green.lightest};
    padding-top: 64px;
    padding-bottom: 24px;

    @media (min-width: 840px) {
        padding-bottom: 40px;
        padding-top: 96px;
    }
`

const H1 = styled.h1`
    font-size: 30px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    color: ${black};
    margin-bottom: 16px;
    width: 460px;

    @media (min-width: 600px) {
        font-size: 36px;
    }

    @media (min-width: 840px) {
        line-height: 48px;
        width: 600px;
    }

    @media (min-width: 1200px) {
        font-size: 40px;
        width: 946px;
        padding-left: 160px;
        padding-right: 160px;
        line-height: 56px;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    margin-bottom: 48px;
    width: 460px;

    @media (min-width: 840px) {
        font-size: 18px;
        line-height: 26px;
        width: 640px;
    }

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 28px;

        width: 598px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Title = styled.h4`
    color: ${green.darker};
    font-size: 16px;
    letter-spacing: 0.25px;
    line-height: 24px;
    font-weight: 800;
    margin-bottom: 16px;
    text-align: center;

    @media (min-width: 1200px) {
        text-align: left;
    }
`

function HeroHeader(props) {
    const { title, sub, banner } = props

    return (
        <Container>
            <FlexContainer>
                <Title>{banner}</Title>
            </FlexContainer>
            <FlexContainer>
                <H1>{title}</H1>
            </FlexContainer>
            <FlexContainer>
                <P>{sub}</P>
            </FlexContainer>
        </Container>
    )
}

export default HeroHeader
