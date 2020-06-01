import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"
import Bullets from "./Bullets.js"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 96px;
    padding-top: 96px;
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
        padding-bottom: 96px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
        padding-top: 40px;
    }
`

const InfoContainer = styled.div`
    @media(min-width: 1200px){
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

    @media(min-width: 1200px){
        margin-left: 32px;
    }
`

const Header = styled.h2`
    font-family: "aktiv-grotesk";
    color: ${black};
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;

    @media(min-width: 1200px){
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

    @media(min-width: 1200px){
        max-width: 316px;
    }
`

const DesktopImage = styled.img`
    display: none;

    @media(min-width: 1200px){
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

    @media(min-width: 1200px){
        display: none;
    }
`

export default function ResponsiveAbility(props) {
    const { header, description, desktopImg, mobileImg, bullets } = props
    return (
        <Container>
            <InfoContainer>
                <TextContainer>
                    <Header>{header}</Header>
                    <Info>{description}</Info>
                </TextContainer>
                <DesktopImage src={desktopImg} />
                <MobileImage src={mobileImg} />
            </InfoContainer>
            <Bullets bullets={bullets} />
        </Container>
    )
}
