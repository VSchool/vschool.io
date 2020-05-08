import React from 'react'
import styled from 'styled-components'
import { gray } from "@vschool/lotus"

const NavContainer = styled.nav`
  height: 48px;
  background-color: ${gray.lighter};
  position: sticky;
  top: 80px;
  z-index: 4;
`

export default function BlogNav(props){
  return (
    <NavContainer>
      Blog Nav
    </NavContainer>
  )
}