import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BootcampPrimer from "../components/bootcamp-primer"
import {
    AboutPrimer,
    ContactUs,
    CourseBullets,
    HeroHeader,
    HeroImage,
    Testimonial,
} from "../components/bootcamp-primer"
import { gray } from "@vschool/lotus"
import Courses from "../components/shared/Courses"
import { graphql } from "gatsby"

export default function BootcampPrimerPage({ data }) {
    const {
        upcoming_courses_header: { text: coursesHeader },
        upcoming_courses,
    } = data.prismicBootcampPrimer.data
    return (
        <Layout>
            <SEO title={"Bootcamp Primer"} />
            <BootcampPrimer />
            
            {/*
            <ContactUs
                title={contactUsTitle}
                sub={contactUsSub}
                btnText={contactUsBtnText}
                link={contactUsLink}
            />
            <div
                data-name="spacer"
                style={{ backgroundColor: gray.lightest, height: 64 }}
            ></div>
            <Courses
                header={coursesHeader}
                courses={upcoming_courses}
                bgColor={gray.lightest}
            />
            <div
                data-name="spacer"
                style={{ backgroundColor: gray.lightest, height: 96 }}
            ></div> 
            */}
        </Layout>
    )
}

export const query = graphql`
    {
        prismicBootcampPrimer {
            data {
                upcoming_courses_header {
                    text
                }
                upcoming_courses {
                    course_link {
                        url
                    }
                    course_info {
                        text
                    }
                    course {
                        text
                    }
                    course_start_date {
                        document {
                            ... on PrismicStartDate {
                                id
                                data {
                                    course_name {
                                        html
                                        text
                                    }
                                    start_date(formatString: "MMMM Do, YYYY")
                                }
                            }
                        }
                    }
                }
                email_collection_button_text {
                    text
                }

            }
        }
    }
`
