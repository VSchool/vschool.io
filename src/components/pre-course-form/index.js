import React from "react"
import styled from "styled-components"
import Hero from "./Hero"
import Form from "./Form"
import { gray } from "@vschool/lotus"

const PageContainer = styled.div`
    background: ${gray.lighter};
`

export default function PreCourseForm(props) {
    return (
        <PageContainer>
            <Hero />
            <Form {...props} />
        </PageContainer>
    )
}
