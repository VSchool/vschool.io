import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"
import { gray, yellow } from "@vschool/lotus"
import {
    Header,
    Trusted,
    VetStudents,
    Ratings,
    Testimonial,
} from "../components/veterans"

import Courses from "../components/shared/Courses"

import MakeALeap from "../components/shared/MakeALeap.js"

export default function Veterans({ data }) {
    const {
        veterans_sub: { text: sub },
        veterans_hero_image: { url: heroImg },
        veterans_header: { text: header },
        veterans_btn_link: { url: link },
        veterans_btn: { text: btnText },
        veteran_students: { url: studentsImg },
        trusted_header: { text: trustedHeader },
        testimonial_image: { url: testimonialImg },
        testimonial_cite: { text: cite },
        testimonial: { text: testimonial },
        make_it_happen_link: { url: makeItHappenLink },
        upcoming_programs_header: { text: programsHeader },
        ratings_header: { text: ratingsHeader },
        make_a_leap_sub: { text: makeALeapSub },
        make_a_leap_header: { text: makeALeapTitle },
        make_a_leap_btn: { text: makeALeapBtnText },
        next_session: { text: makeALeapSession },
        ratings,
        courses,
        bullets,
    } = data.prismicVeteransPage.data
    const { start_date: startDate } = data.prismicStartDate.data
    return (
        <Layout>
            <SEO title={header} />
            <Header
                header={header}
                sub={sub}
                link={link}
                btnText={btnText}
                heroImg={heroImg}
            />
            <Trusted header={trustedHeader} bullets={bullets} />
            <VetStudents img={studentsImg} />
            <Courses
                bgColor={yellow.lightest}
                header={programsHeader}
                courses={courses}
            />
            <Ratings header={ratingsHeader} ratings={ratings} />
            <Testimonial
                testimonialImg={testimonialImg}
                testimonial={testimonial}
                cite={cite}
            />
            <MakeALeap
                bgColor={gray.lighter}
                sessionColor={yellow.lighter}
                title={makeALeapTitle}
                btnText={makeALeapBtnText}
                nextSession={makeALeapSession}
                startDate={startDate}
                sub={makeALeapSub}
                link={makeItHappenLink}
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
        prismicVeteransPage {
            data {
                veterans_sub {
                    text
                }
                veterans_hero_image {
                    url
                }
                veterans_header {
                    text
                }
                veterans_btn_link {
                    url
                }
                veterans_btn {
                    text
                }
                veteran_students {
                    url
                }
                trusted_header {
                    text
                }
                testimonial_image {
                    url
                }
                testimonial_cite {
                    text
                }
                testimonial {
                    text
                }
                make_it_happen_link {
                    url
                }
                bullets {
                    bullet_header {
                        text
                    }
                    bullet_info {
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
                            data {
                                course_name {
                                    html
                                    text
                                }
                                start_date(formatString: "MMM Do, YYYY")
                            }
                        }
                    }
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
                upcoming_programs_header {
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
