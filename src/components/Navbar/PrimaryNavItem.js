import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { gray, pink, blue } from "@vschool/lotus"

import Arrow from "./Arrow"
import SubMenu from "./SubMenu"

const NavItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    list-style: none;
    padding: 10px 16px;
    margin: 0;
    font-weight: bold;
    display: flex;
    color: ${gray.darker};
    font-size: 14px;

    &:hover {
        cursor: pointer;
        color: ${gray.darkest};
    }

    &:hover > ul,
    & ul:hover {
        visibility: visible;
        display: block;
    }
`

function PrimaryNavItem({ data }) {
    return (
        <NavItem>
            {data.primary.label.text}
            {data.items.length > 0 && (
                <>
                    <Arrow />
                    <SubMenu items={data.items} />
                </>
            )}
        </NavItem>
    )
}

export default PrimaryNavItem
