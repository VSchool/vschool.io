import React from "react"
import styled from "styled-components"
import { gray, black, blue, Button } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${blue.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 56px;
    padding-top: 80px;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
    }

    @media (min-width: 1200px) {
        padding-bottom: 160px;
        padding-left: 88px;
        padding-right: 88px;
        padding-top: 96px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
        flex-direction: row;
        justify-content: center;
    }
`

const Img = styled.img`
    width: 100%;
    max-width: 467px;
    margin-bottom: 56px;

    @media (min-width: 1200px) {
        margin-bottom: 0;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
        align-items: flex-start;
        margin-right: 56px;
    }
`

const Title = styled.h4`
    color: ${blue.base};
    font-family: "aktiv-grotesk-extended";
    letter-spacing: 0.25px;
    line-height: 20px;
    font-weight: 800;
    margin-bottom: 16px;
    text-align: center;
    font-size: 14px;

    @media (min-width: 600px) {
        font-size: 16px;
        line-height: 24px;
    }

    @media (min-width: 1200px) {
        text-align: left;
    }
`

const Header = styled.h2`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 44px;
    font-weight: 900;
    line-height: 56px;
    margin-bottom: 32px;
    text-align: center;
    max-width: 500px;

    @media (min-width: 600px) {
        font-size: 56px;
    }

    @media (min-width: 1200px) {
        text-align: left;
    }
`

const Info = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    max-width: 600px;
    text-align: center;
    margin-bottom: 48px;

    @media (min-width: 600px) {
        font-size: 20px;
    }

    @media (min-width: 1200px) {
        text-align: left;
        max-width: 489px;
        margin-bottom: 0;
    }
`

const StyledButton = styled(Button)`
    width: 305px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    outline: none;
    margin-bottom: 48px;

    @media (min-width: 300px) and (max-width: 380px) {
        width: 260px;
    }

    @media (min-width: 1200px) {
        font-size: 16px;
        letter-spacing: 1.14px;
        line-height: 24px;
        height: 56px;
        margin-top: 32px;
        margin-bottom: 0px;
    }
`

export default function HeroHeader(props) {
    const { title, header, info, img, link, btnText } = props
    return (
        <Container>
            <FlexContainer>
                <TextContainer>
                    <Header>{header}</Header>
                    <Title>{title}</Title>
                    <Info>{info}</Info>
                    <a href={link}>
                        <StyledButton>{btnText}</StyledButton>
                    </a>
                </TextContainer>
                <Img src={img} />
            </FlexContainer>
        </Container>
    )
}
