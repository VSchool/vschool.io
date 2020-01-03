import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray } from "@vschool/lotus"

import PrimaryNavItem from "./PrimaryNavItem"

const Nav = styled.ul`
    display: flex;
    align-items: center;
    background-color: ${gray.lighter};
    margin: 0;
`

// Change this to img when we have a logo ready
const Logo = styled.p`
    margin: 0;
    margin-right: auto;
`

function Navbar() {
    const data = useStaticQuery(graphql`
        {
            prismicNavigationBar {
                data {
                    nav {
                        items {
                            sub_nav_link {
                                url
                                uid
                            }
                            sub_nav_link_label {
                                text
                            }
                        }
                        primary {
                            label {
                                text
                            }
                            link {
                                url
                                uid
                            }
                        }
                    }
                }
            }
        }
    `)
    const { nav } = data.prismicNavigationBar.data
    console.log(nav)

    const navItems = nav.map(item => (
        <PrimaryNavItem key={item.id} data={item} />
    ))

    return (
        <Nav>
            <Logo>Navbar Logo Here</Logo>
            {navItems}
        </Nav>
    )
}

export default Navbar
