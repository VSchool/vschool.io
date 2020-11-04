import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { gray, black } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-top: 24px;

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
        margin-bottom: 0;
    }
`

export default function AboutCourse(props) {
    const data = useStaticQuery(graphql`
        {
            prismicTiffin {
                data {
                    about_course {
                        text
                    }
                }
            }
        }
    `)

        const {
        about_course: { text: aboutCourse },
    } = data.prismicTiffin.data

    return (
        <Container>
            <H1>{aboutCourse}</H1>
        </Container>
    )
}
