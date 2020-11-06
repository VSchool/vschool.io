import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { white, gray, blue } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${white};
    padding-top: 320px;
    margin-top: -320px;

    @media (min-width: 1000px) {
        padding-top: 160px;
<<<<<<< HEAD
        margin-bottom: 96px;
=======
        padding-bottom: 96px;
>>>>>>> scholarship-pages
        margin-top: 0;
    }
`

const TopContainer = styled.div`
    text-align: center;
    max-width: 848px;
    margin-bottom: 48px;

    @media (min-width: 800px) {
        margin-bottom: 96px;
    }
`

const Title = styled.h2`
    margin-bottom: 16px;
`

const Text = styled.p`
    color: ${gray.darker};
`

const StagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin-right: 48px;
    align-self: flex-start;

    @media (min-width: 800px) {
        max-width: 1200px;
        margin-right: 0;
        flex-direction: row;
        justify-content: center;
        align-self: center;
    }
`

const Stage = styled.div`
    margin-bottom: 48px;
    @media (min-width: 800px) {
        flex-basis: calc(100% / 3);
        &:not(:last-child) {
            margin-right: 32px;
        }
    }
`

const StageNum = styled.h6`
    color: ${blue.dark};
    margin-bottom: 8px;
`

const StageName = styled.h3`
    margin-bottom: 14px;
`

const StageText = styled.p`
    color: ${gray.darker};
    font-size: 14px;
    line-height: 18px;
`

export default function Stages() {
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipPageSharedData {
                data {
                    stages_title {
                        text
                    }
                    stages_text {
                        text
                    }
                    stages_list {
                        stage_description {
                            text
                        }
                        stage_name {
                            text
                        }
                        stage_number {
                            text
                        }
                    }
                }
            }
        }
    `)

    const {
        stages_title: { text: title },
        stages_text: { text },
        stages_list: stagesList,
    } = data.prismicScholarshipPageSharedData.data

    const stages = stagesList.map(stage => (
<<<<<<< HEAD
        <Stage>
=======
        <Stage key={stage.stage_number.text}>
>>>>>>> scholarship-pages
            <StageNum>{stage.stage_number.text}</StageNum>
            <StageName>{stage.stage_name.text}</StageName>
            <StageText>{stage.stage_description.text}</StageText>
        </Stage>
    ))
    return (
        <Container>
            <TopContainer>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </TopContainer>
            <StagesContainer>{stages}</StagesContainer>
        </Container>
    )
}
