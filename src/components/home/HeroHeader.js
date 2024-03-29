import React from "react"
import styled from "styled-components"
import { gray, black, green, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const Container = styled.section`
    background-color: ${green.lightest};
    padding-top: 64px;
    padding-bottom: 64px;
    display: block;

    @media (min-width: 840px) {
        padding-bottom: 96px;
        padding-top: 96px;
    }
`

const H1 = styled.h1`
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
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    margin-bottom: 24px;
    width: 460px;

    @media (min-width: 840px) {
        font-size: 18px;
        line-height: 26px;
        width: 600px;
    }

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 28px;

        width: 598px;
    }
`

const H6 = styled.h6`
    color: ${black};
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    padding: 0 8px;
    margin-bottom: 32px;

    @media (min-width: 840px) {
        font-weight: 800;
    }

    @media (min-width: 1200px) {
        padding-left: 160px;
        padding-right: 160px;
        font-size: 16px;
        line-height: 24px;
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
    const { title, sub, invite, btnText } = props

    return (
        <Container>
            <FlexContainer>
                <H1>{title}</H1>
            </FlexContainer>
            <FlexContainer>
                <P>{sub}</P>
            </FlexContainer>
            <H6>{invite}</H6>
            <FlexContainer>
                <Link to="/apply">
                    <StyledButton buttonStyle="primary-dark">
                        {btnText}
                    </StyledButton>
                </Link>
            </FlexContainer>
        </Container>
    )
}

export default HeroHeader
