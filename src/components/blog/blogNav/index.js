import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const NavContainer = styled.nav`
    height: 48px;
    background-color: ${gray.lighter};
    position: sticky;
    top: 80px;
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
`

const FixedContainer = styled.div`
    width: 100%;
    
    @media(min-width: 1000px){
        padding-left: 72px;
    }
`

const Header = styled.h2`
    font-family: "aktiv-grotesk-extended";
    color: ${black};
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
`

export default function BlogNav(props) {
    return (
        <NavContainer>
            <FixedContainer>
                <Header>Blog</Header>
            </FixedContainer>
        </NavContainer>
    )
}
