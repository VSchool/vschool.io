import React from "react"
import styled from "styled-components"
import { gray, green, yellow, orange } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.light};
    padding-bottom: 24px;
    padding-top: 24px;

    @media (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 1200px) {
        padding-top: 64px;
    }
`

const GraySection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 680px;

    @media (max-width: 365px) {
        height: 750px;
    }

    @media (min-width: 840px) {
        flex-direction: row-reverse;
        justify-content: center;
        height: 300px;
    }
`

const WhiteSection = styled.div`
    background-color: ${gray.lighter};

    @media (min-width: 840px) {
        height: 120px;
    }
`

const Image = styled.img`
    width: 232px;
    border-bottom: 15px solid ${green.base};
    margin-top: -24px;

    @media (min-width: 400px) {
        margin-top: -32px;
    }

    @media (min-width: 840px) {
        margin-bottom: -151px;
        margin-right: -24px;
    }
`

const TestimonialContainer = styled.div`
    height: 520px;
    width: 100%;
    max-width: 350px;
    border: 2px solid ${yellow.base};
    background-color: ${yellow.lighter};
    padding: 24px;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 840px) {
        height: 382px;
        max-width: 740px;
        padding-left: 72px;
        padding-top: 44px;
        padding-bottom: 32px;
        margin-bottom: -126px;
    }

    @media (min-width: 1000px) {
        padding-top: 62px;
        padding-bottom: 72px;
    }
`

const TestimonialText = styled.h2`
    color: ${orange.darkest};
    font-family: "aktiv-grotesk-extended";
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    width: 100%;
    max-width: 300px;
    max-width: 320px;

    @media (min-width: 840px) {
        max-width: 390px;
        align-self: flex-start;
    }

    @media (min-width: 1000px) {
        width: 100%;
        font-size: 32px;
        max-width: 580px;
    }
`

const Cite = styled.h3`
    color: ${yellow.darker};
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 18px;
    margin-top: 24px;
    max-width: 300px;
    align-self: center;

    @media (max-width: 500px) {
        font-size: 16px;
        max-width: 320px;
    }

    @media (min-width: 840px) {
        font-size: 20px;
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
            <WhiteSection></WhiteSection>
        </>
    )
}
