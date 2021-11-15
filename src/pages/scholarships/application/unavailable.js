import React from "react"
import Layout from "../../../components/layout.js"
import styled from "styled-components"
import Seo from "../../../components/seo"
import SyllabusDownload from '../../../components/shared/SyllabusDownload'
import UnavailablePage from "../../../components/scholarships/application/unavailable"
import CoursesNew from "../../../components/shared/CoursesNew"
import { blue, gray } from "@vschool/lotus"

const Container = styled.section`
    padding: 64px 40px;

    @media (min-width: 800px) {
        padding: 96px 80px;
    }
`

const Title = styled.h1`
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
    padding-bottom: 8px;

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
        padding-bottom: 64px;
    }
`

const Subtitle = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.dark};
    padding-bottom: 8px;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 16px;
    }
`

const Unavailable = () => {
    return (
        <Layout backgroundColor={blue.lightest}>
            <Seo title="Scholarship Application | Application Submitted" />
            <UnavailablePage />
            <Container>
                <Subtitle>Choose your future career</Subtitle>
                <Title>V School Courses</Title>
                <CoursesNew />
            </Container>
            <SyllabusDownload />
        </Layout>
    )
}

export default Unavailable
