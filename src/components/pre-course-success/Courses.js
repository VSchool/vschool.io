import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray, blue } from "@vschool/lotus"
import CoursesNew from "../shared/CoursesNew"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding: 64px 40px;

    @media (min-width: 800px) {
        padding: 96px 80px 160px;
    }
`

const Title = styled.h1`
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
    padding-bottom: 8px;

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
        padding-bottom: 24px;
    }
`

const Subtitle = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.base};
    padding-bottom: 8px;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 16px;
    }
`

const Description = styled.p`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darker};
    padding-bottom: 64px;
    max-width: 850px;

    @media (min-width: 800px) {
        font-size: 20px;
        line-height: 32px;
    }
`

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Courses = () => {
    const data = useStaticQuery(graphql`
        {
            prismicPrecourseCommunitySuccess {
                data {
                    courses_description {
                        text
                    }
                    courses_subtitle {
                        text
                    }
                    courses_title {
                        text
                    }
                }
            }
        }
    `)

    const {
        courses_description: { text: description },
        courses_subtitle: { text: subtitle },
        courses_title: { text: title },
    } = data.prismicPrecourseCommunitySuccess.data

    return (
        <Container>
            <Subtitle>{subtitle}</Subtitle>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <CardsContainer>
                <CoursesNew />
            </CardsContainer>
        </Container>
    )
}

export default Courses
