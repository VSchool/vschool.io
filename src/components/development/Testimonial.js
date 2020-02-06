import React from "react"
import styled from "styled-components"
import { gray, green, yellow, orange } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${orange.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-top: 24px;

    @media (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 600px) {
        padding-left: 48px;
        padding-right: 48px;
    }


    @media (min-width: 1200px) {
        padding-right: 96px;
        padding-left: 96px;
    }
`

const GraySection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;

    @media (min-width: 840px) {
        flex-direction: row-reverse;
        justify-content: center;
        height: 300px;
    }
`

const WhiteSection = styled.div`
    height: 300px;
    background-color: ${gray.lighter};

    @media(min-width: 400px){
      height: 200px;
    }

    @media (min-width: 840px) {
        height: 120px;
    }
`

const Image = styled.img`
    width: 232px;
    border-bottom: 14px solid ${green.base};

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
    border: 2px solid ${orange.base};
    background-color: ${orange.lightest};
    padding: 24px;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 840px) {
        height: 382px;
        max-width: 740px;
        padding-left: 72px;
        padding-top: 48px;
        padding-bottom: 32px;
        margin-bottom: -126px;
    }

    @media (min-width: 978px) {
        height: 330px;
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
        font-size: 28px;
        align-self: flex-start;
    }

    @media (min-width: 900px) {
        width: 100%;
        font-size: 32px;
        max-width: 90%;
    }
`

const Cite = styled.h5`
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
