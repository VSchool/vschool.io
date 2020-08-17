import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { gray, green } from "@vschool/lotus"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import {
    HeroHeader,
    HeroImage,
    Ratings,
    Differences,
    Testimonial,
    VideoModal,
} from "../components/home"

import { AlumniCompanies } from "../components/shared"
import MakeALeap from "../components/shared/MakeALeap"
import Courses from "../components/shared/Courses"

export default function IndexPage({ data }) {
    const [show, setShow] = useState(false)
    const toggle = () => setShow(p => !p)
    const {
        hero_header_sub2: { text: invite },
        hero_header_sub1: { text: sub },
        hero_header: { text: title },
        hero_btn: { text: btnText },
        hero_btn_link: { url: link },
        hero_img_small: { url: heroImgSm },
        hero_img_large: { url: heroImgLg },
        hero_green_circle: { url: greenCircle },
        hero_overlay_img: { url: overlayImg },
        upcoming_programs_header: { text: coursesHeader },
        ratings_header: { text: ratingsHeader },
        what_makes_us_different_header: { text: differenceHeader },
        testimonial_text: { text: testimonial },
        testimonial_img: { url: testimonialImg },
        testimonial_cite: { text: cite },
        make_a_leap_link: { url: makeALeapLink },
        make_a_leap_btn: { text: makeALeapBtnText },
        make_a_leap_header: { text: makeALeapTitle },
        make_a_leap_sub: { text: makeALeapSub },
        next_session: { text: makeALeapSession },
        differences,
        ratings,
        courses,
    } = data.prismicHomePage.data
    const { start_date: startDate } = data.prismicStartDate.data
    return (
        <Layout>
            <SEO title="Home" />

            {/* Insert Pinterest claim code into head of index page */}
            <Helmet>
                <meta
                    name="p:domain_verify"
                    content="e7ec9d78e5ee9bcdffca6388ba0cdfa8"
                />
            </Helmet>
            <HeroHeader
                title={title}
                sub={sub}
                invite={invite}
                btnText={btnText}
                link={link}
            />
            <VideoModal show={show} toggle={toggle} />
            <HeroImage
                toggle={toggle}
                heroImgLg={heroImgLg}
                heroImgSm={heroImgSm}
                greenCircle={greenCircle}
                overlayImg={overlayImg}
            />
            <Courses
                bgColor={gray.lighter}
                header={coursesHeader}
                courses={courses}
            />
            <AlumniCompanies />
            <Ratings header={ratingsHeader} ratings={ratings} />
            <Differences header={differenceHeader} differences={differences} />
            <Testimonial
                testimonial={testimonial}
                cite={cite}
                testimonialImg={testimonialImg}
            />
            <MakeALeap
                bgColor={gray.lighter}
                sessionColor={green.lighter}
                startDate={startDate}
                title={makeALeapTitle}
                nextSession={makeALeapSession}
                btnText={makeALeapBtnText}
                sub={makeALeapSub}
                link={makeALeapLink}
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
        prismicHomePage {
            data {
                where_we_work_header {
                    text
                }
                what_makes_us_different_header {
                    text
                }
                testimonial_text {
                    text
                }
                testimonial_img {
                    url
                }
                testimonial_cite {
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
                hero_overlay_img {
                    url
                }
                hero_img_small {
                    url
                }
                hero_img_large {
                    url
                }
                hero_header_sub2 {
                    text
                }
                hero_header_sub1 {
                    text
                }
                hero_header {
                    text
                }
                hero_green_circle {
                    url
                }
                hero_btn_link {
                    url
                }
                hero_btn {
                    text
                }
                differences {
                    header {
                        text
                    }
                    info {
                        text
                    }
                    link {
                        url
                    }
                    link2 {
                        url
                    }
                    link2_text {
                        text
                    }
                    link_text {
                        text
                    }
                    sub_header {
                        text
                    }
                }
                courses {
                    course_link {
                        url
                    }
                    course_info {
                        text
                    }
                    course {
                        text
                    }
                    course_start_date {
                        document {
                            ... on PrismicStartDate {
                                id
                                data {
                                    course_name {
                                        text
                                    }
                                    start_date(formatString: "MMMM Do, YYYY")
                                }
                            }
                        }
                    }
                }
                company_logos {
                    logo {
                        url
                    }
                }
                upcoming_programs_header {
                    text
                }
                make_a_leap_link {
                    url
                }
                make_a_leap_btn {
                    text
                }
                make_a_leap_header {
                    text
                }
                make_a_leap_sub {
                    text
                }
                next_session {
                    text
                }
            }
        }
    }
`
