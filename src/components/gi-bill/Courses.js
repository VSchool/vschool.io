import React from "react"
import styled from "styled-components"
import {navigate} from 'gatsby'
import devIcon from  '../../images/icons/card-dev-icon2.png'
import designIcon from  '../../images/icons/card-design-icon2.png'
import { useStaticQuery, graphql } from "gatsby"
import { blue, gray } from "@vschool/lotus"

const CoursesContainer = styled.section`
    padding-top: 112px;
    padding-bottom: 112px;
`

const CourseTitle = styled.h1`
    font-weight: 900;
    font-size: 44px;
    line-height: 48px;
    text-align: center;
    color: #21201F;
    margin-bottom: 32px;
`

const CourseSubtitle = styled.p`
    margin-bottom: 32px;
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.dark};
`

const CourseDescription = styled.p`
    font-size: 20px;
    line-height: 32px;
    color: ${gray.darker};
    font-weight: normal;
    text-align: center;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    max-width: 900px;
    margin: 64px auto;
    flex-direction: column;

    @media (min-width: 800px){
        flex-direction: row;
    }
`

const Card = styled.div`
    padding: 32px 24px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 4px 0px rgba(0, 0, 0, 0.14);
    width: 100%;
    max-width: 325px;
    margin: 0 auto 50px;

    @media (min-width: 800px){
        width: 45%;
        margin: 0;
        max-width: initial;
    }

`

const CardImage = styled.img`
    margin-bottom: 8px;
`

const CardTitle = styled.h4`
    margin-bottom: 16px;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    color: ${gray.darkest};
`

const CardDescription = styled.p`
    margin-bottom: 48px;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
`

const LinkText = styled.button`
    border: none;
    background-color: white;
    text-decoration: underline;
    color: #456AE2;
    font-weight: 800;
    line-height: 16px;
    text-align: center;
    letter-spacing: 1px;
    text-underline-offset: 4px;

    &:hover {
        text-decoration: underline;
    }

    &:active {
        color: ${blue.dark};
    }

    &:visited {
        color: #C767D9;
    }
`


export default function Courses(props) {
    const data = useStaticQuery(graphql`
    {
      prismicVeteransLandingPage {
        data {
            courses_card {
                courses_card_button_text {
                    text
                }
                courses_card_description {
                    text
                }
                courses_card_title {
                    text
                }
            }
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
    courses_card,
    courses_description: { text: coursesDescription},
    courses_subtitle: { text: coursesTitle},
    courses_title: { text: coursesSubtitle},
    
  } = {...data.prismicVeteransLandingPage.data}

    const mappedCards = courses_card.map(({
        courses_card_button_text: {text: cardBtn},
        courses_card_description: {text: cardDescription},
        courses_card_title: {text: cardTitle},
    }) => {
        return <Card>
                    <CardImage src={cardTitle === "Web Development" ? devIcon  : designIcon} alt="tag icon" />
                    <CardTitle>{cardTitle}</CardTitle>
                    <CardDescription>{cardDescription}</CardDescription>
                    <LinkText
                            onClick={() => navigate(`/syllabus/${cardTitle === "Web Development" ? "development" : "design"}`)}
                    >
                    {cardBtn}
                    </LinkText>
                </Card>
    })

    return (
        <CoursesContainer>
            <CourseTitle>{coursesSubtitle}</CourseTitle>
            <CourseSubtitle>{coursesTitle}</CourseSubtitle>
            <CourseDescription>{coursesDescription}</CourseDescription>
            <CardContainer>
                {mappedCards}
            </CardContainer>
        </CoursesContainer>
    )
}
