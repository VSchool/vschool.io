import React from 'react'
import Hero from './Hero'
import { Outcomes } from './Outcomes/'
import { Courses } from './Courses'
import Success from './Success'
import { useStaticQuery, graphql } from "gatsby"

export default function GiBillPage() {
  const data = useStaticQuery(graphql`
    {
      prismicVeteransLandingPage {
        data {
          hero_title {
            text
          }
          hero_subtitle {
            text
          }
          hero_description {
            text
          }
          hero_form {
            hero_form_label {
              text
            }
            hero_form_placeholder {
              text
            }
          }
          hero_form_button {
            text
          }
          hero_image {
            url
            alt
          }
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
          footer_button_text {
            text
          }
          footer_description {
            text
          }
          footer_form {
            footer_form_label {
              text
            }
            footer_form_placeholder {
              text
            }
          }
          footer_title {
            text
          }
          outcomes_description {
            text
          }
          outcomes_image {
            alt
            url
          }
          outcomes_statistics {
            outcomes_stat_description {
              text
            }
            outcomes_stat_title {
              text
            }
          }
          outcomes_subdescription {
            text
          }
          outcomes_subtitle {
            text
          }
          outcomes_title {
            text
          }
          resources_callout {
            resources_callout_button_text {
              text
            }
            resources_callout_description {
              text
            }
            resources_callout_title {
              text
            }
          }
          resources_title {
            text
          }
          success_description {
            text
          }
          success_testimonial_author {
            text
          }
          success_testimonial_body {
            text
          }
          success_testimonial_image {
            url
          }
          success_title {
            text
          }
        }
      }
    }
  `)

  const prismicData = {...data.prismicVeteransLandingPage.data}

    return (
        <>
            <Hero prismicData={prismicData} />
            <Outcomes prismicData={prismicData} />
            <Success prismicData={prismicData} />
            <Courses prismicData={prismicData} />
        </> 
    )
}