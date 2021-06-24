import React from "react"
import styled from "styled-components"
import Hero from "./Hero"
import Next from "./Next"
import Courses from "./Courses"
import { gray } from "@vschool/lotus"

const PageContainer = styled.div`
    background: ${gray.lighter};
`

export default function PreCourseSuccess() {
    return (
        <PageContainer>
            <Hero />
            <Next />
            <Courses />
        </PageContainer>
    )
}
