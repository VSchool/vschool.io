import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-bottom: 96px;
    padding-top: 64px;
    justify-content: center;
`

const ImageContainer = styled.div`
    width: 100%;
    max-width: 384px;
    position: relative;
    margin-top: -360px;

    @media (min-width: 1200px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const HeroImg = styled.img`
    width: 100%;
    position: relative;
    z-index: 1;

    @media (min-width: 1200px) {
        display: none;
    }
`

const HeroImgDesktop = styled.img`
    display: none;

    @media (min-width: 1200px) {
        display: block;
        width: 911px;
    }
`

export default function HeroImage(props) {
    const data = useStaticQuery(graphql`
        {
            prismicUofuPrimer {
                data {
                    hero_image_mobile {
                        url
                    }
                    hero_image {
                        url
                    }
                }
            }
        }
    `)
    const {
        hero_image_mobile: { url: mobileImg },
        hero_image: { url: desktopImg },
    } = data.prismicUofuPrimer.data
    return (
        <Container>
            <ImageContainer>
                <HeroImg src={mobileImg} />
                <HeroImgDesktop src={desktopImg} />
            </ImageContainer>
        </Container>
    )
}
