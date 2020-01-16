import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { gray, pink, blue } from "@vschool/lotus"

import Arrow from "./Arrow"

const NavItemContainer = styled.div`
    position: relative;
    /* border: 1px dashed blue; */
`
const NavItem = styled.li`
    list-style: none;
    padding: 10px 16px;
    margin: 0;
    font-weight: bold;
    display: flex;
    color: ${gray.darker};
    cursor: pointer;

    &:hover {
        color: ${gray.darkest};
    }
`

const SubMenu = styled.div`
    position: absolute;
    border-width: 2px;
    border-style: solid;
    border-color: ${blue.lightest};
    top: 100%;
    left: 16px;

    &::before {
        content: "";
        position: absolute;
        height: 10px;
        width: 10px;
        background-color: ${gray.lighter};
        /* background-color: red; */
        top: 0;
        left: 10%;
        transform: translateY(-6.4px) rotate(45deg);
        border-width: 2px;
        border-style: solid;
        border-color: ${blue.lightest};
        border-bottom: none;
        border-right: none;
    }
`

function PrimaryNavItem({ data }) {
    const [subMenuOpen, setSubMenuOpen] = useState(true)

    // First click this is changing twice.
    // Might need to stop an event from bubbling up or something,
    // in case both mouseenter and click are registering
    function handleClick() {
        setSubMenuOpen(true)
        // This will be the preferred way 👇🏻
        // setSubMenuOpen(prevOpenState => !prevOpenState)
    }

    function handleMouseEnter() {
        setSubMenuOpen(true)
    }

    function handleMouseLeave() {
        setSubMenuOpen(true)
    }

    const subMenuItems = data.items.map(subMenuItem => (
        <Link to={subMenuItem.sub_nav_link.url}>
            {subMenuItem.sub_nav_link_label.text}
        </Link>
    ))

    return (
        <NavItemContainer
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <NavItem>
                {data.primary.label.text}
                {data.items.length > 0 && <Arrow />}
            </NavItem>
            {data.items.length > 0 && subMenuOpen && (
                <SubMenu>
                    {subMenuItems}
                    <br />
                </SubMenu>
            )}
        </NavItemContainer>
    )
}

export default PrimaryNavItem
