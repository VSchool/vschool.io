import React, { useState, useEffect, useContext } from "react"
import { useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import { useSpring } from "react-spring"

import { NavbarContext } from "../navbarContext"
import MobileButton from "./MobileButton"
import MobilePrimaryMenu from "./MobilePrimaryMenu"
import MobileSubMenu from "./MobileSubMenu"

const Menu = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    /* Don't change position attr, as it will mess with mobile popover menu*/
    @media (min-width: 1000px) {
        display: none;
    }
`

const StyledLogoLink = styled(Link)`
    height: 100%;
    margin: 0;
    margin-right: auto;
    /* z-index: 500; */
`

const MobileLogo = styled.img`
    display: inline;
    max-height: 100%;

    @media (min-width: 1000px) {
        display: none;
    }
`

function MobileMenu(props) {
    const {
        mainMenuOpen,
        subMenuOpen,
        toggleMainMenu,
        toggleSubMenu,
    } = useContext(NavbarContext)

    const data = useStaticQuery(graphql`
        {
            prismicNavigationBar {
                data {
                    # See query.js for the NavItems fragment
                    ...NavItems
                    button_text
                    button_link {
                        url
                        id
                    }
                    mobile_logo {
                        url
                    }
                }
            }
        }
    `)

    const {
        nav,
        button_text: buttonText,
        button_link: { url: buttonLink },
        mobile_logo: mobileLogo,
    } = data.prismicNavigationBar.data

    return (
        <Menu>
            <StyledLogoLink to="/">
                <MobileLogo src={mobileLogo.url} />
            </StyledLogoLink>
            <MobileButton toggleMainMenu={toggleMainMenu} open={mainMenuOpen} />
            <MobilePrimaryMenu
                open={mainMenuOpen}
                items={nav}
            />
            <MobileSubMenu
                open={subMenuOpen}
                toggleSubMenu={toggleSubMenu}
                toggleMainMenu={toggleMainMenu}
            />
        </Menu>
    )
}

export default MobileMenu
