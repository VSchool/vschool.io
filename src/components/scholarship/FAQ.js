import React from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"

const Container = styled.section`
    padding-top: 32px;
    padding-bottom: 64px;
    // padding-bottom: 96px;
    // padding-top: 64px;
    // padding-bottom: 64px;
    // border: 2px solid red;

    @media (min-width: 1200px) {
        padding-bottom: 160px;
        // padding-top: 32px;
        // padding-bottom: 96px;
        // padding-top: 64px;
        // padding-bottom: 96px;
        flex-direction: row;
    }
`

const GroupsContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
        flex-direction: row;
        max-width: 1024px;
        margin-left: auto;
        margin-right: auto;
    }
`

const Group = styled.div`
    margin-bottom: 24px;

    @media (min-width: 800px) {
        margin-bottom: 0;

        &:not(:last-child) {
            margin-right: 24px;
        }
    }
`

const Question = styled.h4`
    margin-bottom: 8px;
    font-weight: 900;

    @media (min-width: 800px) {
        margin-bottom: 16px;
    }
`

const Answer = styled.p`
    color: ${gray.darker};
`

export default function Faq(props) {
    const questionsList = props.faq_list

    const faqs = questionsList.map(faq => (
        <Group key={faq.faq_question.text}>
            <Question>{faq.faq_question.text}</Question>
            <Answer>{faq.faq_answer.text}</Answer>
        </Group>
    ))

    return (
        <Container>
            <GroupsContainer>{faqs}</GroupsContainer>
        </Container>
    )
}
