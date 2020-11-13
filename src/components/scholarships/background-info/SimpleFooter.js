import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { black, white, Button } from "@vschool/lotus"
import Link from "../../../components/shared/QueryLink"

const Footer = styled.footer`
    height: 64px;
    width: 100%;
    padding-left: 18px;
    padding-right: 18px;
    background-color: ${black};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 800px) {
        height: 96px;
        padding-left: 88px;
        padding-right: 88px;
    }
`

const Logo = styled.img`
    width: 40px;
    margin-right: auto;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const StyledButton = styled(Button)`
    width: 125px;
    height: 32px !important;

    @media (min-width: 800px) {
        width: 176px;
        height: 56px !important;
    }
`

const StyledLink = styled(Link)`
    &:before {
        content: "Questions?";
        color: ${white};
        font-size: 14px;
        line-height: 18px;
        margin-right: 16px;

        @media (min-width: 800px) {
            content: "Questions about applying?";
            font-size: 20px;
            line-height: 28px;
            margin-right: 24px;
        }
    }
`

export default function SimpleFooter() {
    const data = useStaticQuery(graphql`
        {
            prismicFooter {
                data {
                    vs_logo {
                        url
                    }
                }
            }
        }
    `)

    const logoUrl = data.prismicFooter.data.vs_logo.url
    return (
        <Footer>
            <Link to="/">
                <Logo src={logoUrl} alt="V School Logo" />
            </Link>
            <Container>
                <StyledLink to="/">
                    <StyledButton buttonStyle="secondary-light" size="xs">
                        Let's talk
                    </StyledButton>
                </StyledLink>
            </Container>
        </Footer>
    )
}
