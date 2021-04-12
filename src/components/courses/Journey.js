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

const Header = styled.h1`
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
`

const StudentImgContainer = styled.div`
    background-color: ${blue.base};
    position: relative;
    margin-top: 65px;
    left: 8px;
`

const StudentImg = styled.img`
    width: 100%;
    position: relative;
    right: 10px;
    bottom: 6px;
`

const Paragraphs = styled.p`
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: ${gray.darker};
    font-weight: 400;

    & > p {
        font-weight: 400;
        color: ${gray.darker};
        text-align: left;
    }
`

const MidHeader = styled.h3`
    font-size: 24px;
    line-height: 32px;
    color: ${gray.darkest};
    padding: 64px 0 22px;
    font-weight: 800;
`

const SmlHeader = styled.h4`
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darkest};
    padding: 64px 0 22px;
    font-weight: 800;
`

const MapImage = styled.img`
    width: 42%;
    transform: rotate(270deg);
    margin: -90px 0 -90px -20px;
`

const StepContainer = styled.div`
    p {
        font-size: 12px;
        line-height: 16px;
        color: ${gray.darker};
        padding: 8px 0 24px;
    }

    h5 {
        font-size: 16px;
        line-height: 24px;
        color: ${blue.base};
    }
`

const Journey = props => {
    const data = useStaticQuery(graphql`
        {
            prismicCoursePageSharedData {
                data {
                    journey_map_image {
                        alt
                        url
                    }
                    journey_map_steps {
                        journey_map_step_text {
                            text
                        }
                        journey_map_step_title {
                            text
                        }
                    }
                    journey_map_text {
                        text
                    }
                    journey_map_title {
                        text
                    }
                    journey_pathway_text {
                        html
                    }
                    journey_pathway_title {
                        text
                    }
                    journey_title {
                        text
                    }
                }
            }
        }
    `)

    const {
        journey_map_image: { url: jMapImage, alt: jMapAlt },
        journey_map_steps,
        journey_map_text: { text: jMapText },
        journey_map_title: { text: jMapTitle },
        journey_pathway_text: { html: jPathText },
        journey_pathway_title: { text: jPathTitle },
        journey_title: { text: jTitle },
    } = data.prismicCoursePageSharedData.data

    const {
        student_journey_image: { alt: studAlt, url: studUrl },
    } = props

    const mappedSteps = journey_map_steps.map(
        ({
            journey_map_step_text: { text: jMapStepText },
            journey_map_step_title: { text: jMapStepTitle },
        }) => (
            <StepContainer>
                <h5>{jMapStepTitle}</h5>
                <p>{jMapStepText}</p>
            </StepContainer>
        )
    )

    return (
        <Container>
            <Header>{jTitle}</Header>
            <StudentImgContainer>
                <StudentImg src={studUrl} alt={studAlt} />
            </StudentImgContainer>
            <MidHeader>{jPathTitle}</MidHeader>
            <Paragraphs
                dangerouslySetInnerHTML={{ __html: jPathText }}
            ></Paragraphs>
            <SmlHeader>{jMapTitle}</SmlHeader>
            <Paragraphs>{jMapText}</Paragraphs>
            <MapImage src={jMapImage} alt={jMapAlt} />
            {mappedSteps}
        </Container>
    )
}

export default Journey
