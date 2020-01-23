import React from "react"
import styled from "styled-components"
import { purple } from "@vschool/lotus"

const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${purple.light};
    position: fixed;
    left: ${props => (props.open ? "0" : "100%")};
    top: 0;
    margin: 0;
    padding: 0;
    z-index: 100;
    transition: left 0.3s ease-in-out;
`

function Popover({ open, toggleMenu }) {
    return (
        <Overlay open={open}>
            <p>I'm a popover</p>
            <h1 onClick={toggleMenu}>X</h1>
        </Overlay>
    )
}

export default Popover
