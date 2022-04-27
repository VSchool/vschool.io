import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { pink, green, gray } from "@vschool/lotus"
import HeroLayout from "../shared/HeroLayout"

const Section = styled.section`
    padding-top: 96px;
    padding-bottom: 96px;
    background-color: ${pink.lightest};
`

const Title = styled.h1`
    margin-bottom: 24px;
`

const Subtitle = styled.h6`
    margin-bottom: 8px;
    color: ${green.dark};
`

const Text = styled.p`
    color: ${gray.darker};
    margin-bottom: 64px;
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 380px;
    min-height: 400px;
    background: ${props => `url(${props.bgImg}) no-repeat`};
    background-size: contain;
    align-self: center;
`

const Image = styled.img`
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
    height: auto;

    @media (min-width: 1000px) {
        top: -22px;
        width: 85%;
    }
`

export default function Hero() {
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipsIntroPage {
                data {
                    hero_title {
                        text
                    }
                    hero_subtitle {
                        text
                    }
                    hero_text {
                        text
                    }
                    hero_image {
                        url
                        alt
                    }
                    hero_image_background {
                        alt
                        url
                    }
                }
            }
        }
    `)

    const {
        hero_title: { text: title },
        hero_subtitle: { text: subtitle },
        hero_text: { text },
        hero_image: { url: imageUrl, alt: imageAlt },
        hero_image_background: { url: backgroundImageUrl },
    } = data.prismicScholarshipsIntroPage.data

    return (
        <Section>
            <HeroLayout
                text={
                    <>
                        <Title>{title}</Title>
                        <Subtitle>{subtitle}</Subtitle>
                        <Text>{text}</Text>
                    </>
                }
                image={
                    <ImageContainer bgImg={backgroundImageUrl}>
                        <Image src={imageUrl} alt={imageAlt} />
                    </ImageContainer>
                }
            />
        </Section>
    )
}
