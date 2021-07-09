import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PrecourseCommunity from "../components/pre-course"

export default function PreCourseCommunityTemplate({ pageContext }) {
    return (
        <Layout>
            <SEO title={pageContext.data.meta_partner_name.text} />
            <PrecourseCommunity data={pageContext.data} uid={pageContext.uid} />
        </Layout>
    )
}
