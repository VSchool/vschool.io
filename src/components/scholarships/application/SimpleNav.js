import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, blue } from "@vschool/lotus"
import Link from "../../shared/QueryLink"

const Navbar = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${gray.lighter};
    box-shadow: 0px 4px 16px rgba(33, 32, 31, 0.1);
    margin-bottom: 20px;
    padding-left: 18px;
    padding-right: 18px;

    @media (min-width: 800px) {
        padding-left: 88px;
        padding-right: 88px;
    }
`
const BackButton = styled(Link)`
    margin-right: auto;
    color: ${blue.base};
`
const Logo = styled.img`
    height: 24px;
`

const StyledLink = styled(Link)`
    margin-right: auto;
`

export default function SimpleNav() {
    const data = useStaticQuery(graphql`
        {
            prismicNavigationBar {
                data {
                    logo {
                        url
                    }
                }
            }
        }
    `)

    const logoUrl = data.prismicNavigationBar.data.logo.url
    return (
        <Navbar>
            <BackButton to="/">vschool.io</BackButton>
            <StyledLink to="/">
                {/* TODO: use react-media package to display 
                the shortened logo (VS instead of V School) 
                on small screens */}
                <Logo src={logoUrl} />
            </StyledLink>
        </Navbar>
    )
}
