import React from "react"
import { ThemeProvider } from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScholarshipPage from "../components/scholarship"
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

export default function ScholarshipPageTemplate({ pageContext, data }) {
    const {
        primary_theme_color: primaryThemeColorString,
    } = data.prismicScholarshipPage.data
    const primaryThemeColor = colors[primaryThemeColorString]
    return (
        <Layout>
            <SEO title={`${pageContext.name}`} />
            <ThemeProvider theme={primaryThemeColor}>
                <ScholarshipPage data={data.prismicScholarshipPage.data} />
            </ThemeProvider>
        </Layout>
    )
}

/**
This uses a page query because Gatsby doesn't 
support variable usage with static queries, and
this needs the `uid` in order to get the correct
data from Prismic
 */
export const query = graphql`
    query($uid: String!) {
        prismicScholarshipPage(uid: { eq: $uid }) {
            data {
                deadline_text {
                    text
                }
                deadline_date(formatString: "MMMM Do, YYYY")
                hero_title {
                    text
                }
                hero_text {
                    text
                }
                hero_scholarship_amount {
                    text
                }
                hero_image {
                    alt
                    url
                }
                hero_card_image {
                    alt
                    url
                }
                hero_button_text {
                    text
                }
                faq_list {
                    faq_answer {
                        text
                    }
                    faq_question {
                        text
                    }
                }
                icon {
                    alt
                    url
                }
                primary_theme_color
                secondary_theme_color
                testimonial_image {
                    alt
                    url
                }
                testimonial_name {
                    text
                }
                testimonial_quote {
                    text
                }
                testimonial_status {
                    text
                }
                winner_announced_text {
                    text
                }
                winner_announced_date(formatString: "MMMM Do, YYYY")
            }
        }
    }
`
