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
    width: 100%;
    max-width: 366px;
    

    @media (min-width: 1200px) {
        font-size: 44px;
        line-height: 48px;
        max-width: 100%;
    }
`

const SubHeader = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    width: 100%;
    max-width: 366px;


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
    width: 100%;
    max-width: 366px;

    @media (min-width: 1200px) {
        flex-direction: row;
        justify-content: center;
        max-width: 1180px;
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
                    <Phase {...phase} key={phase.phase_num.text} />
                ))}
            </FlexContainer>
        </Container>
    )
}