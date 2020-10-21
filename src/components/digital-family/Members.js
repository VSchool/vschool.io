import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { white, gray, black, blue, Button } from "@vschool/lotus"

import AlumniCompanies2 from "../shared/AlumniCompanies2"

const Container = styled.section`
    padding-left: 16px;
    padding-right: 16px;
    & > * {
        text-align: center;
    }
`

const Title = styled.h2`
    margin-bottom: 24px;
`

const Callout = styled.h6`
    color: ${blue.dark};
    margin-bottom: 24px;
`

const Description = styled.p`
    color: ${gray.darker};
`

export default function Members() {
    const data = useStaticQuery(graphql`
        {
            prismicDigitalFamilyPage {
                data {
                    members_title {
                        text
                    }
                    members_subtitle {
                        text
                    }
                    members_description {
                        text
                    }
                }
            }
        }
    `)

    const {
        members_title: { text: title },
        members_subtitle: { text: subtitle },
        members_description: { text: description },
    } = data.prismicDigitalFamilyPage.data

    return (
        <Container>
            <Title>{title}</Title>
            <Callout>{subtitle}</Callout>
            <Description>{description}</Description>
            <AlumniCompanies2 companiesFilter="df"/>
        </Container>
    )
}
