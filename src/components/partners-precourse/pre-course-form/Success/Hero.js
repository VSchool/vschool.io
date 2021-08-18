import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components"
import {
    gray,
    blue,
    purple,
    green
} from "@vschool/lotus"

const Container = styled.section`
    background-color: ${purple.lightest};
    padding: 0px 40px;
    margin-bottom: -70px;


    @media (min-width: 800px) {   
        padding: 0px 80px;
        margin-bottom: -70px;
    }
`

const HeroContainer = styled.div`
    max-width: 700px;
    margin: 0 auto -170px;

    @media (min-width: 800px) {
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

const StepNum = styled.div`
    width: 90%;
    margin: auto;
`

const Step = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    font-weight: 300;
    text-align: left;
    width: 100%;
`

const ProgressBar = styled.div`
    height: 8px;
    width: 100%;
    background-color: ${green.lighter};
    margin: 5px 0 20px;
`

const Progress = styled.div`
    width: 100%;
    background-color: ${green.light};
    height: 100%;
`

const Image = styled.img`
    display: flex;
    margin: auto;
    width: 100%;
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      prismicPrecoursePartners {
        data {
          success_top_description {
            text
          }
          success_top_image {
            alt
            url
          }
          success_top_step {
            text
          }
          success_top_subtitle {
            text
          }
          success_top_title {
            text
          }
        }
      }
    }
  `)

  const {
    success_top_description: { text: description },
    success_top_image: { alt, url},
    success_top_step: { text: step },
    success_top_subtitle: { text: subtitle },
    success_top_title: { text: title },
  } = data.prismicPrecoursePartners.data


  return (
    <Container>
      <HeroContainer>
        <BlueSubtext>{subtitle}</BlueSubtext>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
        <StepNum>
            <Step><b>Step 2 of 2</b> - {step}</Step>
            <ProgressBar><Progress></Progress></ProgressBar>
        </StepNum>
        <Image src={url} alt={alt} />
      </HeroContainer>
    </Container>
  )
}

export default Hero