import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { gray } from "@vschool/lotus"

// import PrimaryNavItem from "./PrimaryNavItem"
import DesktopMenu from "./Desktop"

const Nav = styled.nav`
    display: flex;
    align-items: center;
    background-color: ${gray.lighter};
    padding: 28px 88px;
    height: 80px;
`

const Logo = styled.img`
    max-height: 100%;
`

const StyledLogoLink = styled(Link)`
    height: 100%;
    margin: 0;
    margin-right: auto;
`

function Navbar() {
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
    const { logo } = data.prismicNavigationBar.data

    return (
        <Nav>
            <StyledLogoLink to="/">
                <Logo src={logo.url} />
            </StyledLogoLink>

            {/* Only displays on ≥ 1000px screens using CSS a media query */}
            <DesktopMenu />

            {/* Only displays on < 1000px screens using CSS a media query */}
            {/* TODO: <MobileMenu /> */}
        </Nav>
    )
}

export default Navbar
