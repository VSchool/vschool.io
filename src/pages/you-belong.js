import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"

import { Header } from "../components/you-belong"

export default function YouBelong({ data }) {
    const {
        call_to_action_btn_link: { url },
        call_to_action_header: { text },
        header: { text: header },
        header_btn: { text: headerBtnText },
        header_btn_link: { url: headerBtnLink },
        header_info: { text: headerInfo },
        header_sub: { text: headerSub },
        header_title: { text: headerTitle },
        header_video_btn: { text: headerVideoBtnText },
        header_video_btn_link: { url: headerVideoLink },
        hero_img: { url: headerHeroImg },
        internship_details_header: { text: internshipDetailsHeader },
        internship_details_info: { text: internshipDetailsInfo },
        internship_details_title: { text: internshipDetailsTitle },
        internship_img: { url: internshipImg },
        scholarship_details_header: { text: scholarshipHeader },
        scholarship_details_sub: { text: scholarshipSub },
        scholarship_details_title: { text: scholarshipTitle },
        testimonial: { text: testimonial },
        testimonial_cite: { text: cite },
        testimonial_img: { url: testimonialImg },
        deadlines,
        details,
    } = data.prismicYouBelong.data
    const {
        call_to_action_btn: { text: callToActionBtnText },
        call_to_action_sub: { text: callToActionSub },
        next_session_title: { text: nextSession },
    } = data.prismicXdPage.data
    const { start_date: startDate } = data.prismicStartDate.data
    return (
        <Layout>
            <SEO title={header} />
            <Header 
              header={header}
              sub={headerInfo}
              heroImg={headerHeroImg}
              link={headerBtnLink}
              btnText={headerBtnText}
              info={headerSub}
              title={headerTitle}
              videoBtnText={headerVideoBtnText}
            />
        </Layout>
    )
}

export const query = graphql`
    {
        prismicXdPage {
            data {
                call_to_action_btn {
                    text
                }
                call_to_action_sub {
                    text
                }
                next_session_title {
                    text
                }
            }
        }
        prismicStartDate(
            data: { course_name: { text: { eq: "Web Development" } } }
        ) {
            data {
                start_date(formatString: "MMM Do, YYYY")
            }
        }
        prismicHomePage {
            data {
                where_we_work_header {
                    text
                }
                ratings_header {
                    text
                }
                ratings {
                    rating_img {
                        url
                    }
                }
                company_logos {
                    logo {
                        url
                    }
                }
            }
        }
        prismicYouBelong {
            data {
                call_to_action_btn_link {
                    url
                }
                call_to_action_header {
                    text
                }
                deadlines {
                    deadline_title {
                        text
                    }
                    deadline_date {
                        text
                    }
                }
                details {
                    detail_title {
                        text
                    }
                    detail_info {
                        text
                    }
                }
                header {
                    text
                }
                header_btn {
                    text
                }
                header_btn_link {
                    url
                }
                header_info {
                    text
                }
                header_sub {
                    text
                }
                header_title {
                    text
                }
                header_video_btn {
                    text
                }
                header_video_btn_link {
                    url
                }
                hero_img {
                    url
                }
                internship_details_header {
                    text
                }
                internship_details_info {
                    text
                }
                internship_details_title {
                    text
                }
                internship_img {
                    url
                }
                scholarship_details_header {
                    text
                }
                scholarship_details_sub {
                    text
                }
                scholarship_details_title {
                    text
                }
                testimonial {
                    text
                }
                testimonial_cite {
                    text
                }
                testimonial_img {
                    url
                }
            }
        }
    }
`
