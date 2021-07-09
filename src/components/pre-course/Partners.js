import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding: 96px 40px;
    max-width: 1200px;
    margin: auto;

    @media (min-width: 800px) {
        padding: 160px 80px;
    }
`

const Title = styled.h1`
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    color: ${gray.darkest};
    width: 100%;
    padding-bottom: 32px;

    @media (min-width: 800px) {
        font-size: 24px;
        line-height: 32px;
        padding-bottom: 48px;
    }
`

const InfoContainer = styled.div`
    @media (min-width: 800px) {
        display: flex;
        max-width: 1200px;
        gap: 40px;
    }
`

const Description = styled.p`
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: ${gray.darker};
    padding: 20px 0 32px;
`

const VSchoolLogo = styled.img`
    height: 48px;
`

function Partners(props) {
    const data = useStaticQuery(graphql`
        {
            prismicPrecourseCommunitiesPageSharedData {
                data {
                    partnership_title {
                        text
                    }
                    partnership_vschool_logo {
                        alt
                        url
                    }
                    partnership_vschool_text {
                        text
                    }
                }
            }
        }
    `)

    const {
        partnership_title: { text: PartnerTitle },
        partnership_vschool_logo: { alt: vschoolLogoAlt, url: vschoolLogoUrl },
        partnership_vschool_text: { text: vSchoolText },
    } = data.prismicPrecourseCommunitiesPageSharedData.data

    const {
        partnership_partner_logo: { url: partnerLogoUrl, alt: partnerLogoAlt },
        partnership_partner_text: { text: partnerDesc },
    } = props

    return (
        <Container>
            <Title>{PartnerTitle}</Title>
            <InfoContainer>
                <div>
                    <img src={partnerLogoUrl} alt={partnerLogoAlt} />
                    <Description>{partnerDesc}</Description>
                </div>
                <div>
                    <VSchoolLogo src={vschoolLogoUrl} alt={vschoolLogoAlt} />
                    <Description>{vSchoolText}</Description>
                </div>
            </InfoContainer>
        </Container>
    )
}

export default Partners
