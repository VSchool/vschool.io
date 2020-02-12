import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"
import {gray, yellow} from "@vschool/lotus"
import {
    Header,
    Trusted,
    VetStudents,
    Courses,
    Ratings,
    Testimonial,
    MakeALeap
} from "../components/veterans"

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
        bullets,
    } = data.prismicVeteransPage.data
    const {
        upcoming_programs_header: { text: programsHeader },
        ratings_header: { text: ratingsHeader },
        ratings,
        courses,
    } = data.prismicHomePage.data
    const { edges: startDates } = data.allPrismicStartDate
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
                header={programsHeader}
                courses={courses}
                startDates={startDates}
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
            />
        </Layout>
    )
}

export const query = graphql`
    {
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
                bullets {
                    bullet_header {
                        text
                    }
                    bullet_info {
                        text
                    }
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
        prismicHomePage {
            data {
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
