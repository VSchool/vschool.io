import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray } from "@vschool/lotus"

const Container = styled.section`
    padding-bottom: 96px;

    @media (min-width: 800px) {
        flex-direction: row;
        padding-bottom: 160px;
    }
`

const Group = styled.div`
    margin-bottom: 24px;

    @media (min-width: 800px) {
        margin-bottom: 0;
        margin-right: 24px;
    }
`

const Question = styled.h4`
    margin-bottom: 8px;

    @media (min-width: 800px) {
        margin-bottom: 16px;
    }
`

const Answer = styled.p`
    color: ${gray.darker};
`

export default function FAQ() {
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipPage {
                data {
                    faq_list {
                        faq_question {
                            text
                        }
                        faq_answer {
                            text
                        }
                    }
                }
            }
        }
    `)

    const { faq_list: questionsList } = data.prismicScholarshipPage.data

    const faqs = questionsList.map(faq => (
        <Group>
            <Question>{faq.faq_question.text}</Question>
            <Answer>{faq.faq_answer.text}</Answer>
        </Group>
    ))

    return <Container>{faqs}</Container>
}