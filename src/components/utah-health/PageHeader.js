import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { black, gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: #eaeaea;
    padding-top: 64px;
    justify-content: center;

    & > p:nth-child(5) {
        margin-top: 32px;
    }

    @media (min-width: 1200px) {
        padding-top: 96px;
    }
`

const Logo = styled.img`
    width: 180px;
    height: 47px;

    @media (min-width: 1200px) {
        width: 319px;
        height: 83px;
    }
`

const Header = styled.h1`
    font-size: 36px;
    line-height: 40px;
    color: ${black};
    text-align: center;
    padding-top: 32px;
    padding-bottom: 32px;
    font-weight: 900;
    width: 100%;
    max-width: 366px;

    @media (min-width: 1200px) {
        font-size: 56px;
        line-height: 56px;
        max-width: 100%;
    }
`

const Subheader = styled.h5`
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: ${black};
    font-weight: 800;
    padding-bottom: 48px;

    @media (min-width: 1200px) {
        font-size: 16px;
        line-height: 24px;
    }
`

const Info = styled.p`
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darker};
    width: 100%;
    max-width: 366px;

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 28px;
        max-width: 848px;
        text-align: left;
    }
`

export default function PageHeader() {
    const data = useStaticQuery(graphql`
        {
            prismicUofuPrimer {
                data {
                    page_header {
                        text
                    }
                    page_info1 {
                        text
                    }
                    page_info2 {
                        text
                    }
                    page_subheader {
                        text
                    }
                    ulogo {
                        url
                    }
                }
            }
        }
    `)

    const {
        page_header: { text: header },
        page_info1: { text: info1 },
        page_info2: { text: info2 },
        page_subheader: { text: subheader },
        ulogo: { url: logo },
    } = data.prismicUofuPrimer.data

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
