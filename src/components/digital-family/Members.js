import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, blue } from "@vschool/lotus"

import CompanyLogoGrid from "../shared/CompanyLogoGrid"

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
                    members_list {
                        document {
                            ... on PrismicCompanyLogos {
                                id
                                data {
                                    company_logos {
                                        digital_family_member
                                        logo {
                                            alt
                                            url
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const {
        members_title: { text: title },
        members_subtitle: { text: subtitle },
        members_description: { text: description },
        members_list,
    } = data.prismicDigitalFamilyPage.data

    const logos = members_list.document.data.company_logos
        .filter(company => company.digital_family_member)
        .map(company => company.logo)

    return (
        <Container>
            <Title>{title}</Title>
            <Callout>{subtitle}</Callout>
            <Description>{description}</Description>
            <CompanyLogoGrid logos={logos} />
        </Container>
    )
}
