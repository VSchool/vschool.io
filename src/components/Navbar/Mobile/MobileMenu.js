import React, { useState } from "react"
import { useStaticQuery } from "gatsby"
import styled from "styled-components"

import MobileButton from "./MobileButton"
import Popover from "./Popover"

const Menu = styled.div`
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
            <MobileButton toggleMainMenu={toggleMainMenu} />
            <Popover open={mainMenuOpen} toggleMenu={toggleMainMenu} items={nav} />
            <Popover open={subMenuOpen} toggleMenu={toggleSubMenu} />
        </Menu>
    )
}

export default MobileMenu
