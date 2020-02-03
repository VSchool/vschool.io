import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { gray, black, green, Button } from "@vschool/lotus"
import { animated } from "react-spring"
import { useMenuAnimation } from "./useMenuAnimation"

import Caret from "./Caret"
import { NavbarContext } from "../navbarContext"

const Overlay = styled(animated.div)`
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: ${gray.lighter};
    color: ${black};
    top: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
    z-index: 100;
`

const NavbarControls = styled.div`
    height: 80px;
    padding: 28px 16px;
    display: flex;
    align-items: center;
`

const SubMenuBody = styled.ul`
    padding: 0 16px;
    list-style: none;

    & > li {
        padding: 24px 16px;
        font-size: 14px;
        font-weight: 800;
        border-top: 1px solid ${gray.light};
        line-height: 20px;
    }

    & > li:first-child {
        font-size: 16px;
        border-top: 1px solid ${gray.light};
        padding-left: 8px;
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

const StartDate = styled.p`
    font-family: "aktiv-grotesk-extended";
    letter-spacing: 0.25px;
    font-size: 10px;
    text-transform: uppercase;

    & > span {
        color: ${green.base};
    }
`

const StyledButton = styled(Button)`
    width: 100%;
    height: 32px;
    font-size: 12px;
    padding: 0;
    margin-top: 16px;
    font-family: "aktiv-grotesk-extended";
`

function MobileSubMenu() {
    const { subMenuOpen, toggleSubMenu, chosenSubMenu } = useContext(
        NavbarContext
    )

    const menuAnimation = useMenuAnimation(subMenuOpen)

    const subMenuItems =
        chosenSubMenu &&
        chosenSubMenu.items &&
        chosenSubMenu.items.map(item => {
            return (
                <li>
                    {chosenSubMenu.slice_label ? (
                        item.sub_nav_link_label.text
                    ) : (
                        <ItemLink to={item.sub_nav_link.url}>
                            {item.sub_nav_link_label.text}
                        </ItemLink>
                    )}
                    {item.start_date && (
                        <StartDate>
                            Next session:{" "}
                            <span>
                                {item.start_date.document[0].data.start_date}
                            </span>
                        </StartDate>
                    )}
                    {chosenSubMenu.slice_label && item.start_date && (
                        <Link to={item.sub_nav_link.url}>
                            <StyledButton>Make it Happen</StyledButton>
                        </Link>
                    )}
                    {chosenSubMenu.slice_label && !item.start_date && (
                        <Link to={item.sub_nav_link.url}>
                            <StyledButton buttonStyle="primary-light">
                                Make it Happen
                            </StyledButton>
                        </Link>
                    )}
                </li>
            )
        })

    return (
        <Overlay style={menuAnimation}>
            <NavbarControls>
                <Caret onClick={toggleSubMenu} />
            </NavbarControls>
            <SubMenuBody>
                {chosenSubMenu && <li>{chosenSubMenu.primary.label.text}</li>}
                {subMenuItems}
            </SubMenuBody>
        </Overlay>
    )
}

export default MobileSubMenu
