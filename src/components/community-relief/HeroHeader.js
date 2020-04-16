import React from "react"
import styled from "styled-components"
import { gray, black, green, Button } from "@vschool/lotus"


const Container = styled.div`
    background-color: ${green.lightest};
    padding-top: 64px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 64px;

    @media (min-width: 600px){
        padding-left: 32px; 
        padding-right: 32px;
    }

    @media (min-width: 840px){
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 80px;
        padding-top: 96px;
    }

    @media (min-width: 1200px){
        padding-left: 88px;
        padding-right: 88px;
    }
`

const H1 = styled.h1`
    font-family: "aktiv-grotesk";
    font-size: 36px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    color: ${black};
    margin-bottom: 16px;
    width: 460px;

    @media (min-width: 600px) {
        font-size: 40px;
    }

    @media (min-width: 840px) {
        font-size: 48px;
        line-height: 48px;
        width: 600px;
    }

    @media (min-width: 1200px) {
        font-size: 56px;
        width: 946px;
        padding-left: 160px;
        padding-right: 160px;
        line-height: 56px;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    margin-bottom: 48px;
    width: 460px;

    @media (min-width: 840px) {
        font-size: 18px;
        line-height: 26px;
        width: 640px;
    }

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 28px;

        width: 598px;
    }
`

const StyledButton = styled(Button)`
    width: 318px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    outline: none;

    @media (min-width: 300px) and (max-width: 380px) {
        width: 286px;
    }

    @media (min-width: 1200px) {
        font-size: 16px;
        letter-spacing: 1.14px;
        line-height: 24px;
        height: 56px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

function HeroHeader(props) {
    const {
        title,
        sub,
        link,
        btnText
    } = props

    return (
        <Container>
            <FlexContainer>
                <H1>{title}</H1>
            </FlexContainer>
            <FlexContainer>
                <P>{sub}</P>
            </FlexContainer>
            <FlexContainer>
                <a href={link}>
                    <StyledButton buttonStyle="primary-dark">
                        {btnText}
                    </StyledButton>
                </a>
            </FlexContainer>
        </Container>
    )
}

export default HeroHeader
