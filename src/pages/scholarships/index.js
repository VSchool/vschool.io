import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Scholarships from "../../components/scholarships"

export default function BootcampPrimerPage() {
    return (
        <Layout>
            <SEO title={"Scholarships"} />
            <Scholarships />
        </Layout>
    )
}
