import React from "react"
import HeroLayout from "../shared/HeroLayout"
import styled from "styled-components"
import { gray, Button, blue } from "@vschool/lotus"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.section`
    background-color: ${blue.lightest};
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

const Hero = () => {
    const data = useStaticQuery(graphql`
        {
            prismicPrecourseCommunitiesPage {
                data {
                    hero_button {
                        text
                    }
                    hero_image {
                        alt
                        url
                    }
                    hero_subtitle {
                        text
                    }
                    hero_tag {
                        text
                    }
                    hero_title {
                        text
                    }
                    start_right_arrow {
                        alt
                        url
                    }
                }
            }
        }
    `)

    const {
        hero_button: { text: heroBtn },
        hero_image: { alt: imgAlt, url: imgUrl },
        hero_subtitle: { text: heroSub },
        hero_tag: { text: heroTag },
        hero_title: { text: heroTitle },
        start_right_arrow: { alt: arrowAlt, url: arrowUrl },
    } = data.prismicPrecourseCommunitiesPage.data

    return (
        <Container>
            <HeroLayout
                text={
                    <div>
                        <HeroTitle>{heroTitle}</HeroTitle>
                        <HeroParagraph>{heroSub}</HeroParagraph>
                        <BlueSubtext>{heroTag}</BlueSubtext>
                        <StyledButton>
                            {heroBtn} <img src={arrowUrl} alt={arrowAlt} />
                        </StyledButton>
                    </div>
                }
                image={
                    <div>
                        <img src={imgUrl} alt={imgAlt} />
                    </div>
                }
            />
        </Container>
    )
}

export default Hero
