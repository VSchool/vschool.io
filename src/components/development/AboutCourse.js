import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 24px;

    @media (min-width: 320px) and (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 600px) {
        padding-top: 56px;
    }

    @media (min-width: 1200px) {
        padding-top: 96px;
    }
`

const H1 = styled.h1`
    font-family: "aktiv-grotesk";
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
    }
`

const P = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    margin-bottom: 24px;

    @media (min-width: 600px) {
        width: 560px;
    }

    @media (min-width: 840px) {
        font-size: 18px;
        line-height: 26px;
        width: 720px;
    }

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 28px;
        width: 800px;
    }
`

export default function AboutCourse(props) {
    const { header, sub } = props
    return (
        <Container>
            <H1>{header}</H1>
            <P>{sub}</P>
        </Container>
    )
}
