import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import ConvertKitSubscribe from "../shared/ConvertKitSubscribe"

const Container = styled.section`
    padding: 96px 16px 0;

    @media (min-width: 800px) {
        padding: 160px 88px 0;
    }
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
            <ConvertKitSubscribe tag="women scholarship" />
        </Container>
    )
}
