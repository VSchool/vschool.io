import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, blue } from "@vschool/lotus"

const Container = styled.section`
    margin-top: -320px;
    padding-top: 320px;

    @media (min-width: 1000px) {
        padding-top: 160px;
        margin-top: 0;
    }
`

const TopContainer = styled.div`
    margin-bottom: 48px;
    max-width: 848px;
    text-align: center;

    @media (min-width: 800px) {
        margin-bottom: 96px;
    }
`

const Title = styled.h2`
    margin-bottom: 16px;
`

const Text = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darker};

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 32px;    
    }
`

const StagesContainer = styled.div`
    margin-right: 48px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-self: flex-start;

    @media (min-width: 800px) {
        margin-right: 0;
        max-width: 1200px;
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
    margin-bottom: 8px;
    color: ${blue.dark};
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;

    @media (min-width: 1200px) {
        margin-bottom: 12px;
        font-size: 16px;
        line-height: 24px;    
    }
`

const StageName = styled.h3`
    margin-bottom: 14px;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;

    @media (min-width: 1200px) {
        margin-bottom: 24px;
        font-weight: 900;
        font-size: 32px;
        line-height: 40px;
    }
`

const StageText = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${gray.darker};

    @media (min-width: 1200px) {
        font-size: 16px;
        line-height: 24px;    
    }
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
        <Stage key={stage.stage_number.text}>
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
