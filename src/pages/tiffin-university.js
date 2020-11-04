import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"
import { blue } from "@vschool/lotus"
import {
    HeroImageTwo,
    Details,
    AboutCourse,
    Companies,
    Ratings,
    Testimonial,
    FAQ,
} from "../components/tiffin-university"

import PaymentOptions from "../components/shared/PaymentOptions"
import MakeALeap from "../components/shared/MakeALeap.js"

import TiffinUniversityPage from "../components/tiffin-university"

export default function Tiffin({ data }) {
    const {
        header_img2: { url: headerImg2 },
        companies_header: { text: companiesHeader },
        logos,
        ratings_header: { text: ratingsHeader },
        ratings,
        testimonial: { text: testimonial },
        testimonial_img: { url: testimonialImg },
        cite: { text: cite },
        make_a_leap_btn: { text: makeALeapBtn },
        make_a_leap_header: { text: makeALeapHeader },
        make_a_leap_link: { url: makeALeapLink },
        make_a_leap_sub: { text: makeALeapSub },
        scholarship_details,
        next_session: { text: nextSession },
        faq_header: { text: faqHeader },
        faq,
    } = data.prismicTiffin.data
    return (
        <Layout>
            <SEO title={"Tiffin University"} />
            <TiffinUniversityPage />
            <br />
            <hr />
            <br />
            <HeroImageTwo heroImg={headerImg2} />
            <Companies header={companiesHeader} logos={logos} />
            <Ratings header={ratingsHeader} ratings={ratings} />
            <Testimonial
                testimonial={testimonial}
                cite={cite}
                testimonialImg={testimonialImg}
            />
            <PaymentOptions />
            <MakeALeap
                title={makeALeapHeader}
                sub={makeALeapSub}
                btnText={makeALeapBtn}
                nextSession={nextSession}
                bgColor={blue.lightest}
                sessionColor={blue.lighter}
                startDate={scholarship_details[1].detail_date}
                link={makeALeapLink}
            />
            <FAQ faq={faq} header={faqHeader} />
        </Layout>
    )
}

export const query = graphql`
    {
        prismicTiffin {
            data {
                about_course {
                    text
                }
                cite {
                    text
                }
                companies_header {
                    text
                }
                details {
                    detail_info {
                        text
                    }
                    detail_title {
                        text
                    }
                }
                details_header {
                    text
                }
                faq {
                    faq_title {
                        text
                    }
                    faq_info {
                        text
                    }
                }
                faq_header {
                    text
                }
                header_img2 {
                    url
                }
                logos {
                    logo {
                        url
                    }
                }
                make_a_leap_btn {
                    text
                }
                make_a_leap_header {
                    text
                }
                make_a_leap_link {
                    url
                }
                make_a_leap_sub {
                    text
                }
                modules {
                    module_title {
                        text
                    }
                    module_sub {
                        text
                    }
                    subject1 {
                        text
                    }
                    subject2 {
                        text
                    }
                    subject3 {
                        text
                    }
                    subject4 {
                        text
                    }
                    subject5 {
                        text
                    }
                }
                next_session {
                    text
                }
                ratings {
                    rating {
                        url
                    }
                }
                ratings_header {
                    text
                }
                scholarship_details {
                    detail_title {
                        text
                    }
                    detail_date(formatString: "MMM Do, YYYY")
                    detail_info {
                        text
                    }
                }
                testimonial {
                    text
                }
                testimonial_img {
                    url
                }
            }
        }
    }
`
