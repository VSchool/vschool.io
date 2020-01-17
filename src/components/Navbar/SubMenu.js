import React from "react"
import styled from "styled-components"
import { gray, black, blue, orange } from "@vschool/lotus"
import { Link } from "gatsby"

const SubMenuContainer = styled.ul`
    visibility: hidden;
    display: none;
    width: 210px;
    padding: 0 2px;
    background-color: ${gray.lighter};
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

const SubMenuItem = styled.li`
    list-style: none;
    color: ${gray.darker};
    font-size: 14px;

    :first-child {
        margin-top: 12px;
    }

    :last-child {
        margin-bottom: 12px;
    }

    :hover {
        color: ${black};
        background-color: ${gray.light};
    }
`

const ItemLink = styled.a`
    display: block;
    text-decoration: none;
    line-height: 20px;
    padding: 16px;

    :visited {
        color: inherit;
    }
`

const StartDate = styled.span`
    display: block;
    margin: 0;
    padding: 0;
    font-family: "aktiv-grotesk-extended";
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: ${orange.dark};
    text-transform: uppercase;
`

function SubMenu({ items }) {
    // TODO: Remove `i` and remove `+i` from the `key` prop
    const subMenuItems = items.map((subMenuItem, i) => {
        const {
            sub_nav_link: subNavLink,
            sub_nav_link_label: subNavLabel,
            start_date: startDate,
        } = subMenuItem
        return (
            <SubMenuItem key={subNavLink.id + i}>
                <ItemLink as={Link} to={subNavLink.url}>
                    {subNavLabel.text}
                    {startDate && (
                        <StartDate>
                            Starts {startDate.document[0].data.start_date}
                        </StartDate>
                    )}
                </ItemLink>
            </SubMenuItem>
        )
    })
    return <SubMenuContainer>{subMenuItems}</SubMenuContainer>
}

export default SubMenu
