import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, gray } from "@vschool/lotus"

import SimpleNav from "./SimpleNav"
import SimpleFooter from "./SimpleFooter"
import Form from "./Form"
// These styles make the Footer stick to the bottom of any page, no matter the page height
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const ContentContainer = styled.div`
    flex-grow: 1;

    & > main {
        margin-top: 80px;
    }
`

const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 64px;

    @media (min-width: 800px) {
        margin-bottom: 96px;
    }
`

const Subtitle = styled.h6`
    text-align: center;
    max-width: 850px;
    margin-bottom: 8px;
    color: ${blue.dark};

    @media (min-width: 800px) {
        margin-bottom: 16px;
    }
`

const Title = styled.h1`
    text-align: center;
    max-width: 850px;
    margin-bottom: 16px;

    @media (min-width: 800px) {
        margin-bottom: 24px;
    }
`

const Text = styled.p`
    text-align: center;
    max-width: 850px;
    color: ${gray.darker};
`

export default function BackgroundInfoForm() {
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipsBackgroundInfoForm {
                data {
                    form_subtitle {
                        text
                    }
                    form_title {
                        text
                    }
                    form_text {
                        text
                    }
                }
            }
        }
    `)

    const {
        form_subtitle: { text: subtitle },
        form_title: { text: title },
        form_text: { text },
    } = data.prismicScholarshipsBackgroundInfoForm.data
    return (
        <MainContainer>
            <ContentContainer>
                <SimpleNav />
                <TextContainer>
                    <Subtitle>{subtitle}</Subtitle>
                    <Title>{title}</Title>
                    <Text>{text}</Text>
                </TextContainer>
                <Form />
            </ContentContainer>
            <SimpleFooter />
        </MainContainer>
    )
}
