import React, { useContext } from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"
import { Link } from "gatsby"

import Arrow from "../Arrow"
import { NavbarContext } from "../navbarContext"

const MenuItem = styled.li`
    list-style: none;
    padding: 24px;
    font-size: 18px;
    line-height: 18px;
    color: ${gray.darker};
    font-weight: 800;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${gray.light};

    &:first-child {
        border-top: 1px solid ${gray.light};
    }
`

const ItemLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const StyledArrow = styled(Arrow)`
    transform: rotate(-90deg);
`

function MobilePrimaryMenuItem({ data }) {
    const { toggleSubMenu } = useContext(NavbarContext)
    return (
        <MenuItem onClick={() => !data.primary.link && toggleSubMenu()}>
            {data.primary.link ? (
                <ItemLink to={data.primary.link.url}>
                    {data.primary.label.text}
                </ItemLink>
            ) : (
                <span>{data.primary.label.text}</span>
            )}

            {data.items.length > 0 && <StyledArrow />}
        </MenuItem>
    )
}

export default MobilePrimaryMenuItem
