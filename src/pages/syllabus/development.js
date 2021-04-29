import React from "react"
import Layout from "../../components/layout.js"
import SEO from "../../components/seo.js"
import Syllabus from "../../components/syllabus"

export default function Development() {
    return (
        <Layout>
            <SEO title={"Development Syllabus"} />
            <Syllabus image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" convertKitTag="" />
        </Layout>
    )
}
