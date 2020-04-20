/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import "./layout.css"

const Layout = ({ children }) => {
    // const data = useStaticQuery(graphql`
    //     query SiteTitleQuery {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)

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

    return (
        <>
            <MainContainer>
                <ContentContainer>
                    <Navbar />

                    <main>{children}</main>
                </ContentContainer>
                <Footer />
            </MainContainer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
