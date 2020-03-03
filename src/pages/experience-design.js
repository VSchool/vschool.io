import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import {
    AboutCourse,
    AsRealAsItGets,
    CourseBullets,
    FAQ,
    HeroHeader,
    HeroImage,
    ISA,
    LearnToCode,
    PaymentOptions,
    Ratings,
    Skills,
    Testimonial,
} from "../components/experience-design"
import MakeALeap from "../components/shared/MakeALeap.js"
import { purple } from "@vschool/lotus"
import { graphql } from "gatsby"

const ExperienceDesignPage = ({ data }) => {
    const {
        testimonial_text: { text: testimonial },
        testimonial_image: { url: testimonialImg },
        testimonial_cite: { text: cite },
        subtitle: { text: subtitle },
        soft_skills_header: { text: softSkillsHeader },
        soft_skills: softSkills,
        rating_image3: { url: rating1 },
        rating_image2: { url: rating2 },
        rating_image1: { url: rating3 },
        payment_options: paymentOptions,
        page_title: { text: pageTitle },
        next_session_title: { text: nextSession },
        make_it_happen_link: { url: makeItHappenLink },
        make_it_happen_btn: { text: makeItHappenBtnText },
        main_page_title: { text: mainTitle },
        learn_to_code_title: { text: learnToCode },
        learn_to_code_link: { url: learnToCodeLink },
        learn_to_code_btn: { text: learnToCodeBtnText },
        isa_sub: { text: isaSub },
        isa_learn_more_link: { url: isaLink },
        isa_learn_more_btn: { text: isaBtnText },
        isa_info: { text: isaInfo },
        isa_image: { url: isaImg },
        isa_header2: { text: isaHeader2 },
        isa_header1: { text: isaHeader1 },
        invite: { text: invite },
        hero_img_small: { url: heroImgSm },
        hero_img_overlay: { url: heroImgOverlay },
        hero_img_large: { url: heroImgLg },
        hard_skills_header: { text: hardSkillsHeader },
        hard_skills: hardSkills,
        faq,
        course_bullets_image: { url: courseBulletsImg },
        course_bullets: courseBullets,
        call_to_action_title: { text: makeItHappenTitle },
        call_to_action_sub: { text: makeItHappenSub },
        call_to_action_link: { url: callToActionLink },
        // call_to_action_btn: { text: callToActionBtnText },
        as_real_as_it_gets_title: { text: asRealAsItGetsTitle },
        as_real_as_it_gets_sub3: { text: asRealAsItGetsSub3 },
        as_real_as_it_gets_sub2: { text: asRealAsItGetsSub2 },
        as_real_as_it_gets_sub1: { text: asRealAsItGetsSub1 },
        as_real_as_it_gets_image: { url: asRealAsItGetsImg },
        about_course_title: { text: aboutCourseTitle },
        about_course_sub: { text: aboutCourseSub },
    } = data.prismicXdPage.data
    const { start_date: startDate } = data.prismicStartDate.data
    return (
        <Layout>
            <SEO title={mainTitle} />
            <HeroHeader
                title={pageTitle}
                header={mainTitle}
                sub={subtitle}
                invite={invite}
                link={makeItHappenLink}
                btnText={makeItHappenBtnText}
            />
            <HeroImage
                overlayImg={heroImgOverlay}
                heroImgSm={heroImgSm}
                heroImgLg={heroImgLg}
            />
            <AboutCourse title={aboutCourseTitle} sub={aboutCourseSub} />
            <Skills
                hardSkills={hardSkills}
                softSkills={softSkills}
                hardSkillsHeader={hardSkillsHeader}
                softSkillsHeader={softSkillsHeader}
            />
            <CourseBullets bullets={courseBullets} img={courseBulletsImg} />

            {/* 
            <DownloadSyllabus />
                Temporary div to add spacing while syllabus is being created 
                Delete it uncomment the <DownloadSyllabus/> component above.
            */}
            <div style={{ backgroundColor: "#FBF9F6", height: 32 }}></div>
            {/* */}

            <AsRealAsItGets
                title={asRealAsItGetsTitle}
                sub1={asRealAsItGetsSub1}
                sub2={asRealAsItGetsSub2}
                sub3={asRealAsItGetsSub3}
                img={asRealAsItGetsImg}
            />
            <Testimonial
                testimonial={testimonial}
                cite={cite}
                testimonialImg={testimonialImg}
            />
            <Ratings rating1={rating1} rating2={rating2} rating3={rating3} />
            <ISA
                header={isaHeader1}
                sub1={isaSub}
                sub2={isaHeader2}
                info={isaInfo}
                img={isaImg}
                btnText={isaBtnText}
                link={isaLink}
            />
            <PaymentOptions options={paymentOptions} />
            <MakeALeap
                bgColor={purple.lightest}
                sessionColor={purple.light}
                title={makeItHappenTitle}
                sub={makeItHappenSub}
                btnText={makeItHappenBtnText}
                nextSession={nextSession}
                startDate={startDate}
                link={callToActionLink}
            />
            <LearnToCode
                title={learnToCode}
                btnText={learnToCodeBtnText}
                link={learnToCodeLink}
            />
            <FAQ faq={faq} />
        </Layout>
    )
}

export default ExperienceDesignPage

export const query = graphql`
    {
        prismicStartDate(
            data: { course_name: { text: { eq: "Experience Design" } } }
        ) {
            data {
                start_date(formatString: "MMM Do, YYYY")
            }
        }
        prismicXdPage {
            data {
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
                soft_skills_header {
                    text
                }
                soft_skills {
                    soft_skill {
                        text
                    }
                }
                rating_image3 {
                    url
                }
                rating_image2 {
                    url
                }
                rating_image1 {
                    url
                }
                payment_options {
                    payment_type {
                        text
                    }
                    payment_info_link {
                        url
                    }
                    payment_info {
                        text
                    }
                }
                page_title {
                    text
                }
                next_session_title {
                    text
                }
                next_session_image_small {
                    url
                }
                next_session_image_large {
                    url
                }
                next_session_date {
                    text
                }
                make_it_happen_link {
                    url
                }
                make_it_happen_btn {
                    text
                }
                main_page_title {
                    text
                }
                learn_to_code_title {
                    text
                }
                learn_to_code_link {
                    url
                }
                learn_to_code_btn {
                    text
                }
                isa_sub {
                    text
                }
                isa_learn_more_link {
                    url
                }
                isa_learn_more_btn {
                    text
                }
                isa_info {
                    text
                }
                isa_image {
                    url
                }
                isa_header2 {
                    text
                }
                isa_header1 {
                    text
                }
                invite {
                    text
                }
                hero_img_small {
                    url
                }
                hero_img_overlay {
                    url
                }
                hero_img_large {
                    url
                }
                hard_skills_header {
                    text
                }
                hard_skills {
                    hard_skill {
                        text
                    }
                }
                faq {
                    faq_info {
                        text
                    }
                    faq_title {
                        text
                    }
                }
                course_bullets_image {
                    url
                }
                course_bullets {
                    bullet_title {
                        text
                    }
                    bullet_description {
                        text
                    }
                }
                call_to_action_title {
                    text
                }
                call_to_action_sub {
                    text
                }
                call_to_action_link {
                    url
                }
                call_to_action_btn {
                    text
                }
                as_real_as_it_gets_title {
                    text
                }
                as_real_as_it_gets_sub3 {
                    text
                }
                as_real_as_it_gets_sub2 {
                    text
                }
                as_real_as_it_gets_sub1 {
                    text
                }
                as_real_as_it_gets_image {
                    url
                }
                about_course_title {
                    text
                }
                about_course_sub {
                    text
                }
            }
        }
    }
`
