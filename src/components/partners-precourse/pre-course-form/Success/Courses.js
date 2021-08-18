import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import {
    gray,
    blue,
} from "@vschool/lotus"
import CoursesNew from "../../../shared/CoursesNew"


const Container = styled.section`
    background-color: ${gray.lighter};
    padding: 0px 40px 96px;
    max-width: 1000px;
    margin: auto;

    @media (min-width: 800px) {   
        padding: 0px 80px 160px;
    }
`

const Title = styled.h1`
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    font-weight: 900;
    color: ${gray.darkest};
    padding: 8px 0 16px;

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
        padding: 16px 0 24px;
    }
`

const Paragraph = styled.p`
    text-align: center;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    padding-bottom: 24px;

    @media (min-width: 800px) {
        font-size: 20px;
        line-height: 32px;
        padding-bottom: 32px;
    }
`

const BlueSubtext = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    text-align: center;
    color: ${blue.base};
    padding-top: 64px;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        padding-top: 96px;
    }
`

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Courses = () => {
  const data = useStaticQuery(graphql`
    {
      prismicPrecoursePartners {
        data {
          success_bottom_title {
            text
          }
          success_bottom_subtitle {
            text
          }
          success_bottom_description {
            text
          }
        }
      }
    }
  `)

    const {
      success_bottom_title: { text: title },
      success_bottom_subtitle: { text: subtitle },
      success_bottom_description: { text: description },
    } = data.prismicPrecoursePartners.data

  return (
    <Container>
        <BlueSubtext>{subtitle}</BlueSubtext>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
        <CardsContainer>
            <CoursesNew />
        </CardsContainer>
    </Container>
  )
}

export default Courses