import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, black } from "@vschool/lotus"
import Bullets from "./Bullets.js"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-bottom: 96px;
    padding-top: 96px;
    justify-content: center;

    @media (min-width: 840px) {
        padding-bottom: 96px;
    }

    @media (min-width: 1200px) {
        padding-top: 40px;
    }
`

const InfoContainer = styled.div`
    @media (min-width: 1200px) {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        padding-bottom: 56px;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 366px;

    @media (min-width: 1200px) {
        margin-left: 32px;
    }
`

const Header = styled.h2`
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
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    margin-top: 16px;

    @media (min-width: 1200px) {
        max-width: 316px;
    }
`

const DesktopImage = styled.img`
    display: none;

    @media (min-width: 1200px) {
        width: 100%;
        max-width: 585px;
        display: inline-block;
    }
`

const MobileImage = styled(DesktopImage)`
    display: inline-block;
    width: 100%;
    max-width: 377px;
    margin-top: 48px;

    @media (min-width: 1200px) {
        display: none;
    }
`

export default function ResponsiveAbility() {
    const data = useStaticQuery(graphql`
        {
            prismicResponsiveLearning {
                data {
                    ability_bullets {
                        bullet {
                            text
                        }
                    }
                    ability_description {
                        text
                    }
                    ability_header {
                        text
                    }
                    ability_image {
                        url
                    }
                    ability_image_mobile {
                        url
                    }
                }
            }
        }
    `)

    const {
        ability_bullets,
        ability_description: { text: abilityDescription },
        ability_header: { text: abilityHeader },
        ability_image: { url: abilityImg },
        ability_image_mobile: { url: abilityImgMobile }
    } = data.prismicResponsiveLearning.data

    return (
        <Container>
            <InfoContainer>
                <TextContainer>
                    <Header>{abilityHeader}</Header>
                    <Info>{abilityDescription}</Info>
                </TextContainer>
                <DesktopImage src={abilityImg} />
                <MobileImage src={abilityImgMobile} />
            </InfoContainer>
            <Bullets bullets={ability_bullets} />
        </Container>
    )
}
