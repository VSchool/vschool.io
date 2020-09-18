import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, black, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const Container = styled.section`
    background-color: #daf2fb;
    padding-top: 96px;
`

const VSLogo = styled.img`
    height: 64px;
    margin-bottom: 16px;
`

const Header = styled.h2`
    font-size: 32px;
    line-height: 40px;
    color: ${black};
`

const P = styled.p`
    color: ${gray.darker};
    text-align: center;
    margin-bottom: 32px;
`

export default function CTA() {
    const data = useStaticQuery(graphql`
        {
            prismicMotherCoders {
                data {
                    cta_button_text {
                        text
                    }
                    cta_button_url {
                        url
                    }
                    cta_paragraph {
                        text
                    }
                    cta_title {
                        text
                    }
                    v_school_logo {
                        url
                        alt
                    }
                }
            }
        }
    `)

    const {
        cta_button_text: { test: buttonText },
        cta_button_url: { url: buttonUrl },
        cta_paragraph: { text: paragraphText },
        cta_title: { text: titleText },
        v_school_logo: { url: logoUrl, alt: logoAlt },
    } = data.prismicMotherCoders.data
    return (
        <Container>
            <VSLogo src={logoUrl} alt={logoAlt} />
            <Header>{titleText}</Header>
            <P>{paragraphText}</P>
            <Link to="/">
                <Button buttonStyle="primary-dark">Visit vschool.io</Button>
            </Link>
        </Container>
    )
}
