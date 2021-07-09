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

export default function PreCourse({ data, uid }) {
    const submitButton = () => {
        /* Pass the UID via state to the registration form so we can
        pass that along to Zapier when submitting the form */
        navigate("/pre-course-communities/registration-form", {
            state: { uid, convertKitTag: data.convertkit_subscribe_tag },
        })
    }
    return (
        <PageContainer>
            <Hero submit={submitButton} {...data} />
            <Info />
            <Career submit={submitButton} />
            <Start submit={submitButton} />
            <Partners {...data} />
        </PageContainer>
    )
}
