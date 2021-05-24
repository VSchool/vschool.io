import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { white, gray, blue } from "@vschool/lotus"

const Container = styled.section`
    margin-top: -160px;
    padding-top: 256px;
    @media (min-width: 1000px) {
        margin-top: 0;
        padding-top: 160px;
    }
`

const Title = styled.h2`
    text-align: center;
    margin-bottom: 24px;
    @media (min-width: 1000px) {
        margin-bottom: 32px;
    }
`

const Callout = styled.h6`
    color: ${blue.dark};
    text-align: center;
    margin-bottom: 24px;
`

const Description = styled.p`
    color: ${gray.darker};
    margin-bottom: 48px;
    text-align: center;
    max-width: 674px;

    @media (min-width: 1035px) {
        margin-bottom: 96px;
    }
`

const GoalsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 100px;
    max-width: 1100px;
    align-self: flex-start;

    @media (min-width: 1035px) {
        align-self: center;
        margin-right: 0;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 160px;
    }
`

const Goal = styled.div`
    margin-bottom: 48px;
    max-width: 400px;
    &:not(:last-child) {
        margin-right: 32px;
    }

    & > h3 {
        color: ${gray.darkest};
        margin-bottom: 16px;
    }

    & > p {
        font-size: 14px;
        line-height: 18px;
        color: ${gray.darker};
        font-weight: 500;
    }
`

export default function Explainer() {
    const data = useStaticQuery(graphql`
        {
            prismicDigitalFamilyPage {
                data {
                    explainer_goals_list {
                        goal_title {
                            text
                        }
                        goal_description {
                            text
                        }
                    }
                    explainer_description {
                        text
                    }
                    explainer_subtitle {
                        text
                    }
                    explainer_title {
                        text
                    }
                }
            }
        }
    `)

    const {
        explainer_goals_list: goalsList,
        explainer_description: { text: description },
        explainer_subtitle: { text: subtitle },
        explainer_title: { text: title },
    } = data.prismicDigitalFamilyPage.data

    const goals = goalsList.map(goal => (
        <Goal key={goal.goal_title.text}>
            <h3>{goal.goal_title.text}</h3>
            <p>{goal.goal_description.text}</p>
        </Goal>
    ))

    return (
        <Container>
            <Title>{title}</Title>
            <Callout>{subtitle}</Callout>
            <Description>{description}</Description>
            <GoalsContainer>{goals}</GoalsContainer>
        </Container>
    )
}
