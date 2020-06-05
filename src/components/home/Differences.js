import React from "react"
import styled from "styled-components"
import TalkingPoint from "./TalkingPoint.js"
import { gray, black } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.light};
    padding: 96px 24px;

    @media (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 1200px) {
        padding-top: 160px;
    }
`

const H3 = styled.h3`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 32px;
    font-weight: 900;
    text-align: center;
    width: 320px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 320px) and (max-width: 400px) {
        font-size: 28px;
        width: 286px;
    }

    @media (min-width: 840px) {
        width: 628px;
        font-size: 40px;
    }

    @media (min-width: 1200px) {
        margin-left: auto;
        margin-right: auto;
        font-size: 48px;
    }
`

// This will max width at 850px;
const DifferencesContainer = styled.div`
    align-content: center;
    margin-top: 56px;

    @media (min-width: 840px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;
    }
`

export default function Differences(props) {
    const { header, differences } = props
    return (
        <Container>
            <H3>{header.slice(0, 10)}</H3>
            <H3>{header.slice(10)}</H3>
            <DifferencesContainer>
                {differences.map(item => (
                    <TalkingPoint {...item} key={item.header.text} />
                ))}
            </DifferencesContainer>
        </Container>
    )
}
