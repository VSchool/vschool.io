import React from "react"
import Hero from "./Hero"
import Info from "./Info"
import Career from "./Career"
import Start from "./Start"
import Partners from "./Partners"
import styled from "styled-components"
import { gray } from "@vschool/lotus"
import { navigate } from "gatsby"

const PageContainer = styled.div`
    background: ${gray.lighter};
`

export default function PreCourse({data}) {
    const submitButton = () => {
        navigate("/pre-course-communities/registration-form")
    }
    return (
        <PageContainer>
            <Hero submit={submitButton} />
            <Info />
            <Career submit={submitButton} />
            <Start submit={submitButton} />
            <Partners />
        </PageContainer>
    )
}
