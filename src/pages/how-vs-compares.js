import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"
import ComparesPage from '../components/methodology'

import {
    Testimonial2,
    CTA,
} from "../components/methodology"

import Courses from "../components/shared/Courses"

export default function HowVSCompares({ data }) {
    const {
        testimonial_program2: { text: testimonialProgram2 },
        testimonial_img2: { url: testimonialImg2 },
        testimonial2: { text: testimonial2 },
        cta_subheader: { text: ctaSubHeader },
        cta_link: { url: ctaLink },
        cta_header: { text: ctaHeader },
        cta_btn: { text: ctaBtn },
        cite2: { text: cite2 },
    } = data.prismicMethodologyPage.data

    return (
        <Layout>
            <SEO title="How VS Compares" />
            <ComparesPage />
            <br />
            <hr />
            <br />
            <Courses />
            <Testimonial2
                testimonial={testimonial2}
                cite={cite2}
                course={testimonialProgram2}
                testimonialImg={testimonialImg2}
            />
            <CTA
                header={ctaHeader}
                subheader={ctaSubHeader}
                btnText={ctaBtn}
                link={ctaLink}
            />
        </Layout>
    )
}

export const query = graphql`
    {
        prismicMethodologyPage {
            data {
                testimonial_program2 {
                    text
                }
                testimonial_program1 {
                    text
                }
                testimonial_img2 {
                    url
                }
                testimonial_img1 {
                    url
                }
                testimonial2 {
                    text
                }
                testimonial1 {
                    text
                }
                pathways_subheader {
                    text
                }
                pathways_header {
                    text
                }
                page_subheader2 {
                    text
                }
                page_subheader1 {
                    text
                }
                page_header {
                    text
                }
                hero_image {
                    url
                }
                header_btn_link {
                    url
                }
                header_btn {
                    text
                }
                differences {
                    title {
                        text
                    }
                    info {
                        text
                    }
                }
                difference_header {
                    text
                }
                cta_subheader {
                    text
                }
                cta_link {
                    url
                }
                cta_header {
                    text
                }
                cta_btn {
                    text
                }
                comparisons {
                    type {
                        text
                    }
                    theory {
                        text
                    }
                    skills {
                        text
                    }
                    job {
                        text
                    }
                    icon {
                        url
                    }
                    experience {
                        text
                    }
                }
                comparison_subheader {
                    text
                }
                comparison_header {
                    text
                }
                cite2 {
                    text
                }
                cite1 {
                    text
                }
            }
        }
    }
`
