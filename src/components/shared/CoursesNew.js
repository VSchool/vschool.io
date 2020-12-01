import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { CardGroup, Card, black, gray, TextButton } from "@vschool/lotus"
import Link from "./QueryLink"

const FlexCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 32px;
`

const Icon = styled.img`
    height: 64px;
    margin-top: 8px;
`

const CourseName = styled.h5`
    color: ${black};
    margin-bottom: 8px;
`

const CourseInfo = styled.p`
    color: ${gray.darker};
    font-size: 14px;
    line-height: 18px;

    @media (min-width: 800px) {
        font-size: 16px;
    }
`

const StyledLink = styled(Link)`
    margin-top: auto;
`

export default function CoursesNew() {
    const data = useStaticQuery(graphql`
        {
            prismicCourseCards {
                data {
                    body {
                        ... on PrismicCourseCardsBodyCourse {
                            id
                            primary {
                                button_text {
                                    text
                                }
                                button_url {
                                    url
                                }
                                course_icon {
                                    url
                                    alt
                                }
                                course_info {
                                    text
                                }
                                course_name {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const courseCards = data.prismicCourseCards.data.body.map(course => (
        <FlexCard key={course.id}>
            <Icon
                src={course.primary.course_icon.url}
                alt={course.primary.course_icon.alt}
            />
            <CourseName>{course.primary.course_name.text}</CourseName>
            <CourseInfo>{course.primary.course_info.text}</CourseInfo>
            <StyledLink to={course.primary.button_url.url}>
                <TextButton>{course.primary.button_text.text}</TextButton>
            </StyledLink>
        </FlexCard>
    ))

    return <CardGroup>{courseCards}</CardGroup>
}
