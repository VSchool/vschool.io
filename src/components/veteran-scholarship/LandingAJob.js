import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"
import Phase from "./Phase.js"

const Container = styled.div`
    background-color: ${gray.lighter};
    padding-top: 64px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 96px;
    }

    @media (min-width: 1200px) {
        padding-top: 160px;
        padding-left: 88px;
        padding-right: 88px;
    }
`

const Header = styled.h3`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
    margin-bottom: 16px;
    text-align: center;

    @media (min-width: 320px) and (max-width: 400px) {
        font-size: 28px;
    }

    @media (min-width: 840px) {
        font-size: 40px;
        line-height: 44px;
    }

    @media (min-width: 1200px) {
        font-size: 44px;
        line-height: 48px;
    }
`

const SubHeader = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    width: 100%;
    max-width: 500px;

    @media (min-width: 700px) {
        max-width: 650px;
    }

    @media (min-width: 1200px) {
        font-size: 20px;
        max-width: 884px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 56px;

    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: center;
    }
`

export default function LandingAJob(props) {
    const { header, sub, phases } = props
    return (
        <Container>
            <Header>{header}</Header>
            <SubHeader>{sub}</SubHeader>
            <FlexContainer>
                {phases.map(phase => (
                    <Phase {...phase} key={phase.phase.text} />
                ))}
            </FlexContainer>
        </Container>
    )
}
