import React from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"

import DesktopMenu from "./Desktop"
import MobileMenu from "./Mobile"
import { NavbarContextProvider } from "./navbarContext"

const Nav = styled.nav`
    position: ${({ isBlog }) => (isBlog ? "static" : "fixed")};
    display: flex;
    align-items: center;
    background-color: ${gray.lighter};
    padding: 28px 16px;
    width: 100%;
    height: 80px;
    z-index: 999;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);

    @media (min-width: 1000px) {
        padding: 28px 88px;
    }
`

function Navbar(props) {
    return (
        <Nav isBlog={props.isBlog}>
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
