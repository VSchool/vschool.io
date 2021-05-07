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

const Header = styled.h1`
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
        margin-bottom: 65px;
    }
`

const StudentImgContainer = styled.div`
    background-color: ${blue.base};
    position: relative;
    margin-top: 65px;
    left: 8px;

    @media (min-width: 800px) {
        width: 50%;
        margin-top: 0;
        height: 100%;
    }
`

const StudentImg = styled.img`
    width: 100%;
    position: relative;
    right: 10px;
    bottom: 6px;
`

const PathContainer = styled.div`
    @media (min-width: 800px) {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
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

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
    }
`

const MidHeader = styled.h3`
    font-size: 24px;
    line-height: 32px;
    color: ${gray.darkest};
    padding: 64px 0 22px;
    font-weight: 800;

    @media (min-width: 800px) {
        padding: 0;
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 30px;
    }
`

const SmlHeader = styled.h4`
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darkest};
    padding: 64px 0 22px;
    font-weight: 800;

    @media (min-width: 800px) {
        font-size: 24px;
        line-height: 32px;
        margin-top: 90px;
    }
`

const MapImageContainer = styled.div`
    @media (min-width: 800px) {
        width: 50%;
    }
`

const MapImage = styled.img`
    max-width: 200px;
    width: 40%;
    margin: 0px 0px 0px 27%;

    /* width: 42%; */
    transform: rotate(270deg);
    /* margin: -90px 0 -90px 90px; */

    @media (min-width: 800px) {
        transform: none;
        padding: 30px;
        display: block;
        width: 100%;
        max-width: 250px;
        margin: 0 auto;
    }

    @media (min-width: 1100px){
        max-width: 220px;
    }
`

const StepDiv = styled.div`
    @media (min-width: 800px) {
        width: 50%;
        padding: 50px 0 50px 40px;
    }
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

    @media (min-width: 800px) {
        h5 {
            font-size: 20px;
            line-height: 24px;
        }

        p {
            font-size: 14px;
            line-height: 18px;
        }
    }
`

const FlexContainer = styled.div`
    @media (min-width: 800px) {
        display: flex;
        gap: 60px;
    }
`

const JourneyContainer = styled.div`
    @media (min-width: 800px) {
        display: flex;
        flex-direction: row-reverse;
        width: 85%;
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
            <WidthContainer>
                <Header>{jTitle}</Header>
                <FlexContainer>
                    <StudentImgContainer>
                        <StudentImg src={studUrl} alt={studAlt} />
                    </StudentImgContainer>
                    <PathContainer>
                        <MidHeader>{jPathTitle}</MidHeader>
                        <Paragraphs
                            dangerouslySetInnerHTML={{ __html: jPathText }}
                        ></Paragraphs>
                    </PathContainer>
                </FlexContainer>
                <SmlHeader>{jMapTitle}</SmlHeader>
                <Paragraphs>{jMapText}</Paragraphs>
                <JourneyContainer>
                    <MapImageContainer>
                        <MapImage src={jMapImage} alt={jMapAlt} />
                    </MapImageContainer>
                    <StepDiv>{mappedSteps}</StepDiv>
                </JourneyContainer>
            </WidthContainer>
        </Container>
    )
}

export default Journey
