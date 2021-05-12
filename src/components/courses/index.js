import React from "react"
import Hero from "./Hero"
import Outcomes from "./Outcomes"
import Journey from "./Journey"
import HowWorks from "./HowWorks"
import LearningMethod from "./LearningMethod"
import LearningModel from "./LearningModel"
import Schedule from "./Schedule"
import Description from "./Description"
import { Team } from './Team/'
import Payments from './Payments'
import Form from './Form'
import FAQ from '../../components/experience-design/FAQ'
import { useStaticQuery, graphql } from "gatsby"
import { blue, gray } from "@vschool/lotus"



export default function Index({ data }) {
    const faqData = useStaticQuery(graphql`
    {
      prismicXdPage {
        data {
          faq {
            faq_info {
              text
            }
            faq_title {
              text
            }
          }
        }
      }
    }
  `)
    const faqStyles = {
        color: blue.base,
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 28,
        paddingRight: 24,
        whiteSpace: "pre-wrap",
        backgroundColor: gray.lighter,
        width: "100%",
        maxWidth: 672,
    }
    return (
        <>
            <Hero {...data} />
            <Outcomes {...data} />
            <Journey {...data} />
            <Description {...data} />
            <Form convertKitTag={'syllabus dl - ux/ui design'} />
            <HowWorks />
            <LearningMethod />
            <LearningModel />
            <Schedule />
            <Team {...data} />
            <Payments {...data} />
            <FAQ styles={faqStyles} {...faqData.prismicXdPage.data} />
        </>
    )
}
