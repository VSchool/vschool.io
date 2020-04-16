import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"

import {
    HeroHeader,
    HeroImage,
    AboutCourse,
    Modules,
    Information,
    CTABanner,
    AboutScholarship,
    CourseBullets,
    Testimonial,
} from "../components/community-relief"

import MakeALeap from "../components/shared/MakeALeap.js"
import { green } from "@vschool/lotus"

export default function CommunityRelief({ data }) {
    const {
        testimonial_image: { url: testimonialImg },
        testimonial_cite: { text: cite },
        testimonial: { text: testimonial },
        subheader: { text: subheader },
        next_session: { text: nextSession },
        make_a_leap_sub: { text: makeALeapSub },
        make_a_leap_header: { text: makeALeapHeader },
        make_a_leap_btn_link: { url: makeALeapLink },
        make_a_leap_btn: { text: makeALeapBtn },
        invite_btn_link: { url: inviteLink1 },
        invite_btn: { text: inviteBtn1 },
        invite2_btn_link: { url: inviteLink2 },
        invite2_btn: { text: inviteBtn2 },
        invite2: { text: invite2 },
        invite: { text: invite1 },
        info2: { text: info2 },
        info1: { text: info1 },
        hero_image: { url: heroImg },
        header: { text: header },
        about_scholarship_sub2: { text: aboutScholarshipSub2 },
        about_scholarship_sub1: { text: aboutScholarshipSub1 },
        about_scholarship_image: { url: aboutScholarshipImg },
        about_scholarship_header: { text: aboutScholarshipHeader },
        about_course_bullets,
        modules_header: { text: modulesHeader },
        modules,
    } = data.prismicCommunityReliefScholarship.data
    const { start_date: startDate } = data.prismicStartDate.data
    return (
        <Layout>
            <SEO title="Community Relief" />
             <AboutScholarship
                title={aboutScholarshipSub1}
                header={header}
                info={subheader}
                img={aboutScholarshipImg}
                link={inviteLink1}
                btnText={inviteBtn1}
            />
            {/* <AboutScholarship
                title={aboutScholarshipSub1}
                header={aboutScholarshipHeader}
                info={aboutScholarshipSub2}
                img={aboutScholarshipImg}
            /> */}
            <Information info1={info1} info2={info2} />
            <CourseBullets bullets={about_course_bullets} />
            <AboutCourse header={modulesHeader} />
            <Modules modules={modules} />
            <CTABanner
                title={invite2}
                btnText={inviteBtn2}
                link={inviteLink2}
            />
            <HeroHeader
                title={aboutScholarshipHeader}
                sub={aboutScholarshipSub1}
                link={inviteLink1}
                btnText={inviteBtn1}
            />
            <HeroImage heroImg={heroImg} />
            <Testimonial
                testimonial={testimonial}
                cite={cite}
                testimonialImg={testimonialImg}
            />
            <MakeALeap
                title={makeALeapHeader}
                sub={makeALeapSub}
                btnText={makeALeapBtn}
                nextSession={nextSession}
                bgColor={green.lightest}
                sessionColor={green.base}
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
        prismicCommunityReliefScholarship {
            data {
                testimonial_image {
                    url
                }
                testimonial_cite {
                    text
                }
                testimonial {
                    text
                }
                subheader {
                    text
                }
                next_session {
                    text
                }
                make_a_leap_sub {
                    text
                }
                make_a_leap_header {
                    text
                }
                make_a_leap_btn_link {
                    url
                }
                make_a_leap_btn {
                    text
                }
                invite_btn_link {
                    url
                }
                invite_btn {
                    text
                }
                invite2_btn_link {
                    url
                }
                invite2_btn {
                    text
                }
                invite2 {
                    text
                }
                invite {
                    text
                }
                info2 {
                    text
                }
                info1 {
                    text
                }
                hero_image {
                    url
                }
                header {
                    text
                }
                about_scholarship_sub2 {
                    text
                }
                about_scholarship_sub1 {
                    text
                }
                about_scholarship_image {
                    url
                }
                about_scholarship_header {
                    text
                }
                about_course_bullets {
                    bullet_title {
                        text
                    }
                    bullet_point3 {
                        text
                    }
                    bullet_point2 {
                        text
                    }
                    bullet_point1 {
                        text
                    }
                    bullet_info {
                        text
                    }
                }
                modules_header {
                    text
                }
                modules {
                    subject5 {
                        text
                    }
                    subject4 {
                        text
                    }
                    subject3 {
                        text
                    }
                    subject2 {
                        text
                    }
                    subject1 {
                        text
                    }
                    module_title {
                        text
                    }
                    module_sub {
                        text
                    }
                }
            }
        }
    }
`
