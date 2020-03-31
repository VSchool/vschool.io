import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"
import Deadlines from "./Deadlines.js"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-top: 160px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 56px;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 240px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 1200px) {
        padding-top: 240px;
        padding-left: 88px;
        padding-right: 88px;
    }
`

const FixedContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 840px) {
        width: 100%;
        max-width: 600px;
    }

    @media (min-width: 1200px) {
        display: block;
        /* width: 1024px; */
        max-width: 780px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

const H3 = styled.h3`
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

const Info = styled.p`
    color: #514f4b;
    font-family: "aktiv-grotesk";
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 56px;
    text-align: center;
    max-width: 600px;

    @media (max-width: 400px) {
        font-size: 16px;
    }

    @media (min-width: 1200px) {
        max-width: 800px;
    }
`

export default function ScholarshipDetails(props) {
    const { header, sub, deadlines, detailsInfo, bgImg } = props
    return (
        <Container>
            <FixedContainer>
                <H3>{header}</H3>
            </FixedContainer>
            <FixedContainer>
                <Info>{sub}</Info>
            </FixedContainer>
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
