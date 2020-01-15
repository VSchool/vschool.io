import React from "react"
import Layout from '../components/layout.js'
import SEO from '../components/seo.js'
import HeroHeader from '../components/bootcamp-primer/HeroHeader.js'
import InfoForm from '../components/bootcamp-primer/InfoForm.js'
import CourseBullets from '../components/bootcamp-primer/CourseBullets.js'
import HeroImage from '../components/bootcamp-primer/HeroImage.js'
import AboutPrimer from '../components/bootcamp-primer/AboutPrimer.js'
import Testimonial from '../components/bootcamp-primer/Testimonial.js'
import ContactUs from '../components/bootcamp-primer/ContactUs.js'
import Courses from '../components/bootcamp-primer/Courses.js'
import { useStaticQuery, graphql } from "gatsby"

export default function BootcampPrimerPage(){
  const {
    prismicBootcampPrimer: {
      data: {
        main_page_title: {
          text: title
        }
      }
    }
  } = useStaticQuery(graphql`
  {
    prismicBootcampPrimer {
      data {
        main_page_title {
          text
        }
      }
    }
  }
`)
  return (
    <Layout>
      <SEO title={title}/>
      <HeroHeader />
      <InfoForm />
      <CourseBullets />
      <HeroImage />
      <AboutPrimer />
      <Testimonial />
      <ContactUs />
      <Courses />
    </Layout>
  )
}