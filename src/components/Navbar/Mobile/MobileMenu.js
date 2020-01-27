import React, { useState, useEffect } from "react"
import { useStaticQuery } from "gatsby"
import styled from "styled-components"
import { useSpring } from "react-spring"

import MobileButton from "./MobileButton"
import MobilePrimaryMenu from "./MobilePrimaryMenu"
import MobileSubMenu from "./MobileSubMenu"

const Menu = styled.div`
    /* Don't change position attr, as it will mess with mobile popover menu*/
    @media (min-width: 1000px) {
        display: none;
    }
`
function MobileMenu(props) {
    const [mainMenuOpen, setMainMenuOpen] = useState(false)
    const [subMenuOpen, setSubMenuOpen] = useState(false)

    function toggleMainMenu() {
        setMainMenuOpen(prevState => !prevState)
    }

    function toggleSubMenu() {
        setSubMenuOpen(prevState => !prevState)
    }

    useEffect(() => {
        if (mainMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [mainMenuOpen])

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
                }
            }
        }
    `)

    const {
        nav,
        button_text: buttonText,
        button_link: { url: buttonLink },
    } = data.prismicNavigationBar.data

    return (
        <Menu>
            <MobileButton toggleMainMenu={toggleMainMenu} open={mainMenuOpen} />
            <MobilePrimaryMenu
                open={mainMenuOpen}
                toggleMainMenu={toggleMainMenu}
                toggleSubMenu={toggleSubMenu}
                items={nav}
            />
            {/* <MobileSubMenu
                open={subMenuOpen}
                toggleSubMenu={toggleSubMenu}
                toggleMainMenu={toggleMainMenu}
            /> */}
        </Menu>
    )
}

export default MobileMenu
