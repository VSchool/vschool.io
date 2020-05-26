import React from "react"
import styled from "styled-components"
import { gray, purple } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 265px;
    padding-top: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
        flex-direction: row-reverse;
        padding-top: 0;
        padding-bottom: 160px;
        height: 0px;
    }
`

const TestimonialContainer = styled.div`
    border: 2px solid ${purple.base};
    background-color: ${purple.lightest};
    padding-top: 80px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 125px;
    position: relative;
    margin-top: -284px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 378px;

    @media(min-width: 1200px){
        max-width: 616px;
        padding-left: 64px;
        padding-bottom: 72px;
        padding-right: 40px;
    }
`

const TestimonialText = styled.h4`
    font-family: "aktiv-grotesk-extended";
    color: ${purple.darker};
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
`

const Cite = styled.p`
    font-family: "aktiv-grotesk-extended";
    color: ${purple.darkest};
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    margin-top: 32px;
`

const Course = styled.p`
    font-family: "aktiv-grotesk-extended";
    color: ${purple.darker};
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    margin-top: 8px;
    letter-spacing: 0.5px;
`

const Image = styled.img`
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    max-width: 320px;
    bottom: -265px;
    align-self: center;
    border-bottom: 20px solid ${purple.base};

    @media (max-width: 370px) {
        max-width: 250px;
        bottom: -170px;
    }

    @media(min-width: 1200px){
        display: none;
    }
`

const ImageDesktop = styled.img`
    display: none;

    @media(min-width: 1200px){
        display: inline-block;
        width: 320px;
        position: relative;
        right: -24px;
        top: -80px;
        border-bottom: 20px solid ${purple.base};
    }
`

export default function Testimonial(props) {
    const { testimonial, cite, course, img } = props
    return (
        <Container>
            <TestimonialContainer>
                <TestimonialText>{testimonial}</TestimonialText>
                <Cite>{cite}</Cite>
                <Course>{course}</Course>
                <Image src={img} />
            </TestimonialContainer>
            <ImageDesktop src={img}/>
        </Container>
    )
}
