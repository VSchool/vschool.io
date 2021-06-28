import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray, blue } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding: 64px 40px;

    @media (min-width: 800px) {
        padding: 96px 80px;
    }
`

const Title = styled.h1`
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
    padding-bottom: 8px;

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
        padding-bottom: 24px;
    }
`

const Subtitle = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.base};
    padding-bottom: 8px;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 16px;
    }
`

const Description = styled.p``

const Hero = () => {
    const data = useStaticQuery(graphql`
        {
            prismicPreCourseCommunityForm {
                data {
                    hero_title {
                        text
                    }
                    hero_subtitle {
                        text
                    }
                    hero_description {
                        text
                    }
                }
            }
        }
    `)

    const {
        hero_title: { text: heroTitle },
        hero_subtitle: { text: heroSubtitle },
        hero_description: { text: heroDesc },
    } = data.prismicPreCourseCommunityForm.data

    return (
        <Container>
            <Subtitle>{heroSubtitle}</Subtitle>
            <Title>{heroTitle}</Title>
            <Description>{heroDesc}</Description>
        </Container>
    )
}

export default Hero
