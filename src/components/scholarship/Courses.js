import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, gray } from "@vschool/lotus"
import CoursesNew from "../shared/CoursesNew"

const Container = styled.section`
    padding-bottom: 208px;
`

const Title = styled.h2`
    text-align: center;
    margin-bottom: 24px;

    @media (min-width: 800px) {
        margin-bottom: 32px;
    }
`

const Subtitle = styled.h6`
    color: ${blue.dark};
    text-align: center;
    margin-bottom: 24px;

    @media (min-width: 800px) {
        margin-bottom: 32px;
    }
`

const Text = styled.p`
    color: ${gray.darker};
    text-align: center;
    margin-bottom: 64px;
    max-width: 674px;
`

export default function Courses() {
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipPageSharedData {
                data {
                    courses_title {
                        text
                    }
                    courses_subtitle {
                        text
                    }
                    courses_text {
                        text
                    }
                }
            }
        }
    `)
    const {
        courses_title: { text: title },
        courses_subtitle: { text: subtitle },
        courses_text: { text },
    } = data.prismicScholarshipPageSharedData.data
    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Text>{text}</Text>
            <CoursesNew />
        </Container>
    )
}
