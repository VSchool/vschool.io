import React from "react"
import styled from "styled-components"
import { green, black, gray } from "@vschool/lotus"

const PhaseContainer = styled.div`
    margin-bottom: 32px;
    width: 100%;
    max-width: 320px;

    @media (min-width: 600px) {
        margin-right: 32px;
        margin-left: 32px;
    }
`

const PhaseNumber = styled.h4`
    color: ${green.base};
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 20px;
    font-weight: 800;
    margin-bottom: 16px;
`

const Title = styled.h3`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 24px;
    line-height: 30px;
    font-weight: 800;
    margin-bottom: 16px;
`

const Info = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`

export default function Phase(props) {
    const { phase, phase_title, phase_info } = props
    return (
        <PhaseContainer>
            <PhaseNumber>{phase.text}</PhaseNumber>
            <Title>{phase_title.text}</Title>
            <Info>{phase_info.text}</Info>
        </PhaseContainer>
    )
}
