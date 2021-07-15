import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"

import UtahHealth from "../components/utah-health"

export default function UtahHealthPage({ data }) {
    return (
        <Layout>
            <SEO title="Programming Prerequisites" />
            <UtahHealth />
        </Layout>
    )
}
