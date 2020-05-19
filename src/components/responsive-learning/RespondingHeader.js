import React from "react"
import styled from "styled-components"
import { gray, purple } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 96px;
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
        padding-bottom: 96px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
    }
`

const Header = styled.h1`
    font-family: "aktiv-grotesk";
    text-align: center;
    font-weight: 800;
    font-size: 44px;
    line-height: 48px;
    width: 100%;
    max-width: 366px;
`

const SubHeader = styled.h4`
    font-family: "aktiv-grotesk-extended";
    color: ${purple.darker};
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    margin-top: 16px;
    text-align: center;
`

const Description = styled.p`
    font-family: "aktiv-grotesk";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    margin-top: 16px;
    width: 100%;
    max-width: 366px;
`

export default function RespondingHeader(props) {
    const { header, subHeader, description } = props
    return (
        <Container>
            <Header>{header}</Header>
            <SubHeader>{subHeader}</SubHeader>
            <Description>{description}</Description>
        </Container>
    )
}
