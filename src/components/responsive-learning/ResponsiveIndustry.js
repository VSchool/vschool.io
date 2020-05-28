import React from "react"
import styled from "styled-components"
import { green, gray, black } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 96px;
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
        flex-direction: row;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 366px;

    @media (min-width: 1200px) {
        max-width: 316px;
        align-items: flex-start;
        margin-right: 122px;
    }
`

const Header = styled.h2`
    font-family: "aktiv-grotesk";
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
    font-family: "aktiv-grotesk";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    margin-top: 16px;

    @media (min-width: 1200px) {
        margin-top: 32px;
        font-size: 16px;
        line-height: 24px;
        max-width: 316px;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 377px;
    margin-top: 48px;

    @media(min-width: 1200px){
        max-width: 585px;
    }
`

export default function ResponsiveIndustry(props) {
    const { header, info, img } = props
    return (
        <Container>
            <TextContainer>
                <Header>{header}</Header>
                <Info>{info}</Info>
            </TextContainer>
            <Image src={img} />
        </Container>
    )
}
