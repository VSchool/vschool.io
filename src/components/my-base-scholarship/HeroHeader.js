import React from "react"
import styled from "styled-components"
import { gray, blue, black, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const HeaderContainer = styled.section`
    background-color: ${blue.lightest};
    padding-top: 96px;
    padding-bottom: 64px;
    justify-content: center;

    @media (min-width: 1200px) {
        flex-direction: row;
        justify-content: center;
    }
`

const Container = styled.div`
    @media (min-width: 1200px) {
        margin-right: 56px;
    }
`

const Title = styled.h5`
    color: ${blue.base};
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 20px;
    font-weight: 800;
    margin-bottom: 16px;
    width: 100%;
    max-width: 326px;

    @media (min-width: 1200px) {
        text-align: left;
        margin-bottom: 32px;
    }
`

const H1 = styled.h1`
    font-size: 44px;
    font-weight: 900;
    line-height: 44px;
    color: ${black};
    margin-bottom: 16px;
    margin-top: 8px;
    width: 100%;
    max-width: 366px;

    @media (min-width: 1200px) {
        font-size: 56px;
        width: 550px;
        line-height: 56px;
        text-align: left;
        margin-bottom: 32px;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 24px;
    width: 100%;
    max-width: 366px;

    @media (min-width: 1200px) {
        text-align: left;
        width: 520px;
        margin-bottom: 32px;
        max-width: 496px;
    }
`

const StyledButton = styled(Button)`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    outline: none;
    width: 100%;
    max-width: 366px;

    @media (min-width: 300px) and (max-width: 380px) {
        width: 260px;
    }

    @media (min-width: 1200px) {
        font-size: 16px;
        letter-spacing: 1.14px;
        line-height: 24px;
        height: 56px;
        max-width: 185px;
    }
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeroImg = styled.img`
    width: 100%;
    max-width: 366px;
    margin-top: 56px;

    @media (min-width: 1200px) {
        max-width: 470px;
        margin-top: 0;
    }
`

const Info = styled.p`
    color: ${black};
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 20px;
    font-weight: 800;
    margin-bottom: 40px;
    text-transform: uppercase;
    width: 100%;
    max-width: 309px;

    @media (min-width: 1200px) {
        text-align: left;
        margin-bottom: 48px;
    }
`

const Logos = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

const MyBaseLogo = styled.img`
    width: 100%;
    max-width: 118px;
    margin-bottom: 16px;
`

const ArhnLogo = styled.img`
    margin-left: 24px;
    width: 100%;
    max-width: 140px;
`

export default function HeroHeader(props) {
    const {
        header,
        sub,
        logo,
        heroImg,
        link,
        arhnLogo,
        btnText,
        info,
        title,
    } = props

    return (
        <HeaderContainer>
            <Container>
                <Title>{title}</Title>
                <Logos>
                    <MyBaseLogo src={logo} />
                    <ArhnLogo src={arhnLogo} />
                </Logos>
                <H1>{header}</H1>
                <P>{sub}</P>
                <Info>{info}</Info>
                <Link to={link}>
                    <StyledButton buttonStyle="primary-dark">
                        {btnText}
                    </StyledButton>
                </Link>
            </Container>
            <ImgContainer>
                <HeroImg src={heroImg} />
            </ImgContainer>
        </HeaderContainer>
    )
}
