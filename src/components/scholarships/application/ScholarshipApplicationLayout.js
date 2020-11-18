import React from "react"
import styled from "styled-components"

import SimpleNav from "./SimpleNav"
import SimpleFooter from "./SimpleFooter"

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

export default function ScholarshipApplicationLayout({ children }) {
    return (
        <MainContainer>
            <ContentContainer>
                <SimpleNav />
                {children}
            </ContentContainer>
            <SimpleFooter />
        </MainContainer>
    )
}
