import React from "react"
import styled from "styled-components"
import { purple } from "@vschool/lotus"
import { useSpring, animated } from "react-spring"
import { useMenuAnimation } from "./useMenuAnimation"

const Overlay = styled(animated.div)`
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: ${purple.dark};
    top: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
    z-index: 100;
`

function MobileSubMenu({ toggleMainMenu, toggleSubMenu, open }) {
    const menuAnimation = useMenuAnimation(open)
    function toggleBothMenus() {
        toggleSubMenu()
        toggleMainMenu()
    }
    return (
        <Overlay style={menuAnimation}>
            <p>I'm a submenu</p>
            <button onClick={toggleBothMenus}>X</button>
            <button onClick={toggleSubMenu}>Back</button>
        </Overlay>
    )
}

export default MobileSubMenu
