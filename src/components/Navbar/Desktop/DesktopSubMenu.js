import React from "react"
import styled from "styled-components"
import { gray, black, orange } from "@vschool/lotus"
import Link from "../../shared/QueryLink"

const SubMenuContainer = styled.ul`
    visibility: hidden;
    display: none;
    width: 210px;
    padding: 0 2px;
    background-color: ${gray.lighter};
    position: absolute;
    border-width: 2px;
    border-style: solid;
    border-color: ${gray.light};
    top: 100%;
    left: 16px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    z-index: 4;

    &::before {
        content: "";
        position: absolute;
        height: 10px;
        width: 10px;
        background-color: ${gray.lighter};
        top: 0;
        left: 10%;
        transform: translateY(-6.4px) rotate(45deg);
        border-width: 2px;
        border-style: solid;
        border-color: ${gray.light};
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
    color: inherit;

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
    // TODO: Remove `i` and remove `+i` from the `key` prop once the links on Prismic are correct
    // Currently we're linking the same page most places, and it causes React to have two items with
    // the same "key" since it has the same ID
    const subMenuItems = items.map((subMenuItem, i) => {
        const {
            sub_nav_link: subNavLink,
            sub_nav_link_label: subNavLabel,
            start_date: startDate,
        } = subMenuItem
        console.log(subNavLabel.text === 'Web Development', 'sub menu item')
        let startDateEl = null
        let inPersonStart = null
        if (startDate?.document?.data !== undefined) {
            startDateEl = (
                <StartDate>
                    Starts {startDate?.document?.data.start_date}
                </StartDate>
            )
            if (subNavLabel.text === 'Web Development'){
                inPersonStart = (
                    <>
                        In Person Web Dev
                        <StartDate>
                            Starts First Tuesday of Each Month
                        </StartDate>
                    </>
                )
            }
        }

        return (
            <SubMenuItem key={subNavLink?.id + i}>
                <ItemLink as={Link} to={subNavLink?.url}>
                    {subNavLabel.text}
                    {startDateEl}
                    <div style={{marginTop:15}}>
                        {inPersonStart}
                    </div>
                </ItemLink>
            </SubMenuItem>
        )
    })
    return <SubMenuContainer>{subMenuItems}</SubMenuContainer>
}

export default SubMenu
