import React from "react"
import styled from "styled-components"
import { Button, gray } from "@vschool/lotus"
import facebook from "../../../images/icons/facebook.png"
import twitter from "../../../images/icons/twitter.png"
import linkdin from "../../../images/icons/linkdin.png"
import othericon from "../../../images/icons/othericon.png"
import QueryLink from "../../shared/QueryLink.js"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 192px;
`

const StyledButton = styled(Button)`
    font-family: "aktiv-grotesk-extended";
    height: 56px;
`

const IconContainer = styled.div`
    width: 100%;
    max-width: 672px;
    border-bottom: 2px solid ${gray.base};
    display: flex;
    justify-content: center;
    margin-top: 64px;
    margin-bottom: 16px;
`

const Icon = styled.img`
    width: 24px;
    margin: 8px;
`

const StyledLink = styled(QueryLink)``

export default function CTAFooter() {
    return (
        <Container>
            <StyledLink to="/hi">
                <StyledButton>Make It Happen</StyledButton>
            </StyledLink>
            <IconContainer>
                <StyledLink to="/hi">
                    <Icon src={twitter} />
                </StyledLink>
                <StyledLink to="/hello">
                    <Icon src={facebook} />
                </StyledLink>
                <StyledLink to="/ahhh">
                    <Icon src={linkdin} />
                </StyledLink>
                <StyledLink to="/huhh">
                    <Icon src={othericon} />
                </StyledLink>
            </IconContainer>
        </Container>
    )
}
