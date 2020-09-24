import React from "react"
import styled from "styled-components"
import { gray, orange, blue } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 56px;
    padding-bottom: 112px;

    @media (min-width: 320px) and (max-width: 400px) {
        padding-left: 8px;
        padding-right: 8px;
    }

    @media (min-width: 900px) {
        display: flex;
        justify-content: center;
        padding-bottom: 136px;
    }

    @media (min-width: 1200px) {
        padding-bottom: 160px;
    }
`

const CiteContainer = styled.div`
    border: 2px solid ${orange.base};
    background-color: ${orange.lightest};
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 64px;
    padding-bottom: 80px;
    width: 366px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 320px) and (max-width: 390px) {
        width: 302px;
    }

    @media (min-width: 900px) {
        grid-column: 2 / 3;
        width: 550px;
        height: 400px;
        padding-left: 40px;
        padding-right: 40px;
    }

    @media (min-width: 1024px) {
        width: 616px;
        padding-left: 72px;
        padding-right: 48px;
        padding-top: 56px;
        height: 380px;
    }
`

const H2 = styled.h2`
    color: ${orange.darkest};
    font-family: "aktiv-grotesk-extended";
    font-size: 32px;
    font-weight: bold;
    line-height: 36px;

    @media (min-width: 330px) and (max-width: 414px) {
        font-size: 28px;
    }
`

const H4 = styled.h4`
    color: ${orange.dark};
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

const Image = styled.img`
    border-bottom: 20px solid ${blue.base};
    margin-top: -24px;
    width: 320px;

    @media (max-width: 390px) {
        width: 302px;
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

export default function Testimonial(props) {
    const { testimonial, cite, testimonialImg } = props
    return (
        <Container>
            <GridContainer>
                <CiteContainer>
                    <H2>"{testimonial}"</H2>
                    <H4>{cite}</H4>
                </CiteContainer>
                <FlexContainer>
                    <Image src={testimonialImg} />
                </FlexContainer>
            </GridContainer>
        </Container>
    )
}
