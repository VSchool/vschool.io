import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"
import Position from "./Position.js"

const Container = styled.div`
    background-color: ${gray.lighter};
    padding-top: 16px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 96px;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
        padding-bottom: 96px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 160px;
        padding-top: 80px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
        padding-bottom: 160px;
    }
`

const H3 = styled.h3`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 30px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    padding-bottom: 48px;

    @media (min-width: 600px) {
        font-size: 32px;
    }

    @media (min-width: 800px) {
        font-size: 38px;
        padding-bottom: 72px;
    }

    @media (min-width: 1000px) {
        font-size: 44px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default function Positions(props) {
    const { header, positions } = props
    return (
        <Container>
            <H3>{header}</H3>
            <FlexContainer>
                {positions.length &&
                    positions.map((p, i, arr) => (
                        <Position
                            {...p}
                            key={p.position_title.text + i}
                            borderBottom={i === arr.length - 1}
                        />
                    ))}
            </FlexContainer>
        </Container>
    )
}
