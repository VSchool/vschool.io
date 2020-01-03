import React from "react"
import styled from "styled-components"
import { black, gray } from "@vschool/lotus"

const FooterContainer = styled.footer`
    background-color: ${black};
    color: ${gray.base};
    height: 200px;
`

const Footer = () => {
    return (
        <FooterContainer>
            <h3>Footer goes here</h3>
        </FooterContainer>
    )
}

export default Footer
