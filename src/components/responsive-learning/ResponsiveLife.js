import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, black, green } from "@vschool/lotus"
import Bullets from "./Bullets.js"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-bottom: 96px;
    padding-top: 16px;
    justify-content: center;

    @media (min-width: 840px) {
        padding-bottom: 96px;
    }

    @media (min-width: 1200px) {
        padding-top: 0;
        margin-top: -32px;
        padding-bottom: 160px;
    }
`

const TextAndTestimonial = styled.div`
    margin-bottom: 32px;

    @media (min-width: 1200px) {
        display: flex;
        padding-bottom: 64px;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 366px;

    @media (min-width: 1200px) {
        align-self: flex-end;
        margin-right: 80px;
    }
`

const Header = styled.h2`
    font-family: "aktiv-grotesk";
    color: ${black};
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;

    @media (min-width: 1200px) {
        font-size: 44px;
        line-height: 48px;
    }
`

const Info = styled.p`
    font-family: "aktiv-grotesk";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    margin-top: 16px;

    @media (min-width: 1200px) {
        margin-top: 32px;
        max-width: 316px;
    }
`

const TestimonialContainer = styled.div`
    width: 100%;
    max-width: 380px;
    padding: 48px 32px;
    background-color: ${green.lightest};
    border: 2px solid ${green.base};
    margin-top: 48px;
    position: relative;

    @media (min-width: 1200px) {
        max-width: 584px;
        padding: 72px 60px;
    }
`

const Testimonial = styled.h3`
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: ${green.darker};
    font-family: "aktiv-grotesk-extended";

    @media (min-width: 1200px) {
        font-size: 24px;
        line-height: 32px;
    }
`

const Cite = styled.p`
    margin-top: 40px;
    font-weight: 800;
    font-size: 13px;
    line-height: 16px;
    font-family: "aktiv-grotesk-extended";
    color: ${green.darkest};

    @media (min-width: 1200px) {
        margin-top: 64px;
        font-size: 20px;
        line-height: 24px;
    }
`

const Course = styled.p`
    margin-top: 5px;
    font-weight: 800;
    font-size: 8px;
    line-height: 10px;
    font-family: "aktiv-grotesk-extended";
    color: ${green.dark};

    @media (min-width: 1200px) {
        margin-top: 8px;
        font-size: 12px;
        line-height: 16px;
    }
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

    @media (min-width: 1200px) {
        width: 172px;
        height: 195px;
        bottom: -48px;
        right: 32px;
    }
`

export default function ResponsiveLife() {
    const data = useStaticQuery(graphql`
        {
            prismicResponsiveLearning {
                data {
                    life_header {
                        text
                    }
                    life_info {
                        text
                    }
                    testimonial {
                        text
                    }
                    testimonial_image {
                        url
                    }
                    cite {
                        text
                    }
                    cite_course {
                        text
                    }
                    life_bullets {
                        bullet
                    }
                }
            }
        }
    `)

    const {
        cite: { text: cite1 },
        cite_course: { text: citeCourse1 },
        life_bullets,
        life_header: { text: lifeHeader },
        life_info: { text: lifeInfo },
        testimonial: { text: testimonial1 },
        testimonial_image: { url: testimonial1Img }
    } = data.prismicResponsiveLearning.data

    return (
        <Container>
            <TextAndTestimonial>
                <TextContainer>
                    <Header>{lifeHeader}</Header>
                    <Info>{lifeInfo}</Info>
                </TextContainer>
                <TestimonialContainer>
                    <Testimonial>" {testimonial1} "</Testimonial>
                    <Cite>{cite1}</Cite>
                    <Course>- {citeCourse1}</Course>
                    <Image src={testimonial1Img} />
                </TestimonialContainer>
            </TextAndTestimonial>
            <Bullets bullets={life_bullets} />
        </Container>
    )
}
