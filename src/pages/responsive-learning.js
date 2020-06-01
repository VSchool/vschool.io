import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"
import {
    PageHeader,
    MasterBasedLearning,
    RespondingHeader,
    ResponsiveIndustry,
    Quotes,
    ResponsiveAbility,
    ResponsiveLife,
    CTA,
    Testimonial,
    WorkWithUs
} from "../components/responsive-learning"

export default function ResponsiveLearning({ data }) {
    const {
        ability_bullets,
        ability_description: { text: abilityDescription },
        ability_header: { text: abilityHeader },
        ability_image: { url: abilityImg },
        ability_image_mobile: { url: abilityImgMobile },
        cite: { text: cite1 },
        cite_course: { text: citeCourse1 },
        companies,
        cta_btn: { text: ctaBtnText },
        cta_btn_link: { url: ctaLink },
        cta_courses,
        cta_header: { text: ctaHeader },
        cta_subheader: { text: ctaSubheader },
        header_img: { url: headerImg },
        industry_header: { text: industryHeader },
        industry_image: { url: industryImg },
        industry_info: { text: industryInfo },
        life_bullets,
        life_header: { text: lifeHeader },
        life_info: { text: lifeInfo },
        mastery_description: { text: masteryDescription },
        mastery_header: { text: masteryHeader },
        mastery_info,
        mastery_subheader: { text: masterySubheader },
        page_header: { text: pageHeader },
        page_subheader: { text: pageSubheader },
        page_title: { text: pageTitle },
        responding_description: { text: respondingDescription },
        responding_header: { text: respondingHeader },
        responding_subheader: { text: respondingSubheader },
        testimonial: { text: testimonial1 },
        testimonial2: { text: testmonial2 },
        testimonial2_cite_course: { text: testimonial2CiteCourse },
        testimonial2_cite: { text: testimonial2Cite },
        testimonial2_image: { url: testimonial2Img },
        testimonial_image: { url: testimonial1Img },
        work_with_us_btn: { text: workWithUsBtnText },
        work_with_us_btn_link: { url: workWithUsLink },
        work_with_us_header: { text: workWithUsHeader },
        work_with_us_info: { text: workWithUsInfo },
        work_with_us_invite: { text: workWithUsInvite },
        work_with_us_subheader: { text: workWithUsSubheader },
    } = data.prismicResponsiveLearning.data
    return (
        <Layout>
            <SEO title="Responsive Learning" />
            <PageHeader
                title={pageTitle}
                header={pageHeader}
                subHeader={pageSubheader}
                img={headerImg}
            />
            <MasterBasedLearning
                header={masteryHeader}
                subHeader={masterySubheader}
                description={masteryDescription}
                info={mastery_info}
            />
            <RespondingHeader
                header={respondingHeader}
                subHeader={respondingSubheader}
                description={respondingDescription}
            />
            <ResponsiveIndustry
                header={industryHeader}
                info={industryInfo}
                img={industryImg}
            />
            <Quotes quotes={companies} />
            <ResponsiveAbility
                header={abilityHeader}
                description={abilityDescription}
                desktopImg={abilityImg}
                mobileImg={abilityImgMobile}
                bullets={ability_bullets}
            />
            <ResponsiveLife
                header={lifeHeader}
                description={lifeInfo}
                testimonial={testimonial1}
                img={testimonial1Img}
                cite={cite1}
                course={citeCourse1}
                bullets={life_bullets}
            />
            <CTA
                header={ctaHeader}
                subHeader={ctaSubheader}
                btnText={ctaBtnText}
                link={ctaLink}
                courses={cta_courses}
            />
            <Testimonial 
              testimonial={testmonial2}
              cite={testimonial2Cite}
              course={testimonial2CiteCourse}
              img={testimonial2Img}
            />
            <WorkWithUs 
              header={workWithUsHeader}
              subHeader={workWithUsSubheader}
              btnText={workWithUsBtnText}
              link={workWithUsLink}
              info={workWithUsInfo}
              invite={workWithUsInvite}
            />
        </Layout>
    )
}

export const query = graphql`
    {
        prismicResponsiveLearning {
            data {
                ability_bullets {
                    bullet {
                        text
                    }
                }
                ability_description {
                    text
                }
                ability_header {
                    text
                }
                ability_image {
                    url
                }
                ability_image_mobile {
                    url
                }
                cite {
                    text
                }
                cite_course {
                    text
                }
                companies {
                    testimonial {
                        text
                    }
                    position {
                        text
                    }
                    logo {
                        url
                    }
                    cite {
                        text
                    }
                }
                cta_btn {
                    text
                }
                cta_btn_link {
                    url
                }
                cta_courses {
                    session_date {
                        document {
                            data {
                                start_date(formatString: "MMMM Do, YYYY")
                            }
                        }
                    }
                    next_session {
                        text
                    }
                    bg_image {
                        url
                    }
                }
                cta_header {
                    text
                }
                cta_subheader {
                    text
                }
                header_img {
                    url
                }
                industry_header {
                    text
                }
                industry_image {
                    url
                }
                industry_info {
                    text
                }
                life_bullets {
                    bullet
                }
                life_header {
                    text
                }
                life_info {
                    text
                }
                mastery_description {
                    text
                }
                mastery_header {
                    text
                }
                mastery_info {
                    info {
                        text
                    }
                    header {
                        text
                    }
                    graph {
                        url
                    }
                }
                mastery_subheader {
                    text
                }
                page_header {
                    text
                }
                page_subheader {
                    text
                }
                page_title {
                    text
                }
                responding_description {
                    text
                }
                responding_header {
                    text
                }
                responding_subheader {
                    text
                }
                testimonial {
                    text
                }
                testimonial2 {
                    text
                }
                testimonial2_cite_course {
                    text
                }
                testimonial2_cite {
                    text
                }
                testimonial2_image {
                    url
                }
                testimonial_image {
                    url
                }
                work_with_us_btn {
                    text
                }
                work_with_us_btn_link {
                    url
                }
                work_with_us_header {
                    text
                }
                work_with_us_info {
                    text
                }
                work_with_us_invite {
                    text
                }
                work_with_us_subheader {
                    text
                }
            }
        }
    }
`