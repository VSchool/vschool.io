import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { blue } from "@vschool/lotus"
import { graphql } from "gatsby"
import {
    HeroHeader,
    HeroImage,
    AboutCourse,
    Modules,
    CourseBullets,
    Companies,
    Ratings,
    Testimonial,
    ISA,
    PaymentOptions,
    FAQ,
    LearnDesign,
} from "../components/development"
import MakeALeap from "../components/shared/MakeALeap.js"

export default function Development({ data }) {
    const {
        page_title: { text: title },
        development_header: { text: header },
        development_sub: { text: sub },
        development_sub2: { text: sub2 },
        invite_btn: { text: btnText },
        invite_btn_link: { url: link },
        development_hero_img_sm: { url: heroImgSm },
        development_hero_img_lg: { url: heroImgLg },
        development_hero_overlay_img: { url: overlayImg },
        about_course_header: { text: aboutHeader },
        about_course_sub: { text: aboutSub },
        where_we_work_header: { text: companiesHeader },
        ratings_header: { text: ratingsHeader },
        testimonial: { text: testimonial },
        testimonial_cite: { text: cite },
        testimonial_img: { url: testimonialImg },
        make_a_leap_link: { url: makeALeapLink },
        learn_design_link: { url: learnDesignLink },
        learn_design_btn: { text: learnDesignBtn },
        learn_design: { text: learnDesignTitle },
        faq,
        company_logos,
        modules,
        course_bullets,
        rating_images,
    } = data.prismicDevelopmentPage.data
    const {
        call_to_action_btn: { text: makeALeapBtnText },
        call_to_action_sub: { text: makeALeapSub },
        call_to_action_title: { text: makeALeapTitle },
        next_session_title: { text: makeALeapSession },
    } = data.prismicXdPage.data
    const { start_date: startDate } = data.prismicStartDate.data
    return (
        <Layout>
            <SEO title={header} />
            <HeroHeader
                title={title}
                header={header}
                sub={sub}
                sub2={sub2}
                btnText={btnText}
                link={link}
            />
            <HeroImage
                heroImgLg={heroImgLg}
                heroImgSm={heroImgSm}
                overlayImg={overlayImg}
            />
            <AboutCourse header={aboutHeader} sub={aboutSub} />
            <Modules modules={modules} />
            <CourseBullets bullets={course_bullets} />
            <Companies header={companiesHeader} logos={company_logos} />
            <Ratings header={ratingsHeader} ratings={rating_images} />
            <Testimonial
                testimonial={testimonial}
                cite={cite}
                testimonialImg={testimonialImg}
            />
            <ISA />
            <PaymentOptions />
            <MakeALeap
                sessionColor={blue.light}
                bgColor={blue.lightest}
                sub={makeALeapSub}
                title={makeALeapTitle}
                btnText={makeALeapBtnText}
                nextSession={makeALeapSession}
                link={makeALeapLink}
                startDate={startDate}
            />
            <LearnDesign
                title={learnDesignTitle}
                link={learnDesignLink}
                btnText={learnDesignBtn}
            />
            <FAQ faq={faq} />
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
        prismicDevelopmentPage {
            data {
                page_title {
                    text
                }
                about_course_header {
                    text
                }
                about_course_sub {
                    text
                }
                company_logos {
                    logo {
                        url
                    }
                }
                course_bullets {
                    bullet_info {
                        text
                    }
                    bullet_title {
                        text
                    }
                }
                development_header {
                    text
                }
                development_hero_img_sm {
                    url
                }
                development_hero_img_lg {
                    url
                }
                development_hero_overlay_img {
                    url
                }
                development_sub {
                    text
                }
                development_sub2 {
                    text
                }
                invite_btn {
                    text
                }
                modules {
                    module_sub {
                        text
                    }
                    module_title {
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
                rating_images {
                    rating {
                        url
                    }
                }
                ratings_header {
                    text
                }
                testimonial {
                    text
                }
                testimonial_cite {
                    text
                }
                testimonial_img {
                    url
                }
                where_we_work_header {
                    text
                }
                invite_btn_link {
                    url
                }
                make_a_leap_link {
                    url
                }
                faq {
                    faq_info {
                        text
                    }
                    faq_title {
                        text
                    }
                }
                learn_design_link {
                    url
                }
                learn_design_btn {
                    text
                }
                learn_design {
                    text
                }
            }
        }
    }
`
