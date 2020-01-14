import React from "react"
import Layout from '../components/layout.js'
import SEO from '../components/seo.js'
import HeroHeader from '../components/experience-design/HeroHeader.js'
import HeroImage from '../components/experience-design/HeroImage.js'
import AboutCourse from '../components/experience-design/AboutCourse.js'
import Skills from '../components/experience-design/Skills.js'
import CourseBullets from '../components/experience-design/CourseBullets.js'
import DownloadSyllabus from '../components/experience-design/DownloadSyllabus.js'
import AsRealAsItGets from '../components/experience-design/AsRealAsItGets.js'
import Testimonial from '../components/experience-design/Testimonial.js'
import Ratings from '../components/experience-design/Ratings.js'
import ISA from '../components/experience-design/ISA.js'
import PaymentOptions from '../components/experience-design/PaymentOptions.js'
import CallToAction from '../components/experience-design/CallToAction.js'
import LearnToCode from '../components/experience-design/LearnToCode.js'
import FAQ from '../components/experience-design/FAQ.js'
import { useStaticQuery, graphql } from "gatsby"

const ExperienceDesignPage = () => {
    const {
        prismicXdPage: {
            data: {
                main_page_title: {
                    text
                }
            }
        }
    } = useStaticQuery(graphql`
      {
        prismicXdPage(data: {main_page_title: {text: {}}}) {
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
            <SEO title={text} />
            <HeroHeader />
            <HeroImage />
            <AboutCourse />
            <Skills />
            <CourseBullets />
            
            {/* 
            <DownloadSyllabus />
                Temporary div to add spacing while syllabus is being created 
                Delete it uncomment the <DownloadSyllabus/> component above.
            */}
            <div style={{backgroundColor: "#FBF9F6", height: 32}}></div>
            {/* */}

            <AsRealAsItGets />
            <Testimonial />
            <Ratings />
            <ISA />
            <PaymentOptions />
            <CallToAction />
            <LearnToCode />
            <FAQ />
        </Layout>
    )
}

export default ExperienceDesignPage
