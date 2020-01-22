import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { gray, Button } from "@vschool/lotus"

import DesktopMenuItem from "./DesktopMenuItem"

const Ul = styled.ul`
    display: none;
    
    @media(min-width: 1000px) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 32px;
        width: 100%;
    
        & > img {
            margin-right: auto;
        }

    }
`

const ApplyButton = styled(Button)`
    font-family: "aktiv-grotesk-extended";
    font-size: 12px;
    letter-spacing: 0.86px;
    line-height: 16px;
`

const ButtonContainer = styled.li`
    list-style: none;
`

function DesktopMenu(props) {
    const data = useStaticQuery(graphql`
        {
            prismicNavigationBar {
                data {
                    ...NavItems
                    button_text
                    button_link {
                        url
                        id
                    }
                    logo {
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
        logo,
    } = data.prismicNavigationBar.data

    const navItems = nav.map(item => (
        <DesktopMenuItem key={item.id} data={item} />
    ))

    return (
        <Ul>
            {navItems}
            <ButtonContainer>
                <Link to={buttonLink}>
                    <ApplyButton buttonStyle="primary-dark" buttonSize="sm">
                        {buttonText}
                    </ApplyButton>
                </Link>
            </ButtonContainer>
        </Ul>
    )
}

export default DesktopMenu
