import React from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lighter};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 96px;
    padding-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
    }
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
    const { desktopImg, mobileImg } = props
    return (
        <Container>
            <ImageContainer>
                <HeroImg src={mobileImg} />
                <HeroImgDesktop src={desktopImg} />
            </ImageContainer>
        </Container>
    )
}
