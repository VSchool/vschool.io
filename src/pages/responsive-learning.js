import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import ResponsiveLearningPage from "../components/responsive-learning"

export default function ResponsiveLearning() {
    return (
        <Layout>
            <Seo title="Responsive Learning" />
            <ResponsiveLearningPage />
        </Layout>
    )
}
