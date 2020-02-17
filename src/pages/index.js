import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { gray, green } from "@vschool/lotus"
import SEO from "../components/seo"
import {
    HeroHeader,
    HeroImage,
    Courses,
    Companies,
    Ratings,
    Differences,
    Testimonial,
    VideoModal,
} from "../components/home"

import MakeALeap from "../components/shared/MakeALeap.js"
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
        where_we_work_header: { text: weWorkHeader },
        ratings_header: { text: ratingsHeader },
        what_makes_us_different_header: { text: differenceHeader },
        testimonial_text: { text: testimonial },
        testimonial_img: { url: testimonialImg },
        testimonial_cite: { text: cite },
        make_a_leap_link: { url: makeALeapLink },
        differences,
        ratings,
        company_logos,
        courses,
    } = data.prismicHomePage.data
    const {
        call_to_action_btn: { text: makeALeapBtnText },
        call_to_action_sub: { text: makeALeapSub },
        call_to_action_title: { text: makeALeapTitle },
        next_session_title: { text: makeALeapSession },
    } = data.prismicXdPage.data
    const { edges: startDates } = data.allPrismicStartDate
    const { start_date: startDate } = data.prismicStartDate.data
    return (
        <Layout>
            <SEO title="Home" />
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
                header={coursesHeader}
                courses={courses}
                startDates={startDates}
            />
            <Companies header={weWorkHeader} logos={company_logos} />
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
        prismicXdPage {
            data {
                call_to_action_btn {
                    text
                }
                call_to_action_sub {
                    text
                }
                call_to_action_title {
                    text
                }
                next_session_title {
                    text
                }
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
            }
        }
        allPrismicStartDate {
            edges {
                node {
                    data {
                        course_name {
                            text
                        }
                        start_date(formatString: "MMM Do, YYYY")
                    }
                }
            }
        }
    }
`
