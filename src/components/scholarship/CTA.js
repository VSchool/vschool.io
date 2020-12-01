import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, blue, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"
import { Link as ScrollLink } from "react-scroll"

const Container = styled.section`
    padding-top: 96px;
    padding-bottom: 96px;
    background-color: ${props => props.theme.lightest};
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
    margin-bottom: 24px;
    text-align: center;
    color: ${gray.darker};

    @media (min-width: 800px) {
        margin-bottom: 32px;
    }
`

export default function CTA(props) {
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
                }
            }
        }
    `)

    const {
        cta_title: { text: title },
        cta_text: { text },
        cta_button_text: { text: buttonText },
    } = data.prismicScholarshipPageSharedData.data

    const {
        primary_theme_color: primaryThemeColor,
        secondary_theme_color: secondaryThemeColor,
    } = props
    console.log(primaryThemeColor)

    return (
        <Container>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <ScrollLink to="application-form" smooth={true} offset={-320}>
                <Button size="lg">{buttonText}</Button>
            </ScrollLink>
        </Container>
    )
}
