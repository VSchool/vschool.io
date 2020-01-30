import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import {
  Header,
  HeroImage,
  StateFeatures,
  Testimonial,
  CheckOutHousing
} from '../components/living-in-slc'

import { MakeALeap } from '../components/shared'
import { useStaticQuery, graphql } from "gatsby"
import { blue } from "@vschool/lotus"


export default function LivingInSaltLake(){
  const { 
    prismicLivingInSaltLake: {
      data: {
        header: {
          text: header
        }
      }
    }
  } = useStaticQuery(graphql`
  {
    prismicLivingInSaltLake {
      data {
        header {
          text
        }
      }
    }
  }
`)
  return(
    <Layout>
      <SEO title={header}/>
      <Header />
      <HeroImage />
      <StateFeatures />
      <Testimonial />
      <MakeALeap 
        bgColor={blue.lightest}
        sessionColor={blue.light}/>
      <CheckOutHousing />
    </Layout>
  )
}