import React from "react"
import styled from "styled-components"
import { black, gray, orange, Button } from "@vschool/lotus"

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
    margin-bottom: 24px;
`

const StyledButton = styled(Button)`
    height: 42px;
    width: 138px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    outline: none;
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
            <StyledButton
                buttonStyle="primary-light"
                type="button"
                onClick={() => {
                    window.location = course_link.url
                }}
                target="_blank"
            >
                Learn More
            </StyledButton>
        </CourseContainer>
    )
}

export default Course
