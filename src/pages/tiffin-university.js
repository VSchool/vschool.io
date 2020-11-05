import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"
import TiffinUniversityPage from "../components/tiffin-university"

export default function Tiffin() {

    return (
        <Layout>
            <SEO title={"Tiffin University"} />
            <TiffinUniversityPage />
        </Layout>
    )
}

export const query = graphql`
    {
        prismicTiffin {
            data {
                about_course {
                    text
                }
                cite {
                    text
                }
                companies_header {
                    text
                }
                details {
                    detail_info {
                        text
                    }
                    detail_title {
                        text
                    }
                }
                details_header {
                    text
                }
                faq {
                    faq_title {
                        text
                    }
                    faq_info {
                        text
                    }
                }
                faq_header {
                    text
                }
                header_img2 {
                    url
                }
                logos {
                    logo {
                        url
                    }
                }
                make_a_leap_btn {
                    text
                }
                make_a_leap_header {
                    text
                }
                make_a_leap_link {
                    url
                }
                make_a_leap_sub {
                    text
                }
                modules {
                    module_title {
                        text
                    }
                    module_sub {
                        text
                    }
                    subject1 {
                        text
                    }
                    subject2 {
                        text
                    }
                    subject3 {
                        text
                    }
                    subject4 {
                        text
                    }
                    subject5 {
                        text
                    }
                }
                next_session {
                    text
                }
                ratings {
                    rating {
                        url
                    }
                }
                ratings_header {
                    text
                }
                scholarship_details {
                    detail_title {
                        text
                    }
                    detail_date(formatString: "MMM Do, YYYY")
                    detail_info {
                        text
                    }
                }
                testimonial {
                    text
                }
                testimonial_img {
                    url
                }
            }
        }
    }
`
