import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { black, gray } from "@vschool/lotus"
import ConvertKitSubscribe from "../shared/ConvertKitSubscribe"

const HeroContainer = styled.section`
    background-color: #daf2fb;
    padding-top: 65px;
    padding-bottom: 357px;

    @media (min-width: 1024px) {
        padding-top: 100px;
    }
`

const MotherCodersLogo = styled.img`
    width: 182px;
    margin-bottom: 32px;
`

const HeroTitle = styled.h1`
    color: ${black};
    text-align: center;
    margin-bottom: 32px;
    font-weight: 900;
`

const HeroSubtitle = styled.h5`
    color: #1d4c5d;
    text-align: center;
    margin-bottom: 32px;
`

const Paragraphs = styled.div`
    margin-bottom: 48px;
    & > p {
        color: ${gray.darker};
        text-align: center;
    }

    & > p:not(:first-child) {
        margin-top: 20px;
    }

    @media only screen and (min-width: 1024px) {
        max-width: 850px;

        & > p {
            text-align: left;
        }
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
                    email_subscribe_confirmation_message {
                        text
                    }
                    convertkit_tag_name
                }
            }
        }
    `)

    const {
        logo,
        title: { text: titleText },
        subtitle: { text: subtitleText },
        header_info: { html: headerInfoHtml },
        email_subscribe_confirmation_message: { text: confirmationMessage },
        convertkit_tag_name: convertKitTag,
    } = data.prismicMotherCoders.data

    return (
        <HeroContainer>
            <MotherCodersLogo src={logo.url} alt={logo.alt} />
            <HeroTitle>{titleText}</HeroTitle>
            <HeroSubtitle>{subtitleText}</HeroSubtitle>
            {/* This uses innerHTML because Prismic has multiple paragraphs in one element */}
            <Paragraphs dangerouslySetInnerHTML={{ __html: headerInfoHtml }} />
            {/* <MailchimpSubscribeForm
                formUrl="//vschool.us16.list-manage.com/subscribe/post?u=f5ba48f36061bdea6c3b83712&amp;id=b5b314c19b"
            /> */}
            <ConvertKitSubscribe
                convertKitTag={convertKitTag}
                confirmationMessage={confirmationMessage}
                style={{ backgroundColor: "#48BFE9", borderColor: "#3286a3" }}
            />
        </HeroContainer>
    )
}
