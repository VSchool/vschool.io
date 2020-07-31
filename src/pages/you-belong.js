import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"
import { pink } from "@vschool/lotus"

import {
    Header,
    ScholarshipDetails,
    Details,
    InternshipDetails,
    Ratings,
    Testimonial,
    MakeALeap,
} from "../components/you-belong"

import { AlumniCompanies } from "../components/shared"

import { gray, blue } from "@vschool/lotus"

export default function YouBelong({ data }) {
    const {
        call_to_action_btn_link: { url: callToActionBtnLink },
        call_to_action_header: { text: callToActionHeader },
        header: { text: header },
        header_btn: { text: headerBtnText },
        header_btn_link: { url: headerBtnLink },
        header_info: { text: headerInfo },
        header_sub: { text: headerSub },
        header_title: { text: headerTitle },
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
        deadlines_bg_img: { url: deadlinesBgImg },
        internship_site_link: { url: internshipLink },
        ratings_header: { text: ratingsHeader },
        make_a_leap_btn: { text: callToActionBtnText },
        make_a_leap_sub: { text: callToActionSub },
        next_session: { text: nextSession },
        ratings,
        deadlines,
        details,
    } = data.prismicYouBelong.data
    const { start_date: startDate } = data.prismicStartDate.data
    const { phases } = data.prismicEducationPhases.data
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
            />
            <ScholarshipDetails
                title={scholarshipTitle}
                header={scholarshipHeader}
                sub={scholarshipSub}
                deadlines={deadlines}
                bgImg={deadlinesBgImg}
                phases={phases}
            />
            <Details details={details} />
            <InternshipDetails
                title={internshipDetailsTitle}
                header={internshipDetailsHeader}
                info={internshipDetailsInfo}
                img={internshipImg}
                link={internshipLink}
            />
            <AlumniCompanies backgroundColor={pink.lightest} />
            <Ratings header={ratingsHeader} ratings={ratings} />
            <Testimonial
                testimonial={testimonial}
                cite={cite}
                testimonialImg={testimonialImg}
            />
            <MakeALeap
                title={callToActionHeader}
                sub={callToActionSub}
                btnText={callToActionBtnText}
                nextSession={nextSession}
                startDate={startDate}
                bgColor={gray.lightest}
                sessionColor={blue.lighter}
                link={callToActionBtnLink}
            />
        </Layout>
    )
}

export const query = graphql`
    {
        prismicStartDate(
            data: { course_name: { text: { eq: "Web Development" } } }
        ) {
            data {
                start_date(formatString: "MMM Do, YYYY")
            }
        }
        prismicEducationPhases {
            data {
                phases {
                    phase_header {
                        text
                    }
                    phase_info {
                        text
                    }
                    phase_num {
                        text
                    }
                }
            }
        }
        prismicYouBelong {
            data {
                call_to_action_btn_link {
                    url
                }
                make_a_leap_btn {
                    text
                }
                make_a_leap_sub {
                    text
                }
                next_session {
                    text
                }
                call_to_action_header {
                    text
                }
                deadlines_bg_img {
                    url
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
                internship_site_link {
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
            }
        }
    }
`
