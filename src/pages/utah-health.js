import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"

import {
    PageHeader,
    BeginCourseForm,
    HeroImage,
    AboutPrimer,
    NeverLearnAlone,
    GoogleForm,
} from "../components/utah-health"

export default function UtahHealth({ data }) {
    const {
        vslogo: { url: vsLogo },
        ulogo: { url: uLogo },
        page_subheader: { text: pageSubheader },
        page_info1: { text: pageInfo1 },
        page_info2: { text: pageInfo2 },
        page_header: { text: pageHeader },
        learn_subheader: { text: learnSubheader },
        learn_link: { url: learnLink },
        learn_header: { text: learnHeader },
        learn_btn: { text: learnBtnText },
        invite_btn: { text: inviteBtnText },
        hero_image: { url: heroImg },
        hero_image_mobile: { url: heroImgMobile },
        google_form_info: { text: googleInfo },
        google_form_link: { url: googleLink },
        google_form_btn: { text: googleBtnText },
        about_primer_header: { text: aboutPrimerHeader },
        about_primer2: { text: aboutPrimer2 },
        about_primer1: { text: aboutPrimer1 },
    } = data.prismicUofuPrimer.data
    return (
        <Layout>
            <SEO title="Programming Prerequisites" />
            <PageHeader
                logo={uLogo}
                header={pageHeader}
                subheader={pageSubheader}
                info1={pageInfo1}
                info2={pageInfo2}
            />
            <BeginCourseForm />
            <HeroImage desktopImg={heroImg} mobileImg={heroImgMobile} />
            <AboutPrimer
                header={aboutPrimerHeader}
                info1={aboutPrimer1}
                info2={aboutPrimer2}
            />
            <GoogleForm
                link={googleLink}
                btnText={googleBtnText}
                info={googleInfo}
            />
            <NeverLearnAlone
                header={learnHeader}
                subheader={learnSubheader}
                btnText={learnBtnText}
                link={learnLink}
                logo={vsLogo}
                invite={inviteBtnText}
            />
        </Layout>
    )
}

export const query = graphql`
    {
        prismicUofuPrimer {
            data {
                vslogo {
                    url
                }
                ulogo {
                    url
                }
                page_subheader {
                    text
                }
                page_info1 {
                    text
                }
                page_info2 {
                    text
                }
                page_header {
                    text
                }
                learn_subheader {
                    text
                }
                learn_link {
                    url
                }
                learn_header {
                    text
                }
                learn_btn {
                    text
                }
                invite_btn {
                    text
                }
                hero_image {
                    url
                }
                hero_image_mobile {
                    url
                }
                google_form_info {
                    text
                }
                google_form_link {
                    url
                }
                google_form_btn {
                    text
                }
                about_primer_header {
                    text
                }
                about_primer2 {
                    text
                }
                about_primer1 {
                    text
                }
            }
        }
    }
`
