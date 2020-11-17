import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import ResponsiveLearningPage from '../components/responsive-learning'

export default function ResponsiveLearning() {
    return (
        <Layout>
            <SEO title="Responsive Learning" />
            <ResponsiveLearningPage />
        </Layout>
    )
}