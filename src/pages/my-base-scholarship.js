import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"

import { HeroHeader, LandingAJob } from "../components/my-base-scholarship"

export default function MyBaseScholarship({ data }) {
    const {
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
        ratings,
        phases,
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
                    url
                }
                scholarship_info {
                    text
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
