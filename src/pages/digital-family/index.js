import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import DigitalFamily from "../../components/digital-family"

export default function DigitalFamilyPage() {
    return (
        <Layout>
            <Seo title={"Digital Family"} />
            <DigitalFamily />
        </Layout>
    )
}
