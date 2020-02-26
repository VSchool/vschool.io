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
    Details
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
        details,
        deadlines,
        cite: { text: cite },
        make_a_leap_link: { url: makeALeapLink }
    } = data.prismicVaScholarship.data
    const {
        where_we_work_header: { text: whereWeWorkHeader },
        ratings_header: { text: ratingsHeader },
        ratings,
        company_logos,
    } = data.prismicHomePage.data
    const { start_date: startDate } = data.prismicStartDate.data
    const {
        call_to_action_btn: {text: callToActionBtnText},
        call_to_action_sub: {text: callToActionSub},
        call_to_action_title: {text: callToActionTitle},
        next_session_title: {text: nextSession}
    } = data.prismicXdPage.data
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
            <ScholarshipDetails 
              header={detailsHeader}
              deadlines={deadlines}
              detailsInfo={detailsInfo}
              detailsBgImg={detailsBgImg}
            />
            <Details details={details}/>
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
                details_info {
                    text
                }
                details_header {
                    text
                }
                details {
                    info {
                        text
                    }
                    header {
                        text
                    }
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
                make_a_leap_link {
                    url
                }
            }
        }
        prismicHomePage {
            data {
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
            }
        }
    }
`
