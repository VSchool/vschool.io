import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { gray } from "@vschool/lotus"
import backArrow from "../../../images/icons/back_arrow.png"

const Container = styled.div`
    padding-top: 16px;
    display: flex;
    justify-content: center;
    width: 100%;

    @media (min-width: 1000px) {
        padding-top: 64px;
    }
`

const ButtonContainer = styled.div`
    display: flex;
`

const Arrow = styled.img`
    width: 16px;
    margin-right: 12px;
`

const Text = styled.p`
    font-family: "aktiv-grotesk";
    font-size: 14px;
    line-height: 18px;
    color: ${gray.darker};
`

const StyledLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
    width: 100%;
    max-width: 672px;
`

export default function BackButton(props) {
    const { blogFilter } = props
    return (
        <Container>
            <StyledLink to={"/blog"}>
                <ButtonContainer>
                    <Arrow src={backArrow} />
                    <Text>Back to {blogFilter}</Text>
                </ButtonContainer>
            </StyledLink>
        </Container>
    )
}
