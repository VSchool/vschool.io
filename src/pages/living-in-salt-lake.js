import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import {
    Header,
    HeroImage,
    StateFeatures,
    Testimonial,
} from "../components/living-in-slc"

import { MakeALeap } from "../components/shared"
import { graphql } from "gatsby"
import { blue } from "@vschool/lotus"

export default function LivingInSaltLake({ data }) {
    const {
        utah_features_header: { text: featuresHeader },
        utah_features,
        testimonial_text: { text: testimonial },
        testimonial_image: { url: testimonialImg },
        testimonial_cite: { text: cite },
        sub_header: { text: sub },
        hero_image: { url: heroImg },
        header: { text: header },
        check_out_housing_title: { text: housingTitle },
        check_out_housing_link: { url: housingLink },
        check_out_housing_btn: { text: housingBtnText },
        make_a_leap_link: { url: makeALeapLink },
    } = data.prismicLivingInSaltLake.data
    const { start_date: startDate } = data.prismicStartDate.data
    const {
        call_to_action_btn: { text: makeALeapBtnText },
        call_to_action_sub: { text: makeALeapSub },
        call_to_action_title: { text: makeALeapTitle },
        next_session_title: { text: makeALeapSession },
    } = data.prismicXdPage.data
    console.log(data)
    return (
        <Layout>
            <SEO title={header} />
            <Header header={header} subHeader={sub} />
            <HeroImage heroImg={heroImg} />
            <StateFeatures features={utah_features} header={featuresHeader} />
            <Testimonial
                testimonial={testimonial}
                cite={cite}
                testimonialImg={testimonialImg}
            />
            <MakeALeap
                bgColor={blue.lightest}
                sessionColor={blue.light}
                link={makeALeapLink}
                startDate={startDate}
                nextSession={makeALeapSession}
                btnText={makeALeapBtnText}
                sub={makeALeapSub}
                title={makeALeapTitle}
            />
            {/* Re-add once housing page is complete */}
            {/* <CheckOutHousing title={housingTitle} link={housingLink} btnText={housingBtnText}/> */}
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
        prismicLivingInSaltLake {
            data {
                utah_features_header {
                    text
                }
                utah_features {
                    feature_title {
                        text
                    }
                    feature_image {
                        url
                    }
                    feature_description {
                        text
                    }
                }
                testimonial_text {
                    text
                }
                testimonial_image {
                    url
                }
                testimonial_cite {
                    text
                }
                sub_header {
                    text
                }
                hero_image {
                    url
                }
                header {
                    text
                }
                check_out_housing_title {
                    text
                }
                check_out_housing_link {
                    url
                }
                check_out_housing_btn {
                    text
                }
                make_a_leap_link {
                    url
                }
            }
        }
    }
`
