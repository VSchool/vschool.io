import React from "react"
import styled from "styled-components"
import { purple } from "@vschool/lotus"
import { useSpring, animated } from "react-spring"
import { useMenuAnimation } from "./useMenuAnimation"

const Overlay = styled(animated.div)`
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: ${purple.light};
    top: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
    z-index: 100;
`

function MobilePrimaryMenu({ toggleMainMenu, toggleSubMenu, open, items }) {
    const menuAnimation = useMenuAnimation(open)

    const menuItems = items.map(item => console.log(item))
    
    return (
        <Overlay style={menuAnimation}>
            <p>I'm a popover</p>
            <button onClick={toggleMainMenu}>X</button>
            <button onClick={toggleSubMenu}>Next</button>
        </Overlay>
    )
}

export default MobilePrimaryMenu
