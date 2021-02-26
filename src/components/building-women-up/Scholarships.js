import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, blue } from "@vschool/lotus"

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
        scholarship_button_link: { text: buttonUrl },
    } = data.prismicWomensHistoryMonthPage.data

    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <PartnersTitle>{partnersTitle}</PartnersTitle>
            <Logo src={techMomsImgUrl} alt={techMomsImgAlt} />
            <Logo src={ssImgUrl} alt={ssImgAlt} />
        </Container>
    )
}
