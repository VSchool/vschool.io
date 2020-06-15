import React from "react"
import styled from "styled-components"
import QueryLink from "../shared/QueryLink.js"
import { gray, black, Button } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-bottom: 96px;
    padding-top: 16px;
    justify-content: center;
`

const Header = styled.h2`
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
