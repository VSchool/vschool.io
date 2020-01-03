import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { gray } from "@vschool/lotus"

const NavItemContainer = styled.div`
    position: relative;
    border: 1px dashed blue;
`
const NavItem = styled.li`
    list-style: none;
    padding: 10px 20px;
    cursor: pointer;
    margin: 0;
    color: ${gray.darker};

    &:hover {
        color: ${gray.darkest};
    }
`

const SubMenu = styled.div`
    position: absolute;
    border: 1px solid red;
    top: 100%;
`

function PrimaryNavItem({ data }) {
    const [subMenuOpen, setSubMenuOpen] = useState(false)
    console.log(data)

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
        setSubMenuOpen(false)
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
            <NavItem>{data.primary.label.text}</NavItem>
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
