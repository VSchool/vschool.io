import React from "react"
import styled from "styled-components"
import { black, gray } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.light};
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
        padding-bottom: 72px;
        padding-top: 96px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

const H1 = styled.h1`
    font-family: "aktiv-grotesk";
    font-size: 36px;
    font-weight: 900;
    text-align: center;
    color: ${black};
    margin-bottom: 16px;

    @media (min-width: 600px) {
        font-size: 40px;
    }

    @media (min-width: 840px) {
        font-size: 48px;
    }

    @media (min-width: 1200px) {
        font-size: 56px;
        padding-left: 160px;
        padding-right: 160px;
    }
`

export default function Header(props) {
    const { header } = props

    return (
        <Container>
            <FlexContainer>
                <H1>{header}</H1>
            </FlexContainer>
        </Container>
    )
}
