import React from "react"
import styled from "styled-components"
import { black, gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.light};
    padding-top: 64px;
    padding-bottom: 64px;

    @media (min-width: 840px) {
        padding-bottom: 96px;
        padding-top: 96px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Title = styled.h6`
    color: ${black};
    font-size: 16px;
    letter-spacing: 0.25px;
    line-height: 24px;
    margin-bottom: 16px;

    @media (max-width: 400px) {
        font-size: 14px;
    }
`

const H1 = styled.h1`
    font-size: 36px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    color: ${black};
    margin-bottom: 16px;

    @media (min-width: 400px) {
        width: 350px;
    }

    @media (min-width: 600px) {
        font-size: 40px;
        width: 400px;
    }

    @media (min-width: 840px) {
        font-size: 48px;
        line-height: 48px;
        width: 450px;
    }

    @media (min-width: 1200px) {
        font-size: 56px;
        padding-left: 160px;
        padding-right: 160px;
        line-height: 56px;
        width: 900px;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    margin-bottom: 24px;
    width: 460px;

    @media (min-width: 840px) {
        font-size: 18px;
        line-height: 26px;
        width: 600px;
    }

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 28px;

        width: 800px;
    }
`

export default function Header(props) {
    const { title, header, sub } = props
    return (
        <Container>
            <FlexContainer>
                <Title>{title}</Title>
            </FlexContainer>
            <FlexContainer>
                <H1>{header}</H1>
            </FlexContainer>
            <FlexContainer>
                <P>{sub}</P>
            </FlexContainer>
        </Container>
    )
}
