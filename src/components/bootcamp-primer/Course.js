import React from "react"
import styled from "styled-components"
import { black, gray, orange } from "@vschool/lotus"

const CourseContainer = styled.div`
    margin: 24px;

    @media (min-width: 840px) {
        margin-top: 8px;
        margin-left: 48px;
    }
`

const H3 = styled.h3`
    color: ${black};
    font-size: 20px;
    font-weight: 900;
    line-height: 26px;
`

const P = styled.p`
    color: ${gray.darker};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    height: 80px;
    margin-top: 16px;

    @media (min-width: 960px) {
        height: 80px;
    }
`

const H4 = styled.h4`
    color: ${orange.dark};
    font-size: 16px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    line-height: 24px;
    margin-top: 16px;
`

const Button = styled.a`
    height: 42px;
    width: 138px;
    border: 2px solid ${black};
    background-color: #fbf9f7;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.25);
    color: ${black};
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.43px;
    line-height: 14px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    margin-top: 24px;

    :hover {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0 0 rgba(100, 100, 100, 0.5);
    }

    :active {
        transform: translate(4px, 4px);
        box-shadow: inset 1px 1px #eee9;
        border-top: 1px solid #eee9;
        border-left: 1px solid #eee9;
    }
`

function Course({ course, course_info, course_link, startDates }) {
    const start_date = startDates.find(
        ({ node: { data } }) =>
            data.course_name.text.toLowerCase() === course.text.toLowerCase()
    ).node.data.start_date
    return (
        <CourseContainer>
            <H3>{course.text}</H3>
            <P>{course_info.text}</P>
            <H4>{start_date}</H4>
            <Button href={course_link.url} target="_blank">
                Learn More
            </Button>
        </CourseContainer>
    )
}

export default Course
