import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"

import {
    HeroHeader,
    LandingAJob,
    Testimonial1,
    ScholarshipDetails,
    Companies,
    Ratings,
    Testimonial2,
    CTA,
} from "../components/my-base-scholarship"

export default function MyBaseScholarship({ data }) {
    const {
        ahrn_logo: { url: arhnLogo },
        testimonial_img2: { url: testimonialImg2 },
        testimonial_img: { url: testimonialImg },
        testimonial2: { text: testimonial2 },
        testimonial: { text: testimonial },
        start_date,
        scholarship_info: { text: scholarshipInfo },
        scholarship_bullets,
        scholarship_btn_link: { url: scholarshipBtnLink },
        scholarship_btn: { text: scholarshipBtnText },
        ratings_header: { text: ratingsHeader },
        scholarship_bg_img: { url: scholarshipBgImg },
        ratings,
        phases,
        my_base_scholarship_link: { url: myBaseScholarshipLink },
        page_title: { text: pageTitle },
        page_subheader: { text: pageSubheader },
        page_info: { text: pageInfo },
        page_hero: { url: pageHeroImg },
        page_header: { text: pageHeader },
        page_btn_link: { url: pageBtnLink },
        page_btn: { text: pageBtnText },
        my_base_logo: { url: myBaseLogo },
        logos,
        landing_a_job_info: { text: landingAJobInfo },
        landing_a_job_header: { text: landingAJobHeader },
        details_header: { text: detailsHeader },
        deadline_date: { text: deadlineDate },
        deadline_text: { text: deadlineText },
        cta_subheader: { text: ctaSubheader },
        cta_next_session: { text: ctaNextSession },
        cta_header: { text: ctaHeader },
        cta_btn_link: { url: ctaBtnLink },
        cta_btn: { text: ctaBtnText },
        cta_bg_img: { url: ctaBgImg },
        companies_header: { text: companiesHeader },
        cite2: { text: cite2 },
        cite: { text: cite },
    } = data.prismicMyBaseScholarship.data
    return (
        <Layout>
            <SEO title="My Base Scholarship" />
            <HeroHeader
                header={pageHeader}
                logo={myBaseLogo}
                arhnLogo={arhnLogo}
                link={pageBtnLink}
                btnText={pageBtnText}
                sub={pageInfo}
                heroImg={pageHeroImg}
                info={pageSubheader}
                title={pageTitle}
            />
            <LandingAJob
                header={landingAJobHeader}
                sub={landingAJobInfo}
                phases={phases}
            />
            <Testimonial1
                testimonial={testimonial}
                cite={cite}
                testimonialImg={testimonialImg}
            />
            <ScholarshipDetails
                header={detailsHeader}
                deadlineText={deadlineText}
                deadlineDate={deadlineDate}
                bullets={scholarship_bullets}
                info={scholarshipInfo}
                btnText={scholarshipBtnText}
                link={scholarshipBtnLink}
                bgImg={scholarshipBgImg}
            />
            <Companies header={companiesHeader} logos={logos} />
            <Ratings
                header={ratingsHeader}
                ratings={ratings}
                bootcampRankingsLink={myBaseScholarshipLink}
            />
            <Testimonial2
                testimonial={testimonial2}
                cite={cite2}
                testimonialImg={testimonialImg2}
            />
            <CTA
                header={ctaHeader}
                bgImg={ctaBgImg}
                startDate={start_date}
                subHeader={ctaSubheader}
                link={ctaBtnLink}
                btnText={ctaBtnText}
                nextSession={ctaNextSession}
            />
        </Layout>
    )
}

export const query = graphql`
    {
        prismicMyBaseScholarship {
            data {
                testimonial_img2 {
                    url
                }
                ahrn_logo {
                    url
                }
                testimonial_img {
                    url
                }
                testimonial2 {
                    text
                }
                testimonial {
                    text
                }
                start_date {
                    document {
                        data {
                            start_date(formatString: "MMMM Do, YYYY")
                        }
                    }
                }
                scholarship_info {
                    text
                }
                my_base_scholarship_link {
                    url
                }
                scholarship_bullets {
                    checkmark {
                        url
                    }
                    bullet {
                        text
                    }
                }
                scholarship_btn_link {
                    url
                }
                scholarship_btn {
                    text
                }
                scholarship_bg_img {
                    url
                }
                ratings_header {
                    text
                }
                ratings {
                    rating {
                        url
                    }
                }
                phases {
                    phase_num {
                        text
                    }
                    phase_info {
                        text
                    }
                    phase_header {
                        text
                    }
                }
                page_title {
                    text
                }
                page_subheader {
                    text
                }
                page_info {
                    text
                }
                page_hero {
                    url
                }
                page_header {
                    text
                }
                page_btn_link {
                    url
                }
                page_btn {
                    text
                }
                my_base_logo {
                    url
                }
                logos {
                    logo {
                        url
                    }
                }
                landing_a_job_info {
                    text
                }
                landing_a_job_header {
                    text
                }
                details_header {
                    text
                }
                deadline_date {
                    text
                }
                deadline_text {
                    text
                }
                cta_subheader {
                    text
                }
                cta_next_session {
                    text
                }
                cta_header {
                    text
                }
                cta_btn_link {
                    url
                }
                cta_btn {
                    text
                }
                cta_bg_img {
                    url
                }
                companies_header {
                    text
                }
                cite2 {
                    text
                }
                cite {
                    text
                }
            }
        }
    }
`
