import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray, blue } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${blue.lightest};
    padding: 64px 40px;

    @media (min-width: 800px) {
        padding: 96px 80px;
        height: 570px;
        margin-bottom: 310px;
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

const Description = styled.p`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darker};
    padding-bottom: 64px;
    max-width: 850px;

    @media (min-width: 800px) {
        font-size: 20px;
        line-height: 32px;
    }
`

const Image = styled.img`
    width: 100%;

    @media (min-width: 800px) {
        max-width: 620px;
    }
`

const Hero = () => {
    const data = useStaticQuery(graphql`
        {
            prismicPrecourseCommunitySuccess {
                data {
                    success_description {
                        text
                    }
                    success_image {
                        alt
                        url
                    }
                    success_subtitle {
                        text
                    }
                    success_title {
                        text
                    }
                }
            }
        }
    `)

    const {
        success_description: { text: description },
        success_image: { alt, url },
        success_subtitle: { text: subtitle },
        success_title: { text: title },
    } = data.prismicPrecourseCommunitySuccess.data

    return (
        <Container>
            <Subtitle>{subtitle}</Subtitle>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Image src={url} alt={alt} />
        </Container>
    )
}

export default Hero
