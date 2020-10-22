import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, yellow, gray } from "@vschool/lotus"

import HelpMethod from "./HelpMethod"

const Title = styled.h2`
    text-align: center;
    margin-bottom: 24px;
`

const Subtitle = styled.h6`
    color: ${blue.base};
    text-align: center;
    margin-bottom: 24px;
`

const Description = styled.p`
    color: ${gray.darker};
    text-align: center;
    margin-bottom: 64px;
`

const HelpMethodsContainer = styled.div`
    align-self: flex-start;
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
        get_involved_text: { text: text },
    } = data.prismicDigitalFamilyPage.data

    const helpMethods = data.prismicDigitalFamilyPage.data.body.map(method => (
        <HelpMethod method={method} key={method.id} />
    ))
    console.log(data.prismicDigitalFamilyPage.data.body)

    return (
        <section>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Description>{text}</Description>
            <HelpMethodsContainer>{helpMethods}</HelpMethodsContainer>
        </section>
    )
}
