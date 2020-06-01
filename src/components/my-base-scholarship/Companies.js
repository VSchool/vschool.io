import React from "react"
import styled from "styled-components"
import { blue, black, gray } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${blue.lightest};
    padding-top: 260px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
    }

    @media (min-width: 1200px) {
        padding-top: 160px;
        padding-left: 88px;
        padding-right: 88px;
    }
`

const Header = styled.h2`
    font-family: "aktiv-grotesk";
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: ${black};
    width: 100%;
    max-width: 380px;
    margin-top: 72px;

    @media(max-width: 400px){
      margin-top: 180px;
    }

    @media(min-width: 1200px){
        max-width: 560px;
        line-height: 40px;
    }
`

const LogoListContainer = styled.div`
    background-color: ${blue.lightest};
    display: flex;
    width: 100%;
    max-width: 380px;
    margin-top: 48px;

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

    @media (max-width: 1200px) {
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

    @media (min-width: 1200px) {
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


    @media (min-width: 1200px) {
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

    @media (min-width: 1200px) {
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
            <Header>{header}</Header>
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
