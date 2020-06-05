import React from "react"
import Course from "./Course.js"
import styled from "styled-components"
import { black } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${props => props.bgColor};
    padding-bottom: 24px;
    padding-top: 24px;

    @media (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 1200px) {
        padding-top: 64px;
    }
`

const H3 = styled.h3`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    margin-bottom: 24px;
    width: 366px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 320px) and (max-width: 400px) {
        font-size: 28px;
        width: 286px;
    }

    @media (min-width: 840px) {
        width: 628px;
        font-size: 40px;
        line-height: 44px;
    }

    @media (min-width: 1200px) {
        margin-left: auto;
        margin-right: auto;
        font-size: 48px;
        line-height: 48px;
        margin-bottom: 32px;
    }
`

const CoursesContainer = styled.div`
    @media (min-width: 1050px) {
        width: 908px;
        display: flex;
        justify-content: space-between;
    }
`

export default function Courses(props) {
    const { header, courses, bgColor } = props
    return (
        <Container bgColor={bgColor}>
            <H3>{header}</H3>
            <CoursesContainer>
                {courses.map((course, i) => (
                    <Course key={i} {...course} />
                ))}
            </CoursesContainer>
        </Container>
    )
}
