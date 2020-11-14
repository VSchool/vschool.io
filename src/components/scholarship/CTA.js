import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, blue, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const Container = styled.section`
    padding-top: 96px;
    padding-bottom: 96px;
    background-color: ${blue.lightest};
    margin-bottom: 96px;
`

const Title = styled.h2`
    text-align: center;
    margin-bottom: 24px;
    text-align: center;

    @media (min-width: 800px) {
        margin-bottom: 32px;
    }
`

const Text = styled.p`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
    color: ${gray.darker};

    @media (min-width: 800px) {
        margin-bottom: 32px;
    }
`

export default function CTA() {
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipPageSharedData {
                data {
                    cta_title {
                        text
                    }
                    cta_text {
                        text
                    }
                    cta_button_text {
                        text
                    }
                    cta_button_link {
                        url
                    }
                }
            }
        }
    `)

    const {
        cta_title: { text: title },
        cta_text: { text },
        cta_button_text: { text: buttonText },
        cta_button_link: { url: buttonLink },
    } = data.prismicScholarshipPageSharedData.data
    return (
        <Container>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Link to={buttonLink}>
                <Button size="lg">{buttonText}</Button>
            </Link>
        </Container>
    )
}
