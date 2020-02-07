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
    MakeALeap,
    FAQ,
    LearnDesign,
} from "../components/development"

export default function Development({ data }) {
    const {
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
        learn_design_link: { url: learnDesignLink },
        learn_design_btn: { text: learnDesignBtn },
        learn_design: { text: learnDesignTitle },
        faq,
        company_logos,
        modules,
        course_bullets,
        rating_images,
    } = data.prismicDevelopmentPage.data
    return (
        <Layout>
            <SEO title={header} />
            <HeroHeader
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
            <MakeALeap sessionColor={blue.light} bgColor={blue.lightest} />
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
        prismicDevelopmentPage {
            data {
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
