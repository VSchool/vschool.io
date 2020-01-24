import React from "react"
import styled from "styled-components"
import { black } from "@vschool/lotus"

const Button = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
    width: 24px;
    box-sizing: border-box;
    cursor: pointer;
`

const Bar = styled.div`
    width: 100%;
    height: 4px;
    background-color: ${black};
`

function MobileButton({ toggleMainMenu }) {
    return (
        <Button onClick={toggleMainMenu}>
            <Bar />
            <Bar />
            <Bar />
        </Button>
    )
}

export default MobileButton
