import React from "react"
import HeroLayout from "../shared/HeroLayout"
import styled from "styled-components"
import {
    blue,
    pink,
    purple,
    red,
    orange,
    yellow,
    green,
    gray,
    Button,
} from "@vschool/lotus"
import { useStaticQuery, graphql } from "gatsby"

const colors = { blue, pink, purple, red, orange, yellow, green, gray }

const Container = styled.section`
    background-color: ${({ $bgColor }) => $bgColor};
    padding: 20px 40px;
    margin-bottom: -200px;

    @media (min-width: 800px) {
        margin-bottom: 0;
        padding: 96px 80px;
    }
`

const HeroTitle = styled.h1`
    font-size: 44px;
    line-height: 48px;
    font-weight: 900;
    color: ${gray.darkest};
    padding: 10px 0 16px;

    @media (min-width: 800px) {
        font-size: 56px;
        line-height: 56px;
        padding: 10px 0 24px;
    }
`

const HeroParagraph = styled.p`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};

    @media (min-width: 800px) {
        font-size: 20px;
        line-height: 32px;
    }
`

const BlueSubtext = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.base};
    padding: 24px 0;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        padding: 32px 0;
    }
`

const StyledButton = styled(Button)`
    font-size: 14px;
    line-height: 16px;
    padding: 25px 45px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;

    & > img {
        margin: 0 10px;
    }

    @media (min-width: 800px) {
        max-width: 290px;
    }
`

const ImageContainer = styled.div`
    margin-top: 64px;

    @media (min-width: 800px){
        margin-top: 0;
    }
`


function Hero(props) {
    const data = useStaticQuery(graphql`
        {
            prismicPrecourseCommunitiesPageSharedData {
                data {
                    hero_title {
                        text
                    }
                    hero_courses {
                        text
                    }
                    hero_button_text {
                        text
                    }
                    start_right_arrow {
                        alt
                        url
                    }
                    partnership_vschool_logo {
                        alt
                        url
                    }
                }
            }
        }
    `)

    const {
        hero_button_text: { text: heroBtn },
        hero_courses: { text: heroCourses },
        hero_title: { text: heroTitle },
        start_right_arrow: { alt: arrowAlt, url: arrowUrl },
    } = data.prismicPrecourseCommunitiesPageSharedData.data

    const {
        hero_image: { alt: imgAlt, url: imgUrl },
        hero_text: { text: heroText },
        hero_background_color: heroBgColor,
        partnership_partner_logo: { url: partnerLogoUrl, alt: partnerLogoAlt },
    } = props

    const backgroundColor = colors[heroBgColor].lightest

    return (
        <Container $bgColor={backgroundColor}>
            <HeroLayout
                text={
                    <div>
                        <img style={{width: '150px'}} src={partnerLogoUrl} alt={partnerLogoAlt} />
                        <HeroTitle>{heroTitle}</HeroTitle>
                        <HeroParagraph>{heroText}</HeroParagraph>
                        <BlueSubtext>{heroCourses}</BlueSubtext>
                        <StyledButton onClick={props.submit}>
                            {heroBtn} <img src={arrowUrl} alt={arrowAlt} />
                        </StyledButton>
                    </div>
                }
                image={
                    <ImageContainer>
                        <img src={imgUrl} alt={imgAlt} />
                    </ImageContainer>
                }
            />
        </Container>
    )
}

export default Hero
