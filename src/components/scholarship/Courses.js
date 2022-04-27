import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, gray } from "@vschool/lotus"
import CoursesNew from "../shared/CoursesNew"

const Container = styled.section`
    padding-bottom: 208px;
`

const Title = styled.h2`
    margin-bottom: 24px;
    text-align: center;

    @media (min-width: 800px) {
        margin-bottom: 32px;
    }
`

const Subtitle = styled.h6`
    margin-bottom: 24px;
    text-align: center;
    font-weight: 800;
    color: ${blue.dark};

    @media (min-width: 800px) {
        margin-bottom: 32px;
    }
`

const Text = styled.p`
    margin-bottom: 64px;
    max-width: 674px;
    text-align: center;
    color: ${gray.darker};
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
            <Subtitle>{subtitle}</Subtitle>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <CoursesNew />
        </Container>
    )
}
