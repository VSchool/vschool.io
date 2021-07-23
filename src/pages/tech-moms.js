import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import TechMoms from "../components/tech-moms"

export default function MotherCodersPage() {
    return (
        <Layout>
            <Seo title="Tech-Moms" />
            <TechMoms />
        </Layout>
    )
}
