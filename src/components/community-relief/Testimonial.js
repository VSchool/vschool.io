import React from "react"
import styled from "styled-components"
import { green, orange } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${green.lightest};
    padding-top: 160px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;

    @media (min-width: 320px) and (max-width: 415px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 900px) {
        display: flex;
        justify-content: center;
        padding-top: 176px;
    }
`

const CiteContainer = styled.div`
    border: 2px solid ${green.base};
    background-color: ${green.lighter};
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 64px;
    padding-bottom: 80px;
    width: 366px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 320px) and (max-width: 415px) {
        width: 286px;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 32px;
        padding-bottom: 56px;
    }

    @media (min-width: 900px) {
        grid-column: 2 / 3;
        width: 550px;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 64px;
    }

    @media (min-width: 1024px) {
        width: 616px;
        padding-left: 72px;
        padding-right: 48px;
        padding-top: 56px;
    }
`

const H2 = styled.h2`
    color: ${green.darkest};
    font-family: "aktiv-grotesk-extended";
    font-size: 32px;
    font-weight: bold;
    line-height: 36px;

    @media (min-width: 320px) and (max-width: 415px) {
        font-size: 24px;
    }
`

const H3 = styled.h3`
    color: ${green.dark};
    font-family: "aktiv-grotesk-extended";
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    padding-top: 24px;

    @media (min-width: 1024px) {
        padding-top: 32px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 900px) {
        display: default;
        grid-row: 1 / 2;
    }
`

const DustinImg = styled.img`
    border-bottom: 20px solid ${orange.base};
    margin-top: -24px;
    width: 302px;

    @media (min-width: 320px) and (max-width: 415px) {
        width: 280px;
    }

    @media (min-width: 900px) {
        height: 357px;
        width: 320px;
        margin-right: -32px;
        margin-top: -32px;
    }
`

const GridContainer = styled.div`
    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 860px;
    }
`

function Testimonial(props) {
    const { testimonial, cite, testimonialImg } = props
    return (
        <Container>
            <GridContainer>
                <CiteContainer>
                    <H2>"{testimonial}"</H2>
                    <H3>{cite}</H3>
                </CiteContainer>
                <FlexContainer>
                    <DustinImg src={testimonialImg} />
                </FlexContainer>
            </GridContainer>
        </Container>
    )
}

export default Testimonial