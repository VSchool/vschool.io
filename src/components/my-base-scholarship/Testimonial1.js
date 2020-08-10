import React from "react"
import styled from "styled-components"
import { gray, blue, yellow } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-bottom: 64px;

    @media (min-width: 1200px) {
        padding-top: 32px;
    }
`

const GraySection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
        flex-direction: row-reverse;
        justify-content: center;
    }
`

const Image = styled.img`
    width: 232px;
    border-bottom: 14px solid ${yellow.base};
    margin-top: -24px;

    @media (min-width: 1200px) {
        margin-right: -24px;
    }
`

const TestimonialContainer = styled.div`
    width: 100%;
    max-width: 350px;
    border: 2px solid ${blue.base};
    background-color: ${blue.lightest};
    padding: 24px;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
        max-width: 616px;
        padding-left: 64px;
        padding-top: 44px;
        padding-bottom: 44px;
    }
`

const TestimonialText = styled.h2`
    color: ${blue.darkest};
    font-family: "aktiv-grotesk-extended";
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    width: 100%;
    max-width: 320px;

    @media (min-width: 1200px) {
        width: 100%;
        max-width: 580px;
    }
`

const Cite = styled.h3`
    color: ${blue.darker};
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    margin-top: 24px;
    max-width: 300px;
    align-self: center;

    @media (min-width: 1200px) {
        align-self: flex-start;
        max-width: 100%;
        margin-top: 32px;
    }
`

export default function Testimonial(props) {
    const { testimonial, cite, testimonialImg } = props
    return (
        <>
            <Container>
                <GraySection>
                    <TestimonialContainer>
                        <TestimonialText>"{testimonial}"</TestimonialText>
                        <Cite>{cite}</Cite>
                    </TestimonialContainer>
                    <Image src={testimonialImg} />
                </GraySection>
            </Container>
        </>
    )
}
