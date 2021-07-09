import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PrecourseCommunity from "../components/pre-course"

export default function PreCourseCommunityTemplate({ pageContext }) {
    return (
        <Layout>
            <SEO title={"Test"} />
            <PrecourseCommunity data={pageContext.data} />
        </Layout>
    )
}
