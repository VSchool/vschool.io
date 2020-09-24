import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"

import {
    HeroHeader,
    Testimonial1,
    Testimonial2,
    Differences,
    SchoolComparisons,
    PathwaysHeader,
    Pathways,
    CTA,
} from "../components/methodology"

import Courses from "../components/shared/Courses"

export default function HowVSCompares({ data }) {
    const {
        testimonial_program2: { text: testimonialProgram2 },
        testimonial_program1: { text: testimonialProgram1 },
        testimonial_img2: { url: testimonialImg2 },
        testimonial_img1: { url: testimonialImg1 },
        testimonial2: { text: testimonial2 },
        testimonial1: { text: testimonial1 },
        pathways_subheader: { text: pathwaysSubheader },
        pathways_header: { text: pathwaysHeader },
        page_subheader2: { text: pageSubheader2 },
        page_subheader1: { text: pageSubheader1 },
        page_header: { text: pageHeader },
        hero_image: { url: heroImg },
        header_btn_link: { url: headerBtnLink },
        header_btn: { text: headerBtnText },
        differences,
        difference_header: { text: differencesHeader },
        cta_subheader: { text: ctaSubHeader },
        cta_link: { url: ctaLink },
        cta_header: { text: ctaHeader },
        cta_btn: { text: ctaBtn },
        comparisons,
        comparison_subheader: { text: comparisonsSubheader },
        comparison_header: { text: comparisonsHeader },
        cite2: { text: cite2 },
        cite1: { text: cite1 },
    } = data.prismicMethodologyPage.data
    return (
        <Layout>
            <SEO title="How VS Compares" />
            <HeroHeader
                title={pageSubheader1}
                header={pageHeader}
                info={pageSubheader2}
                img={heroImg}
                link={headerBtnLink}
                btnText={headerBtnText}
            />
            <Testimonial1
                testimonial={testimonial1}
                cite={cite1}
                course={testimonialProgram1}
                testimonialImg={testimonialImg1}
            />
            <Differences header={differencesHeader} differences={differences} />
            <PathwaysHeader
                header={pathwaysHeader}
                subheader={pathwaysSubheader}
            />
            <Pathways />
            <SchoolComparisons
                header={comparisonsHeader}
                subheader={comparisonsSubheader}
                comparisons={comparisons}
            />
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
