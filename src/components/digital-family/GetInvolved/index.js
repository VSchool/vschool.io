import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, gray } from "@vschool/lotus"

import HelpMethod from "./HelpMethod"

const Container = styled.section`
    margin-bottom: 96px;
`

const Title = styled.h2`
    text-align: center;
    margin-bottom: 24px;

    @media (min-width: 800px) {
        margin-bottom: 32px;
    }
`

const Subtitle = styled.h6`
    color: ${blue.base};
    text-align: center;
    margin-bottom: 24px;

    @media (min-width: 800px) {
        margin-bottom: 32px;
    }
`

const Description = styled.p`
    color: ${gray.darker};
    text-align: center;
    margin-bottom: 64px;
    max-width: 674px;

    @media (min-width: 800px) {
        margin-bottom: 96px;
    }
`

const HelpMethodsContainer = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
        align-self: center;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 1000px;
    }
`

export default function GetInvolved() {
    const data = useStaticQuery(graphql`
        {
            prismicDigitalFamilyPage {
                data {
                    get_involved_subtitle {
                        text
                    }
                    get_involved_text {
                        text
                    }
                    get_involved_title {
                        text
                    }
                    body {
                        ... on PrismicDigitalFamilyPageBodyGetInvolvedMethod {
                            id
                            primary {
                                method_title {
                                    text
                                }
                            }
                            items {
                                method_option {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const {
        get_involved_title: { text: title },
        get_involved_subtitle: { text: subtitle },
        get_involved_text: { text },
    } = data.prismicDigitalFamilyPage.data

    const helpMethods = data.prismicDigitalFamilyPage.data.body.map(method => (
        <HelpMethod method={method} key={method.id} />
    ))

    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Description>{text}</Description>
            <HelpMethodsContainer>{helpMethods}</HelpMethodsContainer>
        </Container>
    )
}
