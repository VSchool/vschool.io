import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BuildingWomenUp from "../components/building-women-up"

export default function BootcampPrimerPage() {
    return (
        <Layout>
            <Seo title={"Building Women Up"} />
            <BuildingWomenUp />
        </Layout>
    )
}
