import React from "react"
import styled from "styled-components"
import { gray, black, green, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const Container = styled.section`
    background-color: ${green.lightest};
    padding-bottom: 56px;
    padding-top: 80px;

    @media (min-width: 1200px) {
        padding-bottom: 96px;
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
    color: ${green.darker};
    font-size: 16px;
    letter-spacing: 0.25px;
    line-height: 24px;
    font-weight: 800;
    margin-bottom: 16px;
    text-align: center;

    @media (min-width: 1200px) {
        text-align: left;
    }
`

const Header = styled.h2`
    color: ${black};
    font-size: 44px;
    font-weight: 900;
    line-height: 48px;
    margin-bottom: 16px;
    text-align: center;
    max-width: 500px;

    @media (min-width: 1200px) {
        text-align: left;
    }
`

const Info = styled.p`
    color: ${gray.darker};
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    max-width: 600px;
    text-align: center;
    margin-bottom: 48px;

    @media (min-width: 1200px) {
        text-align: left;
        max-width: 489px;
        margin-bottom: 0;
    }
`

const StyledButton = styled(Button)`
    width: 268px;
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
        margin-top: 24px;
        margin-bottom: 0px;
    }
`

export default function AboutScholarship(props) {
    const { title, header, info, img, link, btnText } = props
    return (
        <Container>
            <FlexContainer>
                <TextContainer>
                    <Title>{title}</Title>
                    <Header>{header}</Header>
                    <Info>{info}</Info>
                    <Link to={link}>
                        <StyledButton>{btnText}</StyledButton>
                    </Link>
                </TextContainer>

                <Img src={img} />
            </FlexContainer>
        </Container>
    )
}
