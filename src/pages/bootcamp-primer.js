import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
    AboutPrimer,
    ContactUs,
    CourseBullets,
    HeroHeader,
    HeroImage,
    Testimonial,
} from "../components/bootcamp-primer"
import MailchimpSubscribeForm from "../components/shared/MailchimpSubscribeForm"

import { gray } from "@vschool/lotus"

import Courses from "../components/shared/Courses"

import { graphql } from "gatsby"

export default function BootcampPrimerPage({ data }) {
    const {
        upcoming_courses_header: { text: coursesHeader },
        testimonial_text: { text: testimonial },
        testimonial_image: { url: testimonialImg },
        testimonial_cite: { text: cite },
        subtitle: { text: subTitle },
        main_page_title: { text: title },
        invitation_text: { text: invite },
        hero_image_small: { url: heroImgSm },
        hero_image_overlay: { url: heroImgOverlay },
        hero_image_large: { url: heroImgLg },
        course_bullets_title: { text: bulletsTitle },
        contact_us_title: { text: contactUsTitle },
        contact_us_sub: { text: contactUsSub },
        contact_us_link: { url: contactUsLink },
        contact_us_btn: { text: contactUsBtnText },
        about_primer_title: { text: aboutPrimerTitle },
        about_primer_sub2: { text: aboutPrimerSub2 },
        about_primer_sub1: { text: aboutPrimerSub1 },
        upcoming_courses,
        course_bullets,
    } = data.prismicBootcampPrimer.data
    return (
        <Layout>
            <SEO title={title} />
            <HeroHeader title={title} sub={subTitle} invite={invite} />
            <MailchimpSubscribeForm formUrl="//vschool.us16.list-manage.com/subscribe/post?u=f5ba48f36061bdea6c3b83712&amp;id=75906113f1"/>
            <CourseBullets title={bulletsTitle} bullets={course_bullets} />
            <HeroImage
                heroImgSm={heroImgSm}
                heroImgLg={heroImgLg}
                heroOverlay={heroImgOverlay}
            />
            <AboutPrimer
                title={aboutPrimerTitle}
                sub1={aboutPrimerSub1}
                sub2={aboutPrimerSub2}
            />
            <Testimonial
                testimonial={testimonial}
                cite={cite}
                testimonialImg={testimonialImg}
            />
            <ContactUs
                title={contactUsTitle}
                sub={contactUsSub}
                btnText={contactUsBtnText}
                link={contactUsLink}
            />
            <div
                data-name="spacer"
                style={{ backgroundColor: gray.lightest, height: 64 }}
            ></div>
            <Courses
                header={coursesHeader}
                courses={upcoming_courses}
                bgColor={gray.lightest}
            />
            <div
                data-name="spacer"
                style={{ backgroundColor: gray.lightest, height: 96 }}
            ></div>
        </Layout>
    )
}

export const query = graphql`
    {
        prismicBootcampPrimer {
            data {
                upcoming_courses_header {
                    text
                }
                upcoming_courses {
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
                                        html
                                        text
                                    }
                                    start_date(formatString: "MMMM Do, YYYY")
                                }
                            }
                        }
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
                subtitle {
                    text
                }
                main_page_title {
                    text
                }
                invitation_text {
                    text
                }
                hero_image_small {
                    url
                }
                hero_image_overlay {
                    url
                }
                hero_image_large {
                    url
                }
                email_collection_button_text {
                    text
                }
                course_bullets_title {
                    text
                }
                course_bullets {
                    bullet {
                        text
                    }
                }
                contact_us_title {
                    text
                }
                contact_us_sub {
                    text
                }
                contact_us_link {
                    url
                }
                contact_us_btn {
                    text
                }
                about_primer_title {
                    text
                }
                about_primer_sub2 {
                    text
                }
                about_primer_sub1 {
                    text
                }
            }
        }
    }
`
