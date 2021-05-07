import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, gray } from "@vschool/lotus"


const Container = styled.section`
    padding-bottom: 96px;
`

const Title = styled.h2`
    text-align: center;
    margin: auto;

    font-weight: 900;
    font-size: 44px;
    line-height: 48px;
    color: #21201F;
    margin-bottom: 32px;
`

const Subtitle = styled.p`
    /* text-align: center;
    margin: 40px auto;
    font-size: 16px;
    line-height: 32px;
    font-weight: 400; */

    margin-bottom: 32px;
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.dark};

    @media (min-width: 800px) {
        max-width: 848px;
        font-size: 20px;
    }
`

const Logo = styled.img`
    width: 100%;
    padding: 20px;
    margin-top: 50px;

    @media (min-width: 800px) {
        max-width: 450px;
    }
`

const Body = styled.div`
    max-width: 1000px;

    & > p {
        /* font-size: 14px;
        line-height: 24px; */
        /* font-weight: 400; */
        margin-bottom: 16px;

        font-size: 20px;
        line-height: 32px;
        color: ${gray.darker};
        font-weight: normal;
        text-align: center;
    }

    @media (min-width: 800px) {
        /* column-count: 2;
        column-gap: 20px;
        margin-bottom: 24px;
        font-size: 16px;
        margin-bottom: 24px; */
        font-size: 16px;
        max-width: 800px;
    }
`

export default function Details(props) {
    const {
        details_logo: { url: logoUrl, alt: logoAlt },
        details_subtitle: { text: subtitle },
        details_text: { html: textHtml },
        details_title: { text: title },
    } = props

    return (
        <Container>
            <Logo src={logoUrl} alt={logoAlt} />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Body
                dangerouslySetInnerHTML={{
                    __html: textHtml,
                }}
            />
        </Container>
    )
}
