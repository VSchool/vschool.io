import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Partners from "../../components/partners-precourse/pre-course-partners"

export default function PreCoursePartners() {
    return (
        <Layout>
            <Seo title={"Pre Course Partners Page"} />
            <Partners />
        </Layout>
    )
}
