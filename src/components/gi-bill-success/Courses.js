import React from "react"
import styled from "styled-components"
import CourseCards from '../shared/CoursesNew'
import { blue, gray } from "@vschool/lotus"

const Subtitle = styled.p`
    color: ${blue.darker};
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.25px;
`

const Title = styled.h1`
    font-weight: 900;
    font-size: 56px;
    line-height: 56px;
    color: ${gray.darkest};
    margin-bottom: 32px;
`
const Description = styled.p`
    font-size: 20px;
    line-height: 32px;
    color: ${gray.darker};
    max-width: 664px;
    text-align: center;
    margin-bottom: 80px;
`

const CoursesContainer = styled.section`
    padding-top: 300px;
    padding-bottom: 112px;
    background: ${gray.lighter};
`

export default function Courses(props) {

    return (
        <CoursesContainer>
            <Subtitle>CHOOSE YOUR FUTURE CAREER</Subtitle>
            <Title>V School Courses</Title>
            <Description>Use your G.I. Bill benefits to enroll in our web development and UX/UI design online programs</Description>
            <CourseCards />
        </CoursesContainer>
    )
}
