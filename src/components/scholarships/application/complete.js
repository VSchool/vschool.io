import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Link from "../../shared/QueryLink"
import { blue, gray, Button } from "@vschool/lotus"
import CoursesNew from "../../shared/CoursesNew"


const Container = styled.section`
    padding-top: 64px;
    padding-bottom: 96px;
    text-align: center;

    @media (min-width: 800px) {
        padding-top: 96px;
        padding-bottom: 160px;
    }
`
const Subtitle = styled.h6`
    color: ${blue.dark};
    margin-bottom: 12px;
    @media (min-width: 800px) {
        margin-bottom: 8px;
    }
`

const Title = styled.h1`
    max-width: 674px;
    margin: auto;
    margin-bottom: 24px;

    @media (min-width: 800px) {
        margin-bottom: 32px;
    }
`
const Text = styled.p`
    color: ${gray.darker};
    max-width: 674px;
    margin-bottom: 48px;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;

    @media (min-width: 800px) {
        margin-bottom: 64px;
        font-size: 24px;
        line-height: 32px;
    }
`
const Image = styled.img`
    width: 100%;
    max-width: 674px;
    margin-bottom: 48px;
    @media (min-width: 800px) {
        margin-bottom: 64px;
    }
`

const Courses = styled.div`
    padding-top: 40px;
`

const CourseSubtitle = styled.h6`
    color: ${blue.dark};
    padding-bottom: 48px;
    padding-top: 8px;

    @media (min-width: 800px) {
        padding-bottom: 64px;
    }
`

const CourseTitle = styled.h1`
    margin: auto;
`

export default function Complete() {
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipApplicationForms {
                data {
                    form_subtitle {
                        text
                    }
                    completed_title {
                        text
                    }
                    completed_text {
                        text
                    }
                    completed_image {
                        alt
                        url
                    }
                    completed_button_text {
                        text
                    }
                }
            }
        }
    `)
    const {
        form_subtitle: { text: subtitle },
        completed_title: { text: title },
        completed_text: { text },
        completed_image: { url: imageUrl, alt: imageAlt },
    } = data.prismicScholarshipApplicationForms.data

    return (
        <Container>
            <Subtitle>{subtitle}</Subtitle>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Image src={imageUrl} alt={imageAlt} />
            <Courses>
                <CourseTitle>V School Courses</CourseTitle>
                <CourseSubtitle>Choose your future career</CourseSubtitle>
                <CoursesNew />
            </Courses>
        </Container>
    )
}
