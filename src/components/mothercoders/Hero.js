import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { black, gray } from "@vschool/lotus"
import MailchimpSubscribeForm from "../shared/MailchimpSubscribeForm"

const HeroContainer = styled.section`
    background-color: #daf2fb;
    padding-top: 65px;

    @media (min-width: 1024px) {
        padding-top: 100px;
    }
`

const MotherCodersLogo = styled.img`
    width: 182px;
    margin-bottom: 16px;
`

const HeroTitle = styled.h1`
    color: ${black};
    text-align: center;
`

const HeroSubtitle = styled.h5`
    color: #1d4c5d;
    text-align: center;
`

const Paragraphs = styled.div`
    & > p {
        color: ${gray.darker};
        text-align: center;
    }

    & > p:not(:first-child) {
        margin-top: 20px;
    }
`

export default function Hero() {
    const data = useStaticQuery(graphql`
        {
            prismicMotherCoders {
                data {
                    logo {
                        alt
                        url
                    }
                    subtitle {
                        text
                    }
                    title {
                        text
                    }
                    header_info {
                        text
                        html
                    }
                    contact_button_text {
                        text
                    }
                    image {
                        url
                        alt
                    }
                }
            }
        }
    `)

    const {
        logo,
        title: { text: titleText },
        subtitle: { text: subtitleText },
        header_info: { html: headerInfoHtml },
        contact_button_text: { text: buttonText },
        image,
    } = data.prismicMotherCoders.data

    console.log(data.prismicMotherCoders.data.header_info)

    return (
        <HeroContainer>
            <MotherCodersLogo src={logo.url} alt={logo.alt} />
            <HeroTitle>{titleText}</HeroTitle>
            <HeroSubtitle>{subtitleText}</HeroSubtitle>
            {/* This uses innerHTML because Prismic has multiple paragraphs in one element */}
            <Paragraphs dangerouslySetInnerHTML={{ __html: headerInfoHtml }} />
            <MailchimpSubscribeForm backgroundColor="#48BFE9" />
        </HeroContainer>
    )
}
