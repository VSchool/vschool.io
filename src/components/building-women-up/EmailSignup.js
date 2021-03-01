import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.section`
    padding-top: 96px;
`
const Title = styled.h3`
    text-align: center;
    max-width: 850px;
`

export default function EmailSignup() {
    const data = useStaticQuery(graphql`
        {
            prismicWomensHistoryMonthPage {
                data {
                    email_title {
                        text
                    }
                }
            }
        }
    `)

    const {
        email_title: { text: emailTitle },
    } = data.prismicWomensHistoryMonthPage.data
    return (
        <Container>
            <Title>{emailTitle}</Title>
        </Container>
    )
}
