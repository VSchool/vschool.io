import React from "react"
import styled from "styled-components"
import { blue, gray} from "@vschool/lotus"

const Section = styled.section`
    padding: 96px 16px;

    @media (min-width: 800px) {
        padding: 160px 0;
    }
`


const Title = styled.h4`
    font-weight: 900;
    font-size: 44px;
    line-height: 48px;
    text-align: center;
    color: ${gray.darkest};
`

const BlueSubtext = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.dark};
    padding-bottom: 8px;
    text-align: center;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 16px;
    }
`


const Description = styled.p`
    font-weight: 300;
    text-align: center;
    color: ${gray.darker};
    font-size: 16px;
    line-height: 24px;
    max-width: 620px;
    padding-top: 16px;

    @media (min-width: 800px){
        padding-top: 24px;
        font-size: 20px;
        line-height: 32px;
    }
`

export default function Rankings() {
    return (
        <Section>
            <BlueSubtext>V School Application</BlueSubtext>
            <Title>Admissions Call Scheduled</Title>
            <Description>Thank you for scheduling a call with our admissions team to start your application to V School. We look forward to meeting you soon.</Description>
        </Section>
    )
}
