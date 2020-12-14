import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "@vschool/lotus/dist/index.css"
import "./layout.scss"

// These styles make the Footer stick to the bottom of any page, no matter the page height
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const ContentContainer = styled.div`
    flex-grow: 1;

    & > main {
        margin-top: 80px;
    }
`

const Layout = ({ children }) => {

    return (
        <MainContainer>
            <ContentContainer>
                <Navbar />

                <main>{children}</main>
            </ContentContainer>
            <Footer />
        </MainContainer>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
