import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Link from "../shared/QueryLink"
import { gray, black } from "@vschool/lotus"

const FooterSubLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 64px;
    background-color: ${black};

    @media (min-width: 1200px) {
        width: 1114px;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
    }
`

const CopyrightNotice = styled.p`
    display: inline-block;
    color: ${gray.dark};
    font-family: "aktiv-grotesk";
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 20px;

    @media (min-width: 1200px) {
        margin-right: auto;
        margin-bottom: 0;
    }
`

const Logo = styled.img`
    width: 32px;
    display: inline-block;
    margin-bottom: 8px;

    @media (min-width: 1200px) {
        margin-bottom: 0;
        margin-right: 16px;
    }
`

const SocialIconsGroup = styled.div`
    display: flex;
`

const SocialIconLink = styled.a`
    &:not(:last-child) {
        margin-right: 16px;
    }
`

const SocialIcon = styled.img`
    width: 24px;
    height: 24px;
`

export default function CopyrightNoticermation(props) {
    const data = useStaticQuery(graphql`
        {
            prismicFooter {
                data {
                    vs_logo {
                        url
                        alt
                    }
                    copyright_notice {
                        text
                    }
                    social_icons {
                        social_icon_image {
                            alt
                            url
                        }
                        social_icon_link {
                            url
                        }
                    }
                }
            }
        }
    `)

    const {
        vs_logo: { url: logoUrl, alt: logoAlt },
        copyright_notice: { text: copyrightText },
        social_icons: socialIcons,
    } = data.prismicFooter.data

    const icons = socialIcons.map(icon => (
        <SocialIconLink
            href={icon.social_icon_link.url}
            target="_blank"
            key={icon.social_icon_link.url}
        >
            <SocialIcon
                src={icon.social_icon_image.url}
                alt={icon.social_icon_image.alt}
            />
        </SocialIconLink>
    ))
    return (
        <FooterSubLinks>
            <Link to="/">
                <Logo src={logoUrl} alt={logoAlt} />
            </Link>
            <CopyrightNotice>{copyrightText}</CopyrightNotice>
            <SocialIconsGroup>{icons}</SocialIconsGroup>
        </FooterSubLinks>
    )
}
