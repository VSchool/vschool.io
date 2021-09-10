import React from "react"
import HeroLayout from "../../shared/HeroLayout"
import styled from "styled-components"
import {
    purple,
    gray,
    Button,
} from "@vschool/lotus"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"


const Container = styled.section`
    background-color: ${purple.lightest};
    padding: 20px 16px;
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
    padding: 48px 0 16px;

    @media (min-width: 800px) {
        font-size: 56px;
        line-height: 56px;
        padding: 48px 0 24px;
    }
`

const HeroParagraph = styled.p`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    color: ${gray.darker};

    @media (min-width: 800px) {
        font-size: 24px;
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
    color: ${purple.base};
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
    background-color: ${props => props.type === 'packet' ? purple.lightest : gray.darker};
    margin-top: ${props => props.type === 'packet' ? '16px' : 0};
    color: ${props => props.type === 'packet' ? gray.darker : gray.lightest};

    & > img {
        margin: 0 10px;
    }

    @media (min-width: 800px) {
        max-width: 290px;
        margin-top: ${props => props.type === 'packet' ? '24px' : 0};
    }
`

const MainImage = styled.img`
    @media (max-width: 1000px){
        padding-top: 64px;
    }
`

function Hero({submit}) {
    const data = useStaticQuery(graphql`
    {
        prismicPrecoursePartners {
            data {
                hero_arrow {
                    alt
                    url
                }
                hero_button {
                    text
                }
                hero_description {
                    text
                }
                hero_image {
                    alt
                    url
                }
                hero_subtitle {
                    text
                }
                hero_title {
                    text
                }
                packet_download_logo {
                    alt
                    url
                }
            }
        }
    }
    `)

    const {
        hero_arrow: { alt: arrowAlt, url: arrowImg },
        hero_button: { text: heroBtn },
        hero_description: { text: heroDescription},
        hero_image: { alt: heroAlt, url: heroImg },
        hero_subtitle: { text: heroSubtitle },
        hero_title: { text: heroTitle },
        packet_download_logo: { alt: logoAlt, url: logoUrl },
    } = data.prismicPrecoursePartners.data;

    return (
        <Container >
            <HeroLayout
                text={
                    <div>
                        <HeroTitle>{heroTitle}</HeroTitle>
                        <HeroParagraph>{heroDescription}</HeroParagraph>
                        <BlueSubtext>{heroSubtitle}</BlueSubtext>
                        <StyledButton onClick={submit} type="main" >
                            {heroBtn} <img src={arrowImg} alt={arrowAlt} />
                        </StyledButton>
                        <StyledButton onClick={() => navigate("/pre-course-partners/download")} type="packet" >
                            Get Info Packet <img src={logoUrl} alt={logoAlt} />
                        </StyledButton>
                    </div>
                }
                image={
                    <div>
                        <MainImage src={heroImg} alt={heroAlt} />
                    </div>
                }
            />
        </Container>
    )
}

export default Hero
