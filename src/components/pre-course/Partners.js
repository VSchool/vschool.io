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

const Partners = () => {
    const data = useStaticQuery(graphql`
        {
            prismicPrecourseCommunitiesPage {
                data {
                    partnership_info {
                        partnership_description {
                            text
                        }
                        partnership_logo {
                            alt
                            url
                        }
                    }
                    partnership_title {
                        text
                    }
                }
            }
        }
    `)

    const {
        partnership_info,
        partnership_title: { text: PartnerTitle },
    } = data.prismicPrecourseCommunitiesPage.data

    const mappedInfo = partnership_info.map(
        ({
            partnership_description: { text: partnerDesc },
            partnership_logo: { alt: logoAlt, url: logoUrl },
        }) => (
            <div>
                <img src={logoUrl} alt={logoAlt} />
                <Description>{partnerDesc}</Description>
            </div>
        )
    )

    return (
        <Container>
            <Title>{PartnerTitle}</Title>
            <InfoContainer>{mappedInfo}</InfoContainer>
        </Container>
    )
}

export default Partners
