import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"
import Deadlines from "./Deadlines.js"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 64px;
    margin-bottom: -96px;

    @media (min-width: 1200px) {
        padding-top: 140px;
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

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

const H3 = styled.h3`
    color: ${black};
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
    margin-bottom: 24px;
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
        margin-bottom: 56px;
        text-align: left;
    }
`

export default function ScholarshipDetails(props) {
    const {
        header,
        deadlines,
        detailsInfo,
        detailsBgImg,
        details,
        link,
        btnText,
    } = props
    return (
        <Container>
            <FixedContainer>
                <H3>{header}</H3>
            </FixedContainer>
            <FlexContainer>
                <Deadlines
                    deadlines={deadlines}
                    info={detailsInfo}
                    bgImg={detailsBgImg}
                    details={details}
                    link={link}
                    btnText={btnText}
                />
            </FlexContainer>
        </Container>
    )
}
