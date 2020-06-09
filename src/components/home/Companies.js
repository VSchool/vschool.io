import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding: 24px;

    @media (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 1100px) {
        padding-top: 64px;
    }

`

const H4 = styled.h3`
    width: 100%;
    color: ${black};
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
    background-color: ${gray.lighter};
    display: flex;

    & > div:nth-child(1) > div:nth-child(1) > img {
        width: 40px;
    }

    & > div:nth-child(1) > div:nth-child(2) > img {
        width: 100px;
    }

    & > div:nth-child(1) > div:nth-child(3) > img {
        width: 100px;
    }

    & > div:nth-child(1) > div:nth-child(4) > img {
        width: 140px;
    }

    & > div:nth-child(1) > div:nth-child(5) > img {
        width: 60px;
    }

    & > div:nth-child(1) > div:nth-child(6) > img {
        width: 90px;
    }

    & > div:nth-child(2) > div:nth-child(1) > img {
        width: 80px;
    }

    & > div:nth-child(2) > div:nth-child(2) > img {
        width: 110px;
    }

    & > div:nth-child(2) > div:nth-child(3) > img {
        width: 100px;
    }

    & > div:nth-child(2) > div:nth-child(4) > img {
        width: 140px;
    }

    & > div:nth-child(2) > div:nth-child(5) > img {
        width: 150px;
    }

    & > div:nth-child(3) > div:nth-child(1) > img {
        width: 150px;
    }

    & > div:nth-child(3) > div:nth-child(2) > img {
        width: 130px;
    }

    & > div:nth-child(3) > div:nth-child(3) > img {
        width: 120px;
    }

    & > div:nth-child(3) > div:nth-child(4) > img {
        width: 130px;
    }

    & > div:nth-child(3) > div:nth-child(5) > img {
        width: 90px;
    }

    @media (max-width: 700px) {
        & > div:nth-child(1) > div:nth-child(1) > img {
            width: 100%;
            max-width: 35px;
        }

        & > div:nth-child(1) > div:nth-child(2) > img {
            width: 100%;
            max-width: 80px;
        }

        & > div:nth-child(1) > div:nth-child(3) > img {
            width: 100%;
            max-width: 80px;
        }

        & > div:nth-child(1) > div:nth-child(4) > img {
            width: 100%;
        }

        & > div:nth-child(1) > div:nth-child(5) > img {
            width: 100%;
            max-width: 50px;
        }

        & > div:nth-child(1) > div:nth-child(6) > img {
            width: 100%;
            max-width: 80px;
        }

        & > div:nth-child(2) > div:nth-child(1) > img {
            width: 100%;
            max-width: 80px;
        }

        & > div:nth-child(2) > div:nth-child(2) > img {
            width: 100%;
            max-width: 100px;
        }

        & > div:nth-child(2) > div:nth-child(3) > img {
            width: 100%;
            max-width: 90px;
        }

        & > div:nth-child(2) > div:nth-child(4) > img {
            width: 100%;
            max-width: 110px;
        }

        & > div:nth-child(2) > div:nth-child(5) > img {
            width: 100%;
        }

        & > div:nth-child(3) > div:nth-child(1) > img {
            width: 100%;
        }

        & > div:nth-child(3) > div:nth-child(2) > img {
            width: 100%;
            max-width: 110px;
        }

        & > div:nth-child(3) > div:nth-child(3) > img {
            width: 100%;
            max-width: 110px;
        }

        & > div:nth-child(3) > div:nth-child(4) > img {
            width: 100%;
            max-width: 130px;
        }

        & > div:nth-child(3) > div:nth-child(5) > img {
            width: 100%;
            max-width: 70px;
        }
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
    width: 80px;
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
                    {logos.slice(6, 11).map(({ logo }, i) => (
                        <LogoContainer key={logo.url}>
                            <Logo src={logo.url} />
                        </LogoContainer>
                    ))}
                </LogoList>
                <LogoList>
                    {logos.slice(11).map(({ logo }, i) => (
                        <LogoContainer key={logo.url}>
                            <Logo src={logo.url} />
                        </LogoContainer>
                    ))}
                </LogoList>
            </LogoListContainer>
        </Container>
    )
}
