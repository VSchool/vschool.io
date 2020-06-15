import React from "react"
import styled from "styled-components"
import { black, orange } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${orange.lightest};
    padding: 24px;
    padding-top: 160px;
    position: relative;
    z-index: 1;

    @media (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`

const H4 = styled.h3`
    width: 100%;
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 28px;
    font-weight: 900;
    text-align: center;
    padding-bottom: 48px;

    @media (min-width: 600px) {
        max-width: 540px;
        padding-bottom: 56px;
    }

    @media (min-width: 840px) {
    }

    @media (min-width: 1200px) {
        font-size: 32px;
    }
`

const LogoListContainer = styled.div`
    background-color: ${orange.lightest};
    display: flex;

    & > div:nth-child(1) > div:nth-child(5) > img {
        width: 60px;
    }

    & > div:nth-child(2) > div:nth-child(1) > img {
        width: 160px;
    }

    & > div:nth-child(2) > div:nth-child(4) > img {
        width: 140px;
    }

    & > div:nth-child(2) > div:nth-child(5) > img {
        width: 140px;
    }

    @media (min-width: 1050px) {
        flex-direction: column;
        width: 100%;
        max-width: 1024px;
    }
`

const LogoList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
    margin: 0 8px;

    @media (min-width: 500px) {
        height: 450px;
        margin: 0 24px;
    }

    @media (min-width: 600px) {
        height: 500px;
    }

    @media (min-width: 700px) {
        height: 550px;
    }

    @media (min-width: 840px) {
        height: 600px;
    }

    @media (min-width: 1050px) {
        flex-direction: row;
        height: 56px;
        margin: 24px 0;
    }
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    @media (min-width: 1050px) {
        width: auto;
        height: auto;
    }
`

const Logo = styled.img`
    width: ${props => (props.i === 0 ? 40 : 64)}px;

    @media (min-width: 400px) {
        width: ${props => (props.i === 0 ? 40 : 72)}px;
    }

    @media (min-width: 500px) {
        width: ${props => (props.i === 0 ? 40 : 80)}px;
    }

    @media (min-width: 600px) {
        width: ${props => (props.i === 0 ? 40 : 88)}px;
    }

    @media (min-width: 700px) {
        width: ${props => (props.i === 0 ? 40 : 96)}px;
    }

    @media (min-width: 840px) {
        width: ${props => (props.i === 0 ? 40 : 104)}px;
    }
`

export default function Companies(props) {
    const { header, logos } = props
    return (
        <Container>
            <H4>{header}</H4>
            <LogoListContainer>
                <LogoList>
                    {logos.slice(0, 6).map(({ logo }, i) => (
                        <LogoContainer key={logo.url}>
                            <Logo i={i} src={logo.url} />
                        </LogoContainer>
                    ))}
                </LogoList>
                <LogoList>
                    {logos.slice(6).map(({ logo }, i) => (
                        <LogoContainer key={logo.url}>
                            <Logo src={logo.url} />
                        </LogoContainer>
                    ))}
                </LogoList>
            </LogoListContainer>
        </Container>
    )
}
