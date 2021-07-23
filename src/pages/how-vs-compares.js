import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import ComparesPage from "../components/methodology"

export default function HowVSCompares({ data }) {
    return (
        <Layout>
            <Seo title="How VS Compares" />
            <ComparesPage />
        </Layout>
    )
}
