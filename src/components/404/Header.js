import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { gray, black, blue } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const Container = styled.section`
    background-color: ${gray.light};
    padding-top: 64px;
    padding-bottom: 64px;
    display: block;

    @media (min-width: 840px) {
        padding-bottom: 96px;
        padding-top: 96px;
    }
`

const Title = styled.h6`
    color: ${black};
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 24px;
    margin-bottom: 16px;
    text-align: center;
    font-weight: 800;

    @media (max-width: 400px) {
        font-size: 12px;
    }

    @media (min-width: 1200px) {
        font-size: 16px;
    }
`

const H1 = styled.h1`
    font-size: 36px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    color: ${black};
    margin-bottom: 16px;

    @media (min-width: 600px) {
        font-size: 40px;
    }

    @media (min-width: 840px) {
        font-size: 48px;
        line-height: 48px;
    }

    @media (min-width: 1200px) {
        font-size: 56px;
        padding-left: 160px;
        padding-right: 160px;
        line-height: 56px;
    }
`

const P = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    margin-bottom: 24px;
    width: 460px;

    @media (min-width: 840px) {
        font-size: 18px;
        line-height: 26px;
        width: 600px;
    }

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 28px;
        width: 700px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

const LinksContainer = styled.div`
    display: flex;
    width: 377px;
    justify-content: space-between;

    @media (max-width: 425px) {
        flex-direction: column;
        align-items: center;
    }
`

const SLink = styled(Link)`
    text-decoration: none;
    color: ${blue.base};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    @media (max-width: 425px) {
        margin: 8px 0;
    }
`

function HeroHeader() {
    const data = useStaticQuery(graphql`
        {
            prismic404Page {
                data {
                    link3_text {
                        text
                    }
                    link3 {
                        url
                    }
                    link2_text {
                        text
                    }
                    link2 {
                        url
                    }
                    link1_text {
                        text
                    }
                    page_title {
                        text
                    }
                    page_sub {
                        text
                    }
                    page_header {
                        text
                    }
                }
            }
        }
    `)
    const {
        page_title: { text: title },
        page_header: { text: header },
        page_sub: { text: sub },
        link1_text: { text: link1Text },
        link2_text: { text: link2Text },
        link3_text: { text: link3Text },
        link2: { url: link2Url },
        link3: { url: link3Url },
    } = data.prismic404Page.data

    return (
        <Container>
            <Title>{title}</Title>
            <FlexContainer>
                <H1>{header}</H1>
            </FlexContainer>
            <FlexContainer>
                <P>{sub}</P>
            </FlexContainer>
            <FlexContainer>
                <LinksContainer>
                    <SLink to="/">{link1Text}</SLink>
                    <SLink to={link2Url}>{link2Text}</SLink>
                    <SLink to={link3Url}>{link3Text}</SLink>
                </LinksContainer>
            </FlexContainer>
        </Container>
    )
}

export default HeroHeader
