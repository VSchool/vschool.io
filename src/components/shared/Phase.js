import React from "react"
import styled from "styled-components"
import { blue, black, gray } from "@vschool/lotus"

const PhaseContainer = styled.div`
    margin-bottom: 32px;
    width: 100%;

    @media (min-width: 1200px) {
        margin-right: 32px;
        margin-left: 32px;
        max-width: 320px;
        width: 320px;
    }
`

const PhaseNumber = styled.h4`
    color: ${blue.base};
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 20px;
    font-weight: 800;
    margin-bottom: 16px;
`

const Title = styled.h3`
    color: ${black};
    font-size: 24px;
    line-height: 30px;
    font-weight: 800;
    margin-bottom: 16px;
`

const Info = styled.p`
    color: ${gray.darker};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`

export default function Phase(props) {
    const { phase_num, phase_header, phase_info } = props
    return (
        <PhaseContainer>
            <PhaseNumber>{phase_num.text}</PhaseNumber>
            <Title>{phase_header.text}</Title>
            <Info>{phase_info.text}</Info>
        </PhaseContainer>
    )
}
