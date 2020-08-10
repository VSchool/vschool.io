import React from "react"
import styled from "styled-components"
import { green, purple, black, gray } from "@vschool/lotus"

const Container = styled.section`
    padding-top: 96px;
    background-color: ${green.lightest};
    padding-bottom: 96px;
    justify-content: center;

    @media (min-width: 840px) {
        padding-bottom: 96px;
        padding-top: 96px;
    }

    @media (min-width: 1200px) {
        padding-bottom: 130px;
        flex-direction: row;
    }
`

const TextContainer = styled.div`
    width: 100%;
    max-width: 392px;

    @media(min-width: 1200px){
        max-width: 494px;
        margin-right: 40px;
    }
`

const Title = styled.h4`
    font-size: 14px;
    line-height: 20px;
    font-weight: 800;
    letter-spacing: 0.25px;
    color: ${purple.darker};
    width: 100%;
    max-width: 250px;
    margin-top: 32px;

    @media(min-width: 1200px){
        max-width: 100%;
    }
`


const Header = styled.h1`
    color: ${black};
    font-weight: 900;
    font-size: 44px;
    line-height: 48px;
    margin-top: 16px;
    width: 100%;

    @media (min-width: 1200px) {
        font-size: 56px;
        line-height: 56px;
    }
`

const SubHeader = styled.p`
    font-weight: 500;
    line-height: 24px;
    font-size: 16px;
    color: ${gray.darker};
    margin-top: 32px;
    width: 100%;
    max-width: 392px;

    @media(min-width: 1200px){
        max-width: 100%;
        font-size: 20px;
        line-height: 28px;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 379px;
    margin-top: 64px;

    @media(min-width: 1200px){
        max-width: 494px;
    }
`

export default function PageHeader(props) {
    const { title, header, subHeader, img } = props
    return (
        <Container>
            <TextContainer>
                <Header>{title}</Header>
                <Title>{header}</Title>
                <SubHeader>{subHeader}</SubHeader>
            </TextContainer>
            <Image src={img} />
        </Container>
    )
}
