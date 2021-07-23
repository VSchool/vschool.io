import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Thanks from "../../components/digital-family/Thanks"

export default function DigitalFamilyPage() {
    return (
        <Layout>
            <Seo title={"Thanks!"} />
            <Thanks />
        </Layout>
    )
}
