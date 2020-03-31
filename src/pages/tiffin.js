import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"
import { blue } from "@vschool/lotus"
import {
    LogoHeader,
    PageHeader,
    HeroImage,
    HeroImageTwo,
    ScholarshipDetails,
    Details,
    Modules,
    AboutCourse,
    Companies,
    Ratings,
    Testimonial,
    FAQ,
} from "../components/tiffin"

import ISA from "../components/shared/ISA.js"
import PaymentOptions from "../components/shared/PaymentOptions.js"
import MakeALeap from "../components/shared/MakeALeap.js"

export default function Tiffin({ data }) {
    const {
        tf_logo: { url: tfLogo },
        vschool_logo: { url: vsLogo },
        header: { text: header },
        sub_header: { text: subheader },
        sub_header2: { text: subheader2 },
        header_btn: { text: headerBtnText },
        header_btn_link: { url: headerLink },
        header_img: { url: headerImg },
        tiffin_header: { text: tiffinHeader },
        tiffin_sub_header: { text: tiffinSub },
        scholarship_details_img: { url: scholarshipDetailsImg },
        scholarship_details,
        details_header: { text: detailsHeader },
        details,
        about_course: { text: aboutCourse },
        modules,
        header_img2: { url: headerImg2 },
        companies_header: { text: companiesHeader },
        logos,
        ratings_header: { text: ratingsHeader },
        ratings,
        testimonial: { text: testimonial },
        testimonial_img: { url: testimonialImg },
        cite: { text: cite },
        isa_header: { text: isaHeader },
        isa_sub1: { text: isaSub1 },
        isa_sub2: { text: isaSub2 },
        isa_info1: { text: isaInfo1 },
        isa_info2: { text: isaInfo2 },
        isa_image: { url: isaImg },
        isa_learn_more_btn: { text: isaBtnText },
        isa_learn_more_link: { url: isaBtnLink },
        payment_options,
        make_a_leap_btn: { text: makeALeapBtn },
        make_a_leap_header: { text: makeALeapHeader },
        make_a_leap_link: { url: makeALeapLink },
        make_a_leap_sub: { text: makeALeapSub },
        next_session: { text: nextSession },
        faq_header: { text: faqHeader },
        faq,
    } = data.prismicTiffin.data
    const { start_date } = data.prismicStartDate.data
    return (
        <Layout>
            <SEO title={header} />
            <LogoHeader logo1={tfLogo} logo2={vsLogo} />
            <PageHeader
                title={header}
                sub={subheader}
                invite={subheader2}
                link={headerLink}
                btnText={headerBtnText}
            />
            <HeroImage heroImg={headerImg} />
            <ScholarshipDetails
                header={tiffinHeader}
                sub={tiffinSub}
                deadlines={scholarship_details}
                bgImg={scholarshipDetailsImg}
            />
            <Details header={detailsHeader} details={details} />
            <AboutCourse header={aboutCourse} />
            <Modules modules={modules} />
            <HeroImageTwo heroImg={headerImg2} />
            <Companies header={companiesHeader} logos={logos} />
            <Ratings header={ratingsHeader} ratings={ratings} />
            <Testimonial
                testimonial={testimonial}
                cite={cite}
                testimonialImg={testimonialImg}
            />
            <ISA
                header={isaHeader}
                sub1={isaSub1}
                sub2={isaSub2}
                info1={isaInfo1}
                info2={isaInfo2}
                img={isaImg}
                btnText={isaBtnText}
                link={isaBtnLink}
            />
            <PaymentOptions options={payment_options} />
            <MakeALeap
                title={makeALeapHeader}
                sub={makeALeapSub}
                btnText={makeALeapBtn}
                nextSession={nextSession}
                bgColor={blue.lightest}
                sessionColor={blue.lighter}
                startDate={start_date}
                link={makeALeapLink}
            />
            <FAQ faq={faq} header={faqHeader} />
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
                header {
                    text
                }
                header_btn {
                    text
                }
                header_btn_link {
                    url
                }
                header_img {
                    url
                }
                header_img2 {
                    url
                }
                isa_header {
                    text
                }
                isa_image {
                    url
                }
                isa_info1 {
                    text
                }
                isa_info2 {
                    text
                }
                isa_learn_more_btn {
                    text
                }
                isa_learn_more_link {
                    url
                }
                isa_sub1 {
                    text
                }
                isa_sub2 {
                    text
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
                payment_options {
                    payment_info {
                        text
                    }
                    payment_info_link {
                        url
                    }
                    payment_type {
                        text
                    }
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
                    detail_date {
                        text
                    }
                }
                scholarship_details_img {
                    url
                }
                sub_header {
                    text
                }
                sub_header2 {
                    text
                }
                testimonial {
                    text
                }
                testimonial_img {
                    url
                }
                tf_logo {
                    url
                }
                tiffin_header {
                    text
                }
                tiffin_sub_header {
                    text
                }
                vschool_logo {
                    url
                }
            }
        }
    }
`
