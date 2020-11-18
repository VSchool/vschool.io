import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, gray } from "@vschool/lotus"
import Form from "./Form"
// These styles make the Footer stick to the bottom of any page, no matter the page height

const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 64px;
    padding-top: 64px;

    @media (min-width: 800px) {
        padding-top: 96px;
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
            prismicScholarshipApplicationForms {
                data {
                    form_subtitle {
                        text
                    }
                    essay_form_text {
                        text
                    }
                    essay_form_title {
                        text
                    }
                }
            }
        }
    `)

    const {
        form_subtitle: { text: subtitle },
        essay_form_text: { text },
        essay_form_title: { text: title },
    } = data.prismicScholarshipApplicationForms.data
    return (
        <>
            <TextContainer>
                <Subtitle>{subtitle}</Subtitle>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </TextContainer>
            <Form />
        </>
    )
}
