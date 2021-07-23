import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Scholarships from "../../components/scholarships"

export default function BootcampPrimerPage() {
    return (
        <Layout>
            <Seo title={"Scholarships"} />
            <Scholarships />
        </Layout>
    )
}
