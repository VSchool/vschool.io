import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray } from "@vschool/lotus"

const Container = styled.section`
    padding-bottom: 96px;
`

const Title = styled.h2`
    text-align: center;
    margin: auto;
`

const Subtitle = styled.p`
    text-align: center;
    margin: 40px auto;
    font-size: 16px;
    line-height: 32px;
    font-weight: 400;

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
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        margin-bottom: 16px;
    }

    @media (min-width: 800px) {
        column-count: 2;
        column-gap: 20px;
        margin-bottom: 24px;
        font-size: 16px;
    }
`

export default function Details() {
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipPage {
                data {
                    details_logo {
                        alt
                        url
                    }
                    details_subtitle {
                        text
                    }
                    details_text {
                        html
                    }
                    details_title {
                        text
                    }
                }
            }
        }
    `)

    const {
        details_logo: { url: logoUrl, alt: logoAlt },
        details_subtitle: { text: subtitle },
        details_text: { html: textHtml },
        details_title: { text: title },
    } = data.prismicScholarshipPage.data

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
