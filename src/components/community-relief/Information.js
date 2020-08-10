import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 96px;

    @media (min-width: 320px) and (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`

const H1 = styled.h1`
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    color: ${black};
    margin-bottom: 32px;

    @media (min-width: 600px) {
        font-size: 36px;
        width: 460px;
    }

    @media (min-width: 840px) {
        font-size: 40px;
        line-height: 40px;
        width: 600px;
    }

    @media (min-width: 1200px) {
        font-size: 44px;
        width: 900px;
        padding-left: 160px;
        padding-right: 160px;
        line-height: 56px;
        margin-bottom: 40px;
    }
`

const P = styled.p`
    color: ${gray.darker};
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
    const { info1, info2, header } = props
    return (
        <Container>
            <H1>{header}</H1>
            <P>{info1}</P>
            <P>{info2}</P>
        </Container>
    )
}

export default AboutCourse
