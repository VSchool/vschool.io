import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray, blue } from "@vschool/lotus"


const Container = styled.section`
    background-color: ${gray.lighter};
    padding: 96px 16px;
    max-width: 1400px;
    margin: auto;

    @media (min-width: 800px) {
        padding: 160px 80px;
    }
`

const Title = styled.h1`
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
    padding-bottom: 16px;

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
        padding-bottom: 24px;
    }
`

const BlueSubtext = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.base};
    padding-bottom: 48px;
    text-align: center;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 96px;
    }
`

const ExamplesContainer = styled.div`
    
    @media (min-width: 800px){
        display: flex;
        gap: 25px;
    }
`

const ExampleTitle = styled.h4`
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darkest};
    padding-bottom: 12px;

    @media (min-width: 800px){
        font-size: 20px;
        line-height: 24px;
    }
`

const ExampleDescription = styled.p`
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    padding-bottom: 48px;

    @media (min-width: 800px){
        font-size: 20px;
        line-height: 32px;
    }
`

const Career = ({submit}) => {

    const data = useStaticQuery(graphql`
    {
      prismicPrecoursePartners {
        data {
          opportunities_examples {
            example_description {
              text
            }
            example_title {
              text
            }
          }
          opportunities_subtitle {
            text
          }
          opportunities_title {
            text
          }
        }
      }
    }
  `)

    const {
        opportunities_examples,
        opportunities_subtitle: { text: subtitle },
        opportunities_title: { text: title },
    } = data.prismicPrecoursePartners.data

    const mappedExamples = opportunities_examples.map(({
        example_description: { text: exDesc },
        example_title: { text: exTitle }
    }) => <div>
        <ExampleTitle>{exTitle}</ExampleTitle>
        <ExampleDescription>{exDesc}</ExampleDescription>
    </div>)

    return (
        <Container>
            <Title>{title}</Title>
            <BlueSubtext>{subtitle}</BlueSubtext>
            <ExamplesContainer>{mappedExamples}</ExamplesContainer>
        </Container>
    )
}

export default Career

