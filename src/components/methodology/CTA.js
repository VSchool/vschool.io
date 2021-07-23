import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, black, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const Container = styled.section`
    background-color: ${blue.lightest};
    padding-top: 96px;
    padding-bottom: 160px;

    @media (min-width: 320px) and (max-width: 400px) {
        padding-left: 8px;
        padding-right: 8px;
    }

    @media (min-width: 1200px) {
        padding-bottom: 160px;
    }
`

const Header = styled.h1`
    color: ${black};
    font-size: 32px;
    font-weight: 900;
    line-height: 48px;
    text-align: center;
    margin-bottom: 32px;
    max-width: 240px;
    width: 100%;

    @media (min-width: 600px) {
        font-size: 48px;
        line-height: 52px;
        max-width: 675px;
    }

    @media (min-width: 1200px) {
        font-size: 44px;
        line-height: 56px;
        max-width: 100%;
    }
`

const Subheader = styled.h3`
    color: ${blue.base};
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    font-weight: 800;
    line-height: 24px;
    text-align: center;
    margin-bottom: 32px;
    width: 100%;
    max-width: 200px;
    letter-spacing: 0.25px;

    @media (min-width: 600px) {
        max-width: 100%;
    }
`

const StyledButton = styled(Button)`
    width: 318px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 700;
    outline: none;

    @media (min-width: 320px) and (max-width: 400px) {
        width: 290px;
    }

    @media (min-width: 900px) {
        height: 56px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 1.14286px;
    }
`

export default function Cta() {
    const data = useStaticQuery(graphql`
        {
            prismicMethodologyPage {
                id
                data {
                    cta_header {
                        text
                    }
                    cta_link {
                        url
                    }
                    cta_subheader {
                        text
                    }
                    cta_btn {
                        text
                    }
                }
            }
        }
    `)

    const {
        cta_subheader: { text: ctaSubHeader },
        cta_link: { url: ctaLink },
        cta_header: { text: ctaHeader },
        cta_btn: { text: ctaBtn },
    } = data.prismicMethodologyPage.data

    return (
        <Container>
            <Header>{ctaHeader}</Header>
            <Subheader>{ctaSubHeader}</Subheader>
            <Link to={ctaLink}>
                <StyledButton>{ctaBtn}</StyledButton>
            </Link>
        </Container>
    )
}
