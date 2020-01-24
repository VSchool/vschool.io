import React from "react"
import styled from "styled-components"
import { black } from "@vschool/lotus"

const Button = styled.div`
    display: flex;
    position: relative;
    z-index: 500;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
    width: 24px;
    box-sizing: border-box;
    cursor: pointer;

    div {
        width: 100%;
        height: 4px;
        background-color: ${black};
        transform-origin: 1px;
        transition: all 0.3s linear;

        :first-child {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }

        :nth-child(2) {
            opacity: ${({ open }) => (open ? "0" : "1")};
        }

        :nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`

function MobileButton({ toggleMainMenu, open }) {
    return (
        <Button onClick={toggleMainMenu} open={open}>
            <div />
            <div />
            <div />
        </Button>
    )
}

export default MobileButton
