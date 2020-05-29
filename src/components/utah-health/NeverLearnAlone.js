import React from "react"
import styled from "styled-components"
import { gray, black, Button } from "@vschool/lotus"
import QueryLink from "../shared/QueryLink.js"

const Container = styled.div`
    background-color: #fad6db;
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
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
    }
`

const Logo = styled.img`
    width: 80px;
    height: 64px;
`

const Header = styled.h2`
    font-family: "aktiv-grotesk";
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${black};
    margin-top: 16px;
    font-weight: 900;

    @media (min-width: 1200px) {
        font-size: 44px;
        line-height: 48px;
    }
`

const Subheader = styled.p`
    font-family: "aktiv-grotesk";
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darker};
    width: 100%;
    max-width: 366px;
    margin-top: 16px;
    margin-bottom: 32px;

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 28px;
        max-width: 520px;
    }
`

const StyledButton = styled(Button)`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
`

const StyledLink = styled(QueryLink)`
    text-decoration: none;
`

export default function NeverLearnAlone(props) {
    const { header, subheader, btnText, logo, link } = props
    return (
        <Container>
            <Logo src={logo} />
            <Header>{header}</Header>
            <Subheader>{subheader}</Subheader>
            <StyledLink to={link}>
                <StyledButton buttonStyle="primary-light">
                    {btnText}
                </StyledButton>
            </StyledLink>
        </Container>
    )
}
