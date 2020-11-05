import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"

import CareersPage from '../components/careers'

export default function Careers({ data }) {

    return (
        <Layout>
            <SEO title={'Careers Page'} />
            <CareersPage />
            <br />
            <hr />
            <br />
        </Layout>
    )
}

export const query = graphql`
    {
        prismicCareers {
            data {
                careers_header {
                    text
                }
                careers_sub_header {
                    text
                }
                header_invite {
                    text
                }
                careers_hero_img_sm {
                    url
                    alt
                }
                careers_hero_img_lg {
                    url
                    alt
                }
                btn_text {
                    text
                }
                btn_link {
                    url
                }
                no_openings {
                    text
                }
                no_openings_sub {
                    text
                }
                open_positions {
                    text
                }
                position {
                    position_link {
                        url
                    }
                    position_title {
                        text
                    }
                }
            }
        }
    }
`
