import React from "react"
import styled from "styled-components"

const Container = styled.div`
    padding: 24px;

    @media (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 1100px) {
        /* padding-top: 64px; */
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
