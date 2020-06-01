import React from "react"
import styled from "styled-components"
import { gray, yellow, blue, green } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${blue.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 64px;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 1200px) {
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 96px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
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

const WhiteSection = styled.div`
    background-color: ${gray.lighter};
    height: 600px;

    @media (min-width: 1200px) {
        height: 120px;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 337px;
    border-bottom: 20px solid ${blue.base};
    margin-top: -24px;
    margin-bottom: -535px;


    @media (min-width: 1200px) {
        margin-bottom: -235px;
        margin-right: -24px;
    }
`

const TestimonialContainer = styled.div`
    width: 100%;
    max-width: 378px;
    border: 2px solid ${yellow.base};
    background-color: ${yellow.lightest};
    padding: 24px;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
        max-width: 616px;
        padding-left: 64px;
        padding-top: 72px;
        padding-right: 40px;
        padding-bottom: 72px;
        margin-bottom: -186px;
    }

`

const TestimonialText = styled.h2`
    font-family: "aktiv-grotesk-extended";
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;

    @media (min-width: 1200px) {
        width: 100%;
        max-width: 580px;
    }
`

const Cite = styled.h5`
    color: ${blue.dark};
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    margin-top: 24px;
    max-width: 300px;
    width: 100%;
    align-self: center;

    @media (min-width: 1200px) {
        align-self: flex-start;
        max-width: 100%;
        margin-top: 32px;
        font-size: 20px;
    }
`

export default function Testimonial(props) {
    const { testimonial, cite, testimonialImg } = props
    return (
        <>
            <Container>
                <GraySection>
                    <TestimonialContainer>
                        <TestimonialText>" {testimonial} "</TestimonialText>
                        <Cite>{cite}</Cite>
                    </TestimonialContainer>
                    <Image src={testimonialImg} />
                </GraySection>
            </Container>
            <WhiteSection></WhiteSection>
        </>
    )
}
