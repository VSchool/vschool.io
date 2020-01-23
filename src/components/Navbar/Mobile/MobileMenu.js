import React from "react"
import styled from "styled-components"

const Menu = styled.div`
    @media (min-width: 1000px) {
        display: none;
    }
`
function MobileMenu(props) {
    return <Menu>This is the Mobile Menu</Menu>
}

export default MobileMenu
