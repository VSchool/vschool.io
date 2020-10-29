import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import DigitalFamily from "../../components/digital-family"

export default function DigitalFamilyPage() {
    return (
        <Layout>
            <SEO title={"Digital Family"} />
            <DigitalFamily />
        </Layout>
    )
}
