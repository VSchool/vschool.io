import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, black, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const Container = styled.section`
    background-color: #daf2fb;
    padding-top: 96px;
    padding-bottom: 96px;
`

const VSLogo = styled.img`
    height: 64px;
    margin-bottom: 16px;
`

const Header = styled.h2`
    font-size: 32px;
    line-height: 40px;
    color: ${black};
    margin-bottom: 16px;
    font-weight: 900;

    @media only screen and (min-width: 800px) {
        margin-bottom: 24px;
        font-size: 44px;
        line-height: 48px;
    }
`

const P = styled.p`
    color: ${gray.darker};
    text-align: center;
    margin-bottom: 32px;
`

const Arrow = styled.span`
    margin-left: 12px;
`

export default function Cta() {
    const data = useStaticQuery(graphql`
        {
            prismicMotherCoders {
                data {
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
                <Button buttonStyle="primary-dark">
                    Visit vschool.io <Arrow>&rarr;</Arrow>
                </Button>
            </Link>
        </Container>
    )
}
