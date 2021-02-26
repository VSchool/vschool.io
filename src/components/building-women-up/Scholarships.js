import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, black, blue, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const Container = styled.section`
    padding-top: 96px;

    @media (min-width: 800px) {
        padding-top: 160px;
    }
`

const Title = styled.h2`
    text-align: center;
`

const Subtitle = styled.h6`
    color: ${blue.base};
    margin-top: 24px;
    text-align: center;

    @media (min-width: 800px) {
        margin-top: 32px;
    }
`

// TODO: Update these styles once I can click on it in Figma
const PartnersTitle = styled.p`
    margin-top: 42px;
    font-size: 14px;
    font-family: "aktiv-grotesk-extended";
`

const Logo = styled.img`
    width: 276px;
`

const MainImage = styled.img`
    width: 100%;
    height: 280px;
    max-width: 656px;
    box-shadow: 16px 16px 0px 0px ${black};
    margin-right: 16px;
    margin-top: 86px;
    object-fit: cover;

    @media (min-width: 425px) {
        height: 359px;
    }
`

const InfoContainer = styled.div`
    max-width: 672px;
`

const InfoTitle = styled.h3`
    margin-top: 64px;
`

const InfoText = styled.p`
    color: ${gray.darker};
    font-weight: normal;
    margin-top: 16px;
`

const Deadline = styled.h6`
    margin-top: 16px;
    color: ${blue.base};
    font-size: 10px;
    line-height: 12px;
    font-weight: 700;
    text-align: left;
    text-transform: none;
    letter-spacing: 0.5px;
    width: 100%;

    @media (min-width: 800px) {
        font-size: 12px;
        line-height: 16px;
    }
`

const StyledButton = styled(Button)`
    margin-top: 32px;
    width: 100%;

    @media (min-width: 600px) {
        width: 293px;
    }
`

export default function Scholarships() {
    const data = useStaticQuery(graphql`
        {
            prismicWomensHistoryMonthPage {
                data {
                    scholarship_title {
                        text
                    }
                    scholarship_subtitle {
                        text
                    }
                    scholarship_partners_title {
                        text
                    }
                    scholarship_tech_moms_logo {
                        alt
                        url
                    }
                    scholarship_silicon_slopes_logo {
                        alt
                        url
                    }
                    scholarship_main_image {
                        alt
                        url
                    }
                    scholarship_info_title {
                        text
                    }
                    scholarship_info_text {
                        text
                    }
                    scholarship_info_deadline_text {
                        text
                    }
                    scholarship_button_text {
                        text
                    }
                    scholarship_button_link {
                        url
                    }
                }
            }
        }
    `)

    const {
        scholarship_title: { text: title },
        scholarship_subtitle: { text: subtitle },
        scholarship_partners_title: { text: partnersTitle },
        scholarship_tech_moms_logo: {
            alt: techMomsImgAlt,
            url: techMomsImgUrl,
        },
        scholarship_silicon_slopes_logo: { alt: ssImgAlt, url: ssImgUrl },
        scholarship_main_image: { alt: mainImgAlt, url: mainImgUrl },
        scholarship_info_title: { text: infoTitle },
        scholarship_info_text: { text: infoText },
        scholarship_info_deadline_text: { text: deadlineText },
        scholarship_button_text: { text: buttonText },
        scholarship_button_link: { url: buttonUrl },
    } = data.prismicWomensHistoryMonthPage.data

    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <PartnersTitle>{partnersTitle}</PartnersTitle>
            <Logo src={techMomsImgUrl} alt={techMomsImgAlt} />
            <Logo src={ssImgUrl} alt={ssImgAlt} />
            <MainImage src={mainImgUrl} alt={mainImgAlt} />
            <InfoContainer>
                <InfoTitle>{infoTitle}</InfoTitle>
                <InfoText>{infoText}</InfoText>
                <Deadline>{deadlineText}</Deadline>
                <Link to={`/scholarships${buttonUrl}`}>
                    <StyledButton size="lg">{buttonText}</StyledButton>
                </Link>
            </InfoContainer>
        </Container>
    )
}
