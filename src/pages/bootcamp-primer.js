import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import {
    AboutPrimer,
    ContactUs,
    Courses,
    CourseBullets,
    HeroHeader,
    HeroImage,
    InfoForm,
    Testimonial,
} from "../components/bootcamp-primer"

import { useStaticQuery, graphql } from "gatsby"

export default function BootcampPrimerPage() {
    const {
        prismicBootcampPrimer: {
            data: {
                main_page_title: { text: title },
            },
        },
    } = useStaticQuery(graphql`
        {
            prismicBootcampPrimer {
                data {
                    main_page_title {
                        text
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <SEO title={title} />
            <HeroHeader />
            <InfoForm />
            <CourseBullets />
            <HeroImage />
            <AboutPrimer />
            <Testimonial />
            <ContactUs />
            <Courses />
        </Layout>
    )
}
