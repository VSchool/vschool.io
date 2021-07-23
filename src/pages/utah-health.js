import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"

import UtahHealth from "../components/utah-health"

export default function UtahHealthPage({ data }) {
    return (
        <Layout>
            <Seo title="Programming Prerequisites" />
            <UtahHealth />
        </Layout>
    )
}
