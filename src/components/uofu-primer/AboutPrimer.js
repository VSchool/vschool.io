import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lighter};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 96px;
    padding-top: 64px;
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
`

const InfoContainer = styled.div`
    width: 100%;
    max-width: 366px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Info = styled.p`
    font-family: "aktiv-grotesk";
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    margin-top: 24px;
`

export default function AboutPrimer(props) {
    const { header, info1, info2 } = props
    return (
        <Container>
            <Header>{header}</Header>
            <InfoContainer>
                <Info>{info1}</Info>
                <Info>{info2}</Info>
            </InfoContainer>
        </Container>
    )
}
