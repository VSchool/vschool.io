import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { blue, gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 0;
    padding-bottom: 74px;

    @media (min-width: 800px) {
        padding-top: 0;
    }
`

const WidthContainer = styled.section`
    max-width: 1200px;
`

const Title = styled.h1`
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    padding: 70px 0 16px;
    color: ${gray.darkest};
`

const ListItem = styled.li`
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    border-bottom: 2px solid ${blue.base};
    padding: 16px;
    list-style-type: none;
    color: ${gray.darker};
`

const FlexContainer = styled.div`
    @media (min-width: 800px) {
        display: flex;
        gap: 60px;
    }
`

const Logo = styled.p`
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 0.25px;
    color: #514f4b;
    justify-content: center;
    margin-top: 60px;

    @media (min-width: 800px) {
        display: flex;
        align-items: center;
        justify-content: normal;
        margin-top: 0;
    }
`

const LearningModel = () => {
    const data = useStaticQuery(graphql`
        {
            prismicCoursePageSharedData {
                data {
                    body {
                        ... on PrismicCoursePageSharedDataDataBodyLearningModelGroup {
                            id
                            items {
                                learning_model_bullet {
                                    text
                                }
                            }
                            primary {
                                learning_model_type {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const mappedInfo = data.prismicCoursePageSharedData.data.body.map(
        (
            {
                items,
                primary: {
                    learning_model_type: { text: LearnTitle },
                },
            },
            i
        ) =>
            i === 0 ? (
                <>
                    <div>
                        <Title>{LearnTitle}</Title>
                        <ul>
                            {items.map(
                                ({ learning_model_bullet: { text: item } }) => (
                                    <ListItem>{item}</ListItem>
                                )
                            )}
                        </ul>
                    </div>
                    <Logo>VS</Logo>
                </>
            ) : (
                <div>
                    <Title>{LearnTitle}</Title>
                    <ul>
                        {items.map(
                            ({ learning_model_bullet: { text: item } }) => (
                                <ListItem>{item}</ListItem>
                            )
                        )}
                    </ul>
                </div>
            )
    )

    return (
        <Container>
            <WidthContainer>
                <FlexContainer>{mappedInfo}</FlexContainer>
            </WidthContainer>
        </Container>
    )
}

export default LearningModel
