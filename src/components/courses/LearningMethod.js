import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 0;
    padding-bottom: 0px;

    @media (min-width: 800px) {
        padding-top: 0;
    }
`

const Title = styled.h1`
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darkest};

    @media (min-width: 800px) {
        font-size: 24px;
        line-height: 32px;
    }
`

const Image = styled.img`
    width: 100%;
    margin: 30px auto;
`

const Text = styled.p`
    font-size: 14px;
    line-height: 18px;
    padding: 16px 0 64px;
    color: ${gray.darker};

    /* @media (min-width: 800px) {
        font-size: 24px;
        line-height: 32px;
    } */
`

const TextCard = styled.div`
    @media (min-width: 800px) {
        display: flex;
        flex-direction: column;
        width: 50%;
    }
`

const FlexContainer = styled.div`
    @media (min-width: 800px) {
        display: flex;
        gap: 60px;
    }
`

const LearningMethod = () => {
    const data = useStaticQuery(graphql`
        {
            prismicCoursePageSharedData {
                data {
                    learning_method_group {
                        learning_method_chart {
                            alt
                            url
                        }
                        learning_method_text {
                            text
                        }
                        learning_method_type {
                            text
                        }
                    }
                }
            }
        }
    `)

    const groups = data.prismicCoursePageSharedData.data.learning_method_group.map(
        ({
            learning_method_chart: { alt: LearnAlt, url: LearnImg },
            learning_method_text: { text: LearnText },
            learning_method_type: { text: LearnType },
        }) => (
            <TextCard>
                <Title>{LearnType}</Title>
                <Image src={LearnImg} alt={LearnAlt} />
                <Text>{LearnText}</Text>
            </TextCard>
        )
    )

    return <Container>
        <FlexContainer>
            {groups}
        </FlexContainer>
    </Container>
}

export default LearningMethod
