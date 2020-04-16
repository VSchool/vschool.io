import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import Link from "../shared/QueryLink"
import { black, gray, orange, Button, white } from "@vschool/lotus"

const CourseContainer = styled.div`
    margin: 24px 0;
    width: 100%;
    max-width: 438px;
    padding: 24px;
    background-color: ${white};
    border: 2px solid ${gray.base};

    @media (min-width: 500px) {
        padding: 32px;
        width: 438px;
    }
`

const H3 = styled.h3`
    color: ${black};
    font-size: 20px;
    font-weight: 900;
    line-height: 26px;

    @media (max-width: 400px) {
        font-size: 18px;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    height: 64px;
    margin-top: 16px;

    @media (max-width: 460px) {
        font-size: 14px;
        height: 80px;
    }

    @media (min-width: 960px) {
    }
`

const H4 = styled.h4`
    color: ${orange.dark};
    font-size: 16px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    line-height: 24px;
    margin-top: 8px;
    margin-bottom: 24px;

    @media (max-width: 400px) {
        font-size: 14px;
    }
`

const StyledButton = styled(Button)`
    height: 42px;
    width: 138px;
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    outline: none;
`

function Course({ course, course_info, course_link, course_start_date }) {
    const start_date = course_start_date.document[0].data.start_date
    return (
        <CourseContainer>
            <H3>{course.text}</H3>
            <P>{course_info.text}</P>
            <H4>{start_date}</H4>
            <Link to={course_link.url}>
                <StyledButton buttonStyle="primary-light" buttonSize="sm">
                    Learn More
                </StyledButton>
            </Link>
        </CourseContainer>
    )
}

export default Course
