import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { black, green, gray, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"
import CoursesNew from "../shared/CoursesNew"
import CompanyLogoGrid from "../shared/CompanyLogoGrid"

const Container = styled.section`
    align-items: center;
    margin-bottom: 160px;
`

const Title = styled.h2`
    margin-bottom: 24px;
    text-align: center;

    @media (min-width: 1000px) {
        margin-bottom: 32px;
    }
`

const Subtitle = styled.h6`
    margin-bottom: 64px;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: ${green.dark};

    @media (min-width: 1000px) {
        margin-bottom: 96px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1000px) {
        flex-direction: row;
        align-items: center;

        & > div {
            flex-basis: 50%;
        }
    }
`

const LogoContainer = styled.div``
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const DescriptionTitle = styled.h3`
    margin-bottom: 16px;
`

const DescriptionText = styled.p`
    color: ${gray.darker};
    margin-bottom: 24px;
`

const WantToTalk = styled.p`
    color: ${gray.darker};
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
`

const StyledButton = styled(Button)`
    @media (max-width: 499px) {
        width: 100%;
    }
`

export default function CourseList() {
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipsIntroPage {
                data {
                    digital_family_title {
                        text
                    }
                    digital_family_subtitle {
                        text
                    }
                    digital_family_description_title {
                        text
                    }
                    digital_family_description {
                        text
                    }
                    digital_family_want_to_talk {
                        text
                    }
                    digital_family_button_text {
                        text
                    }
                    digital_family_button_link {
                        url
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
                        digital_family_member
                    }
                }
            }
        }
    `)

    const {
        digital_family_title: { text: title },
        digital_family_subtitle: { text: subtitle },
        digital_family_description_title: { text: descriptionTitle },
        digital_family_description: { text: descriptionText },
        digital_family_want_to_talk: { text: wantToTalk },
        digital_family_button_text: { text: buttonText },
        digital_family_button_link: { url: buttonUrl },
    } = data.prismicScholarshipsIntroPage.data

    const companyLogos = data.prismicCompanyLogos.data.company_logos
        .filter(company => company.digital_family_member)
        .map(company => company.logo)
    console.log(companyLogos)

    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <FlexContainer>
                <LogoContainer>
                    <CompanyLogoGrid logos={companyLogos}></CompanyLogoGrid>
                </LogoContainer>
                <TextContainer>
                    <DescriptionTitle>{descriptionTitle}</DescriptionTitle>
                    <DescriptionText>{descriptionText}</DescriptionText>
                    <WantToTalk>{wantToTalk}</WantToTalk>
                    <Link to={buttonUrl}>
                        <StyledButton size="lg">{buttonText}</StyledButton>
                    </Link>
                </TextContainer>
            </FlexContainer>
        </Container>
    )
}
