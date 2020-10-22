import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { black } from "@vschool/lotus"

const Container = styled.section`
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

function CompanyLogoGrid({ logos }) {
    const companyLogos = logos.map(company => (
        <Logo key={company.url} src={company.url} alt={company.alt} />
    ))

    return (
        <Container>
            <LogoListContainer>{companyLogos}</LogoListContainer>
        </Container>
    )
}

export default CompanyLogoGrid
