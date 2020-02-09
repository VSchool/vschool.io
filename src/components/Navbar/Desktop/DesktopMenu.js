import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button } from "@vschool/lotus"

import DesktopMenuItem from "./DesktopMenuItem"

const StyledLogoLink = styled(Link)`
    height: 100%;
    margin: 0;
    margin-right: auto;
`

const Logo = styled.img`
    display: none;
    max-height: 100%;

    @media (min-width: 1000px) {
        display: inline;
    }
`

const Container = styled.div`
    display: none;

    @media (min-width: 1000px) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 100%;
    }
`

const Ul = styled.ul`
    @media (min-width: 1000px) {
        display: flex;
        height: 32px;

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
    width: 96px;
    min-width: 0;
`

const ButtonContainer = styled.li`
    list-style: none;
`

function DesktopMenu(props) {
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
        <DesktopMenuItem key={item.primary.label.text} data={item} />
    ))

    return (
        <Container>
            <StyledLogoLink to="/">
                <Logo src={logo.url} />
            </StyledLogoLink>
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
        </Container>
    )
}

export default DesktopMenu
