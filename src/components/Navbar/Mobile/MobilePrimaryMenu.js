import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import { gray } from "@vschool/lotus"
import { useSpring, animated } from "react-spring"

import MobilePrimaryMenuItem from "./MobilePrimaryMenuItem"
import { useMenuAnimation } from "./useMenuAnimation"

const Overlay = styled(animated.div)`
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: ${gray.lighter};
    top: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
    z-index: 100;
`

const TopBar = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 28px 16px;
`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
`

const StyledLogoLink = styled(Link)`
    height: 100%;
    margin: 0;
    margin-right: auto;
`

const MobileLogo = styled.img`
    display: inline;
    max-height: 100%;

    @media (min-width: 1000px) {
        display: none;
    }
`

function MobilePrimaryMenu({ toggleMainMenu, toggleSubMenu, open, items }) {
    const menuAnimation = useMenuAnimation(open)
    function closeAndNavigate() {
        toggleMainMenu()
        navigate("/")
    }
    const data = useStaticQuery(graphql`
        {
            prismicNavigationBar {
                data {
                    mobile_logo {
                        url
                    }
                }
            }
        }
    `)
    const { mobile_logo: mobileLogo } = data.prismicNavigationBar.data

    const menuItems = items.map(item => <MobilePrimaryMenuItem data={item} />)

    return (
        <Overlay style={menuAnimation}>
            <TopBar>
                {/* <StyledLogoLink to="/" onClick={toggleMainMenu}> */}
                <MobileLogo src={mobileLogo.url} onClick={closeAndNavigate} />
                {/* </StyledLogoLink> */}
                {/* <button onClick={toggleMainMenu}>X</button> */}
                {/* <button onClick={toggleSubMenu}>Next</button> */}
            </TopBar>
            <Ul>{menuItems}</Ul>
        </Overlay>
    )
}

export default MobilePrimaryMenu
