import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lighter};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 28px;

    @media (min-width: 320px) and (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 600px) {
        padding-left: 48px;
        padding-right: 48px;
    }

    @media (min-width: 1200px) {
        padding-right: 96px;
        padding-left: 96px;
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
        font-size: 38px;
        width: 500px;
        line-height: 44px;
    }

    @media (min-width: 1200px) {
        width: 584px;
        margin-left: auto;
        margin-right: auto;
        font-size: 44px;
        line-height: 48px;
        margin-bottom: 32px;
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    width: 366px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 320px) and (max-width: 414px) {
        width: 286px;
    }

    @media (min-width: 600px) {
        width: 500px;
    }

    @media (min-width: 840px) {
        width: 700px;
        line-height: 26px;
    }

    @media (min-width: 1200px) {
        font-size: 20px;
        width: 874px;
        margin-right: auto;
        margin-left: auto;
        line-height: 28px;
    }
`

function AboutCourse(props) {
    const { title, sub } = props
    return (
        <Container>
            <H3>{title}</H3>
            <P>{sub}</P>
        </Container>
    )
}

export default AboutCourse
