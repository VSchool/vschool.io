import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { gray, black, Button } from "@vschool/lotus"
import QueryLink from "../shared/QueryLink.js"

const Container = styled.section`
    background-color: #fad6db;
    padding-bottom: 96px;
    padding-top: 96px;
    justify-content: center;
`

const Logo = styled.img`
    width: 80px;
    height: 64px;
`

const Header = styled.h2`
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${black};
    margin-top: 16px;
    font-weight: 900;

    @media (min-width: 1200px) {
        font-size: 44px;
        line-height: 48px;
    }
`

const Subheader = styled.p`
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darker};
    width: 100%;
    max-width: 366px;
    margin-top: 16px;
    margin-bottom: 32px;

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 28px;
        max-width: 520px;
    }
`

const StyledButton = styled(Button)`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
`

const StyledLink = styled(QueryLink)`
    text-decoration: none;
`

export default function NeverLearnAlone(props) {
    const data = useStaticQuery(graphql`
        {
            prismicUofuPrimer {
                data {
                    vslogo {
                        url
                    }
                    learn_subheader {
                        text
                    }
                    learn_link {
                        url
                    }
                    learn_header {
                        text
                    }
                    learn_btn {
                        text
                    }
                }
            }
        }
    `)
    const {
        vslogo: { url: logo },
        learn_subheader: { text: subheader },
        learn_link: { url: link },
        learn_header: { text: header },
        learn_btn: { text: btnText },
    } = data.prismicUofuPrimer.data

    return (
        <Container>
            <Logo src={logo} />
            <Header>{header}</Header>
            <Subheader>{subheader}</Subheader>
            <StyledLink to={link}>
                <StyledButton buttonStyle="primary-light">
                    {btnText}
                </StyledButton>
            </StyledLink>
        </Container>
    )
}
