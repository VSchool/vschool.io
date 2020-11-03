import React from "react"
import styled from "styled-components"

const LogoListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-flow: row;
    gap: 24px;

    @media (max-width: 450px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const Logo = styled.img`
    grid-column-start: span 1;
    justify-self: center;
    align-self: center;
    width: 100%;
`

function CompanyLogoGrid({ logos }) {
    const companyLogos = logos.map(company => (
        <Logo key={company.url} src={company.url} alt={company.alt} />
    ))

    return <LogoListContainer>{companyLogos}</LogoListContainer>
}

export default CompanyLogoGrid
