import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import CompanyLogoGrid from "../shared/CompanyLogoGrid"

const Container = styled.section`
    padding-bottom: 180px;
`

const Title = styled.h3`
    margin-bottom: 108px;
    max-width: 580px;
    text-align: center;
    font-weight: 800;
`

const LogoContainer = styled.div`
    width: 100%;
    max-width: 845px;
`

export default function Companies() {
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipPageSharedData {
                data {
                    companies_title {
                        text
                    }
                }
            }
            prismicCompanyLogos {
                data {
                    company_logos {
                        logo {
                            url
                            alt
                        }
                        alumni_employer
                    }
                }
            }
        }
    `)

    const {
        companies_title: { text: title },
    } = data.prismicScholarshipPageSharedData.data
    const companyLogos = data.prismicCompanyLogos.data.company_logos
        .filter(company => company.alumni_employer)
        .map(company => company.logo)

    return (
        <Container>
            <Title>{title}</Title>
            <LogoContainer>
                <CompanyLogoGrid logos={companyLogos} />
            </LogoContainer>
        </Container>
    )
}
