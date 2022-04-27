import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { CardGroup, Card, black, gray, TextButton } from "@vschool/lotus"
import Link from "./QueryLink"

const FlexCard = styled(Card)`
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
`

const Icon = styled.img`
    margin-top: 8px;
    height: 64px;
`

const CourseName = styled.h5`
    font-weight: 800;
    color: ${black};
`

const CourseInfo = styled.p`
    margin-top: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;  
    text-align: left;
    color: ${gray.darker};

    @media (min-width: 800px) {
        margin-top: 16px;
        font-size: 16px;
        line-height: 24px;
    }
`

const StyledLink = styled(Link)`
    margin-top: 56px;
`

export default function CoursesNew(props) {
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
        <FlexCard
            key={course.id}
            onClick={() => navigate(course.primary.button_url.url)}
        >
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
