import React, { useState } from "react"
import styled from "styled-components"

import MobileButton from "./MobileButton"

const Menu = styled.div`
    @media (min-width: 1000px) {
        display: none;
    }
`
function MobileMenu(props) {
    const [open, setOpen] = useState(false)

    function toggleOpen() {
        setOpen(prevState => !prevState)
    }

    return (
        <Menu>
            <MobileButton toggleOpen={toggleOpen} />
            
        </Menu>
    )
}

export default MobileMenu
