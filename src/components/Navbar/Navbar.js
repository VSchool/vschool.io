import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { gray } from "@vschool/lotus"

import DesktopMenu from "./Desktop"
import MobileMenu from "./Mobile"
import { NavbarContextProvider } from "./navbarContext"

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

function Navbar() {
    return (
        <Nav>
            {/* Only displays on ≥ 1000px screens using a CSS media query */}
            <DesktopMenu />

            {/* Only displays on < 1000px screens using a CSS media query */}
            <NavbarContextProvider>
                <MobileMenu />
            </NavbarContextProvider>
        </Nav>
    )
}

export default Navbar
