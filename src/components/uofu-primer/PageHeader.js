import React from "react"
import styled from "styled-components"
import { black, gray } from "@vschool/lotus"

const Container = styled.div`
    background-color: #eaeaea;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > p:nth-child(5){
      margin-top: 32px;
    }

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
        padding-top: 96px;
    }
`

const Logo = styled.img`
    width: 180px;
    height: 47px;

    @media(min-width: 1200px){
        width: 319px;
        height: 83px;
    }
`

const Header = styled.h1`
    font-family: "aktiv-grotesk";
    font-size: 36px;
    line-height: 40px;
    color: ${black};
    text-align: center;
    padding-top: 32px;
    padding-bottom: 32px;
    font-weight: 900;
    width: 100%;
    max-width: 366px;

    @media(min-width: 1200px){
        font-size: 56px;
        line-height: 56px;
        max-width: 100%;
    }
`

const Subheader = styled.h5`
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: ${black};
    font-weight: 800;
    padding-bottom: 48px;

    @media(min-width: 1200px){
        font-size: 16px;
        line-height: 24px;
    }
`

const Info = styled.p`
    font-family: "aktiv-grotesk";
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darker};
    width: 100%;
    max-width: 366px;

    @media(min-width: 1200px){
        font-size: 20px;
        line-height: 28px;
        max-width: 848px;
        text-align: left;
    }
`

export default function PageHeader(props) {
    const { logo, header, subheader, info1, info2 } = props
    return (
        <Container>
            <Logo src={logo} />
            <Header>{header}</Header>
            <Subheader>{subheader}</Subheader>
            <Info>{info1}</Info>
            <Info>{info2}</Info>
        </Container>
    )
}
