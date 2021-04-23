import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { black } from "@vschool/lotus"
import ConvertKitSubscribe from "../shared/ConvertKitSubscribe"

const Header = styled.section`
    background-color: #e3e8fa;
    padding-top: 64px;
    padding-bottom: 64px;

    @media (min-width: 840px) {
        padding-bottom: 96px;
        padding-top: 96px;
    }
`

const H1 = styled.h1`
    color: ${black};
    font-size: 36px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    margin: 0;
    width: 100%;
    max-width: 1024px;

    @media (min-width: 600px) {
        font-size: 40px;
        margin-left: 32px;
        margin-right: 32px;
    }

    @media (min-width: 840px) {
        font-size: 44px;
        line-height: 46px;
    }

    @media (min-width: 960px) {
        font-size: 52px;
        margin-left: 80px;
        margin-right: 80px;
        margin-bottom: 8px;
        line-height: 52px;
    }

    @media (min-width: 1200px) {
        font-size: 56px;
        margin-left: 100px;
        margin-right: 100px;
        line-height: 56px;
    }
`

const P = styled.p`
    color: #514f4b;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    margin: 16px 24px 24px 24px;
    width: 100%;
    max-width: 1024px;

    @media (max-width: 840px) and (min-width: 600px) {
        font-size: 18px;
        margin-left: 32px;
        margin-right: 32px;
    }

    @media (min-width: 840px) {
        font-size: 20px;
        margin-left: 48px;
        margin-right: 48px;
        line-height: 28px;
    }

    @media (min-width: 960px) {
        margin-left: 124px;
        margin-right: 124px;
        padding-left: 56px;
        padding-right: 56px;
    }

    @media (min-width: 1200px) {
        margin-left: 200px;
        margin-right: 200px;
    }
`

const H5 = styled.h5`
    color: ${black};
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    margin-bottom: 32px;
`

function HeroHeader() {
    const data = useStaticQuery(graphql`
        {
            prismicBootcampPrimer {
                data {
                    main_page_title {
                        text
                    }
                    subtitle {
                        text
                    }
                    invitation_text {
                        text
                    }
                    email_confirmation_message {
                        text
                    }
                    convertkit_tag
                }
            }
        }
    `)

    const {
        main_page_title: { text: title },
        subtitle: { text: subTitle },
        invitation_text: { text: invite },
        email_confirmation_message: { text: confirmationMessage },
        convertkit_tag: convertKitTag,
    } = data.prismicBootcampPrimer.data

    return (
        <Header>
            <H1>{title}</H1>
            <P>{subTitle}</P>
            <H5>{invite}</H5>
            <ConvertKitSubscribe
                convertKitTag={convertKitTag}
                confirmationMessage={confirmationMessage}
            />
        </Header>
    )
}

export default HeroHeader
