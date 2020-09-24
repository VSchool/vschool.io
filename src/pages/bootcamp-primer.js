import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BootcampPrimer from "../components/bootcamp-primer"

export default function BootcampPrimerPage() {
    return (
        <Layout>
            <SEO title={"Bootcamp Primer"} />
            <BootcampPrimer />
        </Layout>
    )
}
