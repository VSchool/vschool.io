import React from "react"
import Layout from "../../components/layout.js"
import SEO from "../../components/seo.js"
import Syllabus from "../../components/syllabus"
import developmentImage from '../../images/syllabus-development-image.png'

export default function Development() {
    return (
        <Layout>
            <SEO title={"Development Syllabus"} />
            <Syllabus image={developmentImage} convertKitTag="" />
        </Layout>
    )
}
