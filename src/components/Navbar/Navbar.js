import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { gray, Button } from "@vschool/lotus"

import logo from "../../images/VS_Logo_RGB.png"
import PrimaryNavItem from "./PrimaryNavItem"

const Nav = styled.nav`
    display: flex;
    align-items: center;
    background-color: ${gray.lighter};
    margin: 0;
    padding: 0 88px;
    height: 80px;
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 100%;

    & > img {
        margin-right: auto;
    }
`

// Change this to img when we have a logo ready
const Logo = styled.img`
    margin: 0;
    margin-right: auto;
    max-height: 100%;
`

const ApplyButton = styled(Button)`
    font-family: "aktiv-grotesk-extended";
    font-size: 12px;
    letter-spacing: 0.86px;
    line-height: 16px;
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
                    button_text
                    button_link {
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
    } = data.prismicNavigationBar.data

    const navItems = nav.map(item => (
        <PrimaryNavItem key={item.id} data={item} />
    ))

    return (
        <Nav>
            <Ul>
                <Logo src={logo} />
                {navItems}
                <Link to={buttonLink}>
                    <ApplyButton buttonStyle="primary-dark" buttonSize="sm">
                        {buttonText}
                    </ApplyButton>
                </Link>
            </Ul>
        </Nav>
    )
}

export default Navbar
