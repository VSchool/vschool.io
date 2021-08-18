import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Calendly from '../../shared/Calendly'
import { navigate } from "gatsby"
import {
    gray,
    blue
} from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    max-width: 700px;
    margin: auto;
    padding: 0px 40px 64px;

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
    color: ${blue.base};
    padding-top: 64px;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        padding-top: 96px;
    }
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
    background-color: ${blue.lighter};
    margin: 5px 20px 20px;
`

const Progress = styled.div`
    width: 60%;
    background-color: ${blue.base};
    height: 100%;
`


const Schedule = ({submit}) => {
  const data = useStaticQuery(graphql`
    {
      prismicPrecoursePartners {
        data {
          schedule_description {
            text
          }
          schedule_step_info {
            text
          }
          schedule_subtitle {
            text
          }
          schedule_title {
            text
          }
        }
      }
    }
  `)

  const {
    schedule_description: { text: sDesc },
    schedule_step_info: { text: sStep },
    schedule_subtitle: { text: sSub },
    schedule_title: { text: sTitle },
  } = data.prismicPrecoursePartners.data
  
  return (
      <Container>
        <BlueSubtext>{sSub}</BlueSubtext>
        <Title>{sTitle}</Title>
        <Paragraph>{sDesc}</Paragraph>
        <Step><b>Step 2 of 2</b> - {sStep}</Step>
        <ProgressBar><Progress></Progress></ProgressBar>
        <Calendly submit={submit} />
      </Container>
    )
}

export default Schedule

