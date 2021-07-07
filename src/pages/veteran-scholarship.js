import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"
import { gray, yellow } from "@vschool/lotus"
import {
    Header,
    Companies,
    Ratings,
    Testimonial,
    ScholarshipDetails,
    LandingAJob,
    Testimonial2,
} from "../components/veteran-scholarship"
import MakeALeap from "../components/shared/MakeALeap.js"

export default function VaScholarship({ data }) {
    const {
        testimonial_img: { url: testimonialImg },
        testimonial: { text: testimonial },
        page_title: { text: title },
        page_sub: { text: subHeader },
        page_info: { text: pageInfo },
        page_header: { text: header },
        invite_btn_link: { url: headerBtnLink },
        invite_btn: { text: headerBtnText },
        details_info: { text: detailsInfo },
        details_header: { text: detailsHeader },
        deadlines_background_img: { url: detailsBgImg },
        hero_img: { url: heroImg },
        where_we_work_header: { text: whereWeWorkHeader },
        ratings_header: { text: ratingsHeader },
        cite: { text: cite },
        make_a_leap_link: { url: makeALeapLink },
        make_a_leap_sub: { text: callToActionSub },
        make_a_leap_header: { text: callToActionTitle },
        make_a_leap_btn: { text: callToActionBtnText },
        next_session: { text: nextSession },
        landing_a_job_header: { text: landingAJobHeader },
        landing_a_job_sub: { text: landingAJobSub },
        scholarship_apply_link: { url: applyLink },
        scholarship_apply_btn: { text: applyBtnText },
        testimonial2: { text: testimonial2 },
        testimonial2_cite: { text: testimonial2Cite },
        testimonial2_img: { url: testimonial2Img },
        phases,
        scholarship_details,
        ratings,
        company_logos,
        deadlines,
    } = data.prismicVaScholarship.data
    const { start_date: startDate } = data.prismicStartDate.data
    return (
        <Layout>
            <SEO title={header} />
            <Header
                title={title}
                header={header}
                sub={subHeader}
                info={pageInfo}
                heroImg={heroImg}
                link={headerBtnLink}
                btnText={headerBtnText}
            />
            <LandingAJob
                header={landingAJobHeader}
                sub={landingAJobSub}
                phases={phases}
            />
            <Testimonial2
                testimonial={testimonial2}
                cite={testimonial2Cite}
                testimonialImg={testimonial2Img}
            />
            <ScholarshipDetails
                header={detailsHeader}
                deadlines={deadlines}
                detailsInfo={detailsInfo}
                detailsBgImg={detailsBgImg}
                details={scholarship_details}
                link={applyLink}
                btnText={applyBtnText}
            />
            <Companies header={whereWeWorkHeader} logos={company_logos} />
            <Ratings header={ratingsHeader} ratings={ratings} />
            <Testimonial
                testimonial={testimonial}
                cite={cite}
                testimonialImg={testimonialImg}
            />
            <MakeALeap
                title={callToActionTitle}
                sub={callToActionSub}
                btnText={callToActionBtnText}
                nextSession={nextSession}
                bgColor={gray.lighter}
                sessionColor={yellow.lighter}
                startDate={startDate}
                link={makeALeapLink}
            />
        </Layout>
    )
}

export const query = graphql`
    {
        prismicStartDate {
            data {
                start_date(formatString: "MMM Do, YYYY")
            }
        }
        prismicVaScholarship {
            data {
                testimonial_img {
                    url
                }
                deadlines_background_img {
                    url
                }
                hero_img {
                    url
                }
                testimonial {
                    text
                }
                page_title {
                    text
                }
                page_sub {
                    text
                }
                page_info {
                    text
                }
                page_header {
                    text
                }
                invite_btn_link {
                    url
                }
                invite_btn {
                    text
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
                company_logos {
                    logo {
                        url
                    }
                }
                details_info {
                    text
                }
                details_header {
                    text
                }
                deadlines {
                    title {
                        text
                    }
                    date {
                        text
                    }
                }
                cite {
                    text
                }
                make_a_leap_sub {
                    text
                }
                make_a_leap_header {
                    text
                }
                make_a_leap_btn {
                    text
                }
                next_session {
                    text
                }
                make_a_leap_link {
                    url
                }
                landing_a_job_header {
                    text
                }
                landing_a_job_sub {
                    text
                }
                scholarship_details {
                    detail {
                        text
                    }
                    checkmark {
                        url
                    }
                }
                scholarship_apply_link {
                    url
                }
                scholarship_apply_btn {
                    text
                }
                testimonial2 {
                    text
                }
                testimonial2_cite {
                    text
                }
                testimonial2_img {
                    url
                }
                phases {
                    phase_info {
                        text
                    }
                    phase {
                        text
                    }
                    phase_title {
                        text
                    }
                }
            }
        }
    }
`
