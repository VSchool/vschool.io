import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, black, pink, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const HeaderContainer = styled.div`
    background-color: ${pink.lightest};
    padding-top: 64px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 64px;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 96px;
        padding-top: 96px;
    }

    @media (min-width: 1200px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 88px;
        padding-right: 88px;
    }
`

const Container = styled.div`
    @media (min-width: 1200px) {
        margin-right: 56px;
    }
`

const H1 = styled.h1`
    font-family: "aktiv-grotesk";
    font-size: 36px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    color: ${black};
    margin-bottom: 16px;

    @media (min-width: 600px) {
        font-size: 40px;
        width: 460px;
    }

    @media (min-width: 840px) {
        font-size: 48px;
        line-height: 48px;
        width: 500px;
    }

    @media (min-width: 1200px) {
        font-size: 56px;
        width: 550px;
        line-height: 56px;
        text-align: left;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    margin-bottom: 24px;

    @media (min-width: 600px) {
        width: 460px;
    }

    @media (min-width: 840px) {
        font-size: 18px;
        line-height: 26px;
        width: 600px;
    }

    @media (min-width: 1200px) {
        font-size: 20px;
        text-align: left;
        width: 520px;
        margin-bottom: 32px;
    }
`

const StyledButton = styled(Button)`
    width: 268px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    outline: none;

    @media (min-width: 300px) and (max-width: 380px) {
        width: 260px;
    }

    @media (min-width: 1200px) {
        font-size: 16px;
        letter-spacing: 1.14px;
        line-height: 24px;
        height: 56px;
    }
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeroImg = styled.img`
    width: 100%;
    max-width: 440px;
    margin-top: 56px;

    @media (min-width: 1200px) {
        margin-top: 0;
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 1200px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`

function Header(props) {
    const data = useStaticQuery(graphql`
        {
            prismicIsaPage {
                data {
                    financing_sub {
                        text
                    }
                    financing_hero_img {
                        url
                    }
                    financing_header {
                        text
                    }
                    financing_btn_link {
                        url
                    }
                    financing_btn {
                        text
                    }
                    payment_options {
                        payment_type {
                            text
                        }
                        payment_info_link {
                            url
                        }
                        payment_info {
                            text
                        }
                    }
                    isa_sub2 {
                        text
                    }
                    isa_sub1 {
                        text
                    }
                    isa_learn_more_link {
                        url
                    }
                    isa_learn_more_btn {
                        text
                    }
                    isa_info1 {
                        text
                    }
                    isa_info2 {
                        text
                    }
                    isa_header {
                        text
                    }
                    isa_image {
                        url
                    }
                }
            }
        }
    `)

    const {
        financing_header: { text: header },
        financing_sub: { text: sub },
        financing_hero_img: { url: heroImg },
        financing_btn_link: { url: link },
        financing_btn: { text: btnText },
    } = data.prismicIsaPage.data

    return (
        <HeaderContainer>
            <Container>
                <FlexContainer>
                    <H1>{header}</H1>
                </FlexContainer>
                <FlexContainer>
                    <P>{sub}</P>
                </FlexContainer>
                <FlexContainer>
                    <Link to={link}>
                        <StyledButton buttonStyle="primary-dark">
                            {btnText}
                        </StyledButton>
                    </Link>
                </FlexContainer>
            </Container>
            <ImgContainer>
                <HeroImg src={heroImg} />
            </ImgContainer>
        </HeaderContainer>
    )
}

export default Header
