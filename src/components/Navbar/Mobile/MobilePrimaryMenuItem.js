import React, { useContext } from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"
import { Link } from "gatsby"

import Arrow from "../Arrow"
import { NavbarContext } from "../navbarContext"

const MenuItem = styled.li`
    list-style: none;
    font-size: 18px;
    line-height: 18px;
    color: ${gray.darker};
    font-weight: 800;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${gray.light};

    &:first-child {
        border-top: 1px solid ${gray.light};
    }
`

const Item = styled.span`
    padding: 24px;
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
    cursor: pointer;
`

const StyledArrow = styled(Arrow)`
    transform: rotate(-90deg);
`

function MobilePrimaryMenuItem({ data }) {
    const { toggleSubMenu } = useContext(NavbarContext)
    return (
        <MenuItem>
            {data.primary.link ? (
                <Item as={Link} to={data.primary.link.url}>
                    {data.primary.label.text}
                </Item>
            ) : (
                <Item onClick={toggleSubMenu}>{data.primary.label.text}</Item>
            )}

            {data.items.length > 0 && <StyledArrow />}
        </MenuItem>
    )
}

export default MobilePrimaryMenuItem
