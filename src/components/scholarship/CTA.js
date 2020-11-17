import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, blue, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const Container = styled.section`
    padding-top: 96px;
    padding-bottom: 96px;
    background-color: ${blue.lightest};
    margin-bottom: 96px;
`

const Title = styled.h2`
    text-align: center;
    margin-bottom: 24px;
    text-align: center;

    @media (min-width: 800px) {
        margin-bottom: 32px;
    }
`

const DatesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 24px;
    @media (min-width: 800px) {
        flex-direction: row;
    }
`

const DateGroup = styled.div`
    text-align: center;
    margin-bottom: 24px;

    @media (min-width: 800px) {
        &:first-child {
            margin-right: 96px;
        }
    }
`

const DateText = styled.h6`
    color: ${blue.base};
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 4px;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 8px;
    }
`
const Date = styled.h5`
    color: ${gray.darker};
`

const Text = styled.p`
    font-size: 16px;
    /* line-height: 24px; */
    margin-bottom: 24px;
    color: ${gray.darker};

    @media (min-width: 800px) {
        margin-bottom: 32px;
    }
`

export default function CTA(props) {
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipPageSharedData {
                data {
                    cta_title {
                        text
                    }
                    cta_text {
                        text
                    }
                    cta_button_text {
                        text
                    }
                    cta_button_link {
                        url
                    }
                }
            }
        }
    `)

    const {
        cta_title: { text: title },
        cta_text: { text },
        cta_button_text: { text: buttonText },
        cta_button_link: { url: buttonLink },
    } = data.prismicScholarshipPageSharedData.data

    const {
        winner_announced_text: { text: winnerText },
        winner_announced_date: winnerDate,
        deadline_text: { text: deadlineText },
        deadline_date: deadlineDate,
    } = props
    console.log(props)

    return (
        <Container>
            <Title>{title}</Title>
            <DatesContainer>
                <DateGroup>
                    <DateText>{deadlineText}</DateText>
                    <Date>{deadlineDate}</Date>
                </DateGroup>
                <DateGroup>
                    <DateText>{winnerText}</DateText>
                    <Date>{winnerDate}</Date>
                </DateGroup>
            </DatesContainer>
            <Text>{text}</Text>
            <Link to={buttonLink}>
                <Button size="lg">{buttonText}</Button>
            </Link>
        </Container>
    )
}
