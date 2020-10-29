import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Thanks from "../../components/digital-family/Thanks"

export default function DigitalFamilyPage() {
    return (
        <Layout>
            <SEO title={"Thanks!"} />
            <Thanks />
        </Layout>
    )
}
