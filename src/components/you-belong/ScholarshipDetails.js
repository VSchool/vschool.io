import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"
import Deadlines from "./Deadlines.js"
import Phase from "../shared/Phase"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-top: 64px;
    padding-bottom: 56px;

    @media (min-width: 840px) {
        padding-top: 96px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 1200px) {
        padding-top: 160px;
    }
`

const Title = styled.h5`
    color: #7c2b3a;
    font-size: 16px;
    letter-spacing: 0.25px;
    line-height: 24px;
    font-weight: 800;
    margin-bottom: 16px;

    @media (max-width: 500px) {
        font-size: 14px;
    }
`

const FixedContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 840px) {
        width: 100%;
        max-width: 862px;
    }

    @media (min-width: 1200px) {
        display: block;
        width: 1024px;
        max-width: 1024px;
    }
`

const FlexContainer = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 56px;
`

const PhasesContainer = styled.section`
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

const H3 = styled.h3`
    color: ${black};
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
        text-align: left;
    }
`

const Info = styled.p`
    color: #514f4b;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    max-width: 600px;

    @media (max-width: 400px) {
        font-size: 16px;
    }

    @media (min-width: 1200px) {
        text-align: left;
        max-width: 1024px;
    }
`

export default function ScholarshipDetails(props) {
    const { title, header, sub, deadlines, detailsInfo, bgImg, phases } = props
    console.log("I'm here")
    return (
        <Container>
            <FixedContainer>
                <Title>{title}</Title>
            </FixedContainer>
            <FixedContainer>
                <H3>{header}</H3>
            </FixedContainer>
            <FixedContainer>
                <Info>{sub}</Info>
            </FixedContainer>
            <PhasesContainer>
                {phases.map(phase => (
                    <Phase {...phase} key={phase.phase_num.text} />
                ))}
            </PhasesContainer>
            <FlexContainer>
                <Deadlines
                    deadlines={deadlines}
                    info={detailsInfo}
                    bgImg={bgImg}
                />
            </FlexContainer>
        </Container>
    )
}
