import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import Header from '../components/living-in-slc/Header.js'
import HeroImage from '../components/living-in-slc/HeroImage.js'
import StateFeatures from '../components/living-in-slc/StateFeatures.js'
import Testimonial from '../components/living-in-slc/Testimonial.js'
import CallToAction from '../components/living-in-slc/CallToAction.js'
import CheckOutHousing from '../components/living-in-slc/CheckOutHousing.js'
import { useStaticQuery, graphql } from "gatsby"


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
      <CallToAction />
      <CheckOutHousing />
    </Layout>
  )
}