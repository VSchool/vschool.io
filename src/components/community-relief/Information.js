import React from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lighter};
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 96px;

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

const P = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    width: 366px;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 24px;

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
    const { info1, info2 } = props
    return (
        <Container>
            <P>{info1}</P>
            <P>{info2}</P>
        </Container>
    )
}

export default AboutCourse