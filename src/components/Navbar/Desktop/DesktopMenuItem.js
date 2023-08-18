import React from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"
import Link from "../../shared/QueryLink"

import Arrow from "../Arrow"
import DesktopSubMenu from "./DesktopSubMenu"

const NavItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 10px 16px;
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

const ItemLink = styled(Link)`
    display: block;
    text-decoration: none;
    line-height: 20px;
    color: inherit;

    :visited {
        color: inherit;
    }
`

function DesktopMenuItem({ data }) {
    return (
        <NavItem>
            {/*
            Sometimes the primary item doesn't lead anywhere, only the items in the sub menu do.
            When that's the case, we only display the text, not render a link.
            */}
            {data.primary.link ? (
                <ItemLink to={data.primary.link?.url}>
                    {data.primary.label.text}
                </ItemLink>
            ) : (
                <span>{data.primary.label.text}</span>
            )}
            {data.items[0]?.sub_nav_link && (
                <>
                    <Arrow />
                    <DesktopSubMenu items={data.items} />
                </>
            )}
        </NavItem>
    )
}

export default DesktopMenuItem
