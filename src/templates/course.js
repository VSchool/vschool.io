import React from "react"
import { ThemeProvider } from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
    blue,
    pink,
    purple,
    red,
    orange,
    yellow,
    green,
    gray,
} from "@vschool/lotus"

const colors = { blue, pink, purple, red, orange, yellow, green, gray }

export default function CoursePageTemplate({ pageContext, data }) {
    const {
        primary_theme_color: primaryThemeColorString,
        course_name: courseName,
    } = data.prismicScholarshipPage.data
    const primaryThemeColor = colors[primaryThemeColorString]
    const secondaryThemeColor = colors[secondaryThemeColorString]
    return (
        <Layout>
            <SEO title={pageContext.name} />
            <ThemeProvider
                theme={{
                    primary: primaryThemeColor,
                }}
            >
                <h1>Course Page Here</h1>
            </ThemeProvider>
        </Layout>
    )
}

/**
This uses a page query because Gatsby doesn't 
support GraphQL variable usage with static queries, 
and this needs the `uid` in order to get the correct
data from Prismic
 */
export const query = graphql`
    query($uid: String!) {
        prismicCoursePage(uid: { eq: $uid }) {
            data {
                course_name {
                    text
                }
                hero_title {
                    text
                }
                hero_text {
                    text
                }
                hero_image {
                    alt
                    url
                }
                hero_button_text {
                    text
                }
                hero_button_url {
                    url
                }
                outcomes_title {
                    text
                }
                outcomes_stats {
                    stat_text {
                        text
                    }
                    stat_number {
                        text
                    }
                }
                outcomes_stats_caption {
                    text
                }
                outcomes_testimonials {
                    testimonial_image {
                        alt
                        url
                    }
                    testimonial_text {
                        text
                    }
                    testimonial_name {
                        text
                    }
                    testimonial_name_info {
                        text
                    }
                }
                primary_theme_color
                student_journey_image {
                    alt
                    url
                }
            }
        }
    }
`
