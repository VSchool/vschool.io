import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BuildingWomenUp from "../components/building-women-up"

export default function BootcampPrimerPage() {
    return (
        <Layout>
            <SEO title={"Building Women Up"} />
            <BuildingWomenUp />
        </Layout>
    )
}
