import React from "react"
import styled from "styled-components"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "../layout.scss"
import BlogFilterProvider from "./context/BlogFilterProvider.js"

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const ContentContainer = styled.div`
    flex-grow: 1;

    & > main {
        margin-top: ${({ isBlog }) => (isBlog ? 0 : "80px")};
    }
`

export default function BlogLayout({ children }) {
    return (
        <BlogFilterProvider>
            <MainContainer>
                <ContentContainer isBlog={true}>
                    <Navbar isBlog={true} />

                    <main>{children}</main>
                </ContentContainer>
                <Footer />
            </MainContainer>
        </BlogFilterProvider>
    )
}
