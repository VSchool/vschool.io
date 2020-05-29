import React from "react"
import styled from "styled-components"
import QueryLink from "../shared/QueryLink.js"
import { gray, black, Button } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lighter};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 96px;
    padding-top: 16px;
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

const Header = styled.h2`
    font-family: "aktiv-grotesk";
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    color: ${black};
    width: 100%;
    max-width: 366px;
    text-align: center;

    @media (min-width: 1200px) {
        font-size: 32px;
        line-height: 30px;
        max-width: 934px;
        font-weight: 900;
    }
`
const StyledButton = styled(Button)`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
`
const StyledLink = styled(QueryLink)`
    text-decoration: none;
    margin-top: 32px;
`

export default function GoogleForm(props) {
    const { link, btnText, info } = props
    return (
        <Container>
            <Header>{info}</Header>
            <StyledLink to={link}>
                <StyledButton>{btnText}</StyledButton>
            </StyledLink>
        </Container>
    )
}
