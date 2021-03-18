import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import TechMoms from "../components/tech-moms"

export default function MotherCodersPage() {
    return (
        <Layout>
            <SEO title="Tech-Moms" />
            <TechMoms />
        </Layout>
    )
}
