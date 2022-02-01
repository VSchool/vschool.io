import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray, blue } from "@vschool/lotus"

const Container = styled.section`
    padding: 96px 16px;

    @media (min-width: 800px) {
        padding: 172px 80px 140px;
    }
`

const Title = styled.h1`
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
    padding-bottom: 16px;
    max-width: 620px;

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
        /* padding-bottom: 64px; */
        max-width: 800px;
    }
`

const Subtitle = styled.p`
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
        padding-bottom: 64px;
    }
`

const StepContainer = styled.div`
  display: flex;
	flex-direction: column-reverse;
  align-items: center;
  padding: 100px 0px 20px;

	@media ( min-width: 1000px){
	  padding: 100px;
		flex-direction: ${props => props.direction};
	}
`

const StepNum = styled.img`
	width: 80px;
`

const StepTitle = styled.h1`
	font-weight: 900;
	font-size: 32px;
	line-height: 40px;
	color: ${gray.darkest};
	padding: 16px 0;
`

const StepDesc = styled.p`
	font-size: 16px;
	line-height: 24px;
	color: ${gray.darker};
	font-weight: 300;

	@media (min-width: 800px){
		font-size: 20px;
		line-height: 32px;
	}
`

const LeftStep = styled.div`
	padding: 0;
	/* min-width: 300px; */

	@media (min-width: 1000px) {
    width: 50%;
		padding: ${props => props.direction === 'left' ? '0 0 0 0px' : '0 0px 0 0'};
	}

	@media (min-width: 1300px) {
		padding: ${props => props.direction === 'left' ? '0 0 0 30px' : '0 30px 0 0'};
	}
`

const Logo = styled.img`
	max-width: 200px;
  max-height: 275px;
  padding-bottom: 50px;

	@media (min-width: 1000px){
    width: 50%;
    margin: auto;
		max-width: 320px;
		padding: ${props => props.direction === 'left' ? '0 30px 0 0px' : '0 0px 0 30px'};
	}

	@media (min-width: 1300px) {
		padding: 0;
	}

`


const Course = () => {
  const data = useStaticQuery(graphql`
    {
      prismicPrecoursePartners {
        data {
          course_steps {
            step_description {
              text
            }
            step_image {
              alt
              url
            }
            step_number {
              alt
              url
            }
            step_title {
              text
            }
          }
          course_subtitle {
            text
          }
          course_title {
            text
          }
        }
      }
    }
  `)

  const {
    course_steps,
    course_subtitle: { text: courseSub },
    course_title: { text: courseTitle }
  } = data.prismicPrecoursePartners.data

  const mappedSteps = course_steps.map(({
    step_description: { text: stepDesc },
    step_image: { alt: imageAlt, url: imageUrl},
    step_number: { alt: numAlt, url: numUrl},
    step_title: { text: stepTitle },
  },i) => <StepContainer direction={i === 1 ? 'row-reverse' : 'row'}>
            <LeftStep direction={i === 1 ? 'left' : 'right' }>
              <StepNum src={numUrl} alt={numAlt} />
              <StepTitle>{stepTitle}</StepTitle>
              <StepDesc>{stepDesc}</StepDesc>
            </LeftStep>
            <Logo src={imageUrl} alt={imageAlt} direction={i === 1 ? 'left' : 'right' } />
          </StepContainer>
      )

  return (
    <Container>
        <Title>{courseTitle}</Title>
        <Subtitle>{courseSub}</Subtitle>
        {mappedSteps}
    </Container>
  )
}

export default Course
