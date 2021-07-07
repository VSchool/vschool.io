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
        ratings_header: { text: ratingsHeader },
        ratings,
        bootcamp_rankings_link: { url: bootcampRankingsLink },
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

    const { phases } = data.prismicEducationPhases.data

    const { start_date } = data.prismicStartDate.data
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
            <ScholarshipDetails />
            <Companies header={companiesHeader} logos={logos} />
            <Ratings
                header={ratingsHeader}
                ratings={ratings}
                bootcampRankingsLink={bootcampRankingsLink}
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
        prismicStartDate {
            data {
                start_date(formatString: "MMMM Do, YYYY")
            }
        }
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
                bootcamp_rankings_link {
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
    }
`
