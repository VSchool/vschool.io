import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { black, blue, gray } from "@vschool/lotus"
import CoursesNew from "../shared/CoursesNew"

const Container = styled.section`
    align-items: initial;
    margin-bottom: 162px;
`

const Title = styled.h2`
    color: ${black};
    margin-bottom: 24px;
    text-align: center;
`

const Subtitle = styled.h6`
    color: ${blue.dark};
    margin-bottom: 24px;
    text-align: center;
`

const Text = styled.p`
    color: ${gray.darker};
    margin-bottom: 48px;
    text-align: center;
`

export default function CourseList() {
    const data = useStaticQuery(graphql`
        {
            prismicDigitalFamilyPage {
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
    } = data.prismicDigitalFamilyPage.data
    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Text>{text}</Text>
            <CoursesNew />
        </Container>
    )
}
