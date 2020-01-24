import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { gray } from "@vschool/lotus"

import DesktopMenu from "./Desktop"
import MobileMenu from "./Mobile"

const Nav = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    background-color: ${gray.lighter};
    padding: 28px 16px;
    height: 80px;

    @media (min-width: 1000px) {
        padding: 28px 88px;
    }
`

const Logo = styled.img`
    display: none;
    max-height: 100%;

    @media (min-width: 1000px) {
        display: inline;
    }
`

const MobileLogo = styled.img`
    display: inline;
    max-height: 100%;
    /* position: relative; */
    /* z-index: 500; */

    @media (min-width: 1000px) {
        display: none;
    }
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
                    mobile_logo {
                        url
                    }
                }
            }
        }
    `)
    const { logo, mobile_logo: mobileLogo } = data.prismicNavigationBar.data

    return (
        <Nav>
            <StyledLogoLink to="/">
                <Logo src={logo.url} />
                <MobileLogo src={mobileLogo.url} />
            </StyledLogoLink>
            {/* Only displays on ≥ 1000px screens using a CSS media query */}
            <DesktopMenu />

            {/* Only displays on < 1000px screens using a CSS media query */}
            <MobileMenu />
        </Nav>
    )
}

export default Navbar
