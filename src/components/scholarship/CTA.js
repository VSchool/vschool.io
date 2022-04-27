import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, Button } from "@vschool/lotus"
import { Link as ScrollLink } from "react-scroll"

const Container = styled.section`
    padding-top: 96px;
    padding-bottom: 96px;
    background-color: ${props => props.theme.primary.lightest};
`

const Title = styled.h2`
    margin-bottom: 24px;
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;

    @media (min-width: 800px) {
        margin-bottom: 32px;
        font-size: 44px;
        line-height: 48px;
    }
`

const Text = styled.p`
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darker};

    @media (min-width: 800px) {
        font-size: 20px;
        line-height: 32px;
    }
`

export default function Cta(props) {
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
