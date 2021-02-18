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
    font-size: 20px;
    line-height: 32px;
    width: 70%;
    font-weight: 400;
`

const Logo = styled.img`
    width: 30%;
    padding: 20px;
    margin-top: 50px;
`

const PBody = styled.p`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
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
            <PBody
                dangerouslySetInnerHTML={{
                    __html: textHtml
                        .split("<p>")
                        .join(
                            "<p style='font-size: 16px; line-height: 24px;font-weight: 400;'>"
                        ),
                }}
            />
        </Container>
    )
}
