import React from "react"
import styled from "styled-components"
import { blue, yellow, gray } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-bottom: 24px;
    padding-top: 96px;
    margin-top: -40px;
    position: relative;
    z-index: 2;

    @media (min-width: 1100px) {
        display: flex;
        justify-content: center;
        padding-top: 160px;
    }
`

const BlueBackground = styled.div`
    background-color: ${blue.lightest};
    height: 160px;
    padding-left: 24px;
    padding-right: 24px;
    height: 500px;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 1;

    @media (min-width: 1100px) {
        padding-top: 60px;
        height: 200px;
    }
`

const CiteContainer = styled.div`
    border: 2px solid ${blue.base};
    background-color: ${blue.lighter};
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 40px;
    padding-bottom: 96px;
    width: 366px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    z-index: 3;

    @media (min-width: 320px) and (max-width: 415px) {
        width: 286px;
        padding-left: 16px;
        padding-right: 16px;
        /* padding-bottom: 56px; */
    }

    @media (min-width: 1100px) {
        width: 616px;
        padding-left: 40px;
        height: 352px;
        padding-top: 72px;
        padding-bottom: 72px;
    }
`

const Testimonial = styled.h2`
    color: ${blue.darkest};
    font-family: "aktiv-grotesk-extended";
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;

    @media (min-width: 320px) and (max-width: 415px) {
        font-size: 20px;
    }

    @media (min-width: 1100px) {
        width: 512px;
    }
`

const Cite = styled.h4`
    color: ${blue.dark};
    font-family: "aktiv-grotesk-extended";
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    padding-top: 24px;
`

const Course = styled.h6`
    font-family: "aktiv-grotesk-extended";
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: ${gray.darker};
    margin-top: 8px;
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1100px) {
    }
`

const TestimonialImg = styled.img`
    border-top: 20px solid ${yellow.light};
    width: 302px;
    margin-top: -56px;
    position: relative;
    z-index: 3;

    @media (min-width: 320px) and (max-width: 415px) {
        width: 250px;
    }

    @media (min-width: 900px) {
        height: 357px;
        width: 320px;
    }

    @media (min-width: 1100px) {
        margin-top: 80px;
        margin-left: -24px;
        border-top: none;
        border-bottom: 20px solid ${yellow.light};
    }
`

const GridContainer = styled.div`
    @media (min-width: 1100px) {
        display: flex;
        flex-direction: row;
    }
`

function Testimonial2(props) {
    const { testimonial, cite, course, testimonialImg } = props
    return (
        <Container>
            <GridContainer>
                <CiteContainer>
                    <Testimonial>"{testimonial}"</Testimonial>
                    <Cite>- {cite}</Cite>
                    <Course>{course}</Course>
                </CiteContainer>
                <FlexContainer>
                    <TestimonialImg src={testimonialImg} />
                </FlexContainer>
            </GridContainer>
            <BlueBackground />
        </Container>
    )
}

export default Testimonial2
