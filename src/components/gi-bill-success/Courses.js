import React from "react"
import styled from "styled-components"
import CourseCards from '../shared/CoursesNew'
import { blue, gray } from "@vschool/lotus"

const Subtitle = styled.p`
    color: ${blue.darker};
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    margin-bottom: 8px;

    @media (min-width: 800px){
        font-size: 16px;
        line-height: 24px;
    }
`

const Title = styled.h1`
    font-weight: 900;
    color: ${gray.darkest};
    margin-bottom: 32px;
    text-align: center;
    font-size: 30px;
    line-height: 40px;

    @media (min-width: 800px){
        font-size: 56px;
        line-height: 56px;
    }
`
const Description = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    max-width: 664px;
    text-align: center;
    margin-bottom: 80px;
    font-weight: normal;

    @media (min-width: 800px){
        font-size: 20px;
        line-height: 32px;
    }
`

const CoursesContainer = styled.section`
    padding-top: 200px;
    padding-bottom: 112px;
    background: ${gray.lighter};

    @media (min-width: 800px){
        padding-top: 300px;
    }
`

export default function Courses(props) {

    return (
        <CoursesContainer>
            <Subtitle>CHOOSE YOUR FUTURE CAREER</Subtitle>
            <Title>V School Courses</Title>
            <Description>Enroll in our web development and UX/UI design online programs</Description>
            <CourseCards />
        </CoursesContainer>
    )
}
