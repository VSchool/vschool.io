import React from "react"
import styled from "styled-components"
import { gray, black, green } from "@vschool/lotus"
import Bullets from "./Bullets.js"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 96px;
    padding-top: 16px;
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
        padding-bottom: 96px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
    }
`

const TextAndTestimonial = styled.div`
    margin-bottom: 32px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 366px;
`

const Header = styled.h2`
    font-family: "aktiv-grotesk";
    color: ${black};
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;
`

const Info = styled.p`
    font-family: "aktiv-grotesk";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    margin-top: 16px;
`

const TestimonialContainer = styled.div`
    width: 100%;
    max-width: 380px;
    padding: 48px 32px;
    background-color: ${green.lightest};
    border: 2px solid ${green.base};
    margin-top: 48px;
    position: relative;
`

const Testimonial = styled.h4`
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: ${green.darker};
    font-family: "aktiv-grotesk-extended";
`

const Cite = styled.p`
    margin-top: 40px;
    font-weight: 800;
    font-size: 13px;
    line-height: 16px;
    font-family: "aktiv-grotesk-extended";
    color: ${green.darkest};
`

const Course = styled.p`
    margin-top: 5px;
    font-weight: 800;
    font-size: 8px;
    line-height: 10px;
    font-family: "aktiv-grotesk-extended";
    color: ${green.dark};
`

const Image = styled.img`
    border-bottom: 13px solid ${green.base};
    position: absolute;
    width: 111px;
    height: 131px;
    right: 16px;
    bottom: -32px;

    @media (max-width: 360px) {
        right: 8px;
    }
`

export default function ResponsiveLife(props) {
    const {
        header,
        description,
        testimonial,
        cite,
        img,
        course,
        bullets,
    } = props
    return (
        <Container>
            <TextAndTestimonial>
                <TextContainer>
                    <Header>{header}</Header>
                    <Info>{description}</Info>
                </TextContainer>
                <TestimonialContainer>
                    <Testimonial>" {testimonial} "</Testimonial>
                    <Cite>{cite}</Cite>
                    <Course>{course}</Course>
                    <Image src={img} />
                </TestimonialContainer>
            </TextAndTestimonial>
            <Bullets bullets={bullets} />
        </Container>
    )
}
