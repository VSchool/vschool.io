/**
A self-contained component that retrieves its own data from a 
componentized Prismic document. This way, we don't need to repeat
the companies all over the website in Prismic, but can use a single
document in Prismic to maintain all the logos

TODO: Find a better way to display the logos in the grid than doing
the crazy .slice() trick from below and resizing each. and. every. logo.
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { black } from "@vschool/lotus"
import { useFilteredCompanies } from "../../hooks/useFilteredCompanies"

const Container = styled.section`
    background-color: ${props => props.backgroundColor};
    padding: 24px;

    @media (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 1100px) {
        padding-top: 64px;
    }
`

const H4 = styled.h3`
    width: 100%;
    color: ${black};
    font-size: 28px;
    font-weight: 900;
    text-align: center;
    padding-bottom: 48px;

    @media (min-width: 600px) {
        max-width: 540px;
        padding-bottom: 56px;
    }

    @media (min-width: 840px) {
    }

    @media (min-width: 1200px) {
        font-size: 32px;
    }
`

const LogoListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
    grid-gap: 24px;

    @media (min-width: 800px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

const Logo = styled.img`
    grid-column-start: span 1;
    justify-self: center;
    align-self: center;
    width: 100%;
    max-width: 256px;
`

function AlumniCompanies(props) {
    const data = useStaticQuery(graphql`
        {
            prismicAlumniCompanies {
                data {
                    company_logos {
                        digital_family
                        company_logo {
                            url
                        }
                        fsjs_alumn_works_here
                        xd_alumn_works_here
                    }
                }
            }
        }
    `)

    const { company_logos: logos } = data.prismicAlumniCompanies.data

    const filteredCompanies = useFilteredCompanies(props.companiesFilter)
    console.log(filteredCompanies)

    const companyImages = filteredCompanies.map(company => (
        <Logo src={company.company_logo.url} alt="" />
    ))

    return (
        <Container backgroundColor={props.backgroundColor}>
            <LogoListContainer>{companyImages}</LogoListContainer>
        </Container>
    )
}

export default AlumniCompanies
