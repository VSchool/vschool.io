import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, yellow, gray } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-bottom: 24px;
    z-index: 1;

    @media (min-width: 1100px) {
        display: flex;
        justify-content: center;
    }
`

const BlueBackground = styled.div`
  background-color: ${blue.lightest};
  padding-left: 24px;
  padding-right: 24px;
  z-index: 2;
  height: 235px;
  flex-basis: 100%;

  @media (min-width: 320px) and (max-width: 415px) {
        padding-left: 16px;
        padding-right: 16px;
    }

  @media(min-width: 1100px){
    width: 100%;
    position: absolute;
    z-index: 1;
    height: 200px;
  }
`

const CiteContainer = styled.div`
    border: 2px solid ${blue.base};
    background-color: ${blue.lighter};
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 40px;
    padding-bottom: 96px;
    width: 366px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 320px) and (max-width: 415px) {
        width: 286px;
        padding-left: 16px;
        padding-right: 16px;
        /* padding-bottom: 56px; */
    }

    @media (min-width: 1100px) {
      width: 616px;
      padding-left: 64px;
      height: 352px;
      padding-top: 72px;
      padding-bottom: 72px;
      position: relative;
      z-index: 2;
    }
`

const Testimonial = styled.h2`
    color: ${blue.darkest};
    font-family: "aktiv-grotesk-extended";
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;

    @media (min-width: 320px) and (max-width: 415px) {
        font-size: 20px;
    }
`

const Cite = styled.h3`
    color: ${blue.dark};
    font-family: "aktiv-grotesk-extended";
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    padding-top: 24px;
`

const Course = styled.p`
  font-family: "aktiv-grotesk-extended";
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: ${gray.darker};
  margin-top: 8px;
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const TestimonialImg = styled.img`
    border-bottom: 20px solid ${yellow.light};
    width: 302px;
    margin-top: -56px;

    @media (min-width: 320px) and (max-width: 415px) {
        width: 250px;
    }

    @media (min-width: 900px) {
        height: 357px;
        width: 320px;
    }

    @media (min-width: 1100px) {
      margin-top: 80px;
      margin-right: -24px;
      position: relative;
      z-index: 2;
    }
`

const GridContainer = styled.div`
    margin-top: -270px;
    padding-left: 24px;
    padding-right: 24px;

    @media (min-width: 320px) and (max-width: 415px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 1100px) {
        display: flex;
        flex-direction: row-reverse;
        margin-top: -48px;
    }
`

function Testimonial1() {
    const data = useStaticQuery(graphql`
    {
      prismicMethodologyPage {
        id
        data {
          testimonial1 {
            text
          }
          cite1 {
            text
          }
          testimonial_program1 {
            text
          }
          testimonial_img1 {
            url
          }
        }
      }
    }
  `)

  const {
    testimonial_program1: { text: testimonialProgram1 },
    testimonial_img1: { url: testimonialImg1 },
    testimonial1: { text: testimonial1 },
    cite1: { text: cite1 },
} = data.prismicMethodologyPage.data

    return (
        <Container>
          <BlueBackground/>
            <GridContainer>
                <CiteContainer>
                    <Testimonial>"{testimonial1}"</Testimonial>
                    <Cite>- {cite1}</Cite>
                    <Course>{testimonialProgram1}</Course>
                </CiteContainer>
                <FlexContainer>
                    <TestimonialImg src={testimonialImg1} />
                </FlexContainer>
            </GridContainer>
        </Container>
    )
}

export default Testimonial1
