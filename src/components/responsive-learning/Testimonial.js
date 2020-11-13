import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, purple } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-bottom: 265px;
    padding-top: 96px;
    justify-content: center;

    @media (min-width: 1200px) {
        flex-direction: row-reverse;
        padding-top: 0;
        padding-bottom: 160px;
        height: 0px;
    }
`

const TestimonialContainer = styled.div`
    border: 2px solid ${purple.base};
    background-color: ${purple.lightest};
    padding-top: 56px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 125px;
    position: relative;
    margin-top: -284px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 378px;

    @media (min-width: 1200px) {
        max-width: 616px;
        padding-left: 64px;
        padding-bottom: 72px;
        padding-right: 40px;
    }
`

const TestimonialText = styled.h3`
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

    @media (min-width: 1200px) {
        display: none;
    }
`

const ImageDesktop = styled.img`
    display: none;

    @media (min-width: 1200px) {
        display: inline-block;
        width: 320px;
        position: relative;
        right: -24px;
        top: -80px;
        border-bottom: 20px solid ${purple.base};
    }
`

export default function Testimonial() {
    const data = useStaticQuery(graphql`
        {
            prismicResponsiveLearning {
                data {
                    testimonial2 {
                        text
                    }
                    testimonial2_cite_course {
                        text
                    }
                    testimonial2_cite {
                        text
                    }
                    testimonial2_image {
                        url
                    }
                }
            }
        }
    `)

    const {
        testimonial2: { text: testmonial2 },
        testimonial2_cite_course: { text: testimonial2CiteCourse },
        testimonial2_cite: { text: testimonial2Cite },
        testimonial2_image: { url: testimonial2Img }
    } = data.prismicResponsiveLearning.data

    return (
        <Container>
            <TestimonialContainer>
                <TestimonialText>{testmonial2}</TestimonialText>
                <Cite>{testimonial2Cite}</Cite>
                <Course>{testimonial2CiteCourse}</Course>
                <Image src={testimonial2Img} />
            </TestimonialContainer>
            <ImageDesktop src={testimonial2Img} />
        </Container>
    )
}
